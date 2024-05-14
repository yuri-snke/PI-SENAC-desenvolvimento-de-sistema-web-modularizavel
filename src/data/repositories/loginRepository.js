import con from "../connection.js";

async function ValidarLogin(userLogin) {
  let comando = `SELECT * FROM tbl_usuario WHERE email = ? and senha = ?`;
  const [linhas] = await con.query(comando, [userLogin.email, userLogin.senha]);

  return linhas;
}

export { ValidarLogin };
