CREATE DATABASE curso_angularjs;
USE curso_angularjs;
CREATE TABLE users(
	id INT(11) AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255),
	idade INT(11),
	telefone VARCHAR(13)
);