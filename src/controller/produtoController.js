export const obterTodos = async (db, req, res) => {
  try {
    const results = await db.query("SELECT * FROM tbl_produto");
    if (results?.[0]?.length > 0) {
      res.send(results[0]);
    } else {
      res.status(404).json({ message: "Nenhum resultado encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
