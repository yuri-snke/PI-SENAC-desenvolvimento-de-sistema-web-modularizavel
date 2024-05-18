import express from "express";
import { criarUsuario } from "../controllers/usuarioController.js";
const router = express.Router();

export function rotasUsuario() {
  // Rotas
  router.post("/", (req, res) => criarUsuario(req, res));

  return router;
}
