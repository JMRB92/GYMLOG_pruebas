# Datos editables de GYM LOG

`routines.json` contiene las seis plantillas. Las dos rutinas principales conservan literalmente los nombres, días, ejercicios, orden, series y repeticiones definidos para ellas. La rutina híbrida está marcada como `proOnly: true`: sin GYM LOG PRO se oculta, pero sus datos y el historial permanecen guardados. La aplicación sincroniza estas plantillas sin sobrescribir rutinas personales.

La biblioteca de referencia se carga desde `JahelCuadrado/ExerciseGymGifsDB` en castellano (el proyecto declara 1.323 ejercicios). La app conserva separados los nombres visibles de las rutinas y los nombres de la biblioteca. La correspondencia con ejercicios de referencia se usa únicamente para enlazar demostraciones.

Las demostraciones se enlazan externamente; los GIF no se copian ni se alojan en este paquete. El repositorio de referencia advierte que no posee los derechos de autor de esos medios.
