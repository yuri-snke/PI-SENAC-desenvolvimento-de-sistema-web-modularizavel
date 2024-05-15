import cors from "cors";
import "dotenv/config";
import express from "express";
import { rotasLogin } from "./routes/rotasLogin.js";
import { rotasTransacao } from "./routes/rotasTransacao.js";
import { rotasAgenda } from "./routes/rotasAgenda.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// Rotas
app.use("/api/login", rotasLogin());
app.use("/api/transacao", rotasTransacao());
app.use("/api/agenda", rotasAgenda());


app.listen(PORT, () => {
  console.log(`Servidor executando na porta: ${PORT}`);
});
