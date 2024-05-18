import con from "../connection.js";

async function CriarUsuario(usuario) {
    let comando = `INSERT INTO tbl_usuario
                  (nome, email, senha)
                  VALUES (?, ?, ?)`;
  
    await con.query(comando, [
      usuario.nome,
      usuario.email,
      usuario.senha
    ]);  
  }

  export {CriarUsuario}