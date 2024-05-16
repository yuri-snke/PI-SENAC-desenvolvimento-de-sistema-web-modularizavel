import {
  BuscarDespesaDoMes,
  BuscarReceitaDoMes,
  BuscarTransacoesPorIDUsuario,
  CriarTransacao,
} from "../data/repositories/transacaoRepository.js";
import { Transacao } from "../models/transacaoModel.js";

const obterTransacoes = async (req, res) => {
  try {
    const results = await BuscarTransacoesPorIDUsuario(req.usuario.userId);

    if (results.length > 0) {
      res.send(results);
    } else {
      res.status(404).json({ message: "Nenhum resultado encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obterDespesaMensal = async (req, res) => {
  try {
    const results = await BuscarDespesaDoMes(req.usuario.userId);

    res.send(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obterReceitaMensal = async (req, res) => {
  try {
    const results = await BuscarReceitaDoMes(req.usuario.userId);

    res.send(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obterSaldo = async (req, res) => {
  try {
    const receita = await BuscarReceitaDoMes(req.usuario.userId);
    const despesa = await BuscarDespesaDoMes(req.usuario.userId);
    const saldo = receita.valor - despesa.valor;

    res.send({ valor: saldo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const criarTransacao = async (req, res) => {
  try {
    const transacao = new Transacao({
      ...req.body,
      usuario_id: req.usuario.userId,
    });

    const transacaoId = await CriarTransacao(transacao);

    res.status(201).json({ id: transacaoId, ...transacao.toJSON() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  criarTransacao,
  obterDespesaMensal,
  obterReceitaMensal,
  obterSaldo,
  obterTransacoes,
};
