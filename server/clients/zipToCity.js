const request = require("https");
const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_MAPS_API_KEY,
  Promise: Promise
});

console.log("dear");
function zipToCity(zipCode) {
  googleMapsClient
    .geocode({
      address: zipCode
    })
    .asPromise()
    .then(response => {
      const results = response.json.results;
      console.log(results[0]["formatted_address"]);
    })
    .catch(err => {
      console.log(err);
    });
}
zipToCity("10003");
module.exports = { zipToCity };
