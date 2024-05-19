document.addEventListener("DOMContentLoaded", async function (e) {
    await ValidaToken();
  
    const cursos = await GetAPI("/api/curso");
  
    cursos.forEach(async (curso) => {
      await CriarCurso(curso);
    });
  });
  
  async function CriarCurso(curso) {
    const novoCurso = document.createElement("li");
  
    novoCurso.innerHTML = `
    <h4>Nome do curso: ${curso.nome}</h4>
    <p>Preço do curso: <b>${mascaraMoeda(curso.preco)}</b></p>`;
  
    document.getElementById("listaCursos").appendChild(novoCurso);
  }