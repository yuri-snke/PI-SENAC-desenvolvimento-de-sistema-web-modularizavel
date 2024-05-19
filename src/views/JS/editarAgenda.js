document.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const agendaId = urlParams.get("id");


  if(agendaId){
    try{
      const agenda =  await GetAPI(`/api/agenda/${agendaId}`);

      const tituloAgenda = document.getElementById("tituloAgenda").value = agenda.titulo;
      const dataInicioAgenda = document.getElementById("dataInicioAgenda").value = new Date(agenda.data_inicio).toISOString().slice(0,16);
      const dataFimAgenda = document.getElementById("dataFimAgenda").value = new Date(agenda.data_fim).toISOString().slice(0,16);
      
    }catch (error) {
      exibirModal("Erro ao carregar Agenda. Por favor, tente novamente.");
    }


  }

  async function enviarAgenda(agendaData) {
    try {
      console.log(agendaData)
      console.log(agendaId)

      await PutAPI(`/api/agenda/${agendaId}`, agendaData);
      exibirModal("Agenda salva com sucesso!", "agendaForm");
    } catch (error) {
      exibirModal("Erro ao salvar a agenda. Por favor, tente novamente.");
    }
  }

  function criarAgendaData() {
    const tituloAgenda = document.getElementById("tituloAgenda").value;
    const dataInicioAgenda = document.getElementById("dataInicioAgenda").value;
    const dataFimAgenda = document.getElementById("dataFimAgenda").value;

    return {
      titulo: tituloAgenda,
      data_inicio: dataInicioAgenda,
      data_fim: dataFimAgenda,
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
});
