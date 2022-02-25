import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

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
        <Link to="/my-notes-first-time-user">
          <div className="submitSign">Sign Up</div>
        </Link>
        <div className="username">Username</div>
        <div className="usernameBox"></div>
        <div className="email">Email</div>
        <div className="emailBox"></div>
        <div className="password">Password</div>
        <div className="passwordBox"></div>
        <div className="confirm-password">Confirm Password</div>
        <div className="confPasswordBox"></div>
      </div>
    </div>
  );
}

export default TryNotionFree;
