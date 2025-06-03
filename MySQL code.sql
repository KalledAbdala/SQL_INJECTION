CREATE DATABASE seguranca;
USE seguranca;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50),
  senha VARCHAR(50)
);

INSERT INTO usuarios (usuario, senha) VALUES ('admin', '123456');
