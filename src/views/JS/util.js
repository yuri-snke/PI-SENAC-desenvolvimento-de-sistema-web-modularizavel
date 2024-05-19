function formatarMoeda(input) {
  input.addEventListener("input", function (event) {
    const onlyDigits = event.target.value
      .split("")
      .filter((s) => /\d/.test(s))
      .join("")
      .padStart(3, "0");

    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);

    event.target.value = mascaraMoeda(digitsFloat);
  });
}

function mascaraMoeda(valor, locale = "pt-BR", currency = "BRL") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(valor);
}

function exibirModal(mensagem, formulario = null) {
  const modalMensagem = document.getElementById("modalMensagem");
  modalMensagem.querySelector("p").textContent = mensagem;
  modalMensagem.style.display = "block";
  setTimeout(function () {
    modalMensagem.style.display = "none";
    if (formulario) {
      limparFormulario(formulario);
    }
  }, 3000);
}

function limparFormulario(formulario) {
  const form = document.getElementById(formulario);
  if (form) {
    form.reset();
  }
}
