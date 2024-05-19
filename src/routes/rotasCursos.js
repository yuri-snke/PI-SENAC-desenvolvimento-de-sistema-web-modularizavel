import express from "express";
import { obterCursos } from "../controllers/cursoController.js";
import { verificarToken } from "../services/jwtService.js";
const router = express.Router();

export function rotasCursos() {
  router.get("/", verificarToken, (req, res) => obterCursos(req, res));

  return router;
}
