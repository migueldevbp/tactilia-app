# Backend de recomendaciones (Claude)

Endpoint único para que el panel docente genere sugerencias pedagógicas
con IA de verdad. La clave de Anthropic **nunca** va en el cliente.

## Arranque local

```bash
cd server
cp .env.example .env
# Edita .env y pega ANTHROPIC_API_KEY=sk-ant-...
npm install
npm start
```

Queda en `http://localhost:8787`.

## Conectar la PWA

1. Sirve la app estática en otro puerto (ej. `python3 -m http.server 8080`).
2. En la consola del navegador (o en `app.js`), asegúrate de que
   `AI_API_URL` apunte a `http://localhost:8787/api/recommend`.
3. En el panel Docente → **Generar recomendación**.

Sin backend o sin internet, la app usa automáticamente
`generateLocalRecommendation()` (heurística offline).

## Producción (opciones)

- Despliega solo esta carpeta `server/` en Railway, Render o un VPS.
- O convierte `index.js` en una Vercel Function / Cloudflare Worker
  (mismo handler POST, misma llamada a `api.anthropic.com`).
- Configura CORS si la PWA está en otro dominio (ya habilitado con
  `cors({ origin: true })` para el piloto).

## Contrato

`POST /api/recommend`

```json
{ "logs": [{ "student": "...", "conceptId": "...", "targetId": null, "correct": true, "ts": "..." }] }
```

Respuesta:

```json
{ "recommendation": "texto...", "source": "claude" }
```
