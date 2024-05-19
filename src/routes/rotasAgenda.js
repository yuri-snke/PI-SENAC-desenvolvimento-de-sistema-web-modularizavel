import express from "express";
import { atualizarAgendaPorId, criarAgenda, excluirAgenda, obterAgenda, obterAgendaPorId } from "../controllers/agendaController.js";
import { verificarToken } from "../services/jwtService.js";
const router = express.Router();

export function rotasAgenda() {
  router.get("/", verificarToken, (req, res) => obterAgenda(req, res));
  router.post("/",verificarToken ,(req, res) => criarAgenda(req, res));

  router.delete("/:id", verificarToken, (req, res) =>
    excluirAgenda(req, res)
  );

  router.get("/:id", verificarToken, (req, res) =>
    obterAgendaPorId(req, res)
  );

  router.put("/:id", verificarToken, (req, res) =>
    atualizarAgendaPorId(req, res)
  );

  return router;
}
