import React from "react";
import FormattedDate from "./FormattedDate";

// changed from weatherData(array).variable(temperature, humidity, etc) to props.data.variable b/c sending data as props not array b/c array isn't created here //
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        {/*send to component, the date variable of object we created above, to be able to format the date */}
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      {/*create row to create 2 cols to split the screen in half, info on each side*/}
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
          <div className="feelsLikeTemp">
            <small>
              <i>feels like: </i> {Math.round(props.data.feelsLike)}
              °C
            </small>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>High: {Math.round(props.data.tempMax)}°</li>
            <li>Low: {Math.round(props.data.tempMin)}°</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.windSpeed)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
