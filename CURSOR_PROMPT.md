# Prompt para Cursor — continuar TactilIA

Copia y pega esto en el chat/agente de Cursor (Composer/Agent mode) con la
carpeta `tactilia-app/` abierta como workspace. Está escrito para que el
agente entienda el contexto completo sin que tengas que explicarlo de nuevo.

---

```
Estoy construyendo TactilIA · Makiwan Yachay, una PWA (HTML/CSS/JS vanilla,
sin build step) para la Hackathon en Tecnologías Digitales 2026 del Minedu
(Perú), Categoría A, desafío: "Integrar tecnologías emergentes para la
atención de los estudiantes de Educación Básica Especial".

CONTEXTO DEL PRODUCTO (ya implementado, no lo repitas desde cero):
- Kit físico: piezas manipulables impresas en 3D (letras, números, figuras
  geométricas en relieve) para estudiantes con discapacidad visual, auditiva
  o intelectual. Cada pieza lleva pegada una etiqueta QR.
- App: usa la cámara para escanear la pieza (jsQR, incluida localmente en
  lib/jsQR.js, sin CDN externo). Ya tiene un overlay de REALIDAD AUMENTADA
  basado en marcador: usa las 4 esquinas que devuelve jsQR (code.location)
  para dibujar, en el mismo <canvas> donde se pinta el video, un recuadro que
  seguimiento + una etiqueta flotante animada (función drawAROverlay en
  app.js). Da retroalimentación por voz (Web Speech API, 100% offline) y
  propone retos adaptativos.
- Ya es BILINGÜE español/quechua: hay un diccionario I18N en app.js con
  claves ES/QU para la interfaz, y cada concepto en CONCEPTS tiene label/say
  (español) y label_qu/say_qu (quechua). El nombre del proyecto es bilingüe:
  "TactilIA · Makiwan Yachay" ("aprendizaje con las manos" en quechua).
  El quechua incluido es una PRIMERA APROXIMACIÓN para el piloto — está
  marcado en el README y en la vista "Acerca de" que debe validarse con un
  especialista en Educación Intercultural Bilingüe (EIB) o hablante nativo
  de la variedad de Pasco antes de un uso oficial.
- Ya tiene panel de accesibilidad: alto contraste (clase body.contrast-mode),
  tamaño de texto (body.text-grande / body.text-xl vía zoom), y vibración al
  acertar (navigator.vibrate), todo persistido en localStorage (PREFS_KEY).
- El panel docente muestra progreso por estudiante guardado en localStorage
  (STORAGE_KEY = "tactilia_data_v1").
- Todo sigue funcionando SIN INTERNET tras la primera carga (Service Worker
  cachea los assets) — la mayoría de escuelas objetivo son rurales con
  conectividad limitada (contexto: Pasco, Perú).

Archivos existentes: index.html, styles.css, app.js, manifest.json,
service-worker.js, lib/jsQR.js, qr/generate_qr.py + qr/output/*.png,
icons/icon-192.png e icon-512.png. Léelos primero para entender la
arquitectura antes de tocar nada (especialmente CONCEPTS, I18N, drawAROverlay
y scanLoop en app.js).

QUIERO QUE ME AYUDES A LLEVARLO MÁS LEJOS:

1. Conectar recomendaciones pedagógicas generadas por IA de verdad:
   - Crea un backend mínimo (carpeta /server, Node + Express o una
     Cloudflare Worker / Vercel Function) con un único endpoint
     POST /api/recommend que reciba el historial de práctica (logs) y llame
     a la API de Claude pidiendo una recomendación pedagógica breve y
     accionable en español, dirigida a un docente de educación básica
     especial. La API key vive solo en el servidor (ANTHROPIC_API_KEY), nunca
     en el cliente. Reemplaza el placeholder callClaudeAPI() en app.js para
     que haga fetch a ese endpoint, manteniendo generateLocalRecommendation()
     como respaldo offline.

2. Evolucionar la Realidad Aumentada:
   - El overlay actual es 2D (recuadro + etiqueta plana). Evalúa sumar una
     animación de partículas o un pequeño "sello" de logro en 3D cuando el
     estudiante acierta (por ejemplo con una librería ligera de canvas, sin
     depender de three.js/WebXR salvo que confirmes que no complica el
     tamaño ni el rendimiento en gama baja de Android).
   - Opcional/avanzado: investiga WebXR Device API o MindAR para pasar de
     "marker overlay en canvas 2D" a modelos 3D reales anclados en el
     espacio, pero solo si no compromete que la app siga siendo liviana y
     100% offline.

3. Ampliar el bilingüismo y validarlo:
   - Agrega un tercer idioma si lo necesito (por ejemplo, awajún o aimara,
     según la región donde se piloteé) siguiendo el mismo patrón I18N/label_qu.
   - Deja un checklist o formulario simple (puede ser un archivo
     VALIDACION_QUECHUA.md) para que un hablante nativo o especialista EIB
     revise cada frase en quechua del diccionario I18N y de CONCEPTS, con
     espacio para anotar la corrección sugerida por variedad dialectal.

4. Ampliar el banco de piezas y accesibilidad:
   - Agrega soporte para "sets" temáticos (rutinas diarias, emociones, con
     pictogramas), útil para estudiantes con discapacidad intelectual. Debe
     seguir funcionando el mismo flujo de escaneo/voz/AR/dashboard.
   - Añade soporte para lectura de pantalla (roles ARIA en los botones e
     información dinámica) para estudiantes con discapacidad visual severa
     que dependan de un lector de pantalla además de la voz de la app.

5. Empaquetado opcional como app nativa:
   - Si da tiempo, evalúa envolver esta PWA con Capacitor o Cordova para
     generar un .apk instalable en Android sin depender del navegador.
     Explícame los pasos, no lo hagas si complica demasiado el MVP.

Restricciones:
- No agregues frameworks pesados (nada de React/Vue) — el proyecto debe
  seguir siendo HTML/CSS/JS plano, fácil de auditar y desplegar como sitio
  estático (GitHub Pages / Vercel / Netlify), excepto el pequeño backend del
  punto 1 que sí puede ser una función serverless separada.
- Todo el texto de cara al usuario en español o quechua (Perú), siguiendo el
  patrón I18N ya existente.
- Prioriza que la app siga funcionando offline salvo la llamada opcional a IA.
- Ve haciendo commits pequeños y explicándome qué cambiaste y por qué, en
  español, como si yo fuera el único desarrollador del equipo.
```

---

### Si quieres pedirle solo una parte (más rápido)

Para la sesión de mentoría de 3 minutos del jurado, lo más rentable con el
tiempo que queda suele ser el punto 1 (IA real) y el punto 3 (validar el
quechua con un hablante nativo antes de exponerlo) — la IA real pesa en
"eficiencia"/"innovación" de la rúbrica, y una traducción sin validar puede
jugar en contra de "pertinencia" si algún jurado quechuahablante nota un error.
