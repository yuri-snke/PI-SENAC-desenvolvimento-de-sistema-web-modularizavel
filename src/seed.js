import "dotenv/config";
import fs from "fs";
import mysql from "mysql2/promise";

const seedDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PWD,
    });

    // Ler o conteúdo do arquivo dump.sql
    const dumpSQL = fs.readFileSync("./dump.sql", "utf-8");

    // Dividir o script SQL em instruções individuais
    const sqlStatements = dumpSQL
      .split(";")
      .filter((statement) => statement.trim() !== "");

    // Executar cada instrução SQL individualmente
    for (const statement of sqlStatements) {
      await connection.query(statement);
    }

    console.log("Banco de dados e tabelas criados com sucesso!");

    // Popula os dados
    await populateData(connection);

    await connection.end();
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
  }
};

const populateData = async (connection) => {
  await connection.query(
    "INSERT INTO tbl_usuario (nome, email, senha) VALUES (?, ?, ?)",
    ["Administrador", "admin", "admin"]
  );
  console.log("Usuário admin criado com sucesso!");

  // Populando tabela tbl_transacao
  const transacoes = [
    [1, "Transação 1", 100.0, "2024-05-18", "receita"],
    [1, "Transação 2", 200.0, "2024-05-19", "despesa"],
    [1, "Transação 3", 150.0, "2024-05-20", "receita"],
  ];

  for (const transacao of transacoes) {
    await connection.query(
      "INSERT INTO tbl_transacao (usuario_id, nome_transacao, valor, data_transacao, tipo_transacao) VALUES (?, ?, ?, ?, ?)",
      transacao
    );
  }

  console.log("Transações populadas com sucesso!");

  // Populando tabela tbl_curso
  const cursos = [
    ["Curso de Enfermagem", 300.0],
    ["Curso de Nutrição", 250.0],
    ["Curso de Primeiros Socorros", 200.0],
  ];

  for (const curso of cursos) {
    await connection.query(
      "INSERT INTO tbl_curso (nome, preco) VALUES (?, ?)",
      curso
    );
  }

  console.log("Cursos populados com sucesso!");

  // Populando tabela tbl_descontos
  const descontos = [
    [1, 10, "2024-05-01", "2024-05-31"],
    [2, 15, "2024-05-01", "2024-05-31"],
    [3, 20, "2024-05-01", "2024-05-31"],
  ];

  for (const desconto of descontos) {
    await connection.query(
      "INSERT INTO tbl_descontos (curso_id, desconto_percentual, data_inicio, data_fim) VALUES (?, ?, ?, ?)",
      desconto
    );
  }

  console.log("Descontos populados com sucesso!");

  // Populando tabela tbl_agenda
  const eventos = [
    [1, "Evento 1", "2024-05-25 08:00:00", "2024-05-25 09:00:00"],
    [1, "Evento 2", "2024-05-26 08:00:00", "2024-05-26 09:00:00"],
    [1, "Evento 3", "2024-05-27 08:00:00", "2024-05-27 09:00:00"],
  ];

  for (const evento of eventos) {
    await connection.query(
      "INSERT INTO tbl_agenda (usuario_id, titulo, data_inicio, data_fim) VALUES (?, ?, ?, ?)",
      evento
    );
  }

  console.log("Agenda populada com sucesso!");
};

seedDatabase();
