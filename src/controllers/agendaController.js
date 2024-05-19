import { BuscarAgendaPorIDUsuario, CriarAgenda, ObterAgendaPorId, AtualizarAgendaPorId,ExcluirAgenda } from "../data/repositories/agendaRepository.js";
import { Agenda } from "../models/agendaModel.js";

const obterAgenda = async (req, res) => {
    try {
      const results = await BuscarAgendaPorIDUsuario(req.usuario.userId);
  
      if (results.length > 0) {
        res.send(results);
      } else {
        res.status(404).json({ message: "Nenhum resultado encontrado" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const criarAgenda = async (req, res) => {
    try {
      const agenda = new Agenda({
        ...req.body,
        usuario_id :req.usuario.userId
      });
  
      const agendaId = await CriarAgenda(agenda);
  
      res.send({
        message: "Agenda criada com sucesso!",
        id: agendaId,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  const excluirAgenda = async (req, res) => {
    try {
      const agenda = new Agenda({
        ...req.body,
        usuario_id :req.usuario.userId
      });
  
      const agendaId = await ExcluirAgenda(agenda);
  
      res.send({
        message: "Agenda deletada com sucesso!",
        id: agendaId,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  const obterAgendaPorId = async (req, res) => {
    try {
      const agenda = new Agenda({
        id: req.params.id,
        usuario_id :req.usuario.userId
      });

      const result = await ObterAgendaPorId(agenda);
  
      res.send(result);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  const atualizarAgendaPorId = async (req, res) => {
    try {
      const agenda = new Agenda({
        id:req.params.id,
        ...req.body,
        usuario_id :req.usuario.userId

      });      
  
      const agendaId = await AtualizarAgendaPorId(agenda);
  
      res.send({
        message: "Agenda criada com sucesso!",
        id: agendaId,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  

  export {obterAgenda, criarAgenda, excluirAgenda, atualizarAgendaPorId,obterAgendaPorId}