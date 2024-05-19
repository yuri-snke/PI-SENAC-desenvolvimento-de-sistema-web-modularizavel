import { ObterCursos } from "../data/repositories/cursoRepository.js";

const obterCursos = async (req, res) => {
  try {
    const results = await ObterCursos();

    if (results.length > 0) {
      res.send(results);
    } else {
      res.status(404).send({ message: "Nenhum resultado encontrado" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export { obterCursos };
