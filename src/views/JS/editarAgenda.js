document.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const agendaId = urlParams.get("id");

  if (agendaId) {
    try {
      const agenda = await GetAPI(`/api/agenda/${agendaId}`);

      var dataformatInicio = await formatDate(new Date(agenda.data_inicio));
      var dataformatFim = await formatDate(new Date(agenda.data_fim));

      const tituloAgenda = (document.getElementById("tituloAgenda").value =
        agenda.titulo);
      const dataInicioAgenda = (document.getElementById(
        "dataInicioAgenda"
      ).value = dataformatInicio.slice(0, 16));
      const dataFimAgenda = (document.getElementById("dataFimAgenda").value =
        dataformatFim.slice(0, 16));
    } catch (error) {
      exibirModal("Erro ao carregar Agenda. Por favor, tente novamente.");
    }
  }

  async function enviarAgenda(agendaData) {
    try {
      await PutAPI(`/api/agenda/${agendaId}`, agendaData);
      exibirModal("Agenda atualizada com sucesso!");
    } catch (error) {
      exibirModal("Erro ao atualizar a agenda. Por favor, tente novamente.");
    }
  }

  function criarAgendaData() {
    const tituloAgenda = document.getElementById("tituloAgenda").value;
    const dataInicioAgenda = document.getElementById("dataInicioAgenda").value;
    const dataFimAgenda = document.getElementById("dataFimAgenda").value;

    return {
      titulo: tituloAgenda,
      data_inicio: new Date(dataInicioAgenda).toISOString(),
      data_fim: new Date(dataFimAgenda).toISOString(),
    };
  }

  document
    .getElementById("salvarAgendaBtn")
    .addEventListener("click", async function () {
      const agendaData = criarAgendaData();

      if (
        !agendaData.titulo ||
        !agendaData.data_inicio ||
        !agendaData.data_fim
      ) {
        exibirModal("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      await enviarAgenda(agendaData);
    });

  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("modalMensagem").style.display = "none";
    window.location.href = "./index.html";
  });

  async function formatDate(dateObject) {
    const year = dateObject.getFullYear();
    const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObject.getDate()).slice(-2);

    const hours = ("0" + dateObject.getHours()).slice(-2);
    const minutes = ("0" + dateObject.getMinutes()).slice(-2);
    const seconds = ("0" + dateObject.getSeconds()).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
});
