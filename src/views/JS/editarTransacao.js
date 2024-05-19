document.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const transacaoId = urlParams.get("id");

  if (transacaoId) {
    try {
      const transacao = await GetAPI(`/api/transacao/${transacaoId}`);

      document.getElementById("nome_transacao").value =
        transacao.nome_transacao;
      document.getElementById("valor_transacao").value = mascaraMoeda(
        transacao.valor
      );
      document.getElementById("tipo_transacao").value =
        transacao.tipo_transacao;
      document.getElementById("data_transacao").value = new Date(
        transacao.data_transacao
      )
        .toISOString()
        .substring(0, 10);
    } catch (error) {
      exibirModal("Erro ao carregar transação. Por favor, tente novamente.");
    }
  }

  document
    .getElementById("editarTransacaoBtn")
    .addEventListener("click", async function () {
      const nome = document.getElementById("nome_transacao").value;
      const valor = parseFloat(
        document
          .getElementById("valor_transacao")
          .value.replace(/[^\d,]/g, "")
          .replace(",", ".")
      ).toFixed(2);
      const tipo = document.getElementById("tipo_transacao").value;
      const data = document.getElementById("data_transacao").value;

      if (!nome || !valor || !tipo || !data) {
        exibirModal("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      const dadosAtualizados = {
        nome_transacao: nome,
        valor: valor,
        tipo_transacao: tipo,
        data_transacao: data,
      };

      try {
        await PutAPI(`/api/transacao/${transacaoId}`, dadosAtualizados);
        exibirModal("Transação atualizada com sucesso!");
      } catch (error) {
        exibirModal("Erro ao atualizar transação. Por favor, tente novamente.");
      }
    });

  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("modalMensagem").style.display = "none";
  });
});
