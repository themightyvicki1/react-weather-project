import React, { useState } from "react";

// rec properties b/c sent celsius value
export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherUnit">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
        <div className="feelsLikeTemp">
          <small>
            <i>feels like: </i> {Math.round(props.feelsLike)}
            °C
          </small>
        </div>
      </span>
    );
  } else {
    let fahrenheitValue = (props.celsius * 9) / 5 + 32;
    let fahrenheitFeelsLike = (props.feelsLike * 9) / 5 + 32;
    return (
      <span className="WeatherUnit">
        <span className="temperature">{Math.round(fahrenheitValue)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>

        <div className="feelsLikeTemp">
          <small>
            <i>feels like: </i> {Math.round(fahrenheitFeelsLike)}
            °F
          </small>
        </div>
      </span>
    );
  }
}
