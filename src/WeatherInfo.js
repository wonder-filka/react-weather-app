import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="currentInfo pt-5">
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
              <div className="currentTemp">
                <WeatherTemperature celsius={props.info.temperature} />
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
              <WeatherIcon code={props.info.icon} size={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
