import "dotenv/config";
import express from "express";
import mysql from "mysql2/promise";
import { rotasProduto } from "./routes/rotasProduto.js";

const app = express();
const PORT = process.env.PORT;

// Configuração do banco de dados MySQL
const db = await mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PWD,
  database: process.env.DB,
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conectado a base MySQL");
});

// Rotas
app.use("/api/produto", rotasProduto(db));

app.listen(PORT, () => {
  console.log(`Servidor executando na porta: ${PORT}`);
});
