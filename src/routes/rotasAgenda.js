import express from "express";
import { criarAgenda, obterAgenda } from "../controllers/agendaController.js";
import { verificarToken } from "../services/jwtService.js";
const router = express.Router();

export function rotasAgenda() {
  // Rotas
  router.get("/", verificarToken, (req, res) => obterAgenda(req, res));
  router.post("/",verificarToken ,(req, res) => criarAgenda(req, res));


  return router;
}
