# Always Music v2

## Descripción General

Always Music v2 es una mejora de la aplicación anterior que maneja la información de estudiantes de una escuela de música. Esta versión introduce mejoras significativas en la gestión de la base de datos, la seguridad y la usabilidad. Se ha reestructurado la aplicación para utilizar consultas parametrizadas, manejo de errores más robusto, y formatos de datos optimizados para un mejor procesamiento.

## Mejoras Clave

1. **Gestión de Conexiones a la Base de Datos:**
   - Implementación de la clase `Pool` del paquete `pg` para manejar múltiples conexiones simultáneas. Esto permite una mejor gestión de recursos y aumenta la eficiencia en el acceso a la base de datos.

2. **Seguridad en Consultas SQL:**
   - Todas las consultas a la base de datos ahora utilizan texto parametrizado. Esto previene las inyecciones SQL, asegurando que la aplicación sea más segura contra ataques maliciosos.

3. **Estructura de Consultas Mejorada:**
   - Las consultas ahora aceptan un objeto JSON como argumento, estandarizando el método de entrada de datos y clarificando el código, lo que hace la base de código más mantenible.

4. **Manejo de Errores Robusto:**
   - Se ha mejorado el manejo de errores en todas las operaciones de la base de datos. Los errores se capturan y se informan adecuadamente, proporcionando feedback claro y oportuno para la resolución de problemas.

5. **Formato de Resultados de Consultas:**
   - La función para obtener los estudiantes ahora devuelve los datos en formato de arreglo, facilitando el manejo y procesamiento de los datos recibidos.

## Funcionalidades

- **Agregar un Nuevo Estudiante:** Permite insertar nuevos estudiantes en la base de datos con todos los detalles requeridos.
- **Consultar Estudiantes:** Proporciona una lista de todos los estudiantes registrados en formato de arreglo.
- **Consultar Estudiante por RUT:** Permite buscar a un estudiante específico utilizando su RUT.
- **Actualizar Información de Estudiante:** Facilita la actualización de datos de los estudiantes existentes.
- **Eliminar Estudiante:** Permite eliminar el registro de un estudiante de la base de datos.

## Uso

La aplicación se maneja completamente desde la línea de comandos. Aquí hay algunos ejemplos de cómo se pueden ejecutar las funciones:

```bash
node app.js agregar 'Juan Pérez' '12345678-9' 'Guitarra' 'Principiante'
node app.js consultar
node app.js consultarRut '12345678-9'
node app.js actualizar 'Juan Pérez' '12345678-9' 'Guitarra' 'Intermedio'
node app.js eliminar '12345678-9'
