import React, {useState} from "react";
import ContentCards from "./ContentCards";
import { weekday, day, monthShort } from "../../../data/date";
import Icon from "../Icon";
import icons from "../../../data/icons";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import notes from "../../../data/notes";

function Notes() {
  let date = `${weekday}, ${monthShort} ${day}`;

  const [title, setTitle] = useState("");
  const [notesList, setNotesList] = useState([]);

  function titleChange(e)
  {
    let titleValue = e.target.value;
    setTitle(titleValue);
  }

  function handleClick()
  {
    let newNote={
      title:title,
      content:"This is me"
    };
    setNotesList((prev)=>{
      return [...prev, newNote]
    });
    notes.push(newNote);
    setTitle("");
  }

  return (
    <div class="notes">
      <div className="input-box">
        <input type="text" name="notesInput" placeholder="Title" value={title} onChange={titleChange}/>
        <button className="input-box-button">
          <Fab color="success" aria-label="add" size="small" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </button>
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
