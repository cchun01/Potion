import React from "react";
import "./SignUp.css";

function clicked() {
  const firstName = document.getElementsByClassName("usernameBox")[0].value;
  const email = document.getElementsByClassName("emailBox")[0].value;
  const username = document.getElementsByClassName("passwordBox")[0].value;
  const password = document.getElementsByClassName("confPasswordBox")[0].value;
  if (firstName === "") {
    console.log("No first name provided");
    document.getElementById("error").innerHTML = "No first name provided";
  } else if (email === "") {
    console.log("No email provided");
    document.getElementById("error").innerHTML = "No email provided";
  } else if (!(email.includes("@") && email.includes("."))) {
    console.log("Invalid email provided");
    document.getElementById("error").innerHTML = "Invalid email provided";
  } else if (username === "") {
    console.log("No username provided");
    document.getElementById("error").innerHTML = "No username provided";
  } else if (password === "") {
    console.log("No password provided");
    document.getElementById("error").innerHTML = "No password provided";
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
    window.location.href = "my-notes";
  }
}

function TryNotionFree() {
  return (
    <div className="div1">
      <div className="div2">
        <img
          className="outlineImage"
          alt=""
          src={require("./signupImages/lineOutline.png")}
        />
        <div className="signUpForm">
          <div className="signUpHeader">Sign Up</div>
        </div>
        <div onClick={clicked} className="submitSign">
          Sign Up
        </div>
        <div className="username">Username</div>
        <input type="text" className="usernameBox"></input>
        <div className="email">Email</div>
        <input type="text" className="emailBox"></input>
        <div className="password">Password</div>
        <input type="text" className="passwordBox"></input>
        <div className="confirm-password">Confirm Password</div>
        <input type="text" className="confPasswordBox"></input>
        <p className="errorMessage" id="error"></p>
      </div>
    </div>
  );
}

export default TryNotionFree;
