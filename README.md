# GYM LOG v1.14

Aplicación web en español para **GitHub Pages**, sin registro ni Firebase. Las rutinas personales, sesiones e historial se guardan en el navegador del dispositivo.

## Instalar o actualizar

1. En la versión anterior, ve a **Ajustes → Exportar copia de seguridad** y guarda el JSON antes de actualizar.
2. Descarga `GYM_LOG_Web_v1.14_completa.zip` y **descomprime** su contenido.
3. Sube **todos los archivos y carpetas del ZIP** a la raíz del repositorio de GitHub Pages, respetando `data/`, `config/` y `.github/`.
4. Abre la URL de tu GitHub Pages. Si tenías la PWA instalada, ciérrala y vuelve a abrirla; es posible que necesites recargar para activar el nuevo service worker.
5. Comprueba que aparece discretamente **v1.14**. Tus datos anteriores deberían seguir en el navegador. La copia JSON se conserva como medida preventiva.

**No abras `index.html` directamente con doble clic** para utilizar la versión publicada: necesita leer su Excel y JSON externos. Para probar offline sin publicarla utiliza `GYM_LOG_v1.14_prueba.html`.

## Cambios v1.14

- Biblioteca ampliada de **143 a 235** ejercicios (92 variantes nuevas), evitando nombres idénticos y respetando las denominaciones oficiales antiguas.
- Excel editable: `data/ejercicios.xlsx`, con ID, grupo, nombre, equipamiento, imagen inicial y final, vídeo/GIF, alias, instrucciones, fuente y estado de revisión. Mantén los ID al editar; cada cambio se refleja al cargar la app.
- Se ha eliminado la navegación a las **fichas de Simply Fitness**. El modal muestra ilustraciones y, solo si hay un enlace de vídeo autorizado, el vídeo. Algunas imágenes históricas de Simply Fitness permanecen como URLs externas de la versión anterior, **con derechos comerciales sin verificar**; no se incluyen vídeos de procedencia dudosa.
- Imágenes adicionales de **RepDB** solo en coincidencias propuestas como compatibles. RepDB requiere atribución visible y prohíbe redistribuir el conjunto como base de datos independiente; las ilustraciones no se presentan como verificadas individualmente.
- Rutinas editables como JSON en `data/routines.json`. Se han reconstruido las tres rutinas prioritarias según las decisiones del usuario: **Plan de entrenamiento — 5 días** (29 ejercicios, ahora con Día 5), **TABLA DE ENTRENAMIENTO** (29 ejercicios y excepciones del PDF), **Rutina híbrida — 5 días** (37 ejercicios y 2 ejercicios finales separados de bíceps y tríceps; PRO-only).
- Se han revisado las correspondencias de ejercicios de las otras tres plantillas, conservando sus días y esquemas originales.
- Las fichas y rutinas usan ID canónicos de catálogo con nombres originales visibles. Al actualizar plantillas se preservan los ID locales y el historial de entrenamientos; las rutinas personales se mantienen aparte.
- Calculadoras **IMC, TMB, GET**: mayor explicación de las fórmulas, cálculos, rangos y límites. El IMC ahora solicita la edad: en adultos **de 20 años o más los puntos de corte no cambian por edad**; menores de 20 requieren percentiles específicos, que esta versión no calcula.
- Ajustes, desbloqueo PRO local, cronómetro, calendario, biblioteca, exportaciones, backups, fotos y modalidades previas conservados.

## Estado de imágenes y vídeos

El Excel incluye **235 fichas**. De las **92 nuevas**, 51 tienen una URL de ilustración RepDB propuesta y 41 están marcadas sin imagen verificada. Todas las fichas mantienen una columna de vídeo/GIF vacía hasta tener material autorizado y correcto. No se generan imágenes ni vídeos falsos por parecido de nombre.

El navegador puede enviar solicitudes de imagen a los servidores externos que alojan las ilustraciones. GYM LOG no envía allí tu historial, rutina personal, cargas ni repeticiones.

## Biblioteca editable

- Archivo principal: `data/ejercicios.xlsx` (hoja `EJERCICIOS`). El primer campo `ID` es estable y evita asociaciones rotas.
- Fuente alternativa: `data/exercises-fallback.json`, se usa únicamente si el Excel no se puede leer. Si haces cambios a mano en Excel y quieres actualizar también el fallback, genera una copia sincronizada; de lo contrario la copia seguirá siendo una instantánea antigua.
- Para una nueva variante crea una fila con **ID único** y nombre literal en castellano.
- **No cambies los ID existentes** ni reutilices uno antiguo en otro ejercicio.

## Rutinas editables

`data/routines.json` tiene seis plantillas protegidas. Sus nombres actuales siguen los documentos y las versiones publicadas. Los campos `name` y `catalogName` permiten mostrar el nombre original de la rutina y enlazarlo a su ficha correspondiente. La aplicación preserva el identificador local anterior de un ejercicio al actualizar plantillas existentes.

La rutina **Rutina híbrida — 5 días** conserva `proOnly: true`: si PRO está desactivado, no se ofrece entre las plantillas disponibles, pero su progreso no se elimina.

## Licencia, fuentes y límites

- RepDB: https://repdb.co · licencia gratuita de uso comercial **dentro de aplicaciones** con atribución. No se permite redistribuir su dataset como producto o API independiente, y los ejemplos de animaciones de pago no están autorizados para publicar.
- Referencias de IMC para adultos: https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html
- Referencias de IMC infantil y adolescente: https://www.cdc.gov/bmi/child-teen-calculator/
- OMS sobre obesidad y sobrepeso: https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight
- TMB y GET son modelos aproximados, no diagnósticos ni prescripciones alimentarias.

## Archivo de prueba

`GYM_LOG_v1.14_prueba.html` incorpora un **snapshot** de biblioteca y rutinas y se puede abrir como página suelta sin instalar la app. No se actualiza automáticamente al editar `data/ejercicios.xlsx`: la versión publicada sí lee los archivos externos.
