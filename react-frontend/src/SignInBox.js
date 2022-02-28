import React from "react";
import Text222 from "./Text222";
import Text3 from "./Text3";
import "./SignInBox.css";
import { useNavigate } from "react-router-dom";

function SignInBox() {
  let navigate = useNavigate();
  return (
    <div className="sign-in-box">
      <Text222 />
      <div className="emailLogIn">{"Email"}</div>
      <input type="text" className="overlap-group1"/>
      <div className="passwordLogIn">{"Password"}</div>
      <input type="text" className="overlap-group3"/>
      <Text3 />
      <button onClick={()=> {navigate("/my-notes");}} className="overlap-group">
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

      <button onClick={()=> {navigate("/try-notion-free");}} className="overlap-group2">
        Sign Up
      </button>

    </div>
  );
}

export default SignInBox;
