import { func } from "prop-types";
import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function farenheith() {
    return (props.celsius * 9) / 5 + 32;
  }

  function convertToFar(event) {
    event.preventDefault();
    setUnit("farenheith");
  }

  function convertToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="temp" className="temperature">
          {Math.round(props.celsius)}
        </span>
        <span id="units">
          <a href="/" className="cel_far" id="cels" onClick={convertToCel}>
            °C
          </a>
          <span className="cel_far"> | </span>
          <a href="/" className="cel_far" id="far" onClick={convertToFar}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span id="temp" className="temperature">
          {Math.round(farenheith())}
        </span>
        <span id="units">
          <a href="/" className="cel_far" id="cels" onClick={convertToCel}>
            °C
          </a>
          <span className="cel_far"> | </span>
          <a href="/" className="cel_far" id="far" onClick={convertToFar}>
            F
          </a>
        </span>
      </div>
    );
  }
}
