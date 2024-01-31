import React, { useState } from "react";
import ContentCards from "./ContentCards";
import { weekday, day, monthShort } from "../../../data/date";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import notes from "../../../data/notes";

function Notes() {
  let date = `${weekday}, ${monthShort} ${day}`;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [clicked, checkClicked] = useState(false);

  function handleChange(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    if (inputName === "titleInput") {
      setTitle(inputValue);
    }
    else if (inputName === "descInput") {
      setDesc(inputValue);
    }
  }

  function handleClick() {
    let newNote = {
      title: title,
      content: desc
    };
    setNotesList((prev) => {
      return [...prev, newNote]
    });
    notes.push(newNote);
    setTitle("");
    setDesc("");
  }

  function titleClick(e) {
    checkClicked(() => {
      return !clicked;
    })
  } 

  function titleUnclick()
  {
    if(clicked)
    {
      checkClicked(false);
    }
  }

  return (
    <div class="notes" onClick={titleUnclick}>
      <div className="input-box">
        <input type="text" name="titleInput" placeholder="Title" value={title} onChange={handleChange} onClick={titleClick} />
        <textarea placeholder="Type your note" name="descInput" onChange={handleChange} value={desc} style={clicked ? { display: "block" } : { display: "none" }} />
        <div className="input-button-area">
          <Zoom in={clicked ? true : false} >
            <Fab color="success" aria-label="add" size="small" onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        </div>
      </div>
      <div class="headline">
        <h1>Today's Schedule</h1>
        <br />
        <h3>{date}</h3>
      </div>
      <ContentCards />
    </div>
  );
}

export default Notes;
