/* =========================================================================
   TactilIA · Makiwan Yachay — app.js
   Kit educativo inclusivo: piezas manipulables impresas en 3D + QR +
   Realidad Aumentada + IA + bilingüe español/quechua.
   100% cliente, funciona sin internet una vez instalada (PWA).
   ========================================================================= */

/* ---------- 0. Textos de interfaz (ES / QU) -----------------------------
   Nota: el quechua incluido es una primera aproximación pensada para
   piloto. Debe validarse con un especialista en Educación Intercultural
   Bilingüe (EIB) o hablante nativo de la variedad de Pasco antes de un
   uso oficial, dado que el quechua tiene variedades regionales. --------- */
const I18N = {
  es: {
    tabEstudiante: "Estudiante", tabDocente: "Docente", tabAcerca: "Acerca de",
    a11yTitle: "Accesibilidad", a11yContrast: "Alto contraste",
    a11yVibration: "Vibración al acertar", a11yTextSize: "Tamaño de texto",
    a11yVoice: "Voz / audio", a11yMotion: "Menos movimiento",
    a11yPictos: "Solo pictogramas (sin texto)",
    a11yExtraTime: "Más tiempo / ritmo lento",
    guideTitle: "Cómo empezar (3 pasos)",
    guideHide: "Ocultar",
    guideStep1: "Elige perfil inclusivo (TEA, baja visión…) o ajusta Accesibilidad.",
    guideStep2: "Pulsa «Nuevo reto» y escucha la pieza.",
    guideStep3: "Activa la cámara con el QR — o toca la grilla demo sin kit.",
    profilesTitle: "Perfil inclusivo rápido",
    profilesHelp: "Un toque configura varias opciones de apoyo a la vez.",
    profileTea: "TEA / calma",
    profileVision: "Baja visión",
    profileMotor: "Motricidad",
    profileDefault: "Estándar",
    installApp: "Instalar app",
    installTitle: "Instalar en el celular",
    installIntro: "Elige tu sistema. Cada botón abre solo la opción de esa plataforma.",
    installNativeNote: "Paquetes en native/dist/ del repositorio.",
    installHintIos: "En iPhone: Safari → Compartir → Añadir a pantalla de inicio.",
    installHintAndroid: "En Android: descarga el APK o usa Instalar app en Chrome.",
    installChoose: "¿En qué dispositivo instalas?",
    installChooseHelp: "Elige Android o iPhone. Verás solo esa opción.",
    installAndroid: "Android",
    installAndroidSub: "Descargar APK · instalar en el celular",
    installIos: "iPhone / iPad",
    installIosSub: "Añadir a pantalla de inicio · Safari",
    installAndroidPanelTitle: "Instalar en Android",
    installIosPanelTitle: "Instalar en iPhone / iPad",
    installAndroidStep1: "Pulsa «Descargar APK».",
    installAndroidStep2: "Abre el archivo y permite instalar apps de esta fuente.",
    installAndroidStep3: "Opcional: en Chrome también puedes «Instalar app» (PWA).",
    installIosStep1: "Abre esta página en Safari (no Chrome).",
    installIosStep2: "Toca Compartir (cuadrado con flecha).",
    installIosStep3: "Elige «Añadir a pantalla de inicio» → Añadir.",
    installIosNote: "Apple no permite instalar un APK/IPA al escanear. Para Mac/Xcode: zip en native/dist/.",
    installDownloadApk: "Descargar APK",
    installPwaChrome: "Instalar PWA (Chrome)",
    installDownloadIos: "Descargar proyecto Xcode (.zip)",
    installClose: "Cerrar",
    installSuggestAndroid: "Detectamos Android — puedes usar la opción Android.",
    installSuggestIos: "Detectamos iPhone — usa la opción iPhone / iPad.",
    paceLabel: "Tómate tu tiempo",
    activeStudent: "Estudiante activo", newStudent: "+ Nuevo",
    setLabel: "Kit / set temático",
    setLetras: "Letras A–Z + Ñ",
    setNumeros: "Números 0–9",
    setSignos: "Signos",
    setFiguras: "Figuras",
    setEmociones: "Emociones",
    setRutinas: "Rutinas diarias",
    setTodos: "Todos los sets",
    setHelp: "Elige el banco de piezas. Para autismo: prueba Modo calma + un solo set (ej. letras).",
    a11yCalm: "Modo calma (autismo / TEA)",
    a11yCalmHelp: "Menos estímulos: sin partículas, voz más lenta, pausas largas, colores suaves y retos en orden.",
    sequenceHint: "Siguiente en orden",
    exerciseMode: "Modo ejercicio",
    modeLearn: "1. Aprender",
    modeChallenge: "2. Reto",
    modeLearnHelp: "Activa la cámara, apunta al QR y la app te dice qué es y su braille (también debajo de la pieza).",
    modeChallengeHelp: "Pulsa «Nuevo reto» y encuentra la pieza que pide la app.",
    learnPrompt: "Modo aprender: apunta la cámara al QR de la pieza. Te diré qué es y el braille.",
    learnFeedback: (label) => `Esto es: ${label}. Mira y toca también el braille debajo de la pieza.`,
    exercisePrompt: "Presiona \"Nuevo reto\" para comenzar",
    newChallenge: "Nuevo reto", repeat: "Repetir",
    scanPiece: "Escanear pieza (Realidad Aumentada)",
    startCamera: "Activar cámara", stopCamera: "Detener",
    flipCamera: "Girar a frontal",
    flipCameraBack: "Girar a trasera",
    flipCameraShort: "Frontal",
    flipCameraShortBack: "Trasera",
    cameraFront: "Cámara frontal activa. Apunta a la pieza.",
    cameraSwitchFail: "No se pudo cambiar a esa cámara en este dispositivo.",
    cameraOff: "Cámara apagada.", cameraOn: "Cámara activa. Apunta a la pieza.",
    findPiece: (label) => `Encuentra la pieza: ${label}`,
    sayFind: (label) => `Busca la pieza ${label}`,
    correct: "Correcto. Muy bien.",
    almost: (label) => `Casi. Buscabas: ${label}`,
    sayCorrect: (say) => `Correcto. ${say}`,
    sayWrong: (label, target) => `Esa es ${label}. Sigue buscando ${target}.`,
    freeMode: "Modo exploración libre",
    notRecognized: "Pieza no reconocida",
    demoTitle: "Practicar sin QR (demo)",
    demoHelp: "Toca una pieza para simular el escaneo — útil en mentoría o cuando aún no tienes el kit 3D.",
    statStreak: "Racha", statCorrect: "Aciertos", statAccuracy: "Precisión",
    teacherTitle: "Panel del docente",
    teacherIntro: "Resumen de progreso guardado localmente en el dispositivo (funciona sin internet).",
    dashEmpty: "Aún no hay datos de práctica registrados.",
    colStudent: "Estudiante", colAttempts: "Intentos", colHits: "Aciertos",
    colAccuracy: "Precisión", colLast: "Última práctica",
    insightsTitle: "Áreas a reforzar",
    insightsHelp: "Piezas con menor precisión del estudiante activo (o del grupo).",
    insightsNone: "Todavía no hay suficientes intentos para priorizar piezas.",
    aiTitle: "Recomendación con IA",
    aiHelp: "Consulta Claude vía el backend en server/ (clave solo en el servidor). Sin internet o sin backend, usa la heurística local offline.",
    aiButton: "Generar recomendación",
    btnExport: "Exportar datos (JSON)",
    btnExportCsv: "Exportar informe (CSV)",
    btnImport: "Importar JSON",
    btnClear: "Borrar todos los datos",
  },
  qu: {
    tabEstudiante: "Yachaqaq", tabDocente: "Yachachiq", tabAcerca: "Kaymanta",
    a11yTitle: "Runa yanapay", a11yContrast: "Sinchi rikch'ay",
    a11yVibration: "Kuyuchiy allin kaqtin", a11yTextSize: "Qillqa hatunchay",
    a11yVoice: "Rimay / uyarina", a11yMotion: "Aswanta mana kuyuchiy",
    a11yPictos: "Pictogramakunalla",
    a11yExtraTime: "Aswan pacha",
    guideTitle: "Imaynata qallariy (3)",
    guideHide: "Pakay",
    guideStep1: "Perfil inclusivota akllay.",
    guideStep2: "«Musuq atipanakuy» ñitiy.",
    guideStep3: "Kamarata icha grilla demota.",
    profilesTitle: "Perfil yanapakuq",
    profilesHelp: "Huk ñitiywan yanapaykuna.",
    profileTea: "TEA / thak",
    profileVision: "Mana allin rikuq",
    profileMotor: "Makiykuna",
    profileDefault: "Sapaq",
    installApp: "App churay",
    installTitle: "Celularpi app churay",
    installIntro: "Android icha iPhone akllay.",
    installNativeNote: "Paketekuna: native/dist/.",
    installHintIos: "iPhone: Safari → Compartir → Añadir.",
    installHintAndroid: "Android: APK chaskiy.",
    installChoose: "Mayqin dispositivopi?",
    installChooseHelp: "Android icha iPhone akllay.",
    installAndroid: "Android",
    installAndroidSub: "APK chaskiy",
    installIos: "iPhone / iPad",
    installIosSub: "Pantallaman yapay · Safari",
    installAndroidPanelTitle: "Androidpi churay",
    installIosPanelTitle: "iPhonepi churay",
    installAndroidStep1: "«APK chaskiy» ñitiy.",
    installAndroidStep2: "Archivota kichay churaypaq.",
    installAndroidStep3: "Chrome: app churaypas.",
    installIosStep1: "Safariwan kichay.",
    installIosStep2: "Compartir ñitiy.",
    installIosStep3: "«Añadir a pantalla de inicio».",
    installIosNote: "Apple mana APKta saqin.",
    installDownloadApk: "APK chaskiy",
    installPwaChrome: "PWA churay (Chrome)",
    installDownloadIos: "Xcode zip chaskiy",
    installClose: "Wichqay",
    installSuggestAndroid: "Android kasqan.",
    installSuggestIos: "iPhone kasqan.",
    paceLabel: "Pacharaykiwan",
    activeStudent: "Kunan yachaqaq", newStudent: "+ Musuq",
    setLabel: "Impay kit",
    setLetras: "Letras A–Z + Ñ",
    setNumeros: "Yupaykuna 0–9",
    setSignos: "Unanchakuna",
    setFiguras: "Rikch'akuna",
    setEmociones: "Sunquykuna",
    setRutinas: "Sapa p'unchaw",
    setTodos: "Llapan",
    setHelp: "Akllay kit. Autismipaq: Mode calmata churay.",
    a11yCalm: "Thak mode (autismo / TEA)",
    a11yCalmHelp: "Aswan thak: mana partículas, rimay allin, suwa suyay.",
    sequenceHint: "Qatiqnin ordenpi",
    exerciseMode: "Yachay pukllay",
    modeLearn: "1. Yachay",
    modeChallenge: "2. Atipanakuy",
    modeLearnHelp: "Kamarawan QR-ta qhaway; sutinta willasunki braillewan.",
    modeChallengeHelp: "«Musuq atipanakuy» ñitiy.",
    learnPrompt: "Yachay: QR-ta qhaway. Sutinta rimasaq.",
    learnFeedback: (label) => `Kayqa: ${label}. Braillepis uraypi kachkan.`,
    exercisePrompt: "\"Musuq atipanakuy\" nisqata ñitiy qallariy",
    newChallenge: "Musuq atipanakuy", repeat: "Kutichiy",
    scanPiece: "Rikuchiy (Realidad Aumentada)",
    startCamera: "Kamarata qallariy", stopCamera: "Sayachiy",
    flipCamera: "Ñawpaq kamara",
    flipCameraBack: "Qipa kamara",
    flipCameraShort: "Ñawpaq",
    flipCameraShortBack: "Qipa",
    cameraFront: "Ñawpaq kamara kachkan.",
    cameraSwitchFail: "Manam kay kamarata tukuyta atinichu.",
    cameraOff: "Kamara sayasqa.", cameraOn: "Kamara kachkan. Riqsichiyta qhaway.",
    findPiece: (label) => `Maskay: ${label}`,
    sayFind: (label) => `Maskay ${label}`,
    correct: "Allin. Sumaqta ruwanki.",
    almost: (label) => `Sichuslla. Maskasharqanki: ${label}`,
    sayCorrect: (say) => `Allin. ${say}`,
    sayWrong: (label, target) => `Chayqa ${label}. Maskayta qatiy ${target}.`,
    freeMode: "Kikillanmanta rikuy",
    notRecognized: "Manam riqsisqachu",
    demoTitle: "QR mana kaspapas yachay",
    demoHelp: "Riqsichiyta ñitiy — demo / mentoríapaq allin.",
    statStreak: "Qatiynin", statCorrect: "Allinkuna", statAccuracy: "Allin kay",
    teacherTitle: "Yachachiq pañil",
    teacherIntro: "Kay dispositivopi waqaychasqa (mana internetwanpas).",
    dashEmpty: "Manaraqmi yachay datoskuna kanchu.",
    colStudent: "Yachaqaq", colAttempts: "Munasqakuna", colHits: "Allinkuna",
    colAccuracy: "Allin kay", colLast: "Qhipa yachay",
    insightsTitle: "Kallpachanapaq",
    insightsHelp: "Aswan pisi allin kaq riqsichinakuna.",
    insightsNone: "Aswan pretikunayki kallanraq.",
    aiTitle: "IA yuyay",
    aiHelp: "Claude backendwan. Mana kaspaqa local yuyay.",
    aiButton: "Yuyayta ruway",
    btnExport: "Datosnin exportay",
    btnExportCsv: "CSV informe",
    btnImport: "JSON apamuy",
    btnClear: "Llapan datasninta pichay",
  },
};

