import con from "../connection.js";


async function ValidarLogin(userLogin){
    let comando = `SELECT * FROM tbl_usuario WHERE login = ? and senha = ?`;
    const [linhas] = await con.query(comando, [userLogin.login, userLogin.senha]);

    return linhas;
}


export {ValidarLogin}