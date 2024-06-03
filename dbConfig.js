const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'always_music',
  password: '123456',
  port: 5432,
  max: 20, // Número máximo de clientes en el pool
  idleTimeoutMillis: 30000, // Cómo de rápido puede un cliente estar inactivo antes de ser cerrado
  connectionTimeoutMillis: 2000, // Cómo de rápido debe establecerse una conexión antes de lanzar un error
});
// Manejador de error de conexión del pool
pool.on('error', (err, client) => {
  console.error('Error inesperado en el pool de conexión:', err);
  process.exit(-1);
});
module.exports = pool;
