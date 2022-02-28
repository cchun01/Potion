import "./NewNote.css";
import React from "react";
import { useNavigate } from "react-router-dom";


function NewNote() {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={()=> {navigate("/my-notes");}} className="returnMyNotes">
        My Notes
      </button>
      <div>
      <textarea className="myHeaderBox" placeholder="Click to edit title"></textarea>
      </div>
      <div>
      <textarea className="myTextBox" placeholder="Click to edit your new note..."></textarea>
      </div>
    </div>
  );
}

export default NewNote;
