const pool = require('./dbConfig');

async function agregarEstudiante(estudiante) {
  const query = {
    text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *;',
    values: [estudiante.nombre, estudiante.rut, estudiante.curso, estudiante.nivel]
  };
  try {
    const res = await pool.query(query);
    console.log('Estudiante agregado:', res.rows[0]);
  } catch (err) {
    console.error('Error al agregar estudiante:', err);
    throw new Error(`Error al agregar estudiante: ${err.message}`);
  }
}



module.exports = { agregarEstudiante };

async function obtenerEstudiantes() {
  const query = {
    text: 'SELECT * FROM estudiantes;',
    rowMode: 'array'  // Configura pg para devolver resultados en un arreglo
  };
  try {
    const res = await pool.query(query);
    console.log('Estudiantes registrados:', res.rows);  // res.rows será un arreglo de arreglos
  } catch (err) {
    console.error('Error al obtener estudiantes:', err);
  }
}


  module.exports.obtenerEstudiantes = obtenerEstudiantes;
  
  async function obtenerEstudiantePorRut(rut) {
    const query = {
      text: 'SELECT * FROM estudiantes WHERE rut = $1;',
      values: [rut]
    };
    try {
      const res = await pool.query(query);
      console.log('Estudiante encontrado:', res.rows[0]);
    } catch (err) {
      console.error('Error al buscar estudiante por RUT:', err);
    }
  }
  
  
  module.exports.obtenerEstudiantePorRut = obtenerEstudiantePorRut;

  async function actualizarEstudiante(estudiante) {
    const query = {
      text: 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *;',
      values: [estudiante.nombre, estudiante.curso, estudiante.nivel, estudiante.rut]
    };
    try {
      const res = await pool.query(query);
      console.log('Estudiante actualizado:', res.rows[0]);
    } catch (err) {
      console.error('Error al actualizar estudiante:', err);
    }
  }
  
  
  module.exports.actualizarEstudiante = actualizarEstudiante;

  
  async function eliminarEstudiante(rut) {
    const query = {
      text: 'DELETE FROM estudiantes WHERE rut = $1 RETURNING *;',
      values: [rut]
    };
    try {
      const res = await pool.query(query);
      console.log('Estudiante eliminado:', res.rows[0]);
    } catch (err) {
      console.error('Error al eliminar estudiante:', err);
    }
  }
  
  
  module.exports.eliminarEstudiante = eliminarEstudiante;
  