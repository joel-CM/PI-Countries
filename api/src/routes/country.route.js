const { Router } = require("express");
const app = Router();
const { Country, Activity } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

// get all countries----------------------------------------
app.get("/", async (req, res) => {
  const { name } = req.query;

  if (!name) {
    // si query no existe
    const countriesDB = await Country.findAll({
      attributes: ["id", "imagen", "nombre", "continente", "poblacion"],
      include: {
        model: Activity,
      },
    });

    return res.json({ from: "DB", results: countriesDB });
  } else {
    // si query existe
    const buscar = name.charAt(0).toUpperCase() + name.slice(1);
    const countryDB = await Country.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${buscar}%`,
        },
      },
      attributes: ["id", "imagen", "nombre", "continente", "poblacion"],
      include: {
        model: Activity,
      },
    });

    if (countryDB.length) return res.json({ from: "DB", result: countryDB });
    else
      return res.json({
        from: "DB",
        result: [{ message: "country not found" }],
      });
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;

  const countryDB = await Country.findOne({
    where: {
      id: id.toUpperCase(),
    },
    include: {
      model: Activity,
    },
  });

  // formateo - actividades
  if (countryDB) {
    const country = {
      id: countryDB["id"],
      nombre: countryDB["nombre"],
      imagen: countryDB["imagen"],
      continente: countryDB["continente"],
      capital: countryDB["capital"],
      subregion: countryDB["subregion"],
      area: countryDB["area"],
      poblacion: countryDB["poblacion"],
      Actividades: countryDB["Activities"].map((a) => ({
        nombre: a.nombre,
        dificultad: a.dificultad,
        duracion: a.duracion,
        temporada: a.temporada,
      })),
    };

    if (country) return res.json(country);
  } else return res.json({ message: "country not found!" });
});

module.exports = app;
