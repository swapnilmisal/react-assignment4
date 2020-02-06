import React from "react";

function WeatherIcon({ weatherCode }) {
  function weatherCodeToWeatherString(weatherCode) {
    if (weatherCode < 3) return "wind";
    else if (weatherCode < 5) return "bolt";
    else if (weatherCode < 13) return "cloud-rain";
    else if (weatherCode < 18) return "snowflake";
    else if (weatherCode < 27) return "smog";
    else if (weatherCode < 31) return "cloud";
    else if (weatherCode < 37) return "sun";
    else if (weatherCode < 40) return "bolt";
    else if (weatherCode < Infinity) return "snowman";
  }
  return (
    <div>
      <i className={`fas fa-${weatherCodeToWeatherString(weatherCode)} fa-2x`}></i>
    </div>
  );
}

export default React.memo(WeatherIcon);
