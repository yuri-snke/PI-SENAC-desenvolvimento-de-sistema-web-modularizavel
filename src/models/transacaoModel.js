class Transacao {
  constructor({
    id,
    usuario_id,
    nome_transacao,
    valor,
    data_transacao,
    tipo_transacao,
  }) {
    this.id = Number(id);
    this.usuario_id = Number(usuario_id);
    this.nome_transacao = nome_transacao;
    this.valor = parseFloat(valor);
    this.data_transacao = data_transacao
      ? this.convertToUTC(data_transacao)
      : null;
    this.tipo_transacao = tipo_transacao;
  }

  convertToUTC(dateString) {
    const date = new Date(dateString);
    const utcDate = new Date(date.toISOString());
    return utcDate;
  }
}

export { Transacao };
