import { Transacao } from "../../models/transacaoModel.js";
import con from "../connection.js";

async function BuscarTransacoesPorIDUsuario(userID) {
  let comando = `SELECT * FROM tbl_transacao WHERE usuario_id = ?`;
  const [linhas] = await con.query(comando, [userID]);

  return linhas;
}

async function BuscarDespesaDoMes(userID) {
  let comando = `SELECT COALESCE(SUM(valor), 0) AS valor
                  FROM tbl_transacao
                  WHERE MONTH(data_transacao) = MONTH(CURDATE())
                  AND YEAR(data_transacao) = YEAR(CURDATE())
                  AND usuario_id = ?
                  AND tipo_transacao = 'despesa';`;
  const [linha] = await con.query(comando, [userID]);

  return linha[0];
}

async function BuscarReceitaDoMes(userID) {
  let comando = `SELECT COALESCE(SUM(valor), 0) AS valor
                  FROM tbl_transacao
                  WHERE MONTH(data_transacao) = MONTH(CURDATE())
                  AND YEAR(data_transacao) = YEAR(CURDATE())
                  AND usuario_id = ?
                  AND tipo_transacao = 'receita';`;
  const [linha] = await con.query(comando, [userID]);

  return linha[0];
}

async function CriarTransacao(transacao) {
  let comando = `INSERT INTO tbl_transacao
                (usuario_id, nome_transacao, valor, data_transacao, tipo_transacao)
                VALUES (?, ?, ?, ?, ?)`;

  let result = await con.query(comando, [
    transacao.usuario_id,
    transacao.nome_transacao,
    transacao.valor,
    transacao.data_transacao,
    transacao.tipo_transacao,
  ]);

  return result[0]?.insertId;
}

async function ExcluirTransacao(transacao) {
  let comando = `DELETE FROM tbl_transacao WHERE id = ? AND usuario_id = ?`;
  const [result] = await con.query(comando, [
    transacao.id,
    transacao.usuario_id,
  ]);

  if (result?.affectedRows > 0) {
    return result?.affectedRows;
  } else {
    throw new Error("Falha ao deletar transação.");
  }
}

async function ObterTransacaoPorId(transacao) {
  let comando = `SELECT * FROM tbl_transacao WHERE id = ? AND usuario_id = ?`;

  const [result] = await con.query(comando, [
    transacao.id,
    transacao.usuario_id,
  ]);

  if (result.length > 0) {
    const transacaoEncontrada = new Transacao(result[0]);
    return transacaoEncontrada;
  } else {
    throw new Error("Não há registros a serem capturados.");
  }
}

async function AtualizarTransacaoPorId(transacao) {
  let transacaoSalva = await ObterTransacaoPorId(transacao);

  if (transacaoSalva !== null) {
    let comando = `UPDATE tbl_transacao SET
      nome_transacao = ?, valor = ?, data_transacao = ?, tipo_transacao = ? WHERE id = ? AND usuario_id = ?`;

    let result = await con.query(comando, [
      transacao.nome_transacao,
      transacao.valor,
      transacao.data_transacao,
      transacao.tipo_transacao,
      transacao.id,
      transacao.usuario_id,
    ]);

    if (result[0]?.affectedRows > 0) {
      return transacao.id;
    } else {
      throw new Error("Falha ao deletar transação.");
    }
  }
}

export {
  AtualizarTransacaoPorId,
  BuscarDespesaDoMes,
  BuscarReceitaDoMes,
  BuscarTransacoesPorIDUsuario,
  CriarTransacao,
  ExcluirTransacao,
  ObterTransacaoPorId,
};
