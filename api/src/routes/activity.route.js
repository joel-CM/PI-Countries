const { Router } = require("express");
const app = Router();

const { Activity } = require("../db");

app.post("/", async (req, res) => {
  const { nombre, dificultad, duracion, temporada } = req.body;
  await Activity.create({ nombre, dificultad, duracion, temporada });
  res.json({ message: "Created activity!" });
});

module.exports = app;
