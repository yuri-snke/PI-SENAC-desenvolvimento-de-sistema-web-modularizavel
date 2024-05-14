import "dotenv/config";
import express from "express";
import mysql from "mysql2/promise";
import cors from 'cors'
import { rotasProduto } from "./routes/rotasProduto.js";
import { rotasLogin } from "./routes/rotasLogin.js";
import { rotasTransacao } from "./routes/rotasTransacao.js";


const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT;

// Rotas
app.use("/api/produto", rotasProduto());
app.use("/api/login", rotasLogin());
app.use("/api/transacao", rotasTransacao());



app.listen(PORT, () => {
  console.log(`Servidor executando na porta: ${PORT}`);
});
