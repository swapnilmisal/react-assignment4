import {
  randomCitiesFailed,
  randomCitiesRequest,
  randomCitiesSuccess
} from "../actions/randomCities";
import getRandomCitiesApi from "../apis/getRandomCitiesApi";

function getRandomCities() {
  return async function(dispatch) {
    dispatch(randomCitiesRequest());
    try {
      const res = await getRandomCitiesApi();
      const data = await res.json();
      return dispatch(randomCitiesSuccess(data));
    } catch (err) {
      return dispatch(randomCitiesFailed(err));
    }
  };
}
export default getRandomCities;
