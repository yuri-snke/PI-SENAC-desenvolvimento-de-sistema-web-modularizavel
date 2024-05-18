import express from "express";
import { obterDescontos } from "../controllers/descontoController.js";
import { verificarToken } from "../services/jwtService.js";
const router = express.Router();

export function rotasDesconto() {
  router.get("/", verificarToken, (req, res) => obterDescontos(req, res));

  return router;
}
