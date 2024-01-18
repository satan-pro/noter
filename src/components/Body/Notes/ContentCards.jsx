import React from "react";
import notes from "../../../data/notes";
import Card from "./Card";

function ContentCards() {
  return (<div class="content-cards">
    {notes.map((note)=>{
        return <Card note={note} />
    })}
  </div>);
}

export default ContentCards;