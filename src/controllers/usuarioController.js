import {
   CriarUsuario
  } from "../data/repositories/usuarioRepository.js";
import { Usuario } from "../models/usuarioModel.js";


const criarUsuario = async (req, res) => {
    try {
      const usuario = new Usuario({
        ...req.body
      });
  
      const transacaoId = await CriarUsuario(usuario);
  
      res.send({
        message: "Usuário criado com sucesso!"
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };


  export {criarUsuario}