let LANG = localStorage.getItem("tactilia_lang") || "es";
const t = (key, ...args) => {
  const v = I18N[LANG][key];
  return typeof v === "function" ? v(...args) : v;
};

/* ---------- 1. Banco de conceptos (ES + QU) ------------------------------
   Debe coincidir con /qr/generate_qr.py.
   Sets: letras (A–Z + Ñ), numeros (0–9), signos, figuras, emociones, rutinas. */
const LETTER_EXAMPLES = {
  a: ["Araña", "allqu = perro"], b: ["Barco", ""], c: ["Casa", ""], d: ["Dado", ""],
  e: ["Elefante", ""], f: ["Foco", ""], g: ["Gato", ""], h: ["Helado", ""],
  i: ["Iguana", "inti = sol"], j: ["Jirafa", ""], k: ["Koala", ""], l: ["Luna", ""],
  m: ["Mamá", ""], n: ["Nube", ""], o: ["Oso", ""], p: ["Perro", ""],
  q: ["Queso", ""], r: ["Ratón", ""], s: ["Sol", ""], t: ["Taza", ""],
  u: ["Uva", "urpi = paloma"], v: ["Vaca", ""], w: ["Wiña", ""], x: ["Xilófono", ""],
  y: ["Yuca", ""], z: ["Zapato", ""],
};
const NUM_WORDS_ES = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
const NUM_WORDS_QU = ["Ch'usaq", "Huk", "Iskay", "Kimsa", "Tawa", "Pichqa", "Suqta", "Qanchis", "Pusaq", "Isqun"];

function buildLetterConcepts() {
  const list = [];
  "abcdefghijklmnopqrstuvwxyz".split("").forEach((ch) => {
    const up = ch.toUpperCase();
    const [exEs, tipQu] = LETTER_EXAMPLES[ch] || [up, ""];
    list.push({
      id: "letra-" + ch,
      set: "letras",
      type: "letra",
      label: "Letra " + up,
      glyph: up,
      say: `Letra ${up}, como en ${exEs}.`,
      label_qu: "Letra " + up,
      say_qu: tipQu ? `Kayqa letra ${up}, ${tipQu}.` : `Kayqa letra ${up}.`,
    });
  });
  list.push({
    id: "letra-enie",
    set: "letras",
    type: "letra",
    label: "Letra Ñ",
    glyph: "Ñ",
    say: "Letra eñe, como en Ñandú.",
    label_qu: "Letra Ñ",
    say_qu: "Kayqa letra eñe.",
  });
  return list;
}

function buildNumberConcepts() {
  return NUM_WORDS_ES.map((word, n) => ({
    id: "numero-" + n,
    set: "numeros",
    type: "numero",
    label: "Número " + n,
    glyph: String(n),
    say: `Número ${word}.`,
    label_qu: NUM_WORDS_QU[n],
    say_qu: NUM_WORDS_QU[n] + ".",
  }));
}

function buildSignConcepts() {
  const signs = [
    ["signo-mas", "+", "Más / sumar", "Signo más: sumar.", "Yapay", "Yapay (+)."],
    ["signo-menos", "−", "Menos / restar", "Signo menos: restar.", "Qichuy", "Qichuy (−)."],
    ["signo-igual", "=", "Igual", "Signo igual.", "Kikin", "Kikin (=)."],
    ["signo-por", "×", "Por / multiplicar", "Signo por: multiplicar.", "Mirachiy", "Mirachiy (×)."],
    ["signo-dividir", "÷", "Dividir", "Signo dividir.", "Rakiy", "Rakiy (÷)."],
    ["signo-punto", ".", "Punto", "Signo punto.", "Ch'iqchi", "Ch'iqchi (.)."],
    ["signo-coma", ",", "Coma", "Signo coma.", "Comma", "Comma (,)."],
    ["signo-interrogacion", "?", "Interrogación", "Signo de interrogación.", "Tapuy", "Tapuy (?)."],
    ["signo-exclamacion", "!", "Exclamación", "Signo de exclamación.", "Qapariy", "Qapariy (!)."],
    ["signo-porcentaje", "%", "Porcentaje", "Signo porcentaje.", "Pachakmanta", "Pachakmanta (%)."],
  ];
  return signs.map(([id, glyph, label, say, label_qu, say_qu]) => ({
    id, set: "signos", type: "signo", label, glyph, say, label_qu, say_qu,
  }));
}

