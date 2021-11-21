const { Router } = require("express");
const app = Router();
const { Country } = require("../db");
const axios = require("axios");

app.get("/", async (req, res) => {
  const countriesDB = Country.findAll();
  if (countriesDB.length > 0) {
    return res.json({ length: countriesDB.length, result: countriesDB });
  }

  const countriesApi = await axios.get("https://restcountries.com/v3/all");

  const countries = countriesApi.data.map((c) => ({
    id: c.cca3,
    nombre: c.name.common ? c.name.common : "vacio",
    imagen: c.flags[0] ? c.flags[0] : "image not found",
    continente: c.continents.length
      ? c.continents.join(", ")
      : "continent not found",
    capital: c.capital ? c.capital.join(", ") : "capital not",
    subregion: c.subregion ? c.subregion : "vacio",
    area: c.area ? parseInt(c.area) : 000,
    poblacion: c.population ? parseInt(c.population) : 000,
  }));

  // countries.forEach(async (e) => {
  //   await Country.create(e);
  // });
  await Country.create({
    id: "asd",
    nombre: "asd",
    imagen: "asdf",
    continente: "dsfg",
    capital: "345",
    subregion: "dsfg",
    area: 456,
    poblacion: 345,
  });

  res.json(countries);
});

module.exports = app;
