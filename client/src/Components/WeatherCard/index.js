import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import getWeatherData from "../../thunks/getWeatherData";
import Astronomy from "./Astronomy";
import Atmosphere from "./Atmosphere";
import Condition from "./Condition";
import Forecast from "./Forecast";

function WeatherCard({
  forecasts,
  currentObservation,
  loading,
  error,
  getWeatherData,
  city
}) {
  useEffect(() => {
    if (city) getWeatherData(city);
  }, [city]);

  return loading || error ? (
    <Skeleton count={21} />
  ) : (
    <>
      <Condition condition={currentObservation.condition} />
      <Atmosphere atmosphere={currentObservation.atmosphere} />
      <Astronomy astronomy={currentObservation.astronomy} />
      <Forecast forecasts={forecasts} />
    </>
  );
}

const mapStateToProps = state => ({
  forecasts: state.weatherData.forecasts,
  currentObservation: state.weatherData.current_observation,
  loading: state.weatherData.loading,
  error: state.weatherData.error
});

const mapDispatchToProps = dispatch => ({
  getWeatherData: city => dispatch(getWeatherData(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
