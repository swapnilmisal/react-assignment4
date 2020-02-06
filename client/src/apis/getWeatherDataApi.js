import { url } from "../config";

function getWeatherDataApi(city) {
  return fetch(`${url}/weatherData/${city}`);
}

export default getWeatherDataApi;
