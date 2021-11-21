//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Country } = require("./src/db");
const axios = require("axios");

const getCountries = async () => {
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

  countries.forEach(async (e) => {
    await Country.findOrCreate({ where: e });
  });
};

getCountries();

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
