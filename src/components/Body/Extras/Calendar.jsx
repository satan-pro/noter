import React from "react";
import icons from "../../../data/icons";
import Icon from "../Icon";

function Calendar() {

    const weekdays=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const days = [...Array(31).keys()];

  return (
    <div class="calendar">
      <header>
        <div class="calendar-header">
          {icons.map((icon) => {
            return icon.name === "LeftArrow" ? <Icon icon={icon} /> : null;
          })}
          <div class="current-month">January 2024</div>
          {icons.map((icon) => {
            return icon.name === "RightArrow" ? <Icon icon={icon} /> : null;
          })}
        </div>
      </header>
      <div class="calendar-days">
        <ul class="weekdays">
          {weekdays.map((weekday)=>{
            return <li>{weekday}</li>
          })}
        </ul>
        <ul class="days">
          {days.map((day)=>{
            return <li>{day}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default Calendar;
