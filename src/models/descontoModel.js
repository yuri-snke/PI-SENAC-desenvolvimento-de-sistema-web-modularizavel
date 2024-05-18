class Desconto {
  constructor({
    id,
    curso_id,
    desconto_percentual,
    data_inicio,
    data_fim,
    nome,
    preco,
  }) {
    this.id = Number(id);
    this.curso_id = Number(curso_id);
    this.desconto_percentual = parseFloat(desconto_percentual);
    this.data_inicio = new Date(data_inicio);
    this.data_fim = new Date(data_fim);
    this.nome = nome;
    this.preco = parseFloat(preco);
  }
}

export { Desconto };
