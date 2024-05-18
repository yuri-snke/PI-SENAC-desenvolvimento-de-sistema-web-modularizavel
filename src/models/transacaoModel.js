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
    this.data_transacao = new Date(data_transacao);
    this.tipo_transacao = tipo_transacao;
  }
}

export { Transacao };
