import React from "react";
import "./SignUp.css";
import axios from "axios";
//var currentUser;

async function clicked() {
  const username = document.getElementsByClassName("usernameBox")[0].value;
  const email = document.getElementsByClassName("emailBox")[0].value;
  const password = document.getElementsByClassName("passwordBox")[0].value;
  const confpassword =
    document.getElementsByClassName("confPasswordBox")[0].value;
  if (username === "") {
    console.log("No username provided");
    document.getElementById("error").innerHTML = "No username provided";
  } else if (email === "") {
    console.log("No email provided");
    document.getElementById("error").innerHTML = "No email provided";
  } else if (!(email.includes("@") && email.includes("."))) {
    console.log("Invalid email provided");
    document.getElementById("error").innerHTML = "Invalid email provided";
  } else if (password === "") {
    console.log("No password provided");
    document.getElementById("error").innerHTML = "No password provided";
  } else if (confpassword === "") {
    console.log("No confirmation password provided");
    document.getElementById("error").innerHTML =
      "No confirmation password provided";
  } else if (password !== confpassword) {
    console.log("Passwords are not the same");
    document.getElementById("error").innerHTML = "Passwords are not the same";
  } else {
    console.log(
      "Profile\n\nEmail: " +
        email +
        "\nUseranme: " +
        username +
        "\nPassword: " +
        password
    );
    //currentUser = username;
    const person = {
      username: username,
      email: email,
      password: password,
    };
    await axios.post("http://localhost:3001/api/newUser", person);
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
        <input type="password" className="passwordBox"></input>
        <div className="confirm-password">Confirm Password</div>
        <input type="password" className="confPasswordBox"></input>
        <p className="errorMessage2" id="error"></p>
      </div>

      <img
        className="bottomLine3"
        alt=""
        src={require("./signupImages/bLine3.png")}
      />

      <img
        className="copyright3"
        alt=""
        src={require("./signupImages/copyright3.png")}
      />

      <img
        className="socialMedia3"
        alt=""
        src={require("./signupImages/socialMedia3.png")}
      />

      <div className="address3">{"2022 Potion, Inc"}</div>
    </div>
  );
}

export default TryNotionFree;
