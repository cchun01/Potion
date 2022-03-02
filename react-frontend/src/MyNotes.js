import "./MyNotes.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function MyNotes() {
  let [allNotes, setNote] = useState();
  useEffect(() => {
    const loadNote = async () => {
      let res = await fetch("http://localhost:3001/api/notes");
      setNote(await res.json());
    };
    loadNote([]);
  }, []);

  let navigate = useNavigate();
  return (
    <div>
      ;<div className="myHeader">My Notes</div>
      <div className="subHeader">All your notes are organized here</div>
      <div className="notesRow">
        {allNotes ? (
          allNotes.map((note) => (
            <div className="noteContainer">
              <div className="noteBoxStyle">
                <button
                  onClick={() => {
                    navigate(`/new-note${note.myid}`);
                  }}
                  className="noteTitle"
                >
                  {note.title}
                </button>
                <div className="noteEmoji"> {note.emoji} </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <div className="noteContainer">
          <div className="noteBoxStyle">
            <button
              onClick={() => {
                navigate("/new-note");
              }}
              className="noteTitle"
            >
              + New Note
            </button>
            <div className="noteEmoji"> 📝 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNotes;
