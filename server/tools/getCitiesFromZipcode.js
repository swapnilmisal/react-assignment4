var { zipToCityPromise } = require("../clients/zipToCity");

function getCitiesFromZipcodes(zipcodes, cb) {
  try {
    var promises = zipcodes.map(zipToCityPromise);
    Promise.all(promises)
      .then(responses => responses.map(res => res.json.results))
      .then(results =>
        results.map(result =>
          result[0] ? result[0]["formatted_address"] : "New York, NY"
        )
      )
      .then(cb)
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
}

module.exports = getCitiesFromZipcodes;
