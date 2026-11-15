# Datos editables de GYM LOG v1.14

## EJERCICIOS.xlsx

Hoja `EJERCICIOS`, con **235** fichas. Columnas:

A. ID (estable, p. ej. `excel-142`)
B. Número de orden
C. Grupo muscular
D. Nombre español **literal** del ejercicio
E. Equipamiento
F. Imagen inicial (URL HTTPS)
G. Imagen final u otra posición (URL HTTPS)
H. Vídeo / GIF (URL HTTPS; sin rellenar cuando no existe un vídeo autorizado)
I. Alias (separados por el carácter `|`)
J. Instrucciones
K. Fuente y condiciones de licencia
L. Estado de revisión
M. Notas

La app reconoce este esquema y el del Excel de las versiones antiguas. El archivo es editable sin modificar el código de la app. **No cambies los identificadores existentes.**

No se incluye la URL de la ficha de Simply Fitness. Algunas imágenes heredadas enlazan directamente a recursos externos sin licencia comercial comprobada: revisar antes de monetizar/distribuir imágenes.

## RUTINAS.json

Seis plantillas protegidas. `name` es el nombre **exacto** de ejercicio de la rutina; `catalogName` y `referenceExerciseId` sirven para relacionarlo con el catálogo. No cambies `id` de plantillas o sesiones antiguas si quieres preservar la asociación con el historial local.

- Plan de entrenamiento — 5 días: 5 días, 29 posiciones.
- TABLA DE ENTRENAMIENTO: 5 días, 29 posiciones.
- Full Body de 2 días: 2 días, 16 posiciones.
- Hipertrofia de 5 días: 5 días, 24 posiciones.
- Push Pull Legs de 3 días: 3 días, 19 posiciones.
- Rutina híbrida — 5 días: 5 días, 37 posiciones; `proOnly:true`.

Los ejercicios sin esquema indicado en el PDF se guardan con `sets:0`, `reps:""`; el usuario puede añadir series durante la sesión. La rutina híbrida contiene dos ejercicios finales (bíceps y tríceps) con su elección de movimiento todavía pendiente.

## exercises-fallback.json

Instantánea del catálogo utilizada solamente cuando la carga del Excel falla. Se entrega sincronizada con esta publicación; si editas el Excel tendrás que sincronizar el fallback para mantener esa protección.
