const { Router } = require("express");
const app = Router();

app.get("/", (req, res) => {
  res.send("hello world -> activity point");
});

module.exports = app;
