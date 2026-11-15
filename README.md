# GYM LOG v1.13

Aplicación web en español para GitHub Pages. Funciona sin registro ni Firebase y guarda entrenamientos y rutinas personales en el navegador.

## Instalación
Sube **el contenido del ZIP** a la raíz del repositorio de GitHub Pages conservando sus carpetas. Abre la URL de GitHub Pages y, si está instalada como PWA, cierra y vuelve a abrir para recibir la última versión. Haz antes una copia de seguridad desde Ajustes.

## Biblioteca independiente
- `data/ejercicios.xlsx`: 143 ejercicios, nombre en español, grupo muscular, imagen, ficha original y campo para GIF/vídeo. Es la fuente editable.
- `data/exercises-fallback.json`: copia de emergencia usada **solo si falla la lectura del Excel**. Tras editar el Excel válido, no necesitas cambiar la copia de emergencia.
- En la pestaña Biblioteca o Ajustes existe **Probar otro Excel**.
- Cuando reemplaces `data/ejercicios.xlsx` en GitHub, la aplicación leerá los nuevos datos sin actualizar `index.html`.
- **Pulsar el nombre o miniatura** abre una ficha con imagen y, si se ha completado la columna de vídeo, animación GIF o vídeo. También funciona en entrenamiento, rutinas e historial.
- Las imágenes y GIF enlazados a proveedores externos requieren conexión y que su URL siga funcionando. Los ejercicios de rutinas antiguas que no tienen correspondencia exacta en los 143 del catálogo se muestran con su nombre, pero sin inventar una imagen o vídeo.

## Rutinas independientes
- `data/routines.json`: seis plantillas oficiales, sin cambiar sus nombres ni series en v1.13.
- Personaliza una rutina duplicando la plantilla; las plantillas originales no se editan desde la aplicación.
- Sin PRO, la plantilla híbrida se oculta sin borrar sus datos de entrenamiento.
- Las rutinas y entrenamientos locales se conservan al actualizar, salvo que se borren los datos del sitio.

## Nueva pestaña Calculadoras
- **GET** (gasto energético total): TMB × factor de actividad (1,20; 1,37; 1,55; 1,72; 1,90).
- **TMB** (tasa metabólica basal): Mifflin-St Jeor, Harris-Benedict revisada y Katch-McArdle (% grasa corporal).
- **IMC**: peso (kg) / altura (m)². Interpretación para adultos, orientativa.
- Admite kg/cm o libras/pulgadas; los valores se calculan en el dispositivo y no se envían a servidores.
- Referencias: https://www.simplyfitness.com/es/pages/fitness-tools-calculators

## Archivo de prueba
`GYM_LOG_v1.13_prueba.html` es una demostración independiente que incluye un snapshot del Excel y de las rutinas. Puedes abrirlo desde tu navegador para comprobar el diseño. Para probar que GitHub lee un Excel editado, usa la aplicación completa publicada o **Probar otro Excel**; el HTML de prueba no lee automáticamente el archivo externo.

## Nota sobre los vídeos
Los 143 enlaces de imagen se mantienen en el Excel; **la columna de vídeos todavía está vacía**. La ficha se abrirá siempre, pero mostrará «Vídeo pendiente» hasta que se completen los enlaces. No se asignan GIF por similitud de nombres.
