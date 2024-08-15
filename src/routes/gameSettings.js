const express = require("express");
const gameSettingsRouter = express.Router();
const {
  getAllGameSettings,
  updateGameSettings,
} = require("../controllers/gameSettings.js");
const { authMiddleware } = require("../middleware/auth.js");

gameSettingsRouter.get("/gameSettings", authMiddleware, getAllGameSettings);
gameSettingsRouter.post("/gameSettings", authMiddleware, updateGameSettings);

module.exports = gameSettingsRouter;
