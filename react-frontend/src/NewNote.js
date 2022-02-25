import "./NewNote.css";
import React from "react";
import { Textarea } from "@chakra-ui/textarea";
import { Text } from "@chakra-ui/react";

function NoteTitle() {
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Text mb="8px">{value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Untitled Note"
        size="sm"
      />
    </>
  );
}

function NoteSubheader() {
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Text mb="8px">{value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Editing a new note, the world is your oyster."
        size="sm"
      />
    </>
  );
}

function NoteBox() {
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Text mb="8px">{value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Make a new note, start typing away..."
        size="sm"
      />
    </>
  );
}

function NewNote() {
  return (
    <div>
      <div className="myHeader">
        <NoteTitle />
      </div>
      <div className="subHeader">
        <NoteSubheader />
      </div>
      <div className="textedit">
        <NoteBox />
      </div>
    </div>
  );
}

export default NewNote;
