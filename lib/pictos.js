/* Pictogramas escolares (SVG) — sin emoji ni assets de IA.
   Trazo simple tipo pizarra / cuaderno, offline. */
const PICTOS = {
  "letra-a": letterPicto("A"),
  "letra-e": letterPicto("E"),
  "letra-i": letterPicto("I"),
  "letra-o": letterPicto("O"),
  "letra-u": letterPicto("U"),
  "numero-1": letterPicto("1"),
  "numero-2": letterPicto("2"),
  "numero-3": letterPicto("3"),
  "numero-4": letterPicto("4"),
  "numero-5": letterPicto("5"),
  "figura-circulo": `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="32" cy="32" r="4" fill="currentColor"/></svg>`,
  "figura-cuadrado": `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="14" width="36" height="36" rx="3" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
  "figura-triangulo": `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 12 L54 50 H10 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>`,
  "figura-estrella": `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 10 L38 26 H54 L41 36 L46 52 L32 42 L18 52 L23 36 L10 26 H26 Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
  "figura-corazon": `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 52 C32 52 10 38 10 24 C10 16 16 12 22 12 C27 12 30 15 32 18 C34 15 37 12 42 12 C48 12 54 16 54 24 C54 38 32 52 32 52 Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
  "emocion-alegre": `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="3.5"/><circle cx="24" cy="28" r="3" fill="currentColor"/><circle cx="40" cy="28" r="3" fill="currentColor"/><path d="M22 38 Q32 48 42 38" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  "emocion-triste": `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="3.5"/><circle cx="24" cy="28" r="3" fill="currentColor"/><circle cx="40" cy="28" r="3" fill="currentColor"/><path d="M22 44 Q32 34 42 44" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  "emocion-enojo": `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M18 24 L28 28 M46 24 L36 28" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="24" cy="32" r="3" fill="currentColor"/><circle cx="40" cy="32" r="3" fill="currentColor"/><path d="M24 44 L40 44" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  "emocion-miedo": `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="3.5"/><ellipse cx="24" cy="28" rx="4" ry="5" fill="currentColor"/><ellipse cx="40" cy="28" rx="4" ry="5" fill="currentColor"/><ellipse cx="32" cy="44" rx="6" ry="5" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
  "emocion-calma": `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M22 28 Q24 26 26 28 M38 28 Q40 26 42 28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M24 40 Q32 44 40 40" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  "rutina-lavarse": `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M20 38 Q24 20 32 18 Q40 20 44 38" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><path d="M18 42 H46" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><path d="M26 28 Q28 24 30 28 M34 28 Q36 24 38 28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="32" cy="48" r="3" fill="currentColor"/></svg>`,
  "rutina-comer": `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="16" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M18 18 V28 M22 18 V28 M26 18 V28 M38 16 V30 M42 20 H46" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  "rutina-dormir": `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 42 H52 V48 H12 Z" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M16 42 V30 Q24 22 32 30 V42" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M40 18 L46 24 M44 16 L50 22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  "rutina-escuela": `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 28 L32 14 L56 28 L32 42 Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/><path d="M16 34 V48 H48 V34" fill="none" stroke="currentColor" stroke-width="3.5"/><path d="M56 28 V46" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  "rutina-jugar": `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="14" width="36" height="36" rx="6" fill="none" stroke="currentColor" stroke-width="3.5"/><circle cx="24" cy="24" r="3" fill="currentColor"/><circle cx="40" cy="24" r="3" fill="currentColor"/><circle cx="24" cy="40" r="3" fill="currentColor"/><circle cx="40" cy="40" r="3" fill="currentColor"/><circle cx="32" cy="32" r="3" fill="currentColor"/></svg>`,
};

function letterPicto(ch) {
  return `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="8" width="48" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="3"/><text x="32" y="42" text-anchor="middle" font-size="28" font-family="Segoe UI, system-ui, sans-serif" font-weight="800" fill="currentColor">${ch}</text></svg>`;
}

