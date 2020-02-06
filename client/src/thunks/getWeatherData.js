import {
  weatherDataFailed,
  weatherDataRequest,
  weatherDataSuccess
} from "../actions/weatherData";
import getWeatherDataApi from "../apis/getWeatherDataApi";

function getWeatherData(city) {
  return async function(dispatch) {
    dispatch(weatherDataRequest());
    try {
      const res = await getWeatherDataApi(city);
      const data = await res.json();
      return dispatch(weatherDataSuccess(data));
    } catch (err) {
      console.log(err);
      return dispatch(weatherDataFailed(err));
    }
  };
}
export default getWeatherData;
