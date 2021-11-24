const { Router } = require("express");
const app = Router();

const { Activity, Country } = require("../db");

app.post("/", async (req, res) => {
  const { nombre, dificultad, duracion, temporada, idCountry } = req.body;
  const searchActivity = await Activity.findOne({ where: { nombre } });
  if (!searchActivity) {
    const activity = await Activity.create({
      nombre,
      dificultad,
      duracion,
      temporada,
    });

    if (idCountry) {
      const country = await Country.findOne({
        where: {
          id: idCountry,
        },
        attributes: ["id"],
      });

      activity.addCountries(country);
    }

    return res.json({ message: "Created activity!" });
  } else {
    return res.json({ message: "activity already exists!" });
  }
});

module.exports = app;
