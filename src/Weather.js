import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "ba322d86c6e375290a924f7f5aba942e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChance(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="conteiner">
          <div className="row">
            <div className="col-sm">
              <form
                className="input-group"
                id="search-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="search"
                  className="form-control"
                  id="city-input"
                  placeholder="City name"
                  autocomplete="off"
                  onChange={handleCityChance}
                ></input>
                <button className="btn btn-warning" id="search" type="submit">
                  Search
                </button>
                <button className="btn btn-warning" id="current" type="button">
                  Current
                </button>
              </form>
              <WeatherInfo info={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
