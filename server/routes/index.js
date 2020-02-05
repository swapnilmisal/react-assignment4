var express = require("express");
var router = express.Router();
var { getWhetherData } = require("../clients/weather");
var { zipToCity } = require("../clients/zipToCity");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
