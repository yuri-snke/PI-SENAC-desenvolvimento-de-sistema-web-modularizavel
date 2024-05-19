class Cursos {
    constructor({
      id,
      nome,
      preco,
    }) {
      this.id = Number(id);
      this.nome = nome;
      this.preco = parseFloat(preco);
    }
  }
  
  export { Cursos };