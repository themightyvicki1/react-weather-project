import React from "react";

export default function DailyForecast() {
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
