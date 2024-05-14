import express from "express";
import { obterTransacoes
    
 } from "../controllers/transacaoController.js";
 import { verificarToken } from "../service/jwtService.js";
const router = express.Router();

export function rotasTransacao() {
  // Rotas
  router.get("/", verificarToken,(req, res) => obterTransacoes( req, res));

  return router;
}
