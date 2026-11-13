# GYM LOG v1.11

Aplicación web de seguimiento de rutinas y entrenamientos. Los datos se guardan localmente en el navegador.

## Cambios de v1.11
- Rutinas oficiales reconstruidas a partir de las especificaciones originales: nombres, días, ejercicios, orden, series y repeticiones independientes de la biblioteca.
- Rutina híbrida marcada como exclusiva de GYM LOG PRO. Al desactivar PRO se oculta, sin borrar la rutina ni el historial.
- Selector «Cambiar ejercicio» con filtro por grupo muscular y búsqueda por nombre; muestra también el equipamiento.
- Catálogo de referencia en castellano conectado a ExerciseGymGifsDB (1.323 ejercicios declarados por el proyecto), sin copiar los GIF al paquete. Los nombres originales de las rutinas no se sustituyen por los del catálogo.
- Iconos de instalación propios (192, 512 y maskable), icono Apple y favicon.
- Manifest y service worker para instalación y caché de la aplicación en navegadores compatibles.
- Migración de plantillas: se desactivan las plantillas preseleccionadas para que Inicio no fije ninguna automáticamente.

## Archivos
- `index.html`: aplicación.
- `data/routines.json`: rutinas oficiales editables.
- `config/pro-config.json`: contraseña local de GYM LOG PRO.
- `manifest.webmanifest`, `sw.js` e iconos: instalación PWA.
- `GYM_LOG_v1.11_prueba.html`: versión independiente de prueba incluida en el ZIP.

## Instalación
Publica el contenido del ZIP en GitHub Pages o en un servidor HTTPS. Abre la web desde Chrome/Edge en Android y usa «Instalar aplicación» o «Añadir a pantalla de inicio». En iPhone/iPad, usa Compartir > Añadir a pantalla de inicio. La instalación PWA necesita HTTPS; abrir el HTML de prueba como archivo local no instala la PWA.

## Biblioteca y medios
La biblioteca utiliza metadatos en español de `JahelCuadrado/ExerciseGymGifsDB`, consultados desde su CDN público. Los GIF/demostraciones se enlazan externamente y no se copian dentro del paquete. El propio repositorio advierte que no posee los derechos de autor de esos medios; por tanto, la app no redistribuye dichos archivos.

## Privacidad y datos
No hay cuenta ni sincronización automática. Borrar los datos del navegador puede eliminar los registros. Exporta copias de seguridad periódicas.
