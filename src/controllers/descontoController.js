import { ObterDescontos } from "../data/repositories/descontoRepository.js";

const obterDescontos = async (req, res) => {
  try {
    const results = await ObterDescontos();

    if (results.length > 0) {
      res.send(results);
    } else {
      res.status(404).send({ message: "Nenhum resultado encontrado" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export { obterDescontos };
