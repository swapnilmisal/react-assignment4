import {
  RANDOM_CITIES_FAILED,
  RANDOM_CITIES_REQUEST,
  RANDOM_CITIES_SUCCESS
} from "../actions/randomCities";

const initialState = {
  cities: [null, null, null],
  loading: true,
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RANDOM_CITIES_REQUEST:
      return { ...state, loading: true, error: false };
    case RANDOM_CITIES_SUCCESS:
      return { ...state, cities: [...payload], loading: false };
    case RANDOM_CITIES_FAILED:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
