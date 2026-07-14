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
    activeStudent: "Estudiante activo", newStudent: "+ Nuevo",
    setLabel: "Kit / set temático",
    setBasico: "Letras · números · figuras",
    setEmociones: "Emociones",
    setRutinas: "Rutinas diarias",
    setTodos: "Todos los sets",
    setHelp: "Elige el banco de piezas para los retos (útil en discapacidad intelectual: emoción / rutina).",
    exerciseMode: "Modo ejercicio adaptativo",
    exercisePrompt: "Presiona \"Nuevo reto\" para comenzar",
    newChallenge: "Nuevo reto", repeat: "Repetir",
    scanPiece: "Escanear pieza (Realidad Aumentada)",
    startCamera: "Activar cámara", stopCamera: "Detener",
    cameraOff: "Cámara apagada.", cameraOn: "Cámara activa. Apunta a la pieza.",
    findPiece: (label) => `Encuentra la pieza: ${label}`,
    sayFind: (label) => `Busca la pieza ${label}`,
    correct: "¡Correcto! Muy bien",
    almost: (label) => `Casi. Buscabas: ${label}`,
    sayCorrect: (say) => `¡Correcto! ${say}`,
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
    btnImport: "Importar JSON",
    btnClear: "Borrar todos los datos",
  },
  qu: {
    tabEstudiante: "Yachaqaq", tabDocente: "Yachachiq", tabAcerca: "Kaymanta",
    a11yTitle: "Runa yanapay", a11yContrast: "Sinchi rikch'ay",
    a11yVibration: "Kuyuchiy allin kaqtin", a11yTextSize: "Qillqa hatunchay",
    a11yVoice: "Rimay / uyarina", a11yMotion: "Aswanta mana kuyuchiy",
    activeStudent: "Kunan yachaqaq", newStudent: "+ Musuq",
    setLabel: "Impay kit",
    setBasico: "Letras · yupay · rikch'akuna",
    setEmociones: "Sunquykuna",
    setRutinas: "Sapa p'unchaw",
    setTodos: "Llapan",
    setHelp: "Akllay riqsichinakunata (emocionkuna / sapa p'unchaw).",
    exerciseMode: "Yachay pukllay (yanapakuq)",
    exercisePrompt: "\"Musuq atipanakuy\" nisqata ñitiy qallariy",
    newChallenge: "Musuq atipanakuy", repeat: "Kutichiy",
    scanPiece: "Rikuchiy (Realidad Aumentada)",
    startCamera: "Kamarata qallariy", stopCamera: "Sayachiy",
    cameraOff: "Kamara sayasqa.", cameraOn: "Kamara kachkan. Riqsichiyta qhaway.",
    findPiece: (label) => `Maskay: ${label}`,
    sayFind: (label) => `Maskay ${label}`,
    correct: "¡Allin! Sumaqta ruwanki",
    almost: (label) => `Sichuslla. Maskasharqanki: ${label}`,
    sayCorrect: (say) => `¡Allin! ${say}`,
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
   Debe coincidir con /qr/generate_qr.py. Los números y figuras usan
   vocabulario quechua documentado en materiales EIB; en las letras,
   dado que el quechua tradicional usa solo tres vocales (a, i, u),
   se mantiene el nombre de la letra en español dentro de una frase
   portadora en quechua, en vez de forzar una traducción literal. */
const CONCEPTS = [
  // Set básico — glyph = letra/número para canvas; pictos SVG en UI
  { id: "letra-a", set: "basico", type: "letra", label: "Letra A", glyph: "A",
    say: "Letra A, como en Araña.", label_qu: "Letra A", say_qu: "Kayqa letra A, allqu hina (allqu = perro)." },
  { id: "letra-e", set: "basico", type: "letra", label: "Letra E", glyph: "E",
    say: "Letra E, como en Elefante.", label_qu: "Letra E", say_qu: "Kayqa letra E." },
  { id: "letra-i", set: "basico", type: "letra", label: "Letra I", glyph: "I",
    say: "Letra I, como en Iguana.", label_qu: "Letra I", say_qu: "Kayqa letra I, inti hina (inti = sol)." },
  { id: "letra-o", set: "basico", type: "letra", label: "Letra O", glyph: "O",
    say: "Letra O, como en Oso.", label_qu: "Letra O", say_qu: "Kayqa letra O." },
  { id: "letra-u", set: "basico", type: "letra", label: "Letra U", glyph: "U",
    say: "Letra U, como en Uva.", label_qu: "Letra U", say_qu: "Kayqa letra U, urpi hina (urpi = paloma)." },

  { id: "numero-1", set: "basico", type: "numero", label: "Número 1", glyph: "1",
    say: "Número uno.", label_qu: "Huk", say_qu: "Huk." },
  { id: "numero-2", set: "basico", type: "numero", label: "Número 2", glyph: "2",
    say: "Número dos.", label_qu: "Iskay", say_qu: "Iskay." },
  { id: "numero-3", set: "basico", type: "numero", label: "Número 3", glyph: "3",
    say: "Número tres.", label_qu: "Kimsa", say_qu: "Kimsa." },
  { id: "numero-4", set: "basico", type: "numero", label: "Número 4", glyph: "4",
    say: "Número cuatro.", label_qu: "Tawa", say_qu: "Tawa." },
  { id: "numero-5", set: "basico", type: "numero", label: "Número 5", glyph: "5",
    say: "Número cinco.", label_qu: "Pichqa", say_qu: "Pichqa." },

  { id: "figura-circulo", set: "basico", type: "figura", label: "Círculo", glyph: "○",
    say: "Esta es la figura círculo.", label_qu: "Muyu", say_qu: "Kayqa muyu." },
  { id: "figura-cuadrado", set: "basico", type: "figura", label: "Cuadrado", glyph: "□",
    say: "Esta es la figura cuadrado.", label_qu: "Tawa kuchu", say_qu: "Kayqa tawa kuchu (tawa kuchuyuq)." },
  { id: "figura-triangulo", set: "basico", type: "figura", label: "Triángulo", glyph: "△",
    say: "Esta es la figura triángulo.", label_qu: "Kimsa kuchu", say_qu: "Kayqa kimsa kuchu." },
  { id: "figura-estrella", set: "basico", type: "figura", label: "Estrella", glyph: "✩",
    say: "Esta es la figura estrella.", label_qu: "Ch'aska", say_qu: "Kayqa ch'aska." },
  { id: "figura-corazon", set: "basico", type: "figura", label: "Corazón", glyph: "♡",
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

let activeSet = localStorage.getItem("tactilia_set") || "basico";
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

function loadPrefs() {
  try {
    return JSON.parse(localStorage.getItem(PREFS_KEY)) || {
      contrast: false, vibration: true, textSize: "normal", voice: true, reduceMotion: false,
    };
  } catch (e) {
    return { contrast: false, vibration: true, textSize: "normal", voice: true, reduceMotion: false };
  }
}
function savePrefs(p) {
  localStorage.setItem(PREFS_KEY, JSON.stringify(p));
}
let PREFS = loadPrefs();
if (PREFS.voice === undefined) PREFS.voice = true;
if (PREFS.reduceMotion === undefined) PREFS.reduceMotion = false;

/* ---------- 3. Utilidades de voz y vibración (funcionan sin internet) --- */
function speak(text) {
  if (!PREFS.voice || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "es-PE";
  u.rate = LANG === "qu" ? 0.88 : 0.95;
  window.speechSynthesis.speak(u);
}

function shouldAnimate() {
  if (PREFS.reduceMotion) return false;
  return !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
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
    if (typeof val === "string") el.textContent = val;
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

/* ---------- 4b. Tema visual Costa / Sierra / Selva ---------- */
const REGION_THEMES = {
  costa: { color: "#0284c7" },
  sierra: { color: "#0f766e" },
  selva: { color: "#15803d" },
};
function applyRegion(region) {
  const r = REGION_THEMES[region] ? region : "sierra";
  document.body.classList.remove("theme-costa", "theme-sierra", "theme-selva");
  document.body.classList.add("theme-" + r);
  document.querySelectorAll(".region-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.region === r);
  });
  const meta = document.getElementById("meta-theme");
  if (meta) meta.setAttribute("content", REGION_THEMES[r].color);
  localStorage.setItem("tactilia_region", r);
}
document.querySelectorAll(".region-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyRegion(btn.dataset.region));
});
applyRegion(localStorage.getItem("tactilia_region") || "sierra");

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

/* ---------- 7. Panel de accesibilidad ---------- */
const chkContrast = document.getElementById("chk-contrast");
const chkVibration = document.getElementById("chk-vibration");
const chkVoice = document.getElementById("chk-voice");
const chkMotion = document.getElementById("chk-motion");
const selTextSize = document.getElementById("sel-textsize");

function applyPrefs() {
  document.body.classList.toggle("contrast-mode", !!PREFS.contrast);
  document.body.classList.toggle("reduce-motion", !!PREFS.reduceMotion);
  document.body.classList.remove("text-grande", "text-xl");
  if (PREFS.textSize === "grande") document.body.classList.add("text-grande");
  if (PREFS.textSize === "xl") document.body.classList.add("text-xl");
  chkContrast.checked = !!PREFS.contrast;
  chkVibration.checked = !!PREFS.vibration;
  if (chkVoice) chkVoice.checked = PREFS.voice !== false;
  if (chkMotion) chkMotion.checked = !!PREFS.reduceMotion;
  selTextSize.value = PREFS.textSize || "normal";
}
chkContrast.addEventListener("change", () => { PREFS.contrast = chkContrast.checked; savePrefs(PREFS); applyPrefs(); });
chkVibration.addEventListener("change", () => { PREFS.vibration = chkVibration.checked; savePrefs(PREFS); });
chkVoice?.addEventListener("change", () => { PREFS.voice = chkVoice.checked; savePrefs(PREFS); });
chkMotion?.addEventListener("change", () => { PREFS.reduceMotion = chkMotion.checked; savePrefs(PREFS); applyPrefs(); });
selTextSize.addEventListener("change", () => { PREFS.textSize = selTextSize.value; savePrefs(PREFS); applyPrefs(); });
applyPrefs();

/* ---------- 8. Modo ejercicio (adaptativo) ---------- */
let currentTarget = null;
const SESSION = { attempts: 0, correct: 0, streak: 0 };

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
  const student = studentSelect.value || DATA.students[0];
  const ranked = pool.map((c) => {
    const stats = accuracyForConcept(c.id, student);
    // prioriza baja precisión y poco practicadas; algo de azar para no repetir siempre
    const score = (1 - stats.acc) * 2 + (stats.total < 2 ? 0.8 : 0) + Math.random() * 0.35;
    return { c, score };
  });
  ranked.sort((a, b) => b.score - a.score);
  // elige entre las 3 más necesitadas
  const top = ranked.slice(0, Math.min(3, ranked.length));
  return top[Math.floor(Math.random() * top.length)].c;
}

document.getElementById("btn-new-challenge").addEventListener("click", () => {
  currentTarget = pickAdaptiveChallenge();
  if (!currentTarget) return;
  const msg = t("findPiece", conceptLabel(currentTarget));
  document.getElementById("exercise-target").textContent = msg;
  speak(t("sayFind", conceptLabel(currentTarget)));
  announceForScreenReader(msg);
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
let lastReadTs = 0;
let lastCode = null; // { concept, location, ts }
let particles = []; // burst de celebración al acertar (canvas 2D, sin three.js)

document.getElementById("btn-start-scan").addEventListener("click", startScan);
document.getElementById("btn-stop-scan").addEventListener("click", stopScan);

async function startScan() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });
    video.srcObject = stream;
    await video.play();
    scanning = true;
    document.getElementById("btn-start-scan").hidden = true;
    document.getElementById("btn-stop-scan").hidden = false;
    document.getElementById("scan-status").textContent = t("cameraOn");
    requestAnimationFrame(scanLoop);
  } catch (err) {
    document.getElementById("scan-status").textContent =
      "No se pudo acceder a la cámara: " + err.message;
  }
}

