import { combineReducers } from "redux";
import randomCities from "./randomCitiesReducer";
import weatherData from "./weatherDataReducer";

export default combineReducers({ randomCities, weatherData });
