export const WEATHER_DATA_REQUEST = "WEATHER_DATA_REQUEST";
export const WEATHER_DATA_SUCCESS = "WEATHER_DATA_SUCCESS";
export const WEATHER_DATA_FAILED = "WEATHER_DATA_FAILED";

export const weatherDataRequest = city => ({
  type: WEATHER_DATA_REQUEST,
  payload: { city }
});

export const weatherDataSuccess = payload => ({
  type: WEATHER_DATA_SUCCESS,
  payload
});

export const weatherDataFailed = error => ({
  type: WEATHER_DATA_FAILED,
  payload: error
});
