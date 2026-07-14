# TactilIA · Makiwan Yachay — Kit educativo inclusivo con IA y Realidad Aumentada

Prototipo para la **Hackathon en Tecnologías Digitales 2026 (Minedu) — Categoría A**,
desafío: *"Integrar tecnologías emergentes para la atención de los estudiantes de
Educación Básica Especial."*

**Makiwan Yachay** significa, en quechua, *"aprendizaje con las manos"* — el
nombre bilingüe del proyecto, en homenaje a las comunidades quechuahablantes
de Pasco y de otras regiones andinas.

Piezas manipulables impresas en 3D (letras, números, figuras en relieve), cada una
identificada con un código QR. Al apuntar la cámara, la app reconoce la pieza en
tiempo real mediante **Realidad Aumentada** (resalta la pieza con un recuadro y
una etiqueta flotante animada, ancladas al objeto físico), da retroalimentación
por voz al instante **en español o quechua**, propone retos adaptativos y
muestra al docente un panel de progreso. Incluye **modo de alto contraste**,
**tamaño de texto ajustable** y **vibración** al acertar, para estudiantes con
discapacidad visual, auditiva o intelectual. **Funciona 100% sin internet** una
vez instalada (PWA offline).

> **Nota lingüística:** el quechua tiene variedades regionales y usa
> tradicionalmente un sistema de tres vocales (a, i, u). El vocabulario en
> quechua incluido aquí es una primera aproximación para el piloto; antes de un
> uso oficial debe validarse con un especialista en Educación Intercultural
> Bilingüe (EIB) o un hablante nativo de la variedad de Pasco.

## 1. Probarla en 30 segundos (en tu computadora)

No necesitas instalar nada especial, solo un servidor local (el navegador exige
HTTPS o `localhost` para usar la cámara):

```bash
cd tactilia-app
python3 -m http.server 8080
# o si tienes Node: npx serve .
```

Abre `http://localhost:8080` en Chrome/Edge (celular o laptop con cámara).

## 2. Probarla en tu celular

1. Sube la carpeta a GitHub (ver paso 3) y actívala en GitHub Pages, **o**
2. usa `npx serve .` y entra desde el celular a `http://<tu-ip-local>:puerto`
   (celular y laptop en la misma wifi).
3. En Chrome Android o Safari iOS, abre el menú → **"Instalar app"** /
   **"Agregar a pantalla de inicio"**. Queda instalada como app nativa (PWA),
   sin necesidad de tienda de apps ni internet después de la primera carga.

## 3. Subir a un repositorio y dejarla alojada gratis

```bash
cd tactilia-app
git init
git add .
git commit -m "TactilIA - prototipo Hackathon Minedu 2026"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/tactilia-app.git
git push -u origin main
```

Luego, la forma más rápida de tenerla "alojada" (URL pública, instalable):

- **GitHub Pages** (gratis, recomendado): en el repo → *Settings* → *Pages* →
  Source: rama `main`, carpeta `/root`. En 1-2 minutos tendrás
  `https://<tu-usuario>.github.io/tactilia-app/`.
- **Vercel / Netlify** (gratis, alternativa con HTTPS instantáneo): conecta el
  repo desde vercel.com o app.netlify.com → "Deploy" → listo, sin configuración
  (es un sitio estático).

Cualquiera de las tres te da una URL con HTTPS, requisito para que la cámara y
la instalación como PWA funcionen en el celular.

## 4. Cómo funciona la Realidad Aumentada

No usa librerías pesadas de AR: aprovecha que `jsQR` ya devuelve las 4 esquinas
del código QR detectado. El video de la cámara se dibuja en un `<canvas>`
visible, y sobre ese mismo canvas —en el mismo espacio de coordenadas— se
dibuja un recuadro que sigue esas esquinas en tiempo real, más una etiqueta
flotante animada con el ícono y el nombre de la pieza. Es "realidad aumentada"
basada en marcador (marker-based AR): contenido digital anclado a un objeto
físico visto a través de la cámara, 100% offline. El color del recuadro
cambia según el contexto: amarillo en exploración libre, celeste si no es la
pieza buscada, verde si es la respuesta correcta.

## 5. Estructura del proyecto

```
tactilia-app/
├── index.html            Interfaz (estudiante / docente / acerca de)
├── styles.css            Estilos + accesibilidad
├── app.js                Lógica: escaneo QR, RA, voz, sets, dashboard, IA
├── manifest.json         Config de instalación como PWA
├── service-worker.js     Caché offline
├── VALIDACION_QUECHUA.md Checklist para especialista EIB / hablante nativo
├── server/               Backend mínimo: POST /api/recommend → Claude
│   ├── index.js
│   ├── .env.example
│   └── README.md
├── lib/jsQR.js           Librería de lectura de QR (incluida, sin CDN)
├── icons/                Íconos 192 / 512
└── qr/
    ├── generate_qr.py    Genera QR de todos los sets
    └── output/*.png      Etiquetas listos para imprimir
```

## 6. Cómo se usa con las piezas impresas en 3D

1. Imprime en 3D las piezas del kit (básico: letras A·E·I·O·U, números 1-5,
   figuras; opcional: emociones y rutinas) con relieve o pictograma táctil.
2. Genera/imprime las etiquetas: `cd qr && python3 generate_qr.py` → carpeta
   `output/`, y pégalas en la base de cada pieza.
3. En la app, pestaña **Estudiante**: elige idioma (ES/QU), elige el
   **set temático**, ajusta accesibilidad, activa la cámara, “Nuevo reto”.
4. Pestaña **Docente**: progreso local + botón de recomendación IA
   (backend en `server/`, ver abajo).

## 7. Recomendaciones con IA (Claude)

```bash
cd server
cp .env.example .env   # pega ANTHROPIC_API_KEY
npm install && npm start
```

La PWA llama por defecto a `http://localhost:8787/api/recommend`.
Puedes cambiar la URL en consola: `localStorage.setItem('tactilia_ai_url', 'https://tu-api/api/recommend')`.
Sin backend o sin red, el botón usa la heurística **offline** automáticamente.

## 8. Validación del quechua

Antes de exponer el piloto a un jurado quechuahablante, imprime o abre
**`VALIDACION_QUECHUA.md`** y pide a un especialista EIB o hablante nativo
de Pasco que marque cada frase (✅ / ✏️ / ❌).

## 9. Empaquetado opcional como APK (Capacitor) — no necesario para el MVP

La PWA ya es instalable desde el navegador. Si el jurado pide un `.apk`
sin Chrome:

1. `npm init @capacitor/app` en una carpeta auxiliar (o en la raíz).
2. Copia `index.html`, `styles.css`, `app.js`, `lib/`, `icons/`, `manifest.json`
   al `webDir` (ej. `www/`).
3. `npx cap add android` → abre Android Studio → Build APK.
4. Permisos de cámara en `AndroidManifest.xml`.

No lo hacemos en este repo porque duplica tooling (Gradle/SDK) y complica
el despliegue estático a GitHub Pages; la PWA cumple el mismo caso de uso
offline en Android.

## 10. Nota legal / propiedad intelectual

Recuerda que, según las bases del evento, el código fuente debe ponerse a
disposición del equipo organizador y las soluciones no deben haber sido
premiadas previamente en otro concurso.
