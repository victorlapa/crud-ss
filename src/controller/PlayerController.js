const PlayerRepository = require("../repository/PlayerRepository");
const PlayerRepositoryMemoria = require("../repository/PlayerRepositoryMemoria");

class PlayerController {
  async index(request, response) {
    const players = await PlayerRepository.findAll();

    response.json(players);
  }

  async findBySkillName(request, response) {
    const { skill } = request.params;

    console.log(request.params, "params");

    const player = await PlayerRepository.findBySkillName(skill);

    if (!player) {
      return response.status(404).json({ error: "Jogador não encontrado" });
    }

    response.json(player);
  }

  async store(request, response) {
    const { name, skill } = request.body;

    if (!name) {
      response
        .status(400)
        .json({ error: "O campo 'nome' não pode estar vazio." });
    }

    const player = PlayerRepository.create({ name, skill });

    response.json(player);
  }

  async update(request, response) {
    const { id } = request.params;

    const { name, skill } = request.body;

    const player = PlayerRepository.update(id, {
      name,
      skill,
    });

    response.json(player);
  }

  async delete(request, response) {
    const { id } = request.params;

    await PlayerRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new PlayerController();
