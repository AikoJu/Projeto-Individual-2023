CREATE DATABASE IF NOT EXISTS crochetando;

USE crochetando;

select * FROM USUARIO;
CREATE TABLE IF NOT EXISTS usuario (
  idUsuario int AUTO_INCREMENT PRIMARY KEY,
  nomeUsuario varchar(45),
  email varchar(60),
  nivel varchar(20),
  senha varchar(15)
);

CREATE TABLE IF NOT EXISTS projeto (
  idProjeto int AUTO_INCREMENT PRIMARY KEY,
  nomeProjeto varchar(20),
  carreira int,
  pontos int,
  pontosAtual int,
  carreiraAtual int,
  fkUsuarioProjeto int,
  CONSTRAINT fkUsuario FOREIGN KEY (fkUsuarioProjeto) REFERENCES usuario (idusuario)
);

CREATE TABLE IF NOT EXISTS receitas (
  idReceitas int AUTO_INCREMENT PRIMARY KEY,
  nomeReceita varchar(50),
  material varchar(40),
  pontosUtilizados varchar(30),
  passoAPasso varchar(2000),
  fkUsuarioReceita int,
  fkProjeto int,
  CONSTRAINT fkReceitas FOREIGN KEY (fkUsuarioReceita) REFERENCES usuario (idusuario),
  CONSTRAINT fkProjeto FOREIGN KEY (fkProjeto) REFERENCES projeto(idProjeto)
);

INSERT INTO usuario (nomeUsuario, email, nivel, senha) VALUES 
('Usuário 1', 'usuario1@example.com', 'experiente', 'senha1'),
('Usuário 2', 'usuario2@example.com', 'iniciante', 'senha2'),
('Usuário 3', 'usuario3@example.com', 'experiente', 'senha3'),
('Usuário 4', 'usuario4@example.com', 'iniciante', 'senha4'),
('Usuário 5', 'usuario5@example.com', 'iniciante', 'senha5'),
('Usuário 6', 'usuario6@example.com', 'experiente', 'senha6'),
('Usuário 7', 'usuario7@example.com', 'intermediario', 'senha7'),
('Usuário 8', 'usuario8@example.com', 'intermediario', 'senha8');
 
 select * from projeto;
 select * from receitas;
 select * FROM usuario;