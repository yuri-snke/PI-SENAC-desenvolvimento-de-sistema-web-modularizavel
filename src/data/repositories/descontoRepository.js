import { Desconto } from "../../models/descontoModel.js";
import con from "../connection.js";

async function ObterDescontos() {
  let comando = `select tbl_descontos.id, tbl_descontos.curso_id, tbl_descontos.desconto_percentual,
                tbl_descontos.data_inicio, tbl_descontos.data_fim, tbl_curso.nome, tbl_curso.preco
                from tbl_descontos inner join tbl_curso ON tbl_curso.id = tbl_descontos.curso_id;`;

  const [result] = await con.query(comando);

  if (result.length > 0) {
    const descontos = result.map((desconto) => new Desconto(desconto));
    return descontos;
  } else {
    throw new Error("Não há registros a serem capturados.");
  }
}

export { ObterDescontos };
