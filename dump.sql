-- drop the database if it exists
DROP DATABASE IF EXISTS pi_senac_saude;

-- create the database
CREATE DATABASE pi_senac_saude;

-- use the database
USE pi_senac_saude;

-- create table tbl_usuario
CREATE TABLE tbl_usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- create table tbl_transacao
CREATE TABLE tbl_transacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    nome_transacao VARCHAR(100) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    data_transacao DATE NOT NULL,
    tipo_transacao ENUM('despesa', 'receita') NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES tbl_usuario(id)
);

-- create table tbl_curso
CREATE TABLE tbl_curso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

-- create table tbl_descontos
CREATE TABLE tbl_descontos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    curso_id INT NOT NULL,
    desconto_percentual DECIMAL(5, 2) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    FOREIGN KEY (curso_id) REFERENCES tbl_curso(id)
);

-- create table tbl_agenda
CREATE TABLE tbl_agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    data_inicio DATETIME NOT NULL,
    data_fim DATETIME NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES tbl_usuario(id)
);
