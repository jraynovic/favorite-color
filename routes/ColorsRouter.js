const express = require("express");
const colorsRouter = express.Router();
const Colors = require("../Models/Colors");

colorsRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const allColors = await Colors.findAll({});
      res.send(allColors);
    } catch (err) {
      res.send(err);
    }
    res.send("colors router get");
  })
  .post(async (req, res) => {
    try {
      await Colors.bulkCreate(req.body.colors);
      res.send("Colors Added");
    } catch (err) {
      console.log("ERROR!");
      res.send(err);
    }
  })
  .put(async (req, res) => {
    console.log(req.body);
    try {
      const updatedColor = await Colors.update(
        {
          color: req.body.newColor.color,
          hexCode: req.body.newColor.hexCode,
        },
        { where: { id: req.body.id } }
      );
      res.send(updatedColor);
    } catch (err) {
      console.log("ERROR!");
      res.send(err);
    }
  });

module.exports = colorsRouter;
