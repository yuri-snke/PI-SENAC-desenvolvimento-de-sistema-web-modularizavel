import { Agenda } from "../../models/agendaModel.js";
import con from "../connection.js";

async function BuscarAgendaPorIDUsuario(userID) {
  let comando = `SELECT id, titulo as titulo, DATE_FORMAT(data_inicio, "%H:%i") as hora,TIMESTAMPDIFF(MINUTE,data_inicio,data_fim) as duracao FROM tbl_agenda WHERE usuario_id = ?
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

async function ExcluirAgenda(agenda) {
  let comando = `DELETE FROM tbl_agenda WHERE id = ? AND usuario_id = ?`;
  const [result] = await con.query(comando, [
    agenda.id,
    agenda.usuario_id,
  ]);

  if (result?.affectedRows > 0) {
    return result?.affectedRows;
  } else {
    throw new Error("Falha ao deletar agenda.");
  }
}

async function ObterAgendaPorId(agenda) {
  let comando = `SELECT * FROM tbl_agenda WHERE id = ? AND usuario_id = ?`;

  const [result] = await con.query(comando, [
    agenda.id,
    agenda.usuario_id,
  ]);

  console.log(result)

  if (result.length > 0) {
    const agendaEncontrada = new Agenda(result[0]);

    console.log(agendaEncontrada)


    return agendaEncontrada;
  } else {
    throw new Error("Não há registros a serem capturados.");
  }
}

async function AtualizarAgendaPorId(agenda) {
  let agendaSalva = await ObterAgendaPorId(agenda);

  if (agendaSalva !== null) {
    let comando = `UPDATE tbl_agenda SET
      titulo = ?, data_inicio = ?, data_fim = ? WHERE id = ? AND usuario_id = ?`;

    let result = await con.query(comando, [
      agenda.titulo,
      agenda.data_inicio,
      agenda.data_fim,
      agenda.id,
      agenda.usuario_id
    ]);

    if (result[0]?.affectedRows > 0) {
      return agenda.id;
    } else {
      throw new Error("Falha ao deletar agenda.");
    }
  }
}

export { BuscarAgendaPorIDUsuario, CriarAgenda, ObterAgendaPorId, AtualizarAgendaPorId,ExcluirAgenda };
