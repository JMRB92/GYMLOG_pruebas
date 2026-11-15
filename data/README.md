# GYM LOG v1.12 — Datos independientes

## Catálogo Excel: `data/ejercicios.xlsx`

La aplicación abre automáticamente **la primera hoja**, `CATÁLOGO 143`, del Excel al iniciarse en GitHub Pages.

- **A**: Nº/ID (mantener estable para conservar asociaciones y progresos).
- **B**: Grupo muscular.
- **C**: Ejercicio, nombre visible **literal**, sin traducciones ni renombrados automáticos.
- **D**: URL directa de la imagen de Simply Fitness.
- **E**: URL de ficha de Simply Fitness.
- **F**: URL directa del GIF/vídeo. Ahora sigue vacía porque su asignación está pendiente de comprobación.
- **G**: Revisión de imagen (CORRECTA, INCORRECTA, DUDOSA, etc.).
- **H**: Enlace de imagen corregida, si corresponde (tiene prioridad sobre D).
- **I / J**: Notas y aviso de revisión; no cambian nombres ni vídeos.

**Editar catálogo:** descarga `data/ejercicios.xlsx`, modifica las filas, guarda el archivo `.xlsx` y sustituye únicamente ese mismo archivo en GitHub, manteniendo la ruta. Al abrir o recargar la app se lee la versión actualizada. No es necesario tocar `index.html`, el manifest ni reinstalar la PWA. La app no modifica el Excel que está en GitHub desde el teléfono. Si introduces un nuevo ejercicio, dale un ID nuevo en A. El navegador necesita conexión para acceder a imágenes externas.

En «Biblioteca» y «Ajustes» existe «Probar otro Excel» para ver un archivo local sin publicarlo (solo hasta recargar la página). La copia alternativa `data/exercises-fallback.json` sirve para navegadores que no admiten descompresión XLSX o si el Excel está temporalmente inaccesible. Si se utiliza la copia alternativa se avisa en la aplicación; para mantenerla sincronizada en navegadores antiguos, hay que regenerarla manualmente.

Los ejercicios personalizados no desaparecen y permanecen en el almacenamiento de ese dispositivo. Las rutinas e historial anteriores conservan sus nombres.

## Rutinas: `data/routines.json`

Las **seis rutinas oficiales** se cargan exclusivamente desde este archivo JSON. Edita el nombre, los días, los ejercicios y las series/repeticiones aquí sin tocar el código. Mantén `id` y `name` de cada rutina existente si no quieres duplicarla al actualizar. `proOnly: true` mantiene la rutina híbrida oculta para usuarios sin PRO y conserva todo el progreso. La aplicación nunca modifica las rutinas personales al actualizar las plantillas.

**Publicación:** sube solamente `data/routines.json` actualizado a GitHub para modificar las rutinas oficiales. Si el JSON es inválido, se conservarán las plantillas que ya estaban guardadas en el dispositivo y se avisará en la consola del navegador.

## Seguridad y copias

Los entrenamientos, rutinas personales, fotos del usuario y progresos permanecen en almacenamiento local. Antes de sustituir una versión de la aplicación, exporta una copia desde Ajustes. Borrar datos del sitio puede borrar el historial. El desbloqueo PRO es local y no ofrece protección criptográfica.
