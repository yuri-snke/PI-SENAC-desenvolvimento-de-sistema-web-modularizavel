import express from "express";
import { obterTodos } from "../controller/produtoController.js";
const router = express.Router();

export function rotasProduto(db) {
  // Rotas
  router.get("/", (req, res) => obterTodos(db, req, res));

  return router;
}
