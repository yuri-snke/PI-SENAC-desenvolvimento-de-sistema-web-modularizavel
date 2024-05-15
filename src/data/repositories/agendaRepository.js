import con from "../connection.js";

async function BuscarAgendaPorIDUsuario(userID) {
    let comando = `SELECT titulo as titulo, DATE_FORMAT(data_inicio, "%H:%i") as hora,TIMESTAMPDIFF(MINUTE,data_inicio,data_fim) as duracao FROM tbl_agenda WHERE usuario_id = ?
                    AND DATE_FORMAT(data_inicio, '%Y-%m-%d') = CURDATE();`;
    const [linhas] = await con.query(comando, [userID]);
  
    return linhas;
  }
export { BuscarAgendaPorIDUsuario };