const CONCEPTS = [
  ...buildLetterConcepts(),
  ...buildNumberConcepts(),
  ...buildSignConcepts(),

  { id: "figura-circulo", set: "figuras", type: "figura", label: "Círculo", glyph: "○",
    say: "Esta es la figura círculo.", label_qu: "Muyu", say_qu: "Kayqa muyu." },
  { id: "figura-cuadrado", set: "figuras", type: "figura", label: "Cuadrado", glyph: "□",
    say: "Esta es la figura cuadrado.", label_qu: "Tawa kuchu", say_qu: "Kayqa tawa kuchu (tawa kuchuyuq)." },
  { id: "figura-triangulo", set: "figuras", type: "figura", label: "Triángulo", glyph: "△",
    say: "Esta es la figura triángulo.", label_qu: "Kimsa kuchu", say_qu: "Kayqa kimsa kuchu." },
  { id: "figura-estrella", set: "figuras", type: "figura", label: "Estrella", glyph: "✩",
    say: "Esta es la figura estrella.", label_qu: "Ch'aska", say_qu: "Kayqa ch'aska." },
  { id: "figura-corazon", set: "figuras", type: "figura", label: "Corazón", glyph: "♡",
    say: "Esta es la figura corazón.", label_qu: "Sonqo", say_qu: "Kayqa sonqo." },

  { id: "emocion-alegre", set: "emociones", type: "emocion", label: "Alegre", glyph: ":)",
    say: "Emoción: alegre, contento.", label_qu: "Kusisqa", say_qu: "Kayqa kusisqa." },
  { id: "emocion-triste", set: "emociones", type: "emocion", label: "Triste", glyph: ":(",
    say: "Emoción: triste.", label_qu: "Llakisqa", say_qu: "Kayqa llakisqa." },
  { id: "emocion-enojo", set: "emociones", type: "emocion", label: "Enojo", glyph: ">:(",
    say: "Emoción: enojo.", label_qu: "Phiña", say_qu: "Kayqa phiña." },
  { id: "emocion-miedo", set: "emociones", type: "emocion", label: "Miedo", glyph: ":o",
    say: "Emoción: miedo.", label_qu: "Manchakuq", say_qu: "Kayqa manchakuq." },
  { id: "emocion-calma", set: "emociones", type: "emocion", label: "Calma", glyph: "~",
    say: "Emoción: calma, tranquilo.", label_qu: "Thak", say_qu: "Kayqa thak / allin kawsay." },

  { id: "rutina-lavarse", set: "rutinas", type: "rutina", label: "Lavarse", glyph: "≈",
    say: "Rutina: lavarse las manos o la cara.", label_qu: "Maqllikuy", say_qu: "Maqllikuy (makikunata / uyata)." },
  { id: "rutina-comer", set: "rutinas", type: "rutina", label: "Comer", glyph: "⌂",
    say: "Rutina: comer.", label_qu: "Mikuy", say_qu: "Mikuy." },
  { id: "rutina-dormir", set: "rutinas", type: "rutina", label: "Dormir", glyph: "☾",
    say: "Rutina: dormir.", label_qu: "Puñuy", say_qu: "Puñuy." },
  { id: "rutina-escuela", set: "rutinas", type: "rutina", label: "Ir a la escuela", glyph: "△",
    say: "Rutina: ir a la escuela.", label_qu: "Yachay wasi", say_qu: "Yachay wasiman riy." },
  { id: "rutina-jugar", set: "rutinas", type: "rutina", label: "Jugar", glyph: "◈",
    say: "Rutina: jugar.", label_qu: "Pukllay", say_qu: "Pukllay." },
];
const QR_PREFIX = "TACTILIA:";
const findConcept = (id) => CONCEPTS.find((c) => c.id === id);
const conceptLabel = (c) => (LANG === "qu" ? c.label_qu : c.label);
const conceptSay = (c) => (LANG === "qu" ? c.say_qu : c.say);

let activeSet = localStorage.getItem("tactilia_set") || "letras";
if (activeSet === "basico") activeSet = "letras"; // migración kit antiguo
function conceptsInActiveSet() {
  if (activeSet === "todos") return CONCEPTS;
  return CONCEPTS.filter((c) => c.set === activeSet);
}

/* ---------- 2. Almacenamiento local (estudiantes + registro + prefs) ---- */
const STORAGE_KEY = "tactilia_data_v1";
const PREFS_KEY = "tactilia_prefs_v1";

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { students: [], logs: [] };
  } catch (e) {
    return { students: [], logs: [] };
  }
}
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
let DATA = loadData();
if (DATA.students.length === 0) {
  DATA.students.push("Estudiante 1");
  saveData(DATA);
}

function defaultPrefs() {
  return {
    contrast: false,
    vibration: true,
    textSize: "normal",
    voice: true,
    reduceMotion: false,
    calmMode: false,
    pictosOnly: false,
    extraTime: false,
    profile: "default",
    playMode: "learn",
  };
}
function loadPrefs() {
  try {
    return { ...defaultPrefs(), ...(JSON.parse(localStorage.getItem(PREFS_KEY)) || {}) };
  } catch (e) {
    return defaultPrefs();
  }
}
function savePrefs(p) {
  localStorage.setItem(PREFS_KEY, JSON.stringify(p));
}
let PREFS = loadPrefs();
let currentTarget = null;
const SESSION = { attempts: 0, correct: 0, streak: 0 };

/* ---------- 3. Utilidades de voz y vibración (funcionan sin internet) --- */
function speak(text) {
  if (!PREFS.voice || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "es-PE";
  u.rate = PREFS.calmMode ? 0.78 : (LANG === "qu" ? 0.88 : 0.95);
  u.pitch = PREFS.calmMode ? 0.95 : 1;
  window.speechSynthesis.speak(u);
}

function shouldAnimate() {
  if (PREFS.calmMode || PREFS.reduceMotion) return false;
  return !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}

function scanCooldownMs() {
  if (PREFS.extraTime || PREFS.calmMode) return 3200;
  return 1200;
}

function flashReward(ok) {
  const el = document.getElementById("reward-flash");
  if (!el) return;
  el.hidden = false;
  el.classList.toggle("is-ok", !!ok);
  el.classList.toggle("is-bad", !ok);
  el.classList.add("is-on");
  setTimeout(() => {
    el.classList.remove("is-on");
    el.hidden = true;
  }, PREFS.extraTime || PREFS.calmMode ? 900 : 520);
}

function updatePaceBar(active) {
  const bar = document.getElementById("pace-bar");
  const fill = document.getElementById("pace-fill");
  if (!bar || !fill) return;
  const show = active && (PREFS.extraTime || PREFS.calmMode);
  bar.hidden = !show;
  if (!show) return;
  fill.style.animation = "none";
  void fill.offsetWidth;
  fill.style.animation = `pace-drain ${PREFS.extraTime ? 12 : 8}s linear forwards`;
}

function updateTargetPicto() {
  const box = document.getElementById("target-picto");
  const targetText = document.getElementById("exercise-target");
  if (!box) return;
  if (currentTarget && PREFS.pictosOnly) {
    box.hidden = false;
    box.innerHTML = typeof pictoMarkup === "function" ? pictoMarkup(currentTarget.id) : "";
    if (targetText) targetText.classList.add("sr-visual-hide");
  } else {
    box.hidden = true;
    box.innerHTML = "";
    if (targetText) targetText.classList.remove("sr-visual-hide");
  }
}

function vibrate(pattern) {
  if (PREFS.vibration && "vibrate" in navigator) navigator.vibrate(pattern);
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => (el.hidden = true), 2200);
}

function announceForScreenReader(msg) {
  const el = document.getElementById("sr-announce");
  if (!el) return;
  el.textContent = "";
  // Forzar re-anuncio en lectores de pantalla
  requestAnimationFrame(() => {
    el.textContent = msg;
  });
}

/* ---------- 4. Aplicar traducciones a elementos [data-i18n] -------------- */
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const val = I18N[LANG][key];
    if (typeof val !== "string") return;
    if (el.hasAttribute("data-icon") || el.querySelector(":scope > .ui-ico")) {
      let textEl = el.querySelector(":scope > [data-i18n-text]");
      if (!textEl) {
        textEl = document.createElement("span");
        textEl.setAttribute("data-i18n-text", "");
        el.appendChild(textEl);
      }
      // limpia nodos de texto sueltos
      [...el.childNodes].forEach((n) => {
        if (n.nodeType === 3) n.remove();
      });
      textEl.textContent = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll("[data-i18n-option]").forEach((el) => {
    const key = el.dataset.i18nOption;
    const val = I18N[LANG][key];
    if (typeof val === "string") el.textContent = val;
  });
  document.documentElement.lang = LANG === "qu" ? "qu" : "es";
  document.getElementById("exercise-target").textContent = currentTarget
    ? t("findPiece", conceptLabel(currentTarget))
    : t("exercisePrompt");
  document.getElementById("scan-status").textContent = scanning ? t("cameraOn") : t("cameraOff");
  renderPieceGrid();
  updateSessionUI();
  if (typeof decorateButtonsWithIcons === "function") decorateButtonsWithIcons();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    LANG = btn.dataset.lang;
    localStorage.setItem("tactilia_lang", LANG);
    document.querySelectorAll(".lang-btn").forEach((b) => {
      const on = b.dataset.lang === LANG;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    applyI18n();
  });
});

