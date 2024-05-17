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
