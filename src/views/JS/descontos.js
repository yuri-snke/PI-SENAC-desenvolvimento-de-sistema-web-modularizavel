document.addEventListener("DOMContentLoaded", async function (e) {
  await ValidaToken();

  const descontos = await GetAPI("/api/desconto");

  descontos.forEach(async (desconto) => {
    await CriarDesconto(desconto);
  });
});

async function CriarDesconto(desconto) {
  const novoDesconto = document.createElement("li");

  const valorDesconto = (desconto.preco * desconto.desconto_percentual) / 100;
  const valorComDesconto = desconto.preco - valorDesconto;

  novoDesconto.innerHTML = `
  <h4>Desconto no curso: ${desconto.nome}</h4>
  <p>Valor original do curso: <b>${mascaraMoeda(desconto.preco)}</b></p>
  <p>Desconto de: <b>${desconto.desconto_percentual}%</b></p>
  <p>Valor com desconto: <b>${mascaraMoeda(valorComDesconto)}</b></p>
  <p>Válido de: <b>${new Date(desconto.data_inicio).toLocaleDateString(
    "pt-BR"
  )}</b> até <b>${new Date(desconto.data_fim).toLocaleDateString("pt-BR")}</b>`;

  document.getElementById("listaDescontos").appendChild(novoDesconto);
}
