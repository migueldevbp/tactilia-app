"""
generate_qr.py — Genera un código QR por cada pieza del kit TactilIA.

Cada QR codifica "TACTILIA:<id>" y debe coincidir con CONCEPTS en app.js.

Uso:
    pip install "qrcode[pil]"
    python3 generate_qr.py
"""

import os
import qrcode
import string

# Letras A–Z + Ñ (id: letra-enie)
LETTERS = [f"letra-{c}" for c in string.ascii_lowercase] + ["letra-enie"]

NUMBERS = [f"numero-{n}" for n in range(0, 10)]

FIGURES = [
    "figura-circulo", "figura-cuadrado", "figura-triangulo",
    "figura-estrella", "figura-corazon",
]

SIGNS = [
    "signo-mas", "signo-menos", "signo-igual", "signo-por",
    "signo-dividir", "signo-punto", "signo-coma",
    "signo-interrogacion", "signo-exclamacion", "signo-porcentaje",
]

EMOTIONS = [
    "emocion-alegre", "emocion-triste", "emocion-enojo",
    "emocion-miedo", "emocion-calma",
]

ROUTINES = [
    "rutina-lavarse", "rutina-comer", "rutina-dormir",
    "rutina-escuela", "rutina-jugar",
]

CONCEPT_IDS = LETTERS + NUMBERS + FIGURES + SIGNS + EMOTIONS + ROUTINES

OUT_DIR = os.path.join(os.path.dirname(__file__), "output")
os.makedirs(OUT_DIR, exist_ok=True)

for concept_id in CONCEPT_IDS:
    payload = f"TACTILIA:{concept_id}"
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(payload)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white").convert("RGB")
    img = img.resize((400, 400))
    out_path = os.path.join(OUT_DIR, f"{concept_id}.png")
    img.save(out_path)
    print(f"OK  {payload:40s} -> {out_path}")

print(f"\nListo. {len(CONCEPT_IDS)} códigos QR generados en {OUT_DIR}")
print("Pega cada PNG en la pieza 3D con el mismo id.")
