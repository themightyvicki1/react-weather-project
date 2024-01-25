import React from "react";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  const apiKey = `0d7079af8c9adb3t72540o1c3a7eb56d`;
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let forecastApi = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

  axios.get(forecastApi).then(handleResponse);

  return <div className="DailyForecast">from daily</div>;
}
