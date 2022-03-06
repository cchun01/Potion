import "./NewNote.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

async function update(noteid) {
  const title = document.getElementsByClassName("myHeaderBox")[0].value;

  console.log(title);
  const description = document.getElementsByClassName("myTextBox")[0].value;
  console.log(description);
  console.log(noteid);
  const emoji = (await axios.get("http://localhost:3001/api/notesID/" + noteid))
    .data.emoji;
  console.log(emoji);
  const username = (
    await axios.get("http://localhost:3001/api/notesID/" + noteid)
  ).data.username;
  console.log(username);
  const update = {
    title: title,
    description: description,
    myid: noteid,
    emoji: emoji,
    username: username,
  };
  await axios.delete("http://localhost:3001/api/notesID2/" + noteid);
  await axios.post("http://localhost:3001/api/newNote", update);
  // await axios.put("http://localhost:3001/api/notes/" + noteid, title);
  // await axios.put("http://localhost:3001/api/notes/" + noteid, description);
}

// clicked for NEW SAVE and click for UPDATE
async function clicked() {
  const title = document
    .getElementsByClassName("myHeaderBox")[0]
    .value.slice(2);
  console.log(title);
  const description = document.getElementsByClassName("myTextBox")[0].value;
  console.log(description);
  const myid =
    (await axios.get("http://localhost:3001/api/notesMax")).data.max + 1;

  var emoji = document
    .getElementsByClassName("myHeaderBox")[0]
    .value.match(/\p{Emoji}+/gu);
  emoji = emoji[0];
  console.log(emoji);
  const username = "username";
  //const username = currentUser;
  console.log(username);
  const note = {
    title: title,
    description: description,
    myid: myid,
    emoji: emoji,
    username: username,
  };
  await axios.post("http://localhost:3001/api/newNote", note);
}

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
      <button onClick={() => update(myid)} className="saveButton">
        Update
      </button>
      {myid === 0 ? (
        <div>
          <button onClick={clicked} className="saveButton">
            Save
          </button>
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
        <p></p>
      )}
    </div>
  );
}