function stopScan() {
  scanning = false;
  lastCode = null;
  particles = [];
  if (stream) stream.getTracks().forEach((tr) => tr.stop());
  document.getElementById("btn-start-scan").hidden = false;
  document.getElementById("btn-stop-scan").hidden = true;
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
        if (now - lastReadTs > 1200) {
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

  // burbuja flotante con pictograma escolar + etiqueta
  const label = conceptLabel(concept);
  ctx.font = "bold 18px Segoe UI, sans-serif";
  const labelW = ctx.measureText(label).width;
  const bubbleW = Math.max(88, labelW + 40);
  const bubbleH = 92;
  const bx = cx - bubbleW / 2;
  const by = cy - 150 + bob;

  ctx.shadowBlur = 6;
  ctx.fillStyle = "rgba(17,24,39,0.88)";
  roundRectPath(ctx, bx, by, bubbleW, bubbleH, 16);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.shadowBlur = 0;
  drawPictoOnCanvas(ctx, concept, cx, by + 36, 32);
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.font = "600 15px Segoe UI, sans-serif";
  ctx.fillText(label, cx, by + 72);
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
function handleScan(concept, location) {
  const resultCard = document.getElementById("result-card");
  resultCard.hidden = false;
  resultCard.classList.remove("is-correct", "is-wrong");
  const resultIcon = document.getElementById("result-icon");
  fillPieceVisual(resultIcon, concept.id);
  document.getElementById("result-label").textContent = conceptLabel(concept);

  if (currentTarget) {
    const correct = concept.id === currentTarget.id;
    const feedback = correct
      ? t("correct")
      : t("almost", conceptLabel(currentTarget));
    document.getElementById("result-feedback").textContent = feedback;
    resultCard.classList.add(correct ? "is-correct" : "is-wrong");
    speak(correct ? t("sayCorrect", conceptSay(concept)) : t("sayWrong", conceptLabel(concept), conceptLabel(currentTarget)));
    vibrate(correct ? 180 : [60, 40, 60]);
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
    } else {
      SESSION.streak = 0;
    }
    updateSessionUI();
    renderPieceGrid();
  } else {
    document.getElementById("result-feedback").textContent = t("freeMode");
    resultCard.classList.add("is-correct");
    speak(conceptSay(concept));
    vibrate(90);
    announceForScreenReader(`${conceptLabel(concept)}. ${t("freeMode")}`);
    logAttempt(concept.id, null, true);
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
    const lb = document.createElement("span");
    lb.className = "lb";
    lb.textContent = conceptLabel(c);
    btn.appendChild(ic);
    btn.appendChild(lb);
    btn.addEventListener("click", () => handleScan(c, null));
    grid.appendChild(btn);
  });
}

function renderPiezasCatalogo() {
  const root = document.getElementById("piezas-catalogo");
  if (!root) return;
  const groups = { basico: [], emociones: [], rutinas: [] };
  CONCEPTS.forEach((c) => {
    if (groups[c.set]) groups[c.set].push(c);
  });
  const titles = {
    basico: "Set básico (letras, números, figuras)",
    emociones: "Set emociones",
    rutinas: "Set rutinas diarias",
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
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
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
