# Historial de versiones

## v1.12 — Catálogo y rutinas separados del código
- El único catálogo oficial pasa a ser `data/ejercicios.xlsx`, con 143 ejercicios, nombres originales e ilustraciones Simply Fitness.
- La aplicación interpreta XLSX directamente en el navegador, sin bibliotecas externas, y permite cargar un Excel local para pruebas.
- Las 6 plantillas oficiales se leen solamente desde `data/routines.json`; se elimina el catálogo y las plantillas predefinidas duplicadas en el código.
- Se desactiva la importación automática de 1323 ejercicios de otra API y la vinculación aproximada de vídeos para evitar errores.
- Imágenes en Biblioteca y entrenamiento; enlaces de vídeo únicamente cuando estén rellenados en el Excel.
- PWA actualizada: descarga de XLSX/JSON con preferencia por la versión actual y respaldo offline.
- Se conservan rutinas personales, entrenamientos y datos previos del dispositivo.

## v1.11
Versión de origen con inicio, rutinas, historial, gráfica, PRO local y PWA.
