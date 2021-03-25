---Rode o script no banco da sua aplicação

CREATE TABLE usuarios(
	id INTEGER PRIMARY KEY IDENTITY,
	usuario VARCHAR(30) NOT NULL,
	senha VARCHAR(100) NOT NULL,
	perfil VARCHAR(30) NOT NULL
)

CREATE TABLE cadastrar (
	id INTEGER PRIMARY KEY IDENTITY,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(50) NOT NULL,
	tempo VARCHAR(50) NOT NULL,
	especie_bicho VARCHAR(50) NOT NULL,
	diagnostico VARCHAR (2000) NOT NULL,
	raca VARCHAR(50) NOT NULL,
	nome_bicho VARCHAR(50) NOT NULL,
	valor VARCHAR(50) NOT NULL,
	banho VARCHAR(50) NOT NULL,
	vacina VARCHAR(50) NOT NULL,
	tipo_vacina VARCHAR(100) NOT NULL,
	endereco VARCHAR(100) NOT NULL,
	bairro VARCHAR(100) NOT NULL,
	cidade VARCHAR(100) NOT NULL,
	telefone VARCHAR(50) NOT NULL
	
)


CREATE TABLE cadastrar_resultado (
	id INTEGER PRIMARY KEY IDENTITY,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(50) NOT NULL,
	tempo VARCHAR(50) NOT NULL,
	especie_bicho VARCHAR(50) NOT NULL,
	diagnostico VARCHAR (2000) NOT NULL,
	raca VARCHAR(50) NOT NULL,
	nome_bicho VARCHAR(50) NOT NULL,
	valor VARCHAR(50) NOT NULL,
	banho VARCHAR(50) NOT NULL,
	vacina VARCHAR(50) NOT NULL,
	tipo_vacina VARCHAR(100) NOT NULL,
	endereco VARCHAR(100) NOT NULL,
	bairro VARCHAR(100) NOT NULL,
	cidade VARCHAR(100) NOT NULL,
	telefone VARCHAR(50) NOT NULL
	
)

CREATE TABLE total_especie (
	especie_bicho VARCHAR (50)
)

INSERT INTO usuarios(usuario, senha, perfil)
VALUES ('admin', 'e10adc3949ba59abbe56e057f20f883e', 'adm')

INSERT INTO usuarios(usuario, senha, perfil)
VALUES ('user', 'e10adc3949ba59abbe56e057f20f883e', 'user')

---A senha está em md5, é 123456