document.addEventListener("DOMContentLoaded", async function (e) {
  await ValidaToken();

  const saldo = await GetAPI("/api/transacao/ObterSaldo");
  const despesa = await GetAPI("/api/transacao/ObterDespesa");
  const receita = await GetAPI("/api/transacao/ObterReceita");

  document.getElementById("saldo").innerHTML = mascaraMoeda(saldo.valor);
  document.getElementById("despesa").innerHTML = mascaraMoeda(despesa.valor);
  document.getElementById("receita").innerHTML = mascaraMoeda(receita.valor);
  const agenda = await GetAPI("/api/agenda");

  agenda.forEach(async (element) => {
    await CriarListaAgenda(element);
  });
});

async function CriarListaAgenda(item) {
  const newItem = document.createElement("li");
  newItem.innerHTML =
    `<p class="ID_agenda" style="display:none;">ID: ${item.id}</p>
    <h4>` +
    item.titulo +
    `</h4>
    <p>` +
    formatHourUTCToAmericaSaoPaulo(item.hora) +
    ` - duração: ` +
    item.duracao +
    ` minutos </p>` +
    ` <div class="btns">
      <a href="editarAgenda.html?id=${item.id}">Editar Agenda <i class="fa-solid fa-pen-to-square"></i></a>
      <a onclick="confirmarExclusao(${item.id})">Excluir Agenda <i class="fa-solid fa-trash"></i></a>
      </div>`;
  document.getElementById("listaAgenda").appendChild(newItem);
}

async function confirmarExclusao(id) {
  if (confirm(`Deseja excluir a Agenda?`)) {
    try {
      await DeleteAPI(`/api/agenda/${id}`);

      const listaRegistros = document.getElementById("listaAgenda");
      const registros = listaRegistros.getElementsByTagName("li");

      for (let i = 0; i < registros.length; i++) {
        const idAgenda = registros[i]
          .querySelector(".ID_agenda")
          .textContent.trim()
          .replace("ID: ", "");
        if (idAgenda === id.toString()) {
          registros[i].remove();
          break;
        }
      }
    } catch (error) {
      alert("Erro ao excluir transação. Por favor, tente novamente.");
    }
  }
}
