import mysql from "mysql2/promise";

let con = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pi_senac_saude',
});

export default con;