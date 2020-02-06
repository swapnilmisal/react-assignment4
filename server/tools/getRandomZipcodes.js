const randomZipcodes = require("random-zipcode");
const { NUMBER_OF_CITIES } = require("../const");

function getRandomZipcodes(length = NUMBER_OF_CITIES) {
  const zipcodes = [];
  for (let i = 0; i < length; i++) zipcodes.push(randomZipcodes());
  return zipcodes;
}
module.exports = getRandomZipcodes;
