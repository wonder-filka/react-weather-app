import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      feelslike: response.data.main.feels_like,
      description: response.data.weather[0].main,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  let [weatherData, setweatherData] = useState({ ready: false });

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="conteiner">
          <div className="row">
            <div className="col-sm">
              <form className="input-group" id="search-form">
                <input
                  type="search"
                  className="form-control"
                  id="city-input"
                  placeholder="City name"
                  autocomplete="off"
                ></input>
                <button className="btn btn-warning" id="search" type="submit">
                  Search
                </button>
                <button className="btn btn-warning" id="current" type="button">
                  Current
                </button>
              </form>
            </div>
          </div>
          <div className="currentInfo">
            <h1>{weatherData.city}</h1>
            <h5 id="timeNow">
              <FormatDate date={weatherData.date} />
            </h5>
            <h4>{weatherData.description} </h4>
            <div className="row currentBlock">
              <div className="col" id="currentIcon">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </div>
              <div className="col currentTemp">
                <span id="temp">{Math.round(weatherData.temperature)}</span>
                <span id="units">
                  <a href="/" className="cel_far" id="cels">
                    °C
                  </a>
                  <span class="cel_far">|</span>
                  <a href="/" className="cel_far" id="far">
                    F
                  </a>
                </span>
              </div>
              <div className="col moreInfo">
                <ul>
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>{" "}
                    %
                  </li>
                  <li>
                    Wind: <span id="wind">{weatherData.wind}</span> km/h
                  </li>
                  <li>
                    Feelslike:{" "}
                    <span id="feelslike">
                      {Math.round(weatherData.feelslike)}
                    </span>{" "}
                    °C
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ba322d86c6e375290a924f7f5aba942e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
