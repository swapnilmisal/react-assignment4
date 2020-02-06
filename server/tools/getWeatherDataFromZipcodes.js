var getCitiesFromZipcodes = require("../tools/getCitiesFromZipcode");
var { getWeatherData, getWeatherDataPromise } = require("../clients/weather");

// Callback implementation

function getWeatherDataFromZipcodes(zipcodes, cb) {
  var cities = [];
  var responses = [];
  var completed_requests = 0;

  function here(values) {
    cities = [...values];
    for (city of cities) {
      getWeatherData(city, function(res) {
        responses.push(res);
        completed_requests++;
        if (completed_requests == cities.length) {
          cb(responses);
        }
      });
    }
  }
  getCitiesFromZipcodes(zipcodes, here);
}

//  async await implementation

function getCitiesFromZipcodesPromise(zipcodes) {
  return new Promise((resolve, reject) => {
    try {
      getCitiesFromZipcodes(zipcodes, resolve);
    } catch (error) {
      reject(error);
    }
  });
}

async function getWeatherDataFromZipcodesAsync(zipcodes) {
  try {
    const cities = await getCitiesFromZipcodesPromise(zipcodes);
    const weatherData = await Promise.all(cities.map(getWeatherDataPromise));
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

async function test(zipcodes) {
  const weatherData = await getWeatherDataFromZipcodesAsync(zipcodes);
    console.log(weatherData);
}

// test(["10001", "95051"]);

module.exports = {
  getWeatherDataFromZipcodes,
  getWeatherDataFromZipcodesAsync
};
