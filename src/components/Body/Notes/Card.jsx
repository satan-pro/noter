import React from "react";

function Card(props)
{
    return (<div class="card">
    <h4>{props.note.title}</h4>
    <p>{props.note.content}</p>
  </div>);
}

export default Card;