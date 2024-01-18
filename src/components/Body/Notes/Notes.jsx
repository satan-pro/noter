import React from "react";
import ContentCards from "./ContentCards";

function Notes() {

    let date = new Date();
    const options={
        weekday:'long',
        day:'numeric',
        month:'short'
    };
     
  return (
    <div class="notes">
      <div class="headline">
        <h1>Today's Schedule</h1>
        <br />
        <h3>{date.toLocaleString('en-us', options)}</h3>
      </div>
      <ContentCards />
    </div>
  );
}

export default Notes;