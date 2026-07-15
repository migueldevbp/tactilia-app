/* Braille español (grado 1) — patrones Unicode para enseñar / mostrar.
   La pieza física puede llevar relieve; la app identifica vía QR y enseña
   el patrón correspondiente (no OCR del relieve). */

const BRAILLE_LETTER = {
  a: "⠁", b: "⠃", c: "⠉", d: "⠙", e: "⠑", f: "⠋", g: "⠛", h: "⠓",
  i: "⠊", j: "⠚", k: "⠅", l: "⠇", m: "⠍", n: "⠝", o: "⠕", p: "⠏",
  q: "⠟", r: "⠗", s: "⠎", t: "⠞", u: "⠥", v: "⠧", w: "⠺", x: "⠭",
  y: "⠽", z: "⠵", ñ: "⠻",
};

const BRAILLE_DIGIT = {
  "1": "⠁", "2": "⠃", "3": "⠉", "4": "⠙", "5": "⠑",
  "6": "⠋", "7": "⠛", "8": "⠓", "9": "⠊", "0": "⠚",
};
const BRAILLE_NUM_PREFIX = "⠼";

const BRAILLE_SIGN = {
  "signo-mas": "⠐⠖",
  "signo-menos": "⠤",
  "signo-igual": "⠐⠶",
  "signo-por": "⠐⠦",
  "signo-dividir": "⠐⠌",
  "signo-punto": "⠲",
  "signo-coma": "⠂",
  "signo-interrogacion": "⠢",
  "signo-exclamacion": "⠖",
  "signo-porcentaje": "⠨⠴",
};

/** @returns {{ cells: string, label: string, spoken: string } | null} */
function brailleForConcept(concept) {
  if (!concept) return null;
  if (concept.set === "letras" || concept.type === "letra") {
    const ch = (concept.glyph || concept.label || "").toLowerCase().replace("ñ", "ñ");
    const key = ch === "ñ" ? "ñ" : ch.charAt(0);
    const cell = BRAILLE_LETTER[key];
    if (!cell) return null;
    return {
      cells: cell,
      label: `Braille: ${cell}`,
      spoken: `En braille, la letra ${concept.label} es el signo que sientes debajo de la pieza.`,
      spoken_qu: `Braillepi, ${concept.label_qu || concept.label} qillqa uraypi kachkan.`,
    };
  }
  if (concept.set === "numeros" || concept.type === "numero") {
    const d = String(concept.glyph ?? concept.label ?? "").replace(/\D/g, "").charAt(0);
    const cell = BRAILLE_DIGIT[d];
    if (!cell) return null;
    const cells = BRAILLE_NUM_PREFIX + cell;
    return {
      cells,
      label: `Braille: ${cells}`,
      spoken: `En braille, el número ${d} se escribe con el prefijo numérico y luego el signo. Puntos debajo de la pieza.`,
      spoken_qu: `Braillepi, ${d} yupay qillqa uraypi kachkan.`,
    };
  }
  if (concept.set === "signos" || concept.type === "signo") {
    const cells = BRAILLE_SIGN[concept.id];
    if (!cells) return null;
    return {
      cells,
      label: `Braille: ${cells}`,
      spoken: `En braille, el signo ${concept.label} tiene este patrón bajo la pieza.`,
      spoken_qu: `Braillepi, ${concept.label_qu || concept.label} unancha uraypi.`,
    };
  }
  return null;
}

function brailleMarkup(concept) {
  const info = brailleForConcept(concept);
  if (!info) return "";
  return `<span class="braille-block" aria-label="${info.label}"><span class="braille-cells">${info.cells}</span><span class="braille-caption">Braille</span></span>`;
}

function brailleSpoken(concept) {
  const info = brailleForConcept(concept);
  if (!info) return "";
  return (typeof LANG !== "undefined" && LANG === "qu") ? info.spoken_qu : info.spoken;
}
