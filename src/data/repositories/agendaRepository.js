import con from "../connection.js";

async function BuscarAgendaPorIDUsuario(userID) {
  let comando = `SELECT titulo as titulo, DATE_FORMAT(data_inicio, "%H:%i") as hora,TIMESTAMPDIFF(MINUTE,data_inicio,data_fim) as duracao FROM tbl_agenda WHERE usuario_id = ?
                    AND DATE_FORMAT(data_inicio, '%Y-%m-%d') = CURDATE() ORDER BY hora ASC;`;
  const [linhas] = await con.query(comando, [userID]);

  return linhas;
}

async function CriarAgenda(agenda) {
  let comando = `INSERT INTO tbl_agenda
                (usuario_id, titulo, data_inicio, data_fim)
                VALUES (?, ?, ?, ?)`;

  let result = await con.query(comando, [
    agenda.usuario_id,
    agenda.titulo,
    agenda.data_inicio,
    agenda.data_fim,
  ]);
}

export { BuscarAgendaPorIDUsuario, CriarAgenda };
