const { Router } = require("express");
const app = Router();
const { Country } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

// get all countries----------------------------------------
app.get("/", async (req, res) => {
  const { name } = req.query;

  if (!name) {
    // si query no existe
    const countriesDB = await Country.findAll();

    const countries = countriesDB.map((c) => ({
      id: c.id,
      imagen: c.imagen,
      nombre: c.nombre,
      continente: c.continente,
    }));

    return res.json({ from: "DB", results: countries });
  } else {
    // si query existe
    const buscar = name.charAt(0).toUpperCase() + name.slice(1);
    const countryDB = await Country.findOne({
      where: {
        nombre: {
          [Op.iLike]: `%${buscar}%`,
        },
      },
    });
    if (countryDB) return res.json({ from: "DB", result: countryDB });
    else
      return res.json({ from: "DB", result: { message: "country not found" } });
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const country = await Country.findByPk(id.toUpperCase());
  if (country) return res.json(country);
  else return res.json({ message: "country not found!" });
});

module.exports = app;
