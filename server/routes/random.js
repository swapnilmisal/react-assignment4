var express = require("express");
var router = express.Router();
var getRandomZipcodes = require("../tools/getRandomZipcodes");
var getCitiesFromZipcodes = require("../tools/getCitiesFromZipcode");
const { NUMBER_OF_CITIES } = require("../const");

router.get("/cities", function(req, res, next) {
  try {
    const zipcodes = getRandomZipcodes(NUMBER_OF_CITIES);
    getCitiesFromZipcodes(zipcodes, cities => res.send(cities));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
