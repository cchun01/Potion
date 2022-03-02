import React from "react";
import Text222 from "./Text222";
import Text3 from "./Text3";
import "./ShowPassword";
import "./SignInBox.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ShowPassword from "./ShowPassword";

function clicked() {
  const email = document.getElementsByClassName("overlap-group1")[0].value;
  const password = document.getElementsByClassName("overlap-group3")[0].value;
  if (email === "" && password === "") {
    console.log("No email or password provided.");
  } else if (password === "") {
    console.log("No password provided.");
  } else if (email === "") {
    console.log("No email provided.");
  } else {
    console.log(
      "Profile\nEmail: " +
        email +
        "\nPassword: " +
        password +
        "\nWelcome Back! :)"
    );
  }
}
function SignInBox() {
  let navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="sign-in-box">
      <Text222 />
      <div className="emailLogIn">{""}</div>
      <input
        type="text"
        className="overlap-group1"
        placeholder="Email Address"
      />
      <div className="passwordLogIn">{""}</div>
      <input
        type={passwordShown ? "text" : "password"}
        className="overlap-group3"
        placeholder="Password"
      />

      <ShowPassword />
      <button onClick={togglePassword} className="show-password">
        {" "}
        show{" "}
      </button>

      <Text3 />
      <button
        onClick={() => {
          clicked();
          navigate("/my-notes");
        }}
        className="overlap-group"
      >
        Sign In
      </button>

      <div className="flex-row">
        <img
          className="line-7"
          alt=""
          src={require("./signinboxImages/line-7@2x.png")}
        />
        <div className="or">{"or"}</div>
        <img
          className="line-8"
          alt=""
          src={require("./signinboxImages/line-7@2x.png")}
        />
      </div>

      <button
        onClick={() => {
          navigate("/try-notion-free");
        }}
        className="overlap-group2"
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignInBox;
