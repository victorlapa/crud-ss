const { Router } = require("express");

const PlayerController = require("./src/controller/PlayerController");

const router = Router();

router.get("/players", PlayerController.index);
router.get("/players/:skill", PlayerController.findBySkillName);
router.delete("/players/:id", PlayerController.delete);
router.post("/players", PlayerController.store);
router.put("/players/:id", PlayerController.update);

module.exports = router;
