import React from "react";

//this will return a string, of the date listed as a sentence, a string //
export default function FormattedDate(props) {
  //console.log(props.date);//
  //array holding all the days of the week
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let ampm = "am";
  if (hours > 11) {
    ampm = "pm";
  }

  if (hours === 13) {
    hours = 1;
  }
  if (hours === 14) {
    hours = 2;
  }
  if (hours === 15) {
    hours = 3;
  }
  if (hours === 16) {
    hours = 4;
  }
  if (hours === 17) {
    hours = 5;
  }
  if (hours === 18) {
    hours = 6;
  }
  if (hours === 19) {
    hours = 7;
  }
  if (hours === 20) {
    hours = 8;
  }
  if (hours === 21) {
    hours = 9;
  }
  if (hours === 22) {
    hours = 10;
  }
  if (hours === 23) {
    hours = 11;
  }
  if (hours === 24) {
    hours = 12;
  }

  return (
    <div className="FormattedDate">
      Last updated: {day} {month}. {dayOfMonth}, {year} {hours}:{minutes}
      {ampm}
    </div>
  );
}
