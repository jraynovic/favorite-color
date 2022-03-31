const express = require("express");
const historyRouter = express.Router();
const History = require("../Models/History");

historyRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const history = await History.findAll({});
      res.send(history);
    } catch (err) {
      res.send(err);
    }
  })
  .post(async (req, res) => {
    console.log(req.body.color);
    try {
      const newHistory = await History.create(req.body.color);
      res.send(newHistory);
    } catch (err) {
      res.send(err);
    }
  });

module.exports = historyRouter;
