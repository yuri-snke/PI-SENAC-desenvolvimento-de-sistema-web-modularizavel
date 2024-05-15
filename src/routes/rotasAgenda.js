import express from "express";
import { obterAgenda } from "../controllers/agendaController.js";
import { verificarToken } from "../service/jwtService.js";
const router = express.Router();

export function rotasAgenda() {
  // Rotas
  router.get("/", verificarToken, (req, res) => obterAgenda(req, res));

  return router

}