import { Cursos } from "../../models/cursoModel.js";
import con from "../connection.js";

async function ObterCursos() {
  let comando = `select tbl_curso.id, tbl_curso.nome, tbl_curso.preco
                from tbl_curso`;

  const [result] = await con.query(comando);

  if (result.length > 0) {
    const cursos = result.map((curso) => new Cursos(curso));
    return cursos;
  } else {
    throw new Error("Não há registros a serem capturados.");
  }
}

export { ObterCursos };
