import con from "../connection.js";

async function BuscarTransacoesPorID(userID){
    let comando = `SELECT * FROM tbl_transacao WHERE usuario_id = ?`;
    const [linhas] = await con.query(comando, [userID]);

    console.log(linhas)

    return linhas;
}


export {BuscarTransacoesPorID}