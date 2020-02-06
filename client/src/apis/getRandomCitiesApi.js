import { url } from "../config";

function getRandomCitiesApi() {
  return fetch(`${url}/random/cities`);
}

export default getRandomCitiesApi;
