import {
  WEATHER_DATA_FAILED,
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS
} from "../actions/weatherData";

const initialState = {
  forecasts: [],
  current_observation: {},
  loading: true,
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_DATA_REQUEST:
      return { ...state, loading: true, error: false };
    case WEATHER_DATA_SUCCESS:
      return {
        ...state,
        forecasts: [...payload.forecasts],
        current_observation: { ...payload.current_observation },
        loading: false
      };
    case WEATHER_DATA_FAILED:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
