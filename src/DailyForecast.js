import React from "react";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let city = props.city;

  const key = `ab3868bf16f540f6bce01836242601`;
  let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5&units=metric`;
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast">
      <ul>
        <li>
          <div className="each-day">Day 1</div>
          <div className="icon">icon</div>
          <div className="min-max">
            <span className="min-temp">12° | </span>
            <span className="max-temp">20°</span>
          </div>
        </li>
        <li>
          <div className="each-day">Day 2</div>
          <div className="icon">icon</div>
          <div className="min-max">
            <span className="min-temp">9° | </span>
            <span className="max-temp">25°</span>
          </div>
        </li>
        <li>
          <div className="each-day">Day 3</div>
          <div className="icon">icon</div>
          <div className="min-max">
            <span className="min-temp">14° | </span>
            <span className="max-temp">29°</span>
          </div>
        </li>
        <li>
          <div className="each-day">Day 4</div>
          <div className="icon">icon</div>
          <div className="min-max">
            <span className="min-temp">13° | </span>
            <span className="max-temp">22°</span>
          </div>
        </li>
        <li>
          <div className="each-day">Day 5</div>
          <div className="icon">icon</div>
          <div className="min-max">
            <span className="min-temp">17° | </span>
            <span className="max-temp">29°</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

//if we have data load it and show the forecast if we don't don't load it //
// if it's not loaded, make the api call, if it is loaded, display //
