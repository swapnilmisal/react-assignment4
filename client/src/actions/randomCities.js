export const RANDOM_CITIES_REQUEST = "RANDOM_CITIES_REQUEST";
export const RANDOM_CITIES_SUCCESS = "RANDOM_CITIES_SUCCESS";
export const RANDOM_CITIES_FAILED = "RANDOM_CITIES_FAILED";

export const randomCitiesRequest = () => ({
  type: RANDOM_CITIES_REQUEST
});

export const randomCitiesSuccess = payload => ({
  type: RANDOM_CITIES_SUCCESS,
  payload
});

export const randomCitiesFailed = error => ({
  type: RANDOM_CITIES_FAILED,
  payload: error
});
