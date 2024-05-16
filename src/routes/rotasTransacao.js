import express from "express";
import {
  criarTransacao,
  obterDespesaMensal,
  obterReceitaMensal,
  obterSaldo,
  obterTransacoes,
} from "../controllers/transacaoController.js";
import { verificarToken } from "../services/jwtService.js";
const router = express.Router();

export function rotasTransacao() {
  // Rotas
  router.get("/", verificarToken, (req, res) => obterTransacoes(req, res));
  router.get("/ObterReceita", verificarToken, (req, res) =>
    obterReceitaMensal(req, res)
  );
  router.get("/ObterDespesa", verificarToken, (req, res) =>
    obterDespesaMensal(req, res)
  );
  router.get("/ObterSaldo", verificarToken, (req, res) => obterSaldo(req, res));

  router.post("/", verificarToken, (req, res) => criarTransacao(req, res));

  return router;
}
