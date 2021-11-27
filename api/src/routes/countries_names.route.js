const { Router } = require("express");
const app = Router();
const { Country } = require("../db");

app.get("/", async (req, res) => {
  const countriesDB = await Country.findAll({
    attributes: ["nombre"],
  });

  const countries = countriesDB.map((e) => e.nombre);
  const result = countries.sort((a, b) => (a > b ? 1 : -1));
  return res.json(result);
});

module.exports = app;
