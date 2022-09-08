import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormatDate from "./FormatDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "white",
    size: 80,
    animate: true,
  };
  return (
    <div className="currentInfo">
      <div className="container">
        <div className="row infoWeatherStyle">
          <div className="col-md-4 infoWeatherBlock">
            <h1>{props.info.city}</h1>
            <h5 id="timeNow">
              <FormatDate date={props.info.date} />
            </h5>
            <h4>{props.info.description} </h4>
          </div>
          <div className="col-md-4 infoWeatherBlock">
            <div className="currentBlock">
              <div className=" currentTemp">
                <span id="temp">{Math.round(props.info.temperature)}</span>
                <span id="units">
                  <a href="/" className="cel_far" id="cels">
                    °C
                  </a>
                  <span class="cel_far"> | </span>
                  <a href="/" className="cel_far" id="far">
                    F
                  </a>
                </span>
              </div>
              <div className="moreInfo">
                <ul>
                  <li>
                    Humidity: <span id="humidity">{props.info.humidity}</span> %
                  </li>
                  <li>
                    Wind: <span id="wind">{props.info.wind}</span> km/h
                  </li>
                  <li>
                    Feelslike:{" "}
                    <span id="feelslike">
                      {Math.round(props.info.feelslike)}
                    </span>{" "}
                    °C
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 infoWeatherBlock" id="currentIcon">
            <div className="col">
              <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
              />
              {/* <img src={props.info.iconUrl} alt={props.info.description} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
