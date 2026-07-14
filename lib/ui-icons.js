/* Iconos UI formales (SVG línea) — sin emoji ni estilo “IA”. */
const UI_ICONS = {
  student: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 3 L21 8 L12 13 L3 8 Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M5 10 V16 C5 16 8 19 12 19 C16 19 19 16 19 16 V10"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M21 8 V15"/></svg>`,
  teacher: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M8 21 H16 M12 17 V21"/><circle cx="9" cy="11" r="1.2" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="1.5" d="M13 9 H18 M13 12 H17"/></svg>`,
  about: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 11 V17"/><circle cx="12" cy="7.5" r="1.1" fill="currentColor"/></svg>`,
  a11y: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M5 9 H19 M12 9 V14 L8 21 M12 14 L16 21"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="6" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="13" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M8 6 L10 3 H14 L16 6"/></svg>`,
  stop: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`,
  challenge: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3 L14.5 9 H21 L16 13.5 L18 21 L12 17 L6 21 L8 13.5 L3 9 H9.5 Z"/></svg>`,
  repeat: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M4 12 A8 8 0 1 0 6 6"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 3 V7 H8"/></svg>`,
  download: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 4 V15"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M7 11 L12 16 L17 11"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 19 H20"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 16 V5"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M7 9 L12 4 L17 9"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 19 H20"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M4 7 H20"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M9 7 V5 H15 V7"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M7 7 V19 H17 V7"/><path fill="none" stroke="currentColor" stroke-width="1.6" d="M10 11 V16 M14 11 V16"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 3 V8 M12 16 V21 M3 12 H8 M16 12 H21"/><circle cx="12" cy="12" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`,
  hand: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M8 11 V6.5 A1.5 1.5 0 0 1 11 6.5 V11"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M11 10 V4.5 A1.5 1.5 0 0 1 14 4.5 V11"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M14 10 V5.5 A1.5 1.5 0 0 1 17 5.5 V13"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M8 12 V16 A4 4 0 0 0 16 16 V13"/></svg>`,
};

function uiIcon(name) {
  return UI_ICONS[name] || "";
}

function decorateButtonsWithIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.getAttribute("data-icon");
    if (!UI_ICONS[name]) return;
    let wrap = el.querySelector(":scope > .ui-ico");
    if (!wrap) {
      wrap = document.createElement("span");
      wrap.className = "ui-ico";
      wrap.setAttribute("aria-hidden", "true");
      el.prepend(wrap);
    }
    wrap.innerHTML = UI_ICONS[name];
  });
}
