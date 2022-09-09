import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function getForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row pt-5">
          {forecast.map(function (dailyForecast, index) {
            if (index < 7 && index > 0) {
              return (
                <div className="col-md-2 text-center pb-2" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `ba322d86c6e375290a924f7f5aba942e`;
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlForecast).then(getForecast);

    return null;
  }
}
