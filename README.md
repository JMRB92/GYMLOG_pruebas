# GYM LOG Web · v1.10

Aplicación web de entrenamiento en español. Mantiene el diseño negro, rojo y amarillo y las funciones existentes de registro de rutinas y entrenamientos. No requiere cuenta ni servidor de datos: la información del usuario se guarda en el almacenamiento local del navegador.

## Funciones

- Las cuatro rutinas predefinidas originales, más las dos rutinas DobleJotaGym. Las plantillas están protegidas y se pueden consultar o duplicar.
- Rutinas personales: creación prioritaria desde texto, previsualización y corrección de días/ejercicios, además de editor manual.
- Importación y exportación de rutinas, compartir una rutina, duplicar, activar/desactivar y eliminar rutinas personales.
- Biblioteca de referencia externa de 317 ejercicios, con nombres de ejercicios, músculos, grupos, subgrupos y material en castellano; correspondencias para las seis rutinas y enlaces a vídeos. La primera carga requiere conexión y después se cachea en el dispositivo.
- Entrenamiento: series, peso, repeticiones/tiempo, notas, añadir/quitar series y ejercicios, cambiar ejercicio en ventana independiente, reordenar con flechas, guardar y reanudar sesiones.
- Progreso: gráfica de carga en kilogramos (X), con marcas cada 5 kg, y repeticiones de 1 a 20 (Y), con datos reales y estimaciones diferenciadas.
- Descanso inicial de 120 segundos; conserva preferencias manuales.
- Publicidad QR de Instagram al iniciar el entrenamiento; se elimina al activar GYM LOG PRO.
- Aviso de privacidad breve y opción de volver a mostrarlo desde Ajustes.
- Historial, calendario, copias de seguridad, restauración y exportación.

## Publicar en GitHub Pages

1. Descarga una copia de seguridad de la versión actual desde Ajustes.
2. Descomprime este ZIP.
3. Sube todo el contenido de la carpeta a la raíz del repositorio `JMRB92/GYMLOG`, de modo que `index.html`, `data/`, `config/` y las imágenes queden en la raíz.
4. Espera a que termine GitHub Pages y abre https://jmrb92.github.io/GYMLOG/.

No subas copias de seguridad personales al repositorio público.

## Datos y privacidad

Los datos de usuario se guardan en `localStorage`. No hay cuenta ni sincronización automática entre dispositivos. Borrar los datos del sitio o del navegador puede eliminar rutinas e historial; descarga copias de seguridad periódicas.

GYM LOG PRO utiliza una contraseña local configurable en `config/pro-config.json`. Es un desbloqueo local sencillo, no una protección de seguridad: los archivos de una web estática son públicos y pueden inspeccionarse.

Los vídeos se abren desde el alojamiento externo de referencia; no se descargan ni se redistribuyen dentro de este paquete. La licencia del código/metadatos no implica por sí sola derechos sobre los vídeos.

No se incorpora service worker; no se garantiza funcionamiento sin conexión ni alarmas con el navegador cerrado.

## Prueba local

Para probar la aplicación completa, sirve la carpeta con un servidor estático (por ejemplo, `python -m http.server 8000`) y abre `http://localhost:8000`. El HTML independiente permite probar la interfaz y guarda sus datos separados de la URL publicada; la carga de la biblioteca externa puede depender de las restricciones de origen del navegador.

## Versión

La numeración se mantiene en **v1.10**.


## Base española de ejercicios

La biblioteca de referencia consulta ExerciseGymGifsDB (JahelCuadrado), usando su API en español para nombres, grupos musculares y demostraciones GIF: https://github.com/JahelCuadrado/ExerciseGymGifsDB . Los nombres de las dos rutinas DobleJotaGym se mantienen literalmente desde los PDF proporcionados; la base externa solo alimenta la biblioteca general.
