CREATE DATABASE db_compasso;

CREATE TABLE `cidade` (
  `id_cidade` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome_cidade` varchar(100) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `dt_cadastro` datetime NOT NULL DEFAULT current_timestamp()
);


CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `dt_nascimento` date NOT NULL,
  `idade` int(11) NOT NULL,
  `id_cidade` int(11) NOT NULL,
  `dt_cadastro` datetime NOT NULL DEFAULT current_timestamp()
);

