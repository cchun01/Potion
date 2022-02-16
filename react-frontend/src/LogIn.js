import React from "react";
import "./LogIn.css";

function clicked() {
  const username = document.getElementsByClassName("textboxU")[0].value;
  const password = document.getElementsByClassName("textboxP")[0].value;
  if (username === "") {
    console.log("No username provided");
  } else if (password === "") {
    console.log("No password provided");
  } else {
    console.log("Profile\n\nUseranme: " + username + "\nPassword: " + password);
  }
}

function LogIn() {
  return (
    <div>
      <div className="header">Log In</div>
      <div className="fieldNameU">Username:</div>
      <input type="text" className="textboxU" />
      <div className="fieldNameP">Password:</div>
      <input type="text" className="textboxP" />
      <button onClick={clicked} className="submit">
        Submit
      </button>
    </div>
  );
}

export default LogIn;
