const { Router } = require("express");
// Importar todos los routers;
const countryRoute = require("./country.route");
const activityRoute = require("./activity.route");
const countriesNames = require("./countries_names.route");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/api/countries", countryRoute);
router.use("/api/activity", activityRoute);
router.use("/api/countries_names", countriesNames);

module.exports = router;
