import "dotenv/config";
import express from "express";
import mysql from "mysql2/promise";
import { rotasProduto } from "./routes/rotasProduto.js";
import { rotasLogin } from "./routes/rotasLogin.js";


const app = express();
app.use(express.json());

const PORT = process.env.PORT;

// Configuração do banco de dados MySQL
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pi_senac_saude',
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
app.use("/api/login", rotasLogin(db));


app.listen(PORT, () => {
  console.log(`Servidor executando na porta: ${PORT}`);
});
