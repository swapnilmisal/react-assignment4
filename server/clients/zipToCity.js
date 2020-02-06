const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_MAPS_API_KEY,
  Promise: Promise
});

function zipToCity(zipcode) {
  zipToCityPromise(zipcode)
    .then(response => {
      const results = response.json.results;
      return results[0]["formatted_address"];
    })
    .catch(err => {
      console.log(err);
    });
}

function zipToCityPromise(zipcode) {
  return googleMapsClient
    .geocode({
      address: zipcode
    })
    .asPromise();
}
module.exports = { zipToCity, zipToCityPromise };
