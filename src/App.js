import React from "react";
import "./index.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>

      <footer className="text-center">
        This project was coded by{" "}
        <a href="/" target="_blank" rel="noreferrer">
          Iryna Filonova
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/wonder-filka/weather-react"
          target="_blank"
          rel="noreferrer"
          title="My GitHub"
        >
          {" "}
          is open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="/" target="_blank">
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}