function pictoMarkup(conceptId) {
  if (PICTOS[conceptId]) return PICTOS[conceptId];
  if (conceptId === "letra-enie") return letterPicto("Ñ");
  if (conceptId.startsWith("letra-")) {
    return letterPicto(conceptId.slice(6).toUpperCase());
  }
  if (conceptId.startsWith("numero-")) {
    return letterPicto(conceptId.slice(7));
  }
  if (conceptId.startsWith("signo-")) {
    const map = {
      "signo-mas": "+", "signo-menos": "−", "signo-igual": "=",
      "signo-por": "×", "signo-dividir": "÷", "signo-punto": ".",
      "signo-coma": ",", "signo-interrogacion": "?", "signo-exclamacion": "!",
      "signo-porcentaje": "%",
    };
    return letterPicto(map[conceptId] || "?");
  }
  return letterPicto("?");
}

/** Dibujo del pictograma en canvas (RA) — geometría simple, sin emoji. */
function drawPictoOnCanvas(ctx, concept, cx, cy, size) {
  const s = size || 34;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = "#ffffff";
  ctx.fillStyle = "#ffffff";
  ctx.lineWidth = Math.max(2, s / 12);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (concept.type === "letra" || concept.type === "numero") {
    ctx.font = `800 ${s}px "Segoe UI", system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(concept.glyph || concept.icon || "?", 0, 1);
    ctx.restore();
    return;
  }

  const r = s * 0.48;
  if (concept.id === "figura-circulo") {
    ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
  } else if (concept.id === "figura-cuadrado") {
    ctx.strokeRect(-r, -r, r * 2, r * 2);
  } else if (concept.id === "figura-triangulo") {
    ctx.beginPath();
    ctx.moveTo(0, -r); ctx.lineTo(r, r); ctx.lineTo(-r, r); ctx.closePath(); ctx.stroke();
  } else if (concept.id === "figura-estrella") {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
      const a2 = a + Math.PI / 5;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      ctx.lineTo(Math.cos(a2) * r * 0.45, Math.sin(a2) * r * 0.45);
    }
    ctx.closePath(); ctx.stroke();
  } else if (concept.id === "figura-corazon") {
    ctx.beginPath();
    ctx.moveTo(0, r * 0.7);
    ctx.bezierCurveTo(-r, r * 0.1, -r, -r * 0.5, 0, -r * 0.2);
    ctx.bezierCurveTo(r, -r * 0.5, r, r * 0.1, 0, r * 0.7);
    ctx.stroke();
  } else if (concept.type === "emocion") {
    ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(-r * 0.35, -r * 0.15, r * 0.12, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(r * 0.35, -r * 0.15, r * 0.12, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath();
    if (concept.id === "emocion-alegre") ctx.arc(0, r * 0.15, r * 0.45, 0.15 * Math.PI, 0.85 * Math.PI);
    else if (concept.id === "emocion-triste") ctx.arc(0, r * 0.55, r * 0.4, 1.15 * Math.PI, 1.85 * Math.PI);
    else if (concept.id === "emocion-enojo") { ctx.moveTo(-r * 0.4, r * 0.35); ctx.lineTo(r * 0.4, r * 0.35); }
    else if (concept.id === "emocion-miedo") { ctx.ellipse(0, r * 0.35, r * 0.22, r * 0.18, 0, 0, Math.PI * 2); }
    else ctx.arc(0, r * 0.2, r * 0.4, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();
  } else if (concept.type === "signo") {
    ctx.font = `800 ${s}px "Segoe UI", system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(concept.glyph || "?", 0, 1);
  } else if (concept.type === "rutina") {
    // pictograma genérico de “actividad”: cuadro + marca
    ctx.strokeRect(-r * 0.7, -r * 0.7, r * 1.4, r * 1.4);
    ctx.beginPath();
    ctx.moveTo(-r * 0.3, 0); ctx.lineTo(-r * 0.05, r * 0.3); ctx.lineTo(r * 0.4, -r * 0.35);
    ctx.stroke();
  }
  ctx.restore();
}
