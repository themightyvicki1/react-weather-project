import React from "react";
import "./Weather.css";

// create HTML of weather app //
export default function Weather() {
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
            {/*use as a button, give bootstrap class name*/}
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

          <span className="temperature">12</span>
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
}