/** Carga ilustraciones de media/decor/ (costados + banner + chakana). */
function loadDecorPhotos() {
  const base = new URL(".", location.href).href;
  document.querySelectorAll("[data-decor]").forEach((img) => {
    const name = img.getAttribute("data-decor");
    const candidates = [
      new URL(`media/decor/${name}.webp`, base).href,
      new URL(`media/decor/${name}.png`, base).href,
      new URL(`media/decor/${name}.jpg`, base).href,
    ];
    let i = 0;
    const tryNext = () => {
      if (i >= candidates.length) return;
      const url = candidates[i];
      const probe = new Image();
      probe.decoding = "async";
      probe.onload = () => {
        img.removeAttribute("hidden");
        img.src = probe.src;
        img.classList.add("decor-ready");
        if (img.classList.contains("side-sticker")) {
          document.body.classList.add("has-side-decor");
        }
        if (name === "chakana") {
          const mark = document.querySelector(".brand-mark");
          if (mark) mark.hidden = true;
        }
      };
      probe.onerror = () => {
        i += 1;
        tryNext();
      };
      probe.src = url + (url.includes("?") ? "&" : "?") + "v=12";
    };
    tryNext();
  });
}

loadDecorPhotos();

/* ---------- Instalación: Android / iOS por separado ---------- */
let deferredInstall = null;
const APK_HREF = "native/dist/TactilIA.apk";
const IOS_ZIP_HREF = "native/dist/TactilIA-iOS-Xcode.zip";

function isIos() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}
function isAndroid() {
  return /android/i.test(navigator.userAgent);
}
function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
}

function openInstallDialog() {
  const dlg = document.getElementById("install-dialog");
  if (!dlg) return;
  applyI18n();
  if (typeof dlg.showModal === "function") dlg.showModal();
  else dlg.setAttribute("open", "");
  if (isAndroid()) toast(t("installSuggestAndroid"));
  else if (isIos()) toast(t("installSuggestIos"));
}

function goInstallTab() {
  const tab = document.querySelector('.tab-btn[data-view="acerca"]');
  if (tab) tab.click();
  const card = document.querySelector(".install-card");
  if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showInstallPlatform(platform) {
  const panA = document.getElementById("install-panel-android");
  const panI = document.getElementById("install-panel-ios");
  const pickA = document.getElementById("btn-pick-android");
  const pickI = document.getElementById("btn-pick-ios");
  if (panA) panA.hidden = platform !== "android";
  if (panI) panI.hidden = platform !== "ios";
  pickA?.classList.toggle("active", platform === "android");
  pickI?.classList.toggle("active", platform === "ios");
  goInstallTab();
  const dlg = document.getElementById("install-dialog");
  if (dlg?.open) dlg.close();
  if (platform === "android" && panA) panA.scrollIntoView({ behavior: "smooth", block: "nearest" });
  if (platform === "ios" && panI) panI.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

async function promptPwaInstall() {
  if (deferredInstall) {
    deferredInstall.prompt();
    await deferredInstall.userChoice.catch(() => {});
    deferredInstall = null;
    return;
  }
  toast(t("installHintAndroid"));
}

document.getElementById("btn-install")?.addEventListener("click", openInstallDialog);
document.getElementById("dlg-pick-android")?.addEventListener("click", () => showInstallPlatform("android"));
document.getElementById("dlg-pick-ios")?.addEventListener("click", () => showInstallPlatform("ios"));
document.getElementById("btn-pick-android")?.addEventListener("click", () => showInstallPlatform("android"));
document.getElementById("btn-pick-ios")?.addEventListener("click", () => showInstallPlatform("ios"));
document.getElementById("btn-pwa-android")?.addEventListener("click", promptPwaInstall);

const linkApk = document.getElementById("link-apk");
if (linkApk) linkApk.href = new URL(APK_HREF, location.href).href;
const linkIos = document.getElementById("link-ios-xcode");
if (linkIos) linkIos.href = new URL(IOS_ZIP_HREF, location.href).href;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstall = e;
});
window.addEventListener("appinstalled", () => {
  deferredInstall = null;
  toast(t("installApp") + " ✓");
});

/* Deep-link: ?install=android | ?install=ios | #install-android */
(function bootInstallDeepLink() {
  const q = new URLSearchParams(location.search).get("install");
  const hash = (location.hash || "").replace(/^#/, "");
  const want = (q || hash || "").toLowerCase();
  if (want === "android" || want === "install-android") {
    setTimeout(() => showInstallPlatform("android"), 400);
  } else if (want === "ios" || want === "iphone" || want === "install-ios") {
    setTimeout(() => showInstallPlatform("ios"), 400);
  } else if (!isStandalone()) {
    /* sugerir panel al entrar desde celular, sin forzar */
    if (isAndroid()) setTimeout(() => {
      document.getElementById("btn-pick-android")?.classList.add("suggested");
    }, 600);
    if (isIos()) setTimeout(() => {
      document.getElementById("btn-pick-ios")?.classList.add("suggested");
    }, 600);
  }
})();

/* ---------- 5. Navegación por pestañas ---------- */
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => {
      const on = b === btn;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    document.getElementById("view-" + btn.dataset.view).classList.add("active");
    if (btn.dataset.view === "docente") renderDashboard();
  });
});

/* ---------- 5b. Selector de set temático ---------- */
const setSelect = document.getElementById("set-select");
if (setSelect) {
  setSelect.value = activeSet;
  setSelect.addEventListener("change", () => {
    activeSet = setSelect.value;
    localStorage.setItem("tactilia_set", activeSet);
    currentTarget = null;
    pickAdaptiveChallenge._seq = 0;
    applyI18n();
    renderPieceGrid();
  });
}
/* ---------- 6. Selector de estudiante ---------- */
const studentSelect = document.getElementById("student-select");
function renderStudentSelect() {
  studentSelect.innerHTML = "";
  DATA.students.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    studentSelect.appendChild(opt);
  });
}
renderStudentSelect();

document.getElementById("btn-new-student").addEventListener("click", () => {
  const name = prompt("Nombre del nuevo estudiante:");
  if (name && name.trim()) {
    DATA.students.push(name.trim());
    saveData(DATA);
    renderStudentSelect();
    studentSelect.value = name.trim();
  }
});

/* ---------- 7. Panel de accesibilidad + perfiles ---------- */
const chkContrast = document.getElementById("chk-contrast");
const chkVibration = document.getElementById("chk-vibration");
const chkVoice = document.getElementById("chk-voice");
const chkMotion = document.getElementById("chk-motion");
const chkCalm = document.getElementById("chk-calm");
const chkPictos = document.getElementById("chk-pictos");
const chkExtraTime = document.getElementById("chk-extratime");
const selTextSize = document.getElementById("sel-textsize");

const A11Y_PROFILES = {
  tea: {
    profile: "tea",
    calmMode: true,
    reduceMotion: true,
    vibration: false,
    voice: true,
    pictosOnly: false,
    extraTime: true,
    contrast: false,
    textSize: "grande",
  },
  vision: {
    profile: "vision",
    calmMode: false,
    reduceMotion: true,
    vibration: true,
    voice: true,
    pictosOnly: true,
    extraTime: true,
    contrast: true,
    textSize: "xl",
  },
  motor: {
    profile: "motor",
    calmMode: false,
    reduceMotion: true,
    vibration: true,
    voice: true,
    pictosOnly: false,
    extraTime: true,
    contrast: false,
    textSize: "grande",
  },
  default: {
    profile: "default",
    calmMode: false,
    reduceMotion: false,
    vibration: true,
    voice: true,
    pictosOnly: false,
    extraTime: false,
    contrast: false,
    textSize: "normal",
  },
};

function applyPrefs() {
  document.body.classList.toggle("contrast-mode", !!PREFS.contrast);
  document.body.classList.toggle("reduce-motion", !!PREFS.reduceMotion || !!PREFS.calmMode);
  document.body.classList.toggle("calm-mode", !!PREFS.calmMode);
  document.body.classList.toggle("pictos-only", !!PREFS.pictosOnly);
  document.body.classList.toggle("extra-time", !!PREFS.extraTime);
  document.body.classList.remove("text-grande", "text-xl");
  if (PREFS.textSize === "grande") document.body.classList.add("text-grande");
  if (PREFS.textSize === "xl") document.body.classList.add("text-xl");
  if (chkContrast) chkContrast.checked = !!PREFS.contrast;
  if (chkVibration) chkVibration.checked = !!PREFS.vibration;
  if (chkVoice) chkVoice.checked = PREFS.voice !== false;
  if (chkMotion) chkMotion.checked = !!PREFS.reduceMotion;
  if (chkCalm) chkCalm.checked = !!PREFS.calmMode;
  if (chkPictos) chkPictos.checked = !!PREFS.pictosOnly;
  if (chkExtraTime) chkExtraTime.checked = !!PREFS.extraTime;
  if (selTextSize) selTextSize.value = PREFS.textSize || "normal";
  document.querySelectorAll(".profile-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.profile === (PREFS.profile || "default"));
  });
  updateTargetPicto();
  renderPieceGrid();
  syncPlayModeUI();
}

function syncPlayModeUI() {
  const mode = PREFS.playMode || "learn";
  document.querySelectorAll(".play-mode-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.mode === mode);
  });
  const help = document.getElementById("play-mode-help");
  if (help) help.textContent = mode === "learn" ? t("modeLearnHelp") : t("modeChallengeHelp");
  const target = document.getElementById("exercise-target");
  const actions = document.getElementById("challenge-actions");
  if (mode === "learn") {
    currentTarget = null;
    if (target) target.textContent = t("learnPrompt");
    if (actions) actions.hidden = true;
    updateTargetPicto();
    updatePaceBar(false);
  } else {
    if (actions) actions.hidden = false;
    if (target && !currentTarget) target.textContent = t("exercisePrompt");
  }
  renderPieceGrid();
}

