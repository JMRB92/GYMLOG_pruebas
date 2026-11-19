# GYM LOG v1.18

Aplicación web para GitHub Pages. La aplicación guarda los datos en el navegador del dispositivo; descarga una copia desde **Ajustes** antes de actualizar.

## Publicación

Subir todo el contenido del ZIP a la raíz del repositorio (incluyendo `assets/exercises`, `config` y `data`). No subir la carpeta contenedora. Tras publicar, recargar la web y, si procede, forzar la actualización de la aplicación instalada.

## Archivos de mantenimiento

- `data/routines.json`: tres rutinas oficiales (la rutina GYM LOG de hipertrofia solo con PRO).
- `data/ejercicios.xlsx`: catálogo de ejercicios.
- `data/exercises-fallback.json`: copia para recuperación y vista HTML autónoma.
- `config/pro-config.json`: configuración de desbloqueo local.
- `assets/exercises/`: ilustraciones propias, integradas en la vista HTML independiente.

La actualización mantiene las rutinas personalizadas y el historial del usuario; solo retira las plantillas oficiales ya descartadas. Los gráficos, las calculadoras y el registro de series permanecen.

Algunas imágenes de otros ejercicios enlazan a sus fuentes online. Cuando no pueden cargarse, la interfaz muestra un mensaje sencillo. Imágenes de RepDB gratuitas para uso en apps con atribución visible. El código fuente de la aplicación y las fuentes de las imágenes conservan sus propias condiciones de uso.


### Enlaces y recursos audiovisuales

Las demostraciones se abren en la página de su fuente. Las fotos incorporadas desde Free Exercise DB se enlazan a su origen, se identifican en la ficha y están pendientes de comprobar los derechos de cada fotografía antes de una publicación abierta. RepDB conserva sus propias condiciones y atribución.

## Comprobaciones de la versión

Consulta `REVISION_v1.18.md` para ver las pruebas, los casos límite y los pendientes del catálogo.
