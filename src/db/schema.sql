CREATE DATABASE crud_esports;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS jogadores (
  codigo_jogador UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  nome_jogador VARCHAR NOT NULL,
  habilidade_principal VARCHAR
);

INSERT INTO jogadores(nome_jogador, habilidade_principal) VALUES ('Agos Dalcin Rufino', 'Rush Banana');