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
      icon: response.data.weather[0].icon,
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
          <form className="" id="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-10">
                <input
                  type="search"
                  className="form-control bg-transparent text-white border-light border-opacity-25 shadow-none"
                  id="city-input"
                  placeholder="City name"
                  autocomplete="off"
                  onChange={handleCityChance}
                ></input>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-success border-light border-opacity-25"
                  id="search"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo info={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
