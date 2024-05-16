CREATE DATABASE pi_senac_saude;

USE pi_senac_saude;

create table tbl_usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    senha varchar(50) NOT NULL
);

create table tbl_transacao(
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
	nome_transacao VARCHAR(100) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    data_transacao DATE NOT NULL,
    tipo_transacao ENUM('despesa', 'receita') NOT NULL,
    foreign key (usuario_id) references tbl_usuario(id)
);

CREATE TABLE tbl_curso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE tbl_descontos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    curso_id INT NOT NULL,
    desconto_percentual DECIMAL(5, 2) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    FOREIGN KEY (curso_id) REFERENCES tbl_curso(id)
);

CREATE TABLE tbl_agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
	usuario_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    data_inicio DATETIME NOT NULL,
    data_fim DATETIME NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES tbl_usuario(id)
);


/*select * from tbl_usuario*/
