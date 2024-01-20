import React from "react";

//this will return a string, of the date listed as a sentence, a string //
export default function FormattedDate(props) {
  //console.log(props.date);//
  //array holding all the days of the week
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ];
  // set to the array, based on the number of the week it will set to the day of the week //
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let month = months[props.date.getMonth()];
  let dayOfMonth = props.date.getDate();
  let year = props.date.getFullYear();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 12) {
    hours = `0${hours}`;
  }

  return (
    <div className="FormattedDate">
      {day} {month}. {dayOfMonth}, {year} {hours}:{minutes}
    </div>
  );
}
