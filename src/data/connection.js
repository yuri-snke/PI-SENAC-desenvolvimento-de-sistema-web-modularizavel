import mysql from "mysql2/promise";

let con = await mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PWD,
  database: process.env.DB,
});

export default con;
