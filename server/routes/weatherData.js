var express = require("express");
var router = express.Router();

const { getWeatherData } = require("../clients/weather");

router.get("/:city", function(req, res, next) {
  try {
    getWeatherData(req.params.city, function(data) {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
