var OAuth = require("oauth");

function getWeatherData(location, cb) {
  const header = {
    "X-Yahoo-App-Id": process.env.APP_ID
  };
  const request = new OAuth.OAuth(
    null,
    null,
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "1.0",
    null,
    "HMAC-SHA1",
    null,
    header
  );
  request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${location}&format=json&u=c`,
    null,
    null,
    function(err, data, result) {
      if (err) {
        console.log(err);
      } else {
        cb(data);
      }
    }
  );
}

function getWeatherDataPromise(location) {
  return new Promise((resolve, reject) => {
    try {
      const header = {
        "X-Yahoo-App-Id": process.env.APP_ID
      };
      const request = new OAuth.OAuth(
        null,
        null,
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "1.0",
        null,
        "HMAC-SHA1",
        null,
        header
      );
      request.get(
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${location}&format=json&u=c`,
        null,
        null,
        function(err, data, result) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
}

module.exports = { getWeatherData, getWeatherDataPromise };
