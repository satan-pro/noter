import React, {useState} from "react";
import icons from "../../../data/icons";
import Icon from "../Icon";
import {monthLong, year} from "../../../data/date";
import Calendar from 'react-calendar';

/* const onPanelChange = (value, mode)=>{
  console.log(value.format('YYYY-MM-DD'), mode);
}; */

function CustomCalendar() {

    const weekdays=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const days = [...Array(31).keys()];
   /*  const {token} = theme.useToken();
    const wrapperStyle = {
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    }; */

    const [date, setDate] = useState(new Date());

  return (
    <div class="calendar">
     {/*  <header>
        <div class="calendar-header">
          {icons.map((icon) => {
            return icon.name === "LeftArrow" ? <Icon icon={icon} /> : null;
          })}
          <div class="current-month">{`${monthLong} ${year}`}</div>
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
      </div> */}
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default CustomCalendar;
