import { BuscarTransacoesPorID } from "../data/repositories/transacaoRepository.js";

export const obterTransacoes = async (req, res) => {
  try {
    const results = await BuscarTransacoesPorID(1);

    console.log(results);
    if (results.length > 0) {
      res.send(results);
    } else {
      res.status(404).json({ message: "Nenhum resultado encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
