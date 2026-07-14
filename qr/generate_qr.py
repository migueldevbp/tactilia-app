"""
generate_qr.py — Genera un código QR por cada pieza del kit TactilIA.

Cada QR codifica el texto "TACTILIA:<id-de-concepto>", donde <id-de-concepto>
debe coincidir EXACTAMENTE con la lista CONCEPTS definida en app.js.

Uso:
    pip install "qrcode[pil]"
    python3 generate_qr.py

Salida:
    ./output/<id>.png   (un PNG de 400x400 px por pieza, listo para imprimir
                          en una pegatina/etiqueta y pegar sobre cada pieza
                          impresa en 3D, o para grabar como guía en el molde).
"""

import os
import qrcode

# Debe mantenerse sincronizado con CONCEPTS en app.js
CONCEPT_IDS = [
    "letra-a", "letra-e", "letra-i", "letra-o", "letra-u",
    "numero-1", "numero-2", "numero-3", "numero-4", "numero-5",
    "figura-circulo", "figura-cuadrado", "figura-triangulo",
    "figura-estrella", "figura-corazon",
]

OUT_DIR = os.path.join(os.path.dirname(__file__), "output")
os.makedirs(OUT_DIR, exist_ok=True)

for concept_id in CONCEPT_IDS:
    payload = f"TACTILIA:{concept_id}"
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,  # tolera desgaste/rayones
        box_size=10,
        border=4,
    )
    qr.add_data(payload)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white").convert("RGB")
    img = img.resize((400, 400))
    out_path = os.path.join(OUT_DIR, f"{concept_id}.png")
    img.save(out_path)
    print(f"OK  {payload:35s} -> {out_path}")

print(f"\nListo. {len(CONCEPT_IDS)} códigos QR generados en {OUT_DIR}")
print("Imprime cada PNG en una etiqueta pequeña y pégala sobre la pieza 3D correspondiente.")
