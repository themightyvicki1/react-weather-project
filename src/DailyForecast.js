import React from "react";
import axios from "axios";

export default function DailyForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = `0d7079af8c9adb3t72540o1c3a7eb56d`;
  let lat = 33.44;
  let lon = -94.04;
  let forecastApi = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

  axios.get(forecastApi).then(handleResponse);

  return <div className="DailyForecast">from daily</div>;
}
