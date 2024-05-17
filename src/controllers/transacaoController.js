import {
  AtualizarTransacaoPorId,
  BuscarDespesaDoMes,
  BuscarReceitaDoMes,
  BuscarTransacoesPorIDUsuario,
  CriarTransacao,
  ExcluirTransacao,
  ObterTransacaoPorId,
} from "../data/repositories/transacaoRepository.js";
import { Transacao } from "../models/transacaoModel.js";

const obterTransacoes = async (req, res) => {
  try {
    const results = await BuscarTransacoesPorIDUsuario(req.usuario.userId);

    if (results.length > 0) {
      res.send(results);
    } else {
      res.status(404).send({ message: "Nenhum resultado encontrado" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const obterDespesaMensal = async (req, res) => {
  try {
    const results = await BuscarDespesaDoMes(req.usuario.userId);

    res.send(results);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const obterReceitaMensal = async (req, res) => {
  try {
    const results = await BuscarReceitaDoMes(req.usuario.userId);

    res.send(results);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const obterSaldo = async (req, res) => {
  try {
    const receita = await BuscarReceitaDoMes(req.usuario.userId);
    const despesa = await BuscarDespesaDoMes(req.usuario.userId);
    const saldo = receita.valor - despesa.valor;

    res.send({ valor: saldo });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const criarTransacao = async (req, res) => {
  try {
    const transacao = new Transacao({
      ...req.body,
      usuario_id: req.usuario.userId,
    });

    const transacaoId = await CriarTransacao(transacao);

    res.send({
      message: "Transação criada com sucesso!",
      id: transacaoId,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const excluirTransacao = async (req, res) => {
  try {
    const transacao = {
      id: req.params.id,
      usuario_id: req.usuario.userId,
    };

    await ExcluirTransacao(transacao);
    res.send({ mensagem: "Transação deletada com sucesso!" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const obterTransacaoPorId = async (req, res) => {
  try {
    const transacao = new Transacao({
      id: req.params.id,
      usuario_id: req.usuario.userId,
    });

    const result = await ObterTransacaoPorId(transacao);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const atualizarTransacaoPorId = async (req, res) => {
  try {
    const transacao = new Transacao({
      id: req.params.id,
      usuario_id: req.usuario.userId,
      ...req.body,
    });

    const transacaoId = await AtualizarTransacaoPorId(transacao);
    res.send({
      message: "Transação atualizada com sucesso!",
      id: transacaoId,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export {
  atualizarTransacaoPorId,
  criarTransacao,
  excluirTransacao,
  obterDespesaMensal,
  obterReceitaMensal,
  obterSaldo,
  obterTransacaoPorId,
  obterTransacoes,
};
