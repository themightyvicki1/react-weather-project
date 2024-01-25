import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
//import DailyForecast from "./DailyForecast";

// receive defaultCity properties here //
// create HTML of weather app //
export default function Weather(props) {
  // create state, make it a boolean and by default set to false, conditional rendering //
  //const [ready, setReady] = useState(false);
  //create state management variable/array to be able to update the temperature, set to null b/c we don't know the temperature yet //
  // const [temperature, setTemperature] = useState(null);
  // create a new state, weatherData object to hold ALL data or else have to create single variables for each wind, humidity, etc //
  // by default, set to empty object {} //
  const [weatherData, setWeatherData] = useState({ ready: false });
  // default city sent from app component //
  const [city, setCity] = useState(props.defaultCity);
  function HandleResponse(response) {
    //console.log(response);
    setWeatherData({
      ready: true,
      long: response.data.coordinates.longitude,
      lat: response.data.coordinates.latitude,
      temperature: response.data.daily[0].temperature.day,
      humidity: response.data.daily[0].temperature.humidity,
      //feelsLike: response.data.main.feels_like,
      tempMax: response.data.daily[0].temperature.maximum,
      tempMin: response.data.daily[0].temperature.minimum,
      city: response.data.city,
      windSpeed: response.data.daily[0].wind.speed,
      description: response.data.daily[0].condition.description,
      date: new Date(response.data.daily[0].time * 1000),
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`,
      //icon: response.data.daily[0].condition.icon,
    });

    // update / set temperature here (function) //
    //setTemperature(response.data.main.temp);
    // b/c now the temperature has been set so ready it set to true //
    // to not show fake data on load //
    //setReady(true); using ready in the actual weatherData object set to true instead //

    // using boolean to make sure everything is ready, when we get response back from api, it is ready and can show application //
    //console.log(response.data);
  }

  function newSearch() {
    const apiKey = `0d7079af8c9adb3t72540o1c3a7eb56d`;
    //let city = "Sacramento";//
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
  }

  // handle submit function //
  function handleSubmit(event) {
    event.preventDefault();
    newSearch();
  }

  function handleCitySearched(event) {
    // don't prevent this one //
    // store the event value in a state //
    //search for city here with api call //
    setCity(event.target.value);
  }
  // conditional rendering so it doesn't loop and keep rendering, if ready it true//
  // if weatherData object is ready, being ready is true
  if (weatherData.ready) {
    return (
      <div className="Weather">
        {/*create search engine with a form */}
        {/*add event listener on form to use as search engine*/}
        <form onSubmit={handleSubmit}>
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
                //whenever this changes, onChange, handle city change (function)//
                onChange={handleCitySearched}
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
        {/*display the weatherData array info in this component */}
        <WeatherInfo data={weatherData} />
      </div>
    );
    //else if it's not ready, make the api call, that will then set everything and set ready to true //
  } else {
    newSearch();
    return "Loading...";
  }
}
