import express from "express";
import { obterTransacoes,  obterDespesaMensal, obterReceitaMensal, obterSaldo } from "../controllers/transacaoController.js";
import { verificarToken } from "../service/jwtService.js";
const router = express.Router();

export function rotasTransacao() {
  // Rotas
  router.get("/", verificarToken, (req, res) => obterTransacoes(req, res));
  router.get("/ObterReceita", verificarToken, (req, res) => obterReceitaMensal(req, res));
  router.get("/ObterDespesa", verificarToken, (req, res) => obterDespesaMensal(req, res));
  router.get("/ObterSaldo", verificarToken, (req, res) => obterSaldo(req, res));


  return router;
}
