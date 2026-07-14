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
├── index.html          Interfaz (estudiante / docente / acerca de)
├── styles.css           Estilos
├── app.js                Lógica: escaneo QR, voz, ejercicios, dashboard, IA
├── manifest.json         Config de instalación como PWA
├── service-worker.js     Caché offline
├── lib/jsQR.js            Librería de lectura de QR (incluida, sin CDN externo)
├── icons/                 Íconos de la app (192px y 512px)
└── qr/
    ├── generate_qr.py      Genera los 15 QR de las piezas del kit
    └── output/*.png         QR listos para imprimir y pegar en cada pieza 3D
```

## 6. Cómo se usa con las piezas impresas en 3D

1. Imprime en 3D las 15 piezas (letras A·E·I·O·U, números 1-5, figuras
   círculo/cuadrado/triángulo/estrella/corazón) con relieve táctil.
2. Imprime las etiquetas de `qr/output/` y pégalas en la base de cada pieza.
3. En la app, pestaña **Estudiante**: elige idioma (ES/QU) arriba a la
   derecha, ajusta accesibilidad si hace falta, activa la cámara, presiona
   "Nuevo reto" (la app dice y muestra qué pieza buscar), el estudiante
   busca la pieza al tacto y la muestra a la cámara → la app confirma por
   voz y con el recuadro de Realidad Aumentada si acertó.
4. Pestaña **Docente**: progreso por estudiante (intentos, aciertos,
   precisión) guardado localmente en el dispositivo, exportable a JSON.

## 7. Siguientes pasos con IA (para seguir construyendo en Cursor)

El botón "Generar recomendación" ya funciona con una heurística local, y el
quechua/RA/accesibilidad ya están implementados en esta versión. Para
conectar la recomendación a Claude de verdad, sumar más idiomas o pictogramas,
o evolucionar la RA hacia modelos 3D con WebXR, usa el prompt en
**`CURSOR_PROMPT.md`**.

## 8. Nota legal / propiedad intelectual

Recuerda que, según las bases del evento, el código fuente debe ponerse a
disposición del equipo organizador y las soluciones no deben haber sido
premiadas previamente en otro concurso.
