import React from "react";
import { Link } from "react-router-dom";
import Text222 from "./Text222";
import Text3 from "./Text3";
import "./SignInBox.css";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

function SignInBox() {
  return (
    <div className="sign-in-box">
      <Text222 />
      <div
        className="overlap-group1"
        style={{
          backgroundImage: `url(${require("./signinboxImages/rectangle-2@1x.png")})`,
        }}
      >
        <div className="email">{"Email"}</div>
      </div>
      <div
        className="overlap-group3"
        style={{
          backgroundImage: `url(${require("./signinboxImages/rectangle-2@1x.png")})`,
        }}
      >
        <div className="password">{"Password"}</div>
      </div>
      <Text3 />
      <div className="overlap-group">
        <Link to="/my-notes">
          <img
            className="rectangle"
            alt=""
            src={require("./signinboxImages/rectangle-4@1x.png")}
          />
        </Link>
        <Link to="/my-notes" style={linkStyle}>
          <div className="sign-in">{"Sign In"}</div>
        </Link>
      </div>
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
      <div className="overlap-group2">
        <Link to="/try-notion-free">
          <img
            className="rectangle"
            alt=""
            src={require("./signinboxImages/rectangle-5@1x.png")}
          />
        </Link>
        <Link to="/try-notion-free" style={linkStyle}>
          <div className="sign-up">{"Sign Up"}</div>
        </Link>
      </div>
    </div>
  );
}

export default SignInBox;
