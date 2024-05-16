// models/transacaoModel.js
class Transacao {
  constructor({
    id,
    usuario_id,
    nome_transacao,
    valor,
    data_transacao,
    tipo_transacao,
  }) {
    this.id = id;
    this.usuario_id = usuario_id;
    this.nome_transacao = nome_transacao;
    this.valor = valor;
    this.data_transacao = data_transacao;
    this.tipo_transacao = tipo_transacao;
  }

  toJSON() {
    return {
      id: this.id,
      usuario_id: this.usuario_id,
      nome_transacao: this.nome_transacao,
      valor: this.valor,
      data_transacao: this.data_transacao,
      tipo_transacao: this.tipo_transacao,
    };
  }
}

export { Transacao };
