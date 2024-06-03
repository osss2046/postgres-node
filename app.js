const { agregarEstudiante, obtenerEstudiantes, obtenerEstudiantePorRut, actualizarEstudiante, eliminarEstudiante } = require('./functions');

const main = async () => {
  const args = process.argv.slice(2);  // Elimina los dos primeros argumentos (node y path)
  const command = args[0];

  switch (command) {
    case 'agregar':
      await agregarEstudiante(args[1], args[2], args[3], args[4]); // nombre, rut, curso, nivel
      break;
    case 'consultar':
      await obtenerEstudiantes();
      break;
    case 'consultarRut':
      await obtenerEstudiantePorRut(args[1]); // rut
      break;
    case 'actualizar':
      await actualizarEstudiante(args[1], args[2], args[3], args[4]); // nombre, rut, curso, nivel
      break;
    case 'eliminar':
      await eliminarEstudiante(args[1]); // rut
      break;
    default:
      console.log('Comando no reconocido');
  }
};

main().catch(err => console.error(err));
