/* TactilIA — detección de señas de mano (MediaPipe Gesture Recognizer).
   Primera carga necesita internet; luego el navegador puede cachear el modelo.
   No es lengua de señas peruana completa: reconoce gestos simples. */

const GestureHub = {
  recognizer: null,
  ready: false,
  loading: false,
  lastName: "",
  lastFire: 0,
  frame: 0,
};

async function initGestures() {
  if (GestureHub.ready || GestureHub.loading) return GestureHub.ready;
  GestureHub.loading = true;
  try {
    const mp = await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/+esm");
    const vision = await mp.FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
    );
    GestureHub.recognizer = await mp.GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
        delegate: "GPU",
      },
      runningMode: "VIDEO",
      numHands: 1,
    });
    GestureHub.ready = true;
  } catch (err) {
    console.warn("Gestos de mano no disponibles:", err);
    GestureHub.ready = false;
  } finally {
    GestureHub.loading = false;
  }
  return GestureHub.ready;
}

function pollHandGesture(videoEl) {
  if (!GestureHub.ready || !GestureHub.recognizer || !videoEl) return null;
  if (videoEl.readyState < 2) return null;
  GestureHub.frame += 1;
  if (GestureHub.frame % 3 !== 0) return null;
  try {
    const result = GestureHub.recognizer.recognizeForVideo(videoEl, performance.now());
    const top = result.gestures && result.gestures[0] && result.gestures[0][0];
    if (!top || top.score < 0.72) return null;
    if (top.categoryName === "None") return null;
    return top.categoryName;
  } catch (err) {
    return null;
  }
}

function gestureCooldownOk(ms) {
  const now = Date.now();
  if (now - GestureHub.lastFire < (ms || 1600)) return false;
  GestureHub.lastFire = now;
  return true;
}