function setPlayMode(mode) {
  PREFS.playMode = mode === "challenge" ? "challenge" : "learn";
  savePrefs(PREFS);
  syncPlayModeUI();
}

document.getElementById("mode-learn")?.addEventListener("click", () => setPlayMode("learn"));
document.getElementById("mode-challenge")?.addEventListener("click", () => setPlayMode("challenge"));

function applyProfile(id) {
  const p = A11Y_PROFILES[id] || A11Y_PROFILES.default;
  PREFS = { ...PREFS, ...p };
  savePrefs(PREFS);
  applyPrefs();
  const labels = { tea: "profileTea", vision: "profileVision", motor: "profileMotor", default: "profileDefault" };
  toast(t("profilesTitle") + ": " + t(labels[id] || "profileDefault"));
}
document.querySelectorAll(".profile-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyProfile(btn.dataset.profile));
});
chkContrast?.addEventListener("change", () => { PREFS.contrast = chkContrast.checked; PREFS.profile = "custom"; savePrefs(PREFS); applyPrefs(); });
chkVibration?.addEventListener("change", () => { PREFS.vibration = chkVibration.checked; PREFS.profile = "custom"; savePrefs(PREFS); });
chkVoice?.addEventListener("change", () => { PREFS.voice = chkVoice.checked; PREFS.profile = "custom"; savePrefs(PREFS); });
chkMotion?.addEventListener("change", () => { PREFS.reduceMotion = chkMotion.checked; PREFS.profile = "custom"; savePrefs(PREFS); applyPrefs(); });
chkCalm?.addEventListener("change", () => {
  PREFS.calmMode = chkCalm.checked;
  PREFS.profile = "custom";
  if (PREFS.calmMode) {
    PREFS.reduceMotion = true;
    PREFS.vibration = false;
    PREFS.extraTime = true;
  }
  savePrefs(PREFS);
  applyPrefs();
});
chkPictos?.addEventListener("change", () => { PREFS.pictosOnly = chkPictos.checked; PREFS.profile = "custom"; savePrefs(PREFS); applyPrefs(); });
chkExtraTime?.addEventListener("change", () => { PREFS.extraTime = chkExtraTime.checked; PREFS.profile = "custom"; savePrefs(PREFS); applyPrefs(); });
selTextSize?.addEventListener("change", () => { PREFS.textSize = selTextSize.value; PREFS.profile = "custom"; savePrefs(PREFS); applyPrefs(); });

document.getElementById("btn-guide-hide")?.addEventListener("click", () => {
  localStorage.setItem("tactilia_guide_hidden", "1");
  const g = document.getElementById("guide-card");
  if (g) g.hidden = true;
});
if (localStorage.getItem("tactilia_guide_hidden") === "1") {
  const g = document.getElementById("guide-card");
  if (g) g.hidden = true;
}

applyPrefs();

/* ---------- 8. Modo ejercicio (adaptativo) ---------- */
function updateSessionUI() {
  const streakEl = document.getElementById("stat-streak");
  const correctEl = document.getElementById("stat-correct");
  const accEl = document.getElementById("stat-accuracy");
  if (!streakEl) return;
  streakEl.textContent = String(SESSION.streak);
  correctEl.textContent = String(SESSION.correct);
  accEl.textContent = SESSION.attempts
    ? Math.round((SESSION.correct / SESSION.attempts) * 100) + "%"
    : "—";
}

function accuracyForConcept(conceptId, student) {
  let total = 0;
  let ok = 0;
  DATA.logs.forEach((log) => {
    if (student && log.student !== student) return;
    if (log.targetId !== conceptId && log.conceptId !== conceptId) return;
    if (log.targetId == null) return; // exploración libre no cuenta como reto
    if (log.targetId !== conceptId) return;
    total++;
    if (log.correct) ok++;
  });
  return { total, ok, acc: total ? ok / total : 0.5 };
}

function pickAdaptiveChallenge() {
  const pool = conceptsInActiveSet();
  if (pool.length === 0) return null;

  // Modo calma: avance predecible en orden del set (ideal TEA)
  if (PREFS.calmMode) {
    if (!pickAdaptiveChallenge._seq) pickAdaptiveChallenge._seq = 0;
    const i = pickAdaptiveChallenge._seq % pool.length;
    pickAdaptiveChallenge._seq = i + 1;
    return pool[i];
  }

  const student = studentSelect.value || DATA.students[0];
  const ranked = pool.map((c) => {
    const stats = accuracyForConcept(c.id, student);
    const score = (1 - stats.acc) * 2 + (stats.total < 2 ? 0.8 : 0) + Math.random() * 0.35;
    return { c, score };
  });
  ranked.sort((a, b) => b.score - a.score);
  const top = ranked.slice(0, Math.min(3, ranked.length));
  return top[Math.floor(Math.random() * top.length)].c;
}

document.getElementById("btn-new-challenge").addEventListener("click", () => {
  setPlayMode("challenge");
  currentTarget = pickAdaptiveChallenge();
  if (!currentTarget) return;
  const msg = t("findPiece", conceptLabel(currentTarget));
  document.getElementById("exercise-target").textContent = msg;
  speak(t("sayFind", conceptLabel(currentTarget)));
  announceForScreenReader(msg);
  updateTargetPicto();
  updatePaceBar(true);
  renderPieceGrid();
});

document.getElementById("btn-repeat-audio").addEventListener("click", () => {
  if (currentTarget) speak(t("sayFind", conceptLabel(currentTarget)));
  else speak(t("exercisePrompt"));
});

/* ---------- 9. Escáner de cámara + QR (jsQR) + Realidad Aumentada -------
   El <canvas> es ahora la superficie visible: dibujamos el fotograma del
   video y, sobre el mismo, el overlay de RA (recuadro de seguimiento +
   etiqueta flotante animada) en el mismo espacio de coordenadas que usa
   jsQR para las esquinas del marcador — así no hace falta transformar
   puntos entre el video y la pantalla. */
const video = document.getElementById("camera-view");
const canvas = document.getElementById("camera-canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
let stream = null;
let scanning = false;
let cameraFacing = "environment"; // environment = trasera, user = frontal
let lastReadTs = 0;
let lastCode = null; // { concept, location, ts }
let particles = []; // burst de celebración al acertar (canvas 2D, sin three.js)

document.getElementById("btn-start-scan").addEventListener("click", () => startScan());
document.getElementById("btn-stop-scan").addEventListener("click", stopScan);
document.getElementById("btn-flip-camera")?.addEventListener("click", flipCamera);
document.getElementById("btn-flip-camera-row")?.addEventListener("click", flipCamera);

function setFlipVisible(on) {
  ["btn-flip-camera", "btn-flip-camera-row"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.hidden = !on;
  });
}

function updateFlipButtonLabel() {
  const long = cameraFacing === "environment" ? t("flipCamera") : t("flipCameraBack");
  const short = cameraFacing === "environment" ? t("flipCameraShort") : t("flipCameraShortBack");
  const row = document.getElementById("btn-flip-camera-row");
  if (row) {
    const textEl = row.querySelector("[data-i18n-text]");
    if (textEl) textEl.textContent = long;
    else {
      const ico = row.querySelector(".ui-ico");
      row.textContent = "";
      if (ico) row.appendChild(ico);
      const span = document.createElement("span");
      span.setAttribute("data-i18n-text", "");
      span.textContent = long;
      row.appendChild(span);
    }
  }
  const overlay = document.getElementById("btn-flip-camera");
  if (overlay) {
    const label = overlay.querySelector("[data-i18n]");
    if (label) label.textContent = short;
    overlay.setAttribute("aria-label", long);
  }
}

function stopCameraTracks() {
  if (stream) {
    stream.getTracks().forEach((tr) => tr.stop());
    stream = null;
  }
  if (video) video.srcObject = null;
}

/** Elige deviceId por etiqueta (mejor en Android TWA/WebView). */
async function resolveCameraConstraints(facing) {
  let devices = [];
  try {
    devices = await navigator.mediaDevices.enumerateDevices();
  } catch (_) {}
  const cams = devices.filter((d) => d.kind === "videoinput" && d.deviceId);
  if (cams.length) {
    const frontRe = /front|user|selfie|facial|frontal|delantera/i;
    const backRe = /back|rear|environment|trasera|posterior|world/i;
    let chosen = null;
    if (facing === "user") {
      chosen = cams.find((d) => frontRe.test(d.label)) || (cams.length > 1 ? cams[cams.length - 1] : cams[0]);
    } else {
      chosen = cams.find((d) => backRe.test(d.label)) || cams[0];
    }
    if (chosen && chosen.deviceId) {
      return {
        video: {
          deviceId: { exact: chosen.deviceId },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      };
    }
  }
  return {
    video: {
      facingMode: { ideal: facing },
      width: { ideal: 1280 },
      height: { ideal: 720 },
    },
  };
}

async function openCameraStream(facing) {
  const primary = await resolveCameraConstraints(facing);
  try {
    return await navigator.mediaDevices.getUserMedia(primary);
  } catch (e1) {
    // Fallback estricto / laxo para Android
    try {
      return await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: facing } },
      });
    } catch (e2) {
      return await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facing },
      });
    }
  }
}

