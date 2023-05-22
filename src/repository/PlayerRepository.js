const db = require("../db");

class PlayerRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";

    const rows = await db.query(`
      SELECT *
      FROM jogadores
      ORDER BY jogadores.nome_jogador ${direction}
    `);
    return rows;
  }

  async findBySkillName(nomeHabilidade) {
    const [row] = await db.query(
      `
      SELECT *
      FROM jogadores
      WHERE jogadores.habilidade_principal = $1
    `,
      [nomeHabilidade]
    );
    return row;
  }

  async create({ name, skill }) {
    const [row] = await db.query(
      `
    INSERT INTO jogadores(nome_jogador, habilidade_principal)
    VALUES($1, $2)
    RETURNING *
    `,
      [name, skill]
    );

    return row;
  }

  async update(id, { name, skill }) {
    const [row] = await db.query(
      `
      UPDATE jogadores
      SET nome_jogador = $1, habilidade_principal = $2
      WHERE codigo_jogador = $3
      RETURNING *
    `,
      [name, skill, id]
    );

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(
      `
      DELETE FROM jogadores WHERE codigo_jogador = $1
    `,
      [id]
    );

    return deleteOp;
  }
}

module.exports = new PlayerRepository();
