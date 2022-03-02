import "./NewNote.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

//comment
export default function NewNote({ myid }) {
  let [allNotes, setNote] = useState();
  useEffect(() => {
    const loadNote = async () => {
      let res = await fetch(`http://localhost:3001/api/notesID/${myid}`);
      setNote(await res.json());
    };
    loadNote([]);
  }, [myid]);

  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/my-notes");
        }}
        className="returnMyNotes"
      >
        My Notes
      </button>
      {myid === 0 ? (
        <div>
          <div>
            <textarea
              className="myHeaderBox"
              placeholder="Click to edit title"
            ></textarea>
          </div>
          <div>
            <textarea
              className="myTextBox"
              placeholder="Click to edit your new note..."
            ></textarea>
          </div>
        </div>
      ) : (
        <p></p>
      )}

      {allNotes ? (
        <div>
          <div>
            <textarea className="myHeaderBox" placeholder="Click to edit title">
              {allNotes.title}
            </textarea>
          </div>
          <div>
            <textarea
              className="myTextBox"
              placeholder="Click to edit your new note..."
            >
              {allNotes.description}
            </textarea>
          </div>
        </div>
      ) : (
        // <div>
        //   <div>
        //     <textarea
        //       className="myHeaderBox"
        //       placeholder="Click to edit title"
        //     ></textarea>
        //   </div>
        //   <div>
        //     <textarea
        //       className="myTextBox"
        //       placeholder="Click to edit your new note..."
        //     ></textarea>
        //   </div>
        // </div>
        <p>Loading</p>
      )}
    </div>
  );
}

// export default NewNote;