async function startScan(facing) {
  try {
    if (facing) cameraFacing = facing;
    stopCameraTracks();
    // Primera vez: pedir permiso genérico para poder leer etiquetas de cámara
    if (!scanning && !facing) {
      try {
        const warm = await navigator.mediaDevices.getUserMedia({ video: true });
        warm.getTracks().forEach((tr) => tr.stop());
      } catch (_) {}
    }
    stream = await openCameraStream(cameraFacing);
    video.srcObject = stream;
    await video.play();
    scanning = true;
    document.getElementById("btn-start-scan").hidden = true;
    document.getElementById("btn-stop-scan").hidden = false;
    setFlipVisible(true);
    updateFlipButtonLabel();
    document.body.classList.toggle("camera-front", cameraFacing === "user");
    document.getElementById("scanner-wrap")?.classList.add("is-scanning");
    document.getElementById("scan-status").textContent =
      cameraFacing === "user" ? t("cameraFront") : t("cameraOn");
    requestAnimationFrame(scanLoop);
  } catch (err) {
    if (facing === "user" || cameraFacing === "user") {
      document.getElementById("scan-status").textContent = t("cameraSwitchFail");
      toast(t("cameraSwitchFail"));
      if (facing === "user") {
        cameraFacing = "environment";
        try {
          return await startScan("environment");
        } catch (e2) {
          document.getElementById("scan-status").textContent =
            "No se pudo acceder a la cámara: " + (e2.message || err.message);
        }
      }
      return;
    }
    document.getElementById("scan-status").textContent =
      "No se pudo acceder a la cámara: " + err.message;
  }
}

async function flipCamera() {
  if (!scanning && !stream) {
    // permitir activar ya en frontal
    await startScan(cameraFacing === "environment" ? "user" : "environment");
    return;
  }
  const next = cameraFacing === "environment" ? "user" : "environment";
  document.getElementById("scan-status").textContent = "Cambiando cámara…";
  await startScan(next);
}

function stopScan() {
  scanning = false;
  lastCode = null;
  particles = [];
  stopCameraTracks();
  cameraFacing = "environment";
  document.body.classList.remove("camera-front");
  document.getElementById("scanner-wrap")?.classList.remove("is-scanning");
  document.getElementById("btn-start-scan").hidden = false;
  document.getElementById("btn-stop-scan").hidden = true;
  setFlipVisible(false);
  updateFlipButtonLabel();
  document.getElementById("scan-status").textContent = t("cameraOff");
}

function spawnAchievementBurst(x, y) {
  if (!shouldAnimate()) return;
  const colors = ["#facc15", "#22c55e", "#2dd4bf", "#fdba74", "#ffffff"];
  for (let i = 0; i < 28; i++) {
    const angle = (Math.PI * 2 * i) / 28 + Math.random() * 0.4;
    const speed = 2.5 + Math.random() * 4;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.5,
      life: 1,
      decay: 0.018 + Math.random() * 0.012,
      size: 3 + Math.random() * 4,
      color: colors[i % colors.length],
      kind: i % 5 === 0 ? "star" : "dot",
    });
  }
}

function updateAndDrawParticles() {
  if (particles.length === 0) return;
  const next = [];
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.12;
    p.life -= p.decay;
    if (p.life <= 0) continue;
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = p.color;
    if (p.kind === "star") {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.life * 6);
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
        const r = p.size * 1.4;
        ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
        const a2 = a + Math.PI / 5;
        ctx.lineTo(Math.cos(a2) * r * 0.45, Math.sin(a2) * r * 0.45);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    next.push(p);
  }
  ctx.globalAlpha = 1;
  particles = next;
}

function scanLoop() {
  if (!scanning) return;
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    const now = Date.now();

    if (code && code.data.startsWith(QR_PREFIX)) {
      const concept = findConcept(code.data.slice(QR_PREFIX.length));
      if (concept) {
        lastCode = { concept, location: code.location, ts: now };
        drawAROverlay(concept, code.location);
        if (now - lastReadTs > scanCooldownMs()) {
          lastReadTs = now;
          handleScan(concept, code.location);
        }
      }
    } else if (lastCode && now - lastCode.ts < 350) {
      // sostiene la etiqueta un instante para que no "parpadee" entre frames
      drawAROverlay(lastCode.concept, lastCode.location);
    }
    updateAndDrawParticles();
  }
  requestAnimationFrame(scanLoop);
}
/* Dibuja el overlay de Realidad Aumentada: recuadro que sigue las 4
   esquinas del QR físico + etiqueta grande flotando sobre la pieza. */
