import React from "react";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();
  return (
    <div>
      <div className="headerLog">Log In</div>
      <div className="fieldNameULog">Username:</div>
      <input type="text" className="textboxULog" />
      <div className="fieldNamePLog">Password:</div>
      <input type="text" className="textboxPLog" />
      <button
        onClick={() => {
          clicked();
          navigate("/MyNotes");
        }}
        className="submitLog"
      >
        Submit
      </button>
    </div>
  );
}
export default LogIn;
