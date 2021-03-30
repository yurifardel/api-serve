const express = require("express");

const FirstController = require("./controllers/firstController");

const routes = express.Router();

// routes.get("/controller");
routes.post("/controller", FirstController.create);

module.exports = routes;
