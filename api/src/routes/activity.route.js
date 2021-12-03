const { Router } = require("express");
const app = Router();

const { Activity, Country } = require("../db");

app.post("/", async (req, res) => {
  const { nombre, dificultad, duracion, temporada, countriesNames } = req.body;

  const searchActivity = await Activity.findOne({ where: { nombre } });

  if (!searchActivity) {
    const activity = await Activity.create({
      nombre,
      dificultad,
      duracion,
      temporada,
    });

    for (let i = 0; i < countriesNames.length; i++) {
      const country = await Country.findAll({
        where: {
          nombre: countriesNames[i],
        },
        attributes: ["id"],
      });
      activity.addCountries(country[0].id);
    }

    return res.json({ message: "activity created" });
  } else {
    return res.json({ message: "activity already exists" });
  }
});

// devuelvo las actividades
app.get("/", async (req, res) => {
  const activities = await Activity.findAll();
  res.json(activities);
});

module.exports = app;
