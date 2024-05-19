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
    this.data_inicio = data_inicio ? this.convertToUTC(data_inicio) : null;
    this.data_fim = data_fim ? this.convertToUTC(data_fim) : null;
    this.nome = nome;
    this.preco = parseFloat(preco);
  }

  convertToUTC(dateString) {
    const date = new Date(dateString);
    const utcDate = new Date(date.toISOString());
    return utcDate;
  }
}

export { Desconto };
