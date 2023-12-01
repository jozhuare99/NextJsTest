export const runtime = 'nodejs';

import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const query = async (sql, params) => {
  const [rows] = await db.query(sql, params);
  return rows;
}

const execute = async (sql, params) => {
  const [result] = await db.execute(sql, params);
  return result;
}

export {query, execute}