function drawAROverlay(concept, loc) {
  const { topLeftCorner: tl, topRightCorner: tr, bottomRightCorner: br, bottomLeftCorner: bl } = loc;
  const cx = (tl.x + tr.x + br.x + bl.x) / 4;
  const cy = (tl.y + tr.y + br.y + bl.y) / 4;
  const bob = shouldAnimate() ? Math.sin(Date.now() / 260) * 6 : 0;
  const isTarget = currentTarget && currentTarget.id === concept.id;
  const color = currentTarget ? (isTarget ? "#22c55e" : "#2dd4bf") : "#ca8a04";

  ctx.save();
  ctx.lineWidth = 4;
  ctx.strokeStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(tl.x, tl.y);
  ctx.lineTo(tr.x, tr.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(bl.x, bl.y);
  ctx.closePath();
  ctx.stroke();

  // burbuja flotante con pictograma + etiqueta + braille
  const label = conceptLabel(concept);
  const brInfo = typeof brailleForConcept === "function" ? brailleForConcept(concept) : null;
  const brText = brInfo ? brInfo.cells : "";
  ctx.font = "bold 18px Segoe UI, sans-serif";
  const labelW = ctx.measureText(label).width;
  const bubbleW = Math.max(100, labelW + 48, brText ? 120 : 0);
  const bubbleH = brText ? 118 : 92;
  const bx = cx - bubbleW / 2;
  const by = cy - 165 + bob;

  ctx.shadowBlur = 6;
  ctx.fillStyle = "rgba(17,24,39,0.88)";
  roundRectPath(ctx, bx, by, bubbleW, bubbleH, 16);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.shadowBlur = 0;
  const pictoSize = PREFS.pictosOnly ? 44 : 32;
  drawPictoOnCanvas(ctx, concept, cx, by + (PREFS.pictosOnly ? 40 : 36), pictoSize);
  if (!PREFS.pictosOnly) {
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.font = "600 15px Segoe UI, sans-serif";
    ctx.fillText(label, cx, by + 72);
  }
  if (brText) {
    ctx.fillStyle = "#facc15";
    ctx.font = "700 26px Segoe UI Symbol, Apple Symbols, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(brText, cx, by + (PREFS.pictosOnly ? 88 : 104));
  }
  ctx.restore();
}

function roundRectPath(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

/* ---------- 10. Manejo de una pieza escaneada ---------- */
function showBrailleResult(concept) {
  const el = document.getElementById("result-braille");
  if (!el) return;
  const info = typeof brailleForConcept === "function" ? brailleForConcept(concept) : null;
  if (!info) {
    el.hidden = true;
    el.innerHTML = "";
    return;
  }
  el.hidden = false;
  el.innerHTML =
    `<span class="braille-cells" aria-hidden="true">${info.cells}</span>` +
    `<span class="braille-caption">Braille · tócalo también en la pieza</span>`;
}

function teachScan(concept) {
  const resultCard = document.getElementById("result-card");
  resultCard.hidden = false;
  resultCard.classList.remove("is-wrong");
  resultCard.classList.add("is-correct", "is-learn");
  fillPieceVisual(document.getElementById("result-icon"), concept.id);
  document.getElementById("result-label").textContent = conceptLabel(concept);
  showBrailleResult(concept);
  const feedback = t("learnFeedback", conceptLabel(concept));
  document.getElementById("result-feedback").textContent = feedback;
  const brSpeak = typeof brailleSpoken === "function" ? brailleSpoken(concept) : "";
  const say = `${conceptSay(concept)} ${brSpeak}`.trim();
  speak(say);
  vibrate(90);
  flashReward(true);
  announceForScreenReader(`${conceptLabel(concept)}. ${feedback}. ${brSpeak}`);
  logAttempt(concept.id, null, true);
}

function handleScan(concept, location) {
  if ((PREFS.playMode || "learn") === "learn") {
    currentTarget = null;
    teachScan(concept);
    return;
  }

  const resultCard = document.getElementById("result-card");
  resultCard.hidden = false;
  resultCard.classList.remove("is-correct", "is-wrong", "is-learn");
  const resultIcon = document.getElementById("result-icon");
  fillPieceVisual(resultIcon, concept.id);
  document.getElementById("result-label").textContent = conceptLabel(concept);
  showBrailleResult(concept);

  if (currentTarget) {
    const correct = concept.id === currentTarget.id;
    const feedback = correct
      ? t("correct")
      : t("almost", conceptLabel(currentTarget));
    document.getElementById("result-feedback").textContent = feedback;
    resultCard.classList.add(correct ? "is-correct" : "is-wrong");
    const brHint = correct && typeof brailleSpoken === "function" ? " " + brailleSpoken(concept) : "";
    speak(correct ? t("sayCorrect", conceptSay(concept)) + brHint : t("sayWrong", conceptLabel(concept), conceptLabel(currentTarget)));
    vibrate(correct ? (PREFS.extraTime ? [120, 80, 180] : 180) : [60, 40, 60]);
    flashReward(correct);
    announceForScreenReader(`${conceptLabel(concept)}. ${feedback}`);
    logAttempt(concept.id, currentTarget.id, correct);
    SESSION.attempts++;
    if (correct) {
      SESSION.correct++;
      SESSION.streak++;
      if (location) {
        const { topLeftCorner: tl, topRightCorner: tr, bottomRightCorner: br, bottomLeftCorner: bl } = location;
        spawnAchievementBurst(
          (tl.x + tr.x + br.x + bl.x) / 4,
          (tl.y + tr.y + br.y + bl.y) / 4
        );
      }
      currentTarget = null;
      document.getElementById("exercise-target").textContent = t("exercisePrompt");
      updateTargetPicto();
      updatePaceBar(false);
    } else {
      SESSION.streak = 0;
      updatePaceBar(true);
    }
    updateSessionUI();
    renderPieceGrid();
  } else {
    teachScan(concept);
  }
}

function fillPieceVisual(el, conceptId) {
  if (!el) return;
  el.classList.add("piece-visual");
  el.replaceChildren();
  const img = document.createElement("img");
  img.className = "piece-photo";
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";
  const candidates = [
    `media/piezas/${conceptId}.jpg`,
    `media/piezas/${conceptId}.jpeg`,
    `media/piezas/${conceptId}.png`,
    `media/piezas/${conceptId}.webp`,
  ];
  let i = 0;
  const showPicto = () => {
    el.classList.remove("has-photo");
    el.classList.add("is-picto");
    el.innerHTML = typeof pictoMarkup === "function" ? pictoMarkup(conceptId) : "";
  };
  img.onerror = () => {
    i += 1;
    if (i < candidates.length) img.src = candidates[i];
    else showPicto();
  };
  img.onload = () => {
    el.classList.add("has-photo");
    el.classList.remove("is-picto");
  };
  img.src = candidates[0];
  el.appendChild(img);
}

function renderPieceGrid() {
  const grid = document.getElementById("piece-grid");
  if (!grid) return;
  grid.innerHTML = "";
  conceptsInActiveSet().forEach((c) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "piece-chip" + (currentTarget && currentTarget.id === c.id ? " is-target" : "");
    btn.setAttribute("role", "listitem");
    btn.setAttribute("aria-label", conceptLabel(c));
    const ic = document.createElement("span");
    ic.className = "ic";
    ic.setAttribute("aria-hidden", "true");
    fillPieceVisual(ic, c.id);
    if (!PREFS.pictosOnly) {
      const lb = document.createElement("span");
      lb.className = "lb";
      lb.textContent = conceptLabel(c);
      btn.appendChild(ic);
      btn.appendChild(lb);
    } else {
      btn.appendChild(ic);
    }
    btn.addEventListener("click", () => handleScan(c, null));
    grid.appendChild(btn);
  });
}

function renderPiezasCatalogo() {
  const root = document.getElementById("piezas-catalogo");
  if (!root) return;
  const groups = { letras: [], numeros: [], signos: [], figuras: [], emociones: [], rutinas: [] };
  CONCEPTS.forEach((c) => {
    if (groups[c.set]) groups[c.set].push(c);
  });
  const titles = {
    letras: "Letras A–Z + Ñ",
    numeros: "Números 0–9",
    signos: "Signos",
    figuras: "Figuras",
    emociones: "Emociones",
    rutinas: "Rutinas diarias",
  };
  root.innerHTML = "";
  Object.keys(groups).forEach((set) => {
    const h = document.createElement("h4");
    h.className = "catalogo-title";
    h.textContent = titles[set];
    root.appendChild(h);
    const table = document.createElement("div");
    table.className = "catalogo-table";
    groups[set].forEach((c) => {
      const row = document.createElement("div");
      row.className = "catalogo-row";
      const ico = document.createElement("span");
      ico.className = "cat-ico";
      ico.setAttribute("aria-hidden", "true");
      fillPieceVisual(ico, c.id);
      const name = document.createElement("span");
      name.className = "cat-name";
      name.innerHTML = `<strong>${c.label}</strong><br><em>${c.label_qu}</em>`;
      const qr = document.createElement("span");
      qr.className = "cat-qr";
      qr.innerHTML = `<code>TACTILIA:${c.id}</code><br><small>${c.id}.png · foto: ${c.id}.jpg</small>`;
      row.appendChild(ico);
      row.appendChild(name);
      row.appendChild(qr);
      table.appendChild(row);
    });
    root.appendChild(table);
  });
}
function logAttempt(conceptId, targetId, correct) {
  DATA.logs.push({
    student: studentSelect.value || DATA.students[0],
    conceptId,
    targetId,
    correct,
    ts: new Date().toISOString(),
  });
  saveData(DATA);
}

/* ---------- 11. Panel del docente ---------- */
function renderDashboard() {
  const rows = {};
  DATA.logs.forEach((log) => {
    if (!rows[log.student]) rows[log.student] = { attempts: 0, correct: 0, last: log.ts };
    rows[log.student].attempts++;
    if (log.correct) rows[log.student].correct++;
    if (log.ts > rows[log.student].last) rows[log.student].last = log.ts;
  });

  const names = Object.keys(rows);
  document.getElementById("dashboard-empty").hidden = names.length > 0;
  document.getElementById("dashboard-table").hidden = names.length === 0;

  const tbody = document.getElementById("dashboard-body");
  tbody.innerHTML = "";
  names.forEach((name) => {
    const r = rows[name];
    const pct = r.attempts ? Math.round((r.correct / r.attempts) * 100) : 0;
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${name}</td><td>${r.attempts}</td><td>${r.correct}</td><td>${pct}%</td><td>${new Date(
      r.last
    ).toLocaleString("es-PE")}</td>`;
    tbody.appendChild(tr);
  });

  renderInsights();
}

function renderInsights() {
  const list = document.getElementById("insight-list");
  if (!list) return;
  list.innerHTML = "";
  const student = studentSelect.value || null;
  const byConcept = {};
  DATA.logs.forEach((log) => {
    if (student && log.student !== student) return;
    if (!log.targetId) return;
    if (!byConcept[log.targetId]) byConcept[log.targetId] = { total: 0, correct: 0 };
    byConcept[log.targetId].total++;
    if (log.correct) byConcept[log.targetId].correct++;
  });

  const ranked = Object.entries(byConcept)
    .map(([id, s]) => ({
      id,
      total: s.total,
      acc: s.correct / s.total,
      concept: findConcept(id),
    }))
    .filter((x) => x.concept && x.total >= 1)
    .sort((a, b) => a.acc - b.acc || b.total - a.total)
    .slice(0, 5);

  if (ranked.length === 0) {
    const li = document.createElement("li");
    li.textContent = t("insightsNone");
    list.appendChild(li);
    return;
  }

  ranked.forEach((item) => {
    const pct = Math.round(item.acc * 100);
    const li = document.createElement("li");
    li.innerHTML =
      `<strong><span class="cat-ico inline">${typeof pictoMarkup === "function" ? pictoMarkup(item.concept.id) : ""}</span> ${conceptLabel(item.concept)}</strong>` +
      ` — ${pct}% (${item.total} retos)` +
      `<div class="bar" aria-hidden="true"><span style="width:${pct}%"></span></div>`;
    list.appendChild(li);
  });
}

/* ---------- 12. Recomendación pedagógica ----------
   Primero intenta Claude vía backend (/server). Si no hay red, clave o
   servidor, cae a generateLocalRecommendation() (100% offline).
   La API key NUNCA vive en el cliente — solo en server/.env. */
// Cambia esta URL si el backend corre en otro host (piloto local: :8787).
const AI_API_URL =
  localStorage.getItem("tactilia_ai_url") || "http://localhost:8787/api/recommend";

function generateLocalRecommendation() {
  const byType = {};
  DATA.logs.forEach((log) => {
    const concept = findConcept(log.conceptId);
    if (!concept) return;
    byType[concept.type] = byType[concept.type] || { total: 0, correct: 0 };
    byType[concept.type].total++;
    if (log.correct) byType[concept.type].correct++;
  });

  if (Object.keys(byType).length === 0) {
    return "Aún no hay práctica registrada. Pide al estudiante que explore algunas piezas primero.";
  }

  let weakest = null;
  Object.entries(byType).forEach(([type, s]) => {
    const acc = s.correct / s.total;
    if (!weakest || acc < weakest.acc) weakest = { type, acc };
  });

  const nice = {
    letra: "letras",
    numero: "números",
    figura: "figuras geométricas",
    signo: "signos",
    emocion: "emociones",
    rutina: "rutinas diarias",
  };
  return (
    `Sugerencia: reforzar la categoría "${nice[weakest.type] || weakest.type}" ` +
    `(precisión actual ${Math.round(weakest.acc * 100)}%). ` +
    `Recomendación: sesiones cortas de 5 minutos, repitiendo esas piezas antes de introducir nuevas.`
  );
}

async function callClaudeAPI(promptData) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(AI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(promptData),
      signal: controller.signal,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${res.status}`);
    }
    const data = await res.json();
    if (!data.recommendation) throw new Error("Respuesta sin recommendation");
    return data.recommendation;
  } finally {
    clearTimeout(timer);
  }
}

