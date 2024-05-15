import { BuscarAgendaPorIDUsuario } from "../data/repositories/agendaRepository.js";

const obterAgenda = async (req, res) => {
    try {
      const results = await BuscarAgendaPorIDUsuario(req.usuario.userId);
  
      if (results.length > 0) {
        res.send(results);
      } else {
        res.status(404).json({ message: "Nenhum resultado encontrado" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export {obterAgenda}