import express from "express";
import { Userlogin } from "../controllers/loginController.js";
const router = express.Router();

export function rotasLogin() {
  // Rotas
  router.post("/", (req, res) => Userlogin(req, res));

  return router;
}
