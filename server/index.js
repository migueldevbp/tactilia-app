/**
 * TactilIA — backend mínimo
 * POST /api/recommend  →  recomendación pedagógica vía Claude
 *
 * La ANTHROPIC_API_KEY vive SOLO aquí (archivo .env). Nunca en app.js.
 *
 * Uso:
 *   cd server && cp .env.example .env   # pega tu clave
 *   npm install && npm start
 *   # API en http://localhost:8787/api/recommend
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = Number(process.env.PORT) || 8787;
const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001";
const API_KEY = process.env.ANTHROPIC_API_KEY;

app.use(cors({ origin: true }));
app.use(express.json({ limit: "256kb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, hasKey: Boolean(API_KEY && !API_KEY.includes("...")) });
});

/**
 * Resume el historial de logs para no gastar tokens ni enviar PII de más.
 * Espera: [{ student, conceptId, targetId, correct, ts }, ...]
 */
function summarizeLogs(logs) {
  if (!Array.isArray(logs) || logs.length === 0) {
    return { total: 0, note: "Sin registros de práctica." };
  }

  const byStudent = {};
  const byConcept = {};
  const byType = {};

  for (const log of logs.slice(-200)) {
    const student = String(log.student || "sin-nombre").slice(0, 40);
    const conceptId = String(log.conceptId || "?");
    const type = conceptId.split("-")[0] || "otro";

    if (!byStudent[student]) byStudent[student] = { attempts: 0, correct: 0 };
    byStudent[student].attempts++;
    if (log.correct) byStudent[student].correct++;

    if (!byConcept[conceptId]) byConcept[conceptId] = { attempts: 0, correct: 0 };
    byConcept[conceptId].attempts++;
    if (log.correct) byConcept[conceptId].correct++;

    if (!byType[type]) byType[type] = { attempts: 0, correct: 0 };
    byType[type].attempts++;
    if (log.correct) byType[type].correct++;
  }

  return {
    total: logs.length,
    sampleWindow: Math.min(logs.length, 200),
    byStudent,
    byConcept,
    byType,
  };
}

function buildPrompt(summary) {
  return `Eres un asesor pedagógico de Educación Básica Especial (EBE) en Perú,
con experiencia en discapacidad visual, auditiva e intelectual, y en aulas
rurales con kit manipulable (letras, números, figuras, emociones, rutinas).

A partir de este resumen de práctica de la app TactilIA (piezas 3D + QR),
escribe UNA recomendación breve (máximo 120 palabras) en español, dirigida
al docente, accionable para la próxima sesión de 5–10 minutos.
No uses markdown ni listas largas; 2–4 oraciones concretas.
Si hay pocos datos, sugiere cómo iniciar la exploración.

DATOS:
${JSON.stringify(summary, null, 2)}`;
}

app.post("/api/recommend", async (req, res) => {
  if (!API_KEY || API_KEY.includes("...")) {
    return res.status(503).json({
      error: "ANTHROPIC_API_KEY no configurada en el servidor.",
    });
  }

  const logs = req.body?.logs;
  const summary = summarizeLogs(logs);

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 300,
        messages: [{ role: "user", content: buildPrompt(summary) }],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Anthropic error:", response.status, detail);
      return res.status(502).json({
        error: "La API de Claude no respondió correctamente.",
        status: response.status,
      });
    }

    const data = await response.json();
    const recommendation = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    if (!recommendation) {
      return res.status(502).json({ error: "Respuesta vacía de Claude." });
    }

    res.json({ recommendation, source: "claude" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno al consultar Claude." });
  }
});

app.listen(PORT, () => {
  console.log(`TactilIA API en http://localhost:${PORT}`);
  console.log(`POST /api/recommend  |  GET /health`);
  if (!API_KEY || API_KEY.includes("...")) {
    console.warn("⚠  Falta ANTHROPIC_API_KEY en server/.env — el endpoint devolverá 503.");
  }
});
