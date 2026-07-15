# Instalar TactilIA — Android e iPhone

Paquetes generados en `native/dist/`.

## Android (listo para instalar)

Archivo: **`native/dist/TactilIA.apk`** (~1 MB)

1. Copia el APK al celular (USB, Drive, WhatsApp…).
2. En Android: permite **Instalar apps desconocidas** para ese archivo.
3. Abre `TactilIA.apk` → Instalar → Abrir.

También está `TactilIA.aab` (para Google Play) y el ZIP completo de PWABuilder (`tactilia-android.zip`) con keystore y `assetlinks.json`.

> La app Android es un *Trusted Web Activity*: abre la PWA en https://migueldevbp.github.io/tactilia-app/ (necesita internet la primera vez; luego el service worker cachea offline).

## iPhone

Apple no permite instalar un `.ipa` suelto sin cuenta de desarrollador. Opciones:

### A) Más rápido (recomendado en hackathon)

1. Abre Safari → https://migueldevbp.github.io/tactilia-app/
2. Compartir → **Añadir a pantalla de inicio**
3. Queda como app a pantalla completa.

### B) Proyecto Xcode (app nativa)

Archivo: **`native/dist/TactilIA-iOS-Xcode.zip`**

1. Descomprime y abre `ios/App/App.xcodeproj` en Xcode.
2. Elige tu Team (cuenta Apple gratuita sirve para probar en tu iPhone).
3. Conecta el iPhone → Run ▶

### C) Simulador en Mac

Archivo: **`native/dist/TactilIA-iPhone-Simulator.zip`** (contiene `App.app`)

```bash
xcrun simctl boot "iPhone 16"   # o el simulador que tengas
xcrun simctl install booted App.app
xcrun simctl launch booted pe.edu.pasco.tactilia
```

## Regenerar paquetes

```bash
# Actualizar web embebida en iOS
rsync -a --delete --exclude '.git' index.html app.js styles.css manifest.json service-worker.js icons lib media qr www/
npx cap sync ios
```

Android APK: volver a empaquetar en https://www.pwabuilder.com con la URL de GitHub Pages.
