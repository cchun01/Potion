import React from "react";
import "./SignUp.css";
import {useNavigate} from "react-router-dom";

function clicked() {
  const firstName = document.getElementsByClassName("textboxFNSign")[0].value;
  const email = document.getElementsByClassName("textboxESign")[0].value;
  const username = document.getElementsByClassName("textboxUSign")[0].value;
  const password = document.getElementsByClassName("textboxPSign")[0].value;
  if(firstName === ""){
    console.log("No first name provided");
  } else if (email === "") {
    console.log("No email provided");
  } else if (username === "") {
    console.log("No username provided");
  } else if (password === "") {
    console.log("No password provided");
  } else {
    console.log(
      "Profile\n\nFirst Name: " +
        firstName +
        "\nEmail: " +
        email +
        "\nUseranme: " +
        username +
        "\nPassword: " +
        password
    );
  }
}

function SignUp() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="headerSU">Sign Up For Potion</div>
      <div className="fieldNameFNSign">First Name:</div>
      <input type="text" className="textboxFNSign" />
      <div className="fieldNameESign">Email:</div>
      <input type="text" className="textboxESign" />
      <div className="fieldNameUSign">Username:</div>
      <input type="text" className="textboxUSign" />
      <div className="fieldNamePSign">Password:</div>
      <input type="text" className="textboxPSign" />
      <button onClick={()=> {navigate("/EmailVerification");}} className="submitSign">
        Submit
      </button>
    </div>
  );
}

export default SignUp;
