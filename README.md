# Always Music v1

## Descripción General

Always Music v1 es una aplicación diseñada para gestionar la información de estudiantes de una escuela de música. Esta versión inicial introduce una solución básica para reemplazar el uso de hojas de cálculo por un sistema de gestión de bases de datos más robusto y automatizado.

## Objetivos Alcanzados

1. **Gestión Básica de la Base de Datos:**
   - Implementación de funciones básicas para interactuar con una base de datos PostgreSQL, incluyendo la capacidad de agregar, consultar, actualizar y eliminar registros de estudiantes.

2. **Interfaz de Línea de Comandos:**
   - La aplicación permite la interacción a través de la línea de comandos, facilitando operaciones como agregar, consultar, actualizar y eliminar información de estudiantes.

3. **Funcionalidad CRUD:**
   - Creación (Create): Permite agregar nuevos estudiantes a la base de datos.
   - Lectura (Read): Proporciona la funcionalidad de consultar los registros de todos los estudiantes o un estudiante específico por RUT.
   - Actualización (Update): Facilita la actualización de la información de los estudiantes.
   - Eliminación (Delete): Permite eliminar los registros de estudiantes de la base de datos.

## Funcionalidades

- **Agregar un Nuevo Estudiante:** Añade nuevos estudiantes a la base de datos, incluyendo detalles como nombre, RUT, curso y nivel.
- **Consultar Estudiantes:** Muestra una lista de todos los estudiantes registrados o los detalles de un estudiante específico basado en el RUT.
- **Actualizar Información de Estudiante:** Permite modificar los datos de un estudiante ya registrado en la base de datos.
- **Eliminar Estudiante:** Habilita la eliminación de un estudiante de la base de datos.

## Uso

Los comandos para interactuar con la aplicación desde la línea de comandos son:

```bash
node app.js agregar 'Nombre Completo' 'RUT' 'Curso' 'Nivel'
node app.js consultar
node app.js consultarRut 'RUT'
node app.js actualizar 'Nombre Completo' 'RUT' 'Curso' 'Nivel'
node app.js eliminar 'RUT'
