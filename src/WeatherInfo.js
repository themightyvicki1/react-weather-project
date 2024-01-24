import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import DailyForecast from "./DailyForecast";

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
          <WeatherIcon code={props.data.icon} size={50} />

          {/*send celsius (variable that is holding the temperature in celsius form) data to convert in the component */}
          <WeatherUnit celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>High: {Math.round(props.data.tempMax)}°C</li>
            <li>Low: {Math.round(props.data.tempMin)}°C</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.windSpeed)} km/h</li>
          </ul>
        </div>
        <div className="forecast">
          <p className="mt-3 mb-0 text-capitalize">5 day forecast</p>
          <ul>
            <li>
              day 1 <WeatherIcon code={props.data.icon} size={30} />{" "}
              <DailyForecast />
            </li>
            <li>
              day 2 <WeatherIcon code={props.data.icon} size={30} />
            </li>
            <li>
              day 3 <WeatherIcon code={props.data.icon} size={30} />
            </li>
            <li>
              day 4 <WeatherIcon code={props.data.icon} size={30} />
            </li>
            <li>
              day 5 <WeatherIcon code={props.data.icon} size={30} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
