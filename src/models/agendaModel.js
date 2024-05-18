class Agenda {
    constructor({
      id,
      usuario_id,
      titulo,
      data_inicio,
      data_fim
    }) {
      this.id = Number(id);
      this.usuario_id = Number(usuario_id);
      this.titulo = titulo;
      this.data_inicio = new Date(data_inicio);
      this.data_fim = new Date(data_fim);
    }
  }
  
  export { Agenda };
  