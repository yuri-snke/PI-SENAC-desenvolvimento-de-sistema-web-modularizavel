document.addEventListener("DOMContentLoaded", async function (e) {
  await ValidaToken();

  const transacoes = await GetAPI("/api/transacao");

  if (transacoes && transacoes.message === "Nenhum resultado encontrado") {
    return;
  }

  transacoes.forEach(async (registro) => {
    await CriarRegistro(registro);
  });
});

async function CriarRegistro(registro) {
  const novoRegistro = document.createElement("li");

  const dataFormatada = new Date(registro.data_transacao).toLocaleDateString(
    "pt-BR"
  );

  novoRegistro.innerHTML = `<p class="ID_transacao" style="display:none;">ID: ${
    registro.id
  }</p>
      <h4>${registro.nome_transacao}</h4>
      <p>Data da transação: <b>${dataFormatada}</b></p>
      <p>Tipo de transação: <b>${registro.tipo_transacao.toUpperCase()}</b></p>
      <p class="transacao">Valor: <b>${mascaraMoeda(registro.valor)}</b></p>
      <div class="btns">
      <a href="editarTransacao.html?id=${
        registro.id
      }">Editar Transação <i class="fa-solid fa-pen-to-square"></i></a>
      <a onclick="confirmarExclusao(${
        registro.id
      })">Excluir Transação <i class="fa-solid fa-trash"></i></a>
      </div>`;

  document.getElementById("listaRegistros").appendChild(novoRegistro);
}

async function confirmarExclusao(id) {
  if (confirm(`Deseja excluir a transação?`)) {
    try {
      await DeleteAPI(`/api/transacao/${id}`);

      const listaRegistros = document.getElementById("listaRegistros");
      const registros = listaRegistros.getElementsByTagName("li");

      for (let i = 0; i < registros.length; i++) {
        const idTransacao = registros[i]
          .querySelector(".ID_transacao")
          .textContent.trim()
          .replace("ID: ", "");
        if (idTransacao === id.toString()) {
          registros[i].remove();
          break;
        }
      }
    } catch (error) {
      console.error("Erro ao excluir transação:", error);
      alert("Erro ao excluir transação. Por favor, tente novamente.");
    }
  }
}
