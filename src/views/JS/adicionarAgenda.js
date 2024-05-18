document.addEventListener("DOMContentLoaded", function () {
    async function enviarAgenda(agendaData) {
      try {
        await PostAPI("/api/agenda", agendaData);
        exibirModal("Agenda salva com sucesso!", true);
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
        data_fim: dataFimAgenda
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

        console.log(agendaData)
  
        await enviarAgenda(agendaData);
      });
  
      document.querySelector(".close").addEventListener("click", function () {
      document.getElementById("modalMensagem").style.display = "none";
      window.location.href = "./index.html"
    });
  });
  