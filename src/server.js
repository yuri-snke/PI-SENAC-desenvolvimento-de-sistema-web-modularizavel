import cors from "cors";
import "dotenv/config";
import express from "express";
import { rotasAgenda } from "./routes/rotasAgenda.js";
import { rotasCursos } from "./routes/rotasCursos.js";
import { rotasDesconto } from "./routes/rotasDesconto.js";
import { rotasLogin } from "./routes/rotasLogin.js";
import { rotasTransacao } from "./routes/rotasTransacao.js";
import { rotasUsuario } from "./routes/rotasUsuario.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/login", rotasLogin());
app.use("/api/usuario", rotasUsuario());
app.use("/api/transacao", rotasTransacao());
app.use("/api/agenda", rotasAgenda());
app.use("/api/desconto", rotasDesconto());
app.use("/api/curso", rotasCursos());

app.listen(PORT, () => {
  console.log(`Servidor executando na porta: ${PORT}`);
});
