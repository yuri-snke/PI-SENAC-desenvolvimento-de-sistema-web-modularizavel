class Agenda {
  constructor({ id, usuario_id, titulo, data_inicio, data_fim }) {
    this.id = Number(id);
    this.usuario_id = Number(usuario_id);
    this.titulo = titulo;
    this.data_inicio = data_inicio ? this.convertToUTC(data_inicio) : null;
    this.data_fim = data_fim ? this.convertToUTC(data_fim) : null;
  }

  convertToUTC(dateString) {
    const date = new Date(dateString);
    const utcDate = new Date(date.toISOString());
    return utcDate;
  }
}

export { Agenda };
