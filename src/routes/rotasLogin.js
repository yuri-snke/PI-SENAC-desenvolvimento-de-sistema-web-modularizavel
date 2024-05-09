import express from "express";
import {Userlogin} from "../controller/loginController.js"
const router = express.Router();

export function rotasLogin(db) {
  // Rotas
  router.post("/", (req, res) => Userlogin(req, res,db));

  return router;
}
