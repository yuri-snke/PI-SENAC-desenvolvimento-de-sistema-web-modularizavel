document.addEventListener("DOMContentLoaded", function () {
  async function enviarTransacao(transacaoData) {
    try {
      await PostAPI("/api/transacao", transacaoData);
      exibirModal("Transação salva com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar requisição para a API:", error);
      exibirModal("Erro ao salvar a transação. Por favor, tente novamente.");
    }
  }

  function criarTransacaoData() {
    const nomeTransacao = document.getElementById("nome_transacao").value;
    const valorTransacao = parseFloat(
      document
        .getElementById("valor_transacao")
        .value.replace(/[^\d,]/g, "")
        .replace(",", ".")
    ).toFixed(2);
    const tipoTransacao = document.getElementById("tipo_transacao").value;
    const dataTransacao = document.getElementById("data_transacao").value;

    return {
      nome_transacao: nomeTransacao,
      valor: valorTransacao,
      tipo_transacao: tipoTransacao,
      data_transacao: dataTransacao,
    };
  }

  function exibirModal(mensagem) {
    const modalMensagem = document.getElementById("modalMensagem");
    modalMensagem.querySelector("p").textContent = mensagem;
    modalMensagem.style.display = "block";
    setTimeout(function () {
      modalMensagem.style.display = "none";
      limparFormulario();
    }, 3000);
  }

  function limparFormulario() {
    const form = document.getElementById("transacaoForm");
    if (form) {
      form.reset();
    }
  }

  document
    .getElementById("salvarTransacaoBtn")
    .addEventListener("click", async function () {
      const transacaoData = criarTransacaoData();

      if (
        !transacaoData.nome_transacao ||
        !transacaoData.valor ||
        !transacaoData.tipo_transacao ||
        !transacaoData.data_transacao
      ) {
        exibirModal("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      await enviarTransacao(transacaoData);
    });

  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("modalMensagem").style.display = "none";
  });
});
