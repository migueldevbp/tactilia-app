/* TactilIA — Service Worker
   Cachea todos los archivos de la app para que funcione 100% offline
   después de la primera visita (requisito clave para aulas rurales sin internet). */

const CACHE_NAME = "tactilia-cache-v15";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./lib/jsQR.js",
  "./lib/pictos.js",
  "./lib/ui-icons.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./media/decor/costa.webp",
  "./media/decor/sierra.webp",
  "./media/decor/selva.webp",
  "./media/decor/banner.webp",
  "./media/decor/chakana.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const isDecor = url.pathname.includes("/media/decor/");

  /* Fotos decorativas: red primero (evita mostrar un 404 antiguo en caché). */
  if (isDecor) {
    event.respondWith(
      fetch(req)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return response;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      return (
        cached ||
        fetch(req)
          .then((response) => {
            if (response && response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
            }
            return response;
          })
          .catch(() => cached)
      );
    })
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
