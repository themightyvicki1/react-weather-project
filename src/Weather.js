import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

// create HTML of weather app //
export default function Weather() {
  // create state, make it a boolean and by default set to false, conditional rendering //
  const [ready, setReady] = useState(false);
  //create state management variable/array to be able to update the temperature, set to null b/c we don't know the temperature yet //
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    // update / set temperature here (function) //
    setTemperature(response.data.main.temp);
    // b/c now the temperature has been set so ready it set to true //
    setReady(true);

    // using boolean to make sure everything is ready, when we get response back from api, it is ready and can show application //
    console.log(response.data);
  }

  // conditional rendering so it doesn't loop and keep rendering, if ready it true//
  if (ready) {
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
        <h1>Sacramento</h1>
        <ul>
          <li>Thursday 4:00pm</li>
          <li>Mostly cloudy</li>
        </ul>
        {/*create row to create 2 cols to split the screen in half, info on each side*/}
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloudy sky"
            />

            <span className="temperature">{Math.round(temperature)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <li>Percipitation: 15%</li>
            <li>Humidity:70%</li>
            <li>Wind speed:12km/h</li>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `1fd8093fa5ff12d796d7de756cc9d6b9`;
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
