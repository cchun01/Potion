import React from "react";
import "./SignUp.css";

function clicked() {
  const firstName = document.getElementsByClassName("textboxFN")[0].value;
  const email = document.getElementsByClassName("textboxE")[0].value;
  const username = document.getElementsByClassName("textboxU")[0].value;
  const password = document.getElementsByClassName("textboxP")[0].value;
  if(firstName === ""){
    console.log("No first name provided");
  }else if(email === ""){
    console.log("No email provided");
  }else if(username === ""){
    console.log("No username provided");
  }else if(password === ""){
    console.log("No password provided");
  }else{
    console.log("Profile\n\nFirst Name: " + firstName +"\nEmail: " + email + "\nUseranme: " + username + "\nPassword: " + password);
  }
}

function SignUp() {
  return (
    <div>
      <div className="header">Sign Up For Potion</div>
      <div className="fieldNameFN">First Name:</div>
      <input type="text" className="textboxFN" />
      <div className="fieldNameE">Email:</div>
      <input type="text" className="textboxE" />
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

export default SignUp;
