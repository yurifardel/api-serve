const express = require("express");

const SecondController = require("./controllers/SecondController");
const FirstController = require("./controllers/FirstController");

const routes = express.Router();

routes.get("/controller", FirstController.index);
routes.post("/controller", FirstController.create);
routes.get("/completed", SecondController.index);
routes.post("/completed", SecondController.create);

module.exports = routes;
