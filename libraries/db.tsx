// lib/db.js

import * as mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "graviton_softworks",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to check the connection
const checkConnection = () => {
  return new Promise<void>((resolve, reject) => {
    pool.getConnection((err: any, connection) => {
      if (err) {
        return reject(err);
      }
      console.log("Connected to MySQL database");
      connection.release();
      resolve();
    });
  });
};

// Function to execute queries
const query = (sql: string, values: any) => {
  return new Promise<any>((resolve, reject) => {
    pool.query(sql, values, (error, results, fields) => {
      if (error) {
        return reject(error);
      }
      resolve({ results, fields });
    });
  });
};

export { pool, query, checkConnection };
