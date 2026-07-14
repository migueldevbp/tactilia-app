# Validación lingüística — Quechua (Pasco / EIB)

**Propósito:** revisar cada frase en quechua del prototipo TactilIA · Makiwan Yachay
antes de un uso oficial en aula. El vocabulario actual es una **primera aproximación**.

**Revisor sugerido:** especialista en Educación Intercultural Bilingüe (EIB) o
hablante nativo de la variedad de quechua usada en Pasco (indicar variedad).

| Campo | Valor |
|-------|--------|
| Fecha de revisión | _______________ |
| Nombre del revisor | _______________ |
| Variedad / zona | _______________ (ej. Quechua Central — Pasco) |
| Contacto | _______________ |

**Cómo marcar:**

- ✅ Aprobado tal cual
- ✏️ Corregir (anotar la forma sugerida)
- ❌ Rechazar / no usar en esta variedad
- ❓ Duda / necesita consulta comunitaria

---

## 1. Interfaz (diccionario `I18N.qu` en `app.js`)

| Clave | Texto actual (QU) | Estado | Corrección sugerida / notas |
|-------|-------------------|--------|-----------------------------|
| tabEstudiante | Yachaqaq | ☐ | |
| tabDocente | Yachachiq | ☐ | |
| tabAcerca | Kaymanta | ☐ | |
| a11yTitle | ⚙ Runa yanapay | ☐ | |
| a11yContrast | Sinchi rikch'ay | ☐ | |
| a11yVibration | Kuyuchiy allin kaqtin | ☐ | |
| a11yTextSize | Qillqa hatunchay | ☐ | |
| activeStudent | Kunan yachaqaq | ☐ | |
| newStudent | + Musuq | ☐ | |
| exerciseMode | Yachay pukllay | ☐ | |
| exercisePrompt | "Musuq atipanakuy" nisqata ñitiy qallariy | ☐ | |
| newChallenge | 🎯 Musuq atipanakuy | ☐ | |
| repeat | 🔊 Kutichiy | ☐ | |
| scanPiece | Rikuchiy (Realidad Aumentada) | ☐ | |
| startCamera | 📷 Kamarata qallariy | ☐ | |
| stopCamera | ⏹ Sayachiy | ☐ | |
| cameraOff | Kamara sayasqa. | ☐ | |
| cameraOn | Kamara kachkan. Riqsichiyta qhaway. | ☐ | |
| findPiece | Maskay: {label} | ☐ | |
| sayFind | Maskay {label} | ☐ | |
| correct | ¡Allin! Sumaqta ruwanki 🎉 | ☐ | |
| almost | Sichuslla. Maskasharqanki: {label} | ☐ | |
| sayCorrect | ¡Allin! {say} | ☐ | |
| sayWrong | Chayqa {label}. Maskayta qatiy {target}. | ☐ | |
| freeMode | Kikillanmanta rikuy | ☐ | |
| notRecognized | Manam riqsisqachu | ☐ | |
| setLabel | Impay kit | ☐ | *(si se agregó sets temáticos)* |
| setBasico | Letras · yupay · rikch'akuna | ☐ | |
| setEmociones | Sunquykuna | ☐ | |
| setRutinas | Sapa p'unchaw | ☐ | |
| setTodos | Llapan | ☐ | |

## 2. Nombre del proyecto

| Texto | Estado | Corrección / notas |
|-------|--------|---------------------|
| Makiwan Yachay (“aprendizaje con las manos”) | ☐ | |
| ¿Es natural en la variedad de Pasco? | ☐ | |

## 3. Conceptos — set básico (`CONCEPTS` en `app.js`)

| id | label_qu | say_qu | Estado | Corrección sugerida |
|----|----------|--------|--------|---------------------|
| letra-a | Letra A | Kayqa letra A, allqu hina (allqu = perro). | ☐ | |
| letra-e | Letra E | Kayqa letra E. | ☐ | |
| letra-i | Letra I | Kayqa letra I, inti hina (inti = sol). | ☐ | |
| letra-o | Letra O | Kayqa letra O. | ☐ | |
| letra-u | Letra U | Kayqa letra U, urpi hina (urpi = paloma). | ☐ | |
| numero-1 | Huk | Huk. | ☐ | |
| numero-2 | Iskay | Iskay. | ☐ | |
| numero-3 | Kimsa | Kimsa. | ☐ | |
| numero-4 | Tawa | Tawa. | ☐ | |
| numero-5 | Pichqa | Pichqa. | ☐ | |
| figura-circulo | Muyu | Kayqa muyu. | ☐ | |
| figura-cuadrado | Tawa kuchu | Kayqa tawa kuchu (tawa kuchuyuq). | ☐ | |
| figura-triangulo | Kimsa kuchu | Kayqa kimsa kuchu. | ☐ | |
| figura-estrella | Ch'aska | Kayqa ch'aska. | ☐ | |
| figura-corazon | Sonqo | Kayqa sonqo. | ☐ | |

### Notas sobre letras (a·e·i·o·u)

El quechua tradicional usa tres vocales (a, i, u). Por eso las vocales **e** y **o**
permanecen como “letra E/O” en español dentro de una frase portadora. Indique si
prefiere otro enfoque pedagógico:

- ☐ Mantener nombre de letra en español + frase en quechua
- ☐ Solo presentar letras a·i·u en quechua y dejar e·o en español
- ☐ Otra estrategia: _________________________________

## 4. Conceptos — set emociones (si aplica)

| id | label_qu | say_qu | Estado | Corrección |
|----|----------|--------|--------|------------|
| emocion-alegre | Kusisqa | Kayqa kusisqa. | ☐ | |
| emocion-triste | Llakisqa | Kayqa llakisqa. | ☐ | |
| emocion-enojo | Phiña | Kayqa phiña. | ☐ | |
| emocion-miedo | Manchakuq | Kayqa manchakuq. | ☐ | |
| emocion-calma | Thak | Kayqa thak / allin kawsay. | ☐ | |

## 5. Conceptos — set rutinas (si aplica)

| id | label_qu | say_qu | Estado | Corrección |
|----|----------|--------|--------|------------|
| rutina-lavarse | Maqllikuy | Maqllikuy (makikunata / uyata). | ☐ | |
| rutina-comer | Mikuy | Mikuy. | ☐ | |
| rutina-dormir | Puñuy | Puñuy. | ☐ | |
| rutina-escuela | Yachay wasi | Yachay wasiman riy. | ☐ | |
| rutina-jugar | Pukllay | Pukllay. | ☐ | |

## 6. Comentarios generales del revisor

```
(Espacio libre para observaciones sobre registro formal/informal,
adecuación a niños/as de EBE, pictogramas, etc.)




```

## 7. Decisión

- ☐ Aprobado para piloto con estos textos
- ☐ Aprobado solo tras aplicar las correcciones marcadas ✏️
- ☐ No usar quechua en exposición pública hasta nueva revisión

**Firma / conformidad:** _______________________  **Fecha:** ___________
