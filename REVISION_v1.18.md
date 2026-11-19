# Revisión de funcionamiento de GYM LOG v1.18

Base de la actualización: GYM LOG v1.17 y catálogo de trabajo de 235 ejercicios.

La revisión combina pruebas de interacción en Chromium con una ventana de 390 × 844, pruebas del DOM con fallos de almacenamiento y carga simulados, y comprobaciones de integridad del ZIP y del catálogo. La actualización se probó sirviendo v1.17 y v1.18 bajo la misma ruta local, con service worker y una rutina ya guardada. También se abrió el HTML desde el disco como archivo independiente.

| Área | Comprobación | Resultado |
|---|---|---|
| Arranque | Abrir el HTML autónomo y cargar la web con el Excel. Forzar el fallo del Excel para comprobar el JSON de respaldo. | Los tres caminos cargan las mismas 235 fichas. |
| Pesos | Actualizar un historial antiguo que contiene 220 con unidad anterior distinta a kg. | El registro se convierte a 99,79 kg. La interfaz solo muestra kg. |
| Guardado | Simular un fallo de escritura al finalizar y repetir cuando se recupera el almacenamiento. | La sesión activa se conserva hasta que el cierre se guarda. Aparece una opción para descargar una copia. |
| Recuperación | Arrancar con una base ilegible. | Se conserva el contenido previo y se ofrece descargarlo. |
| Importación | Probar una lista parcialmente inválida y una válida, cancelar, importar, fusionar una copia y reemplazar los datos por una copia. | La lista inválida y la cancelación dejan los datos intactos. La importación válida añade las rutinas. La fusión conserva registros existentes y añade los nuevos por identificador. Se comprobó el reemplazo con confirmación. |
| 1RM | Calcular con una y cinco repeticiones usando 100 kg y cambiar de fórmula. | 100 kg para una repetición, 116,7 kg con Epley para cinco y 112,5 kg con Brzycki para cinco. |
| Calorías y macros | Calcular un objetivo de calorías, enviarlo a Macros y probar un reparto que supera el 100 %. | El objetivo se transfiere y los porcentajes inválidos se señalan. |
| Registro | Intentar cerrar una serie vacía, copiar una serie previa, completar una con peso corporal y marcar calentamiento. | La serie vacía se bloquea, la copia funciona y las series de calentamiento se diferencian. |
| Descanso | Ajustar el descanso y reabrir una sesión activa. | Se recupera el temporizador. Las notificaciones en segundo plano dependen del navegador. |
| Sustitución | Buscar por nombre, comprobar el filtro de material y cambiar un ejercicio con series anotadas. | El ejercicio original conserva las series y se añade el sustituto. |
| Historial y progreso | Terminar una sesión, modificar una serie y comprobar la sección de récords. | El cambio persiste y los récords se calculan con series efectivas. Se registró y finalizó una sesión en Chromium tras recargar en mitad del descanso. |
| Demostraciones | Comprobar el enlace desde una ficha de entrenamiento. | El enlace está disponible sin depender de la miniatura. La reproducción externa depende de la fuente. |
| Caché | Instalar v1.17, actualizar a v1.18 y recargar sin red en Chromium. | La caché v1.18 reemplaza la v1.17 y permite recargar la aplicación instalada sin conexión y conserva la rutina local. |

## Decisiones de compatibilidad

- Los registros de copias antiguas que indicaban una unidad distinta se convierten a kg una sola vez usando la unidad global que tenía la copia. Si se mezclaron unidades en una misma copia antigua, el formato anterior carecía de unidad por serie y no permite reconstruir la mezcla de forma fiable.
- El catálogo conserva los 235 identificadores. Se retiraron cinco referencias de imagen claramente asociadas a otra variante. El resultado contiene 225 fichas con ambos campos, 8 con demostración únicamente, 1 con imagen únicamente y 1 con ambos campos pendientes.
- Los enlaces externos del catálogo pueden requerir conexión. La revisión de integración no supone haber reproducido cada vídeo ni comprobado los derechos de todas las imágenes.
- Las fórmulas de calorías y 1RM ofrecen estimaciones. La clasificación histórica de series anteriores se conserva como efectiva salvo que se edite el registro.
