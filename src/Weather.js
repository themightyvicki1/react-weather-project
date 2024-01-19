import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

// create HTML of weather app //
export default function Weather() {
  // create state, make it a boolean and by default set to false, conditional rendering //
  //const [ready, setReady] = useState(false);
  //create state management variable/array to be able to update the temperature, set to null b/c we don't know the temperature yet //
  // const [temperature, setTemperature] = useState(null);
  // create a new state, weatherData object to hold ALL data or else have to create single variables for each wind, humidity, etc //
  // by default, set to empty object {} //
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      city: response.data.name,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: "Thursday 3:00pm",
    });
    // update / set temperature here (function) //
    //setTemperature(response.data.main.temp);
    // b/c now the temperature has been set so ready it set to true //
    // to not show fake data on load //
    //setReady(true); using ready in the actual weatherData object set to true instead //

    // using boolean to make sure everything is ready, when we get response back from api, it is ready and can show application //
    console.log(response.data);
  }

  // conditional rendering so it doesn't loop and keep rendering, if ready it true//
  // if weatherData object is ready, being ready is true
  if (weatherData.ready) {
    return (
      <div className="Weather">
        {/*create search engine with a form */}
        <form>
          {/* make into row and col so they'll appear side by side */}
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-search-bar w-100"
                /*in react use autoFocus with captial F */
                /* turn on so when page loads it focuses on search bar to start typing right away*/
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              {/*use as a button, give bootstrap className*/}
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            {/* added button here to be able to search for current location */}
            <div className="col-3">
              <button className="btn btn-primary w-100">Current</button>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        {/*create row to create 2 cols to split the screen in half, info on each side*/}
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt={weatherData.description}
            />

            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
            <div className="feelsLikeTemp">
              <small>
                <i>feels like: </i> {Math.round(weatherData.feelsLike)}
                °C
              </small>
            </div>
          </div>
          <div className="col-6">
            <li>High: {Math.round(weatherData.tempMax)}°</li>
            <li>Low: {Math.round(weatherData.tempMin)}°</li>
            <li>Humidity: {Math.round(weatherData.humidity)}%</li>
            <li>Wind: {Math.round(weatherData.windSpeed)} km/h</li>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `1fd8093fa5ff12d796d7de756cc9d6b9`;
    let city = "Sacramento";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