document.getElementById("btn-ai-recommend").addEventListener("click", async () => {
  const out = document.getElementById("ai-output");
  out.textContent = "Generando recomendación...";
  out.setAttribute("aria-busy", "true");
  try {
    const text = await callClaudeAPI({ logs: DATA.logs });
    out.textContent = text;
  } catch (e) {
    console.warn("IA online no disponible, usando heurística local:", e.message);
    out.textContent =
      "[Modo offline / sin backend] " + generateLocalRecommendation();
  } finally {
    out.setAttribute("aria-busy", "false");
  }
});

/* ---------- 13. Exportar / importar / borrar datos ---------- */
document.getElementById("btn-export").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(DATA, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "tactilia_progreso.json";
  a.click();
});

document.getElementById("btn-export-csv")?.addEventListener("click", () => {
  const header = ["estudiante", "intentos", "aciertos", "precision_pct", "ultima_practica"];
  const by = {};
  DATA.logs.forEach((log) => {
    const s = log.student || "—";
    by[s] = by[s] || { attempts: 0, hits: 0, last: "" };
    by[s].attempts++;
    if (log.correct) by[s].hits++;
    if (log.ts && (!by[s].last || log.ts > by[s].last)) by[s].last = log.ts;
  });
  const lines = [header.join(",")];
  Object.keys(by).sort().forEach((name) => {
    const r = by[name];
    const pct = r.attempts ? Math.round((r.hits / r.attempts) * 100) : 0;
    const safe = String(name).replaceAll('"', '""');
    lines.push(`"${safe}",${r.attempts},${r.hits},${pct},${r.last || ""}`);
  });
  const blob = new Blob(["\uFEFF" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "tactilia_informe.csv";
  a.click();
  toast(t("btnExportCsv"));
});

document.getElementById("import-file")?.addEventListener("change", async (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    if (!parsed || !Array.isArray(parsed.students) || !Array.isArray(parsed.logs)) {
      throw new Error("JSON inválido");
    }
    DATA = { students: parsed.students, logs: parsed.logs };
    saveData(DATA);
    renderStudentSelect();
    renderDashboard();
    toast("Datos importados");
  } catch (err) {
    toast("No se pudo importar el JSON");
  }
  e.target.value = "";
});

document.getElementById("btn-clear").addEventListener("click", () => {
  if (confirm("¿Borrar todos los datos guardados en este dispositivo?")) {
    DATA = { students: DATA.students, logs: [] };
    saveData(DATA);
    SESSION.attempts = 0;
    SESSION.correct = 0;
    SESSION.streak = 0;
    updateSessionUI();
    renderDashboard();
    toast("Datos borrados");
  }
});

/* ---------- 14. Registro del Service Worker (instalable / offline) ---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js?v=16").then((reg) => {
      reg.update().catch(() => {});
      if (reg.waiting) reg.waiting.postMessage({ type: "SKIP_WAITING" });
    }).catch(() => {});
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      /* nueva versión SW lista; una sola recarga suave si hace falta */
    });
  });
}

/* ---------- 15. Validación lingüística EIB (antes VALIDACION_QUECHUA.md) --- */
const EIB_KEY = "tactilia_eib_v1";

function loadEib() {
  try {
    return JSON.parse(localStorage.getItem(EIB_KEY)) || { meta: {}, items: {}, decision: "", comentarios: "" };
  } catch (e) {
    return { meta: {}, items: {}, decision: "", comentarios: "" };
  }
}
function saveEib(data) {
  localStorage.setItem(EIB_KEY, JSON.stringify(data));
}

function collectEibPhraseRows() {
  const rows = [];
  rows.push({ key: "nombre", section: "Proyecto", text: "Makiwan Yachay («aprendizaje con las manos»)" });
  Object.keys(I18N.qu).forEach((key) => {
    const val = I18N.qu[key];
    if (typeof val === "string") {
      rows.push({ key: "i18n:" + key, section: "Interfaz", text: val });
    } else if (typeof val === "function") {
      rows.push({
        key: "i18n:" + key,
        section: "Interfaz",
        text: key === "findPiece" || key === "almost"
          ? val("{etiqueta}")
          : key === "sayFind"
            ? val("{etiqueta}")
            : key === "sayCorrect"
              ? val("{say}")
              : key === "sayWrong"
                ? val("{etiqueta}", "{reto}")
                : String(val),
      });
    }
  });
  CONCEPTS.forEach((c) => {
    rows.push({
      key: "concept:" + c.id + ":label",
      section: "Concepto · " + c.set,
      text: c.label_qu + "  |  " + c.say_qu,
    });
  });
  return rows;
}

function renderEibChecklist() {
  const wrap = document.getElementById("eib-checklist");
  if (!wrap) return;
  const data = loadEib();
  const meta = data.meta || {};
  const fecha = document.getElementById("eib-fecha");
  const revisor = document.getElementById("eib-revisor");
  const variedad = document.getElementById("eib-variedad");
  const contacto = document.getElementById("eib-contacto");
  const comentarios = document.getElementById("eib-comentarios");
  if (fecha) fecha.value = meta.fecha || "";
  if (revisor) revisor.value = meta.revisor || "";
  if (variedad) variedad.value = meta.variedad || "";
  if (contacto) contacto.value = meta.contacto || "";
  if (comentarios) comentarios.value = data.comentarios || "";
  document.querySelectorAll('input[name="eib-decision"]').forEach((r) => {
    r.checked = r.value === (data.decision || "");
  });

  wrap.innerHTML = "";
  collectEibPhraseRows().forEach((row) => {
    const saved = (data.items && data.items[row.key]) || { estado: "", nota: "" };
    const div = document.createElement("div");
    div.className = "eib-row";
    div.innerHTML =
      `<strong>${row.section} · ${row.key}</strong>` +
      `<div class="eib-phrase">${row.text}</div>` +
      `<div class="eib-row-controls">` +
      `<select data-eib-key="${row.key}" data-eib-field="estado" aria-label="Estado de ${row.key}">` +
      `<option value="">—</option>` +
      `<option value="ok">✅ Aprobado</option>` +
      `<option value="edit">✏️ Corregir</option>` +
      `<option value="reject">❌ Rechazar</option>` +
      `<option value="doubt">❓ Duda</option>` +
      `</select>` +
      `<input type="text" data-eib-key="${row.key}" data-eib-field="nota" placeholder="Corrección / nota dialectal" aria-label="Nota para ${row.key}">` +
      `</div>`;
    wrap.appendChild(div);
    const sel = div.querySelector("select");
    const inp = div.querySelector("input");
    sel.value = saved.estado || "";
    inp.value = saved.nota || "";
  });
}

function persistEibFromDom() {
  const data = loadEib();
  data.meta = {
    fecha: document.getElementById("eib-fecha")?.value || "",
    revisor: document.getElementById("eib-revisor")?.value || "",
    variedad: document.getElementById("eib-variedad")?.value || "",
    contacto: document.getElementById("eib-contacto")?.value || "",
  };
  data.comentarios = document.getElementById("eib-comentarios")?.value || "";
  const dec = document.querySelector('input[name="eib-decision"]:checked');
  data.decision = dec ? dec.value : "";
  data.items = data.items || {};
  document.querySelectorAll("[data-eib-key]").forEach((el) => {
    const key = el.dataset.eibKey;
    const field = el.dataset.eibField;
    if (!data.items[key]) data.items[key] = { estado: "", nota: "" };
    data.items[key][field] = el.value;
  });
  saveEib(data);
}

function wireEibPanel() {
  if (!document.getElementById("eib-checklist")) return;
  renderEibChecklist();
  const root = document.getElementById("view-acerca");
  root.addEventListener("change", (e) => {
    if (e.target.closest(".eib-card")) persistEibFromDom();
  });
  root.addEventListener("input", (e) => {
    if (e.target.closest(".eib-card")) persistEibFromDom();
  });
  document.getElementById("btn-eib-export")?.addEventListener("click", () => {
    persistEibFromDom();
    const blob = new Blob([JSON.stringify(loadEib(), null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "tactilia_validacion_quechua.json";
    a.click();
    toast("Validación exportada");
  });
  document.getElementById("btn-eib-clear")?.addEventListener("click", () => {
    if (!confirm("¿Borrar la validación guardada en este dispositivo?")) return;
    localStorage.removeItem(EIB_KEY);
    renderEibChecklist();
    toast("Validación borrada");
  });
}

wireEibPanel();

/* ---------- 16. Estado inicial ---------- */
document.querySelectorAll(".lang-btn").forEach((b) => {
  const on = b.dataset.lang === LANG;
  b.classList.toggle("active", on);
  b.setAttribute("aria-pressed", on ? "true" : "false");
});
applyI18n();
renderPieceGrid();
renderPiezasCatalogo();
updateSessionUI();
if (typeof decorateButtonsWithIcons === "function") {
  decorateButtonsWithIcons();
  document.querySelectorAll("[data-static-icon]").forEach((el) => {
    const name = el.getAttribute("data-static-icon");
    if (typeof uiIcon === "function") el.innerHTML = uiIcon(name);
  });
}
