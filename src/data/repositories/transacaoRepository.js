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

  return result.insertId;
}

export {
  BuscarDespesaDoMes,
  BuscarReceitaDoMes,
  BuscarTransacoesPorIDUsuario,
  CriarTransacao,
};
