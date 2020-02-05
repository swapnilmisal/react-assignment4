const OAuth = require("oauth");

function getWhetherData(location) {
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
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${location}&format=json`,
    null,
    null,
    function(err, data, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.parse(data));
      }
    }
  );
}
getWhetherData('New York, NY')
module.exports = { getWhetherData };
