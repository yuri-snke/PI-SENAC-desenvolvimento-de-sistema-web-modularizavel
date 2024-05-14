import express from "express";
import { obterTodos } from "../controllers/produtoController.js";
const router = express.Router();

export function rotasProduto() {
  // Rotas
  router.get("/", (req, res) => obterTodos( req, res));

  return router;
}
