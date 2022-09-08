import React from "react";
import FormatDate from "./FormatDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="currentInfo">
      <h1>{props.info.city}</h1>
      <h5 id="timeNow">
        <FormatDate date={props.info.date} />
      </h5>
      <h4>{props.info.description} </h4>
      <div className="row currentBlock">
        <div className="col" id="currentIcon">
          <img src={props.info.iconUrl} alt={props.info.description} />
        </div>
        <div className="col currentTemp">
          <span id="temp">{Math.round(props.info.temperature)}</span>
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
              Humidity: <span id="humidity">{props.info.humidity}</span> %
            </li>
            <li>
              Wind: <span id="wind">{props.info.wind}</span> km/h
            </li>
            <li>
              Feelslike:{" "}
              <span id="feelslike">{Math.round(props.info.feelslike)}</span> °C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
