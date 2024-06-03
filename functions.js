const pool = require('./dbConfig');

async function agregarEstudiante(nombre, rut, curso, nivel) {
  const query = {
    text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *;',
    values: [nombre, rut, curso, nivel],
  };
  try {
    const res = await pool.query(query);
    console.log('Estudiante agregado:', res.rows[0]);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { agregarEstudiante };

async function obtenerEstudiantes() {
    try {
      const res = await pool.query('SELECT * FROM estudiantes;');
      console.log('Estudiantes registrados:', res.rows);
    } catch (err) {
      console.error(err);
    }
  }
  
  module.exports.obtenerEstudiantes = obtenerEstudiantes;
  
  async function obtenerEstudiantePorRut(rut) {
    try {
      const res = await pool.query('SELECT * FROM estudiantes WHERE rut = $1;', [rut]);
      console.log('Estudiante encontrado:', res.rows[0]);
    } catch (err) {
      console.error(err);
    }
  }
  
  module.exports.obtenerEstudiantePorRut = obtenerEstudiantePorRut;

  async function actualizarEstudiante(nombre, rut, curso, nivel) {
    const query = {
      text: 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *;',
      values: [nombre, curso, nivel, rut],
    };
    try {
      const res = await pool.query(query);
      console.log('Estudiante actualizado:', res.rows[0]);
    } catch (err) {
      console.error(err);
    }
  }
  
  module.exports.actualizarEstudiante = actualizarEstudiante;

  
  async function eliminarEstudiante(rut) {
    try {
      const res = await pool.query('DELETE FROM estudiantes WHERE rut = $1 RETURNING *;', [rut]);
      console.log('Estudiante eliminado:', res.rows[0]);
    } catch (err) {
      console.error(err);
    }
  }
  
  module.exports.eliminarEstudiante = eliminarEstudiante;
  