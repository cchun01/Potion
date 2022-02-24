import React from "react";
import { Link } from "react-router-dom";
import "./SignInBox";
import "./LogIn.css";
import SignInBox from "./SignInBox";

const linkStyle = {
  textDecoration: "none",
  color: "green",
};

function LogIn() {

  return (
    <div className="container-center-horizontal">
      <div className="log-in screen">
        <div className="overlap-group8">
          <img className="image-7" src={require("./loginImages/image-7@2x.png")} />
          <SignInBox {...SignInBox}/>
          <img className="line-10" src={require("./loginImages/line-3@1x.png")} />
        </div>
        <div className="overlap-group-container">
          <div className="image-container" style={{ backgroundImage: `url(${require("./loginImages/image-2@2x.png")})` }}>
            <img className="image" src={require("./loginImages/image-2@2x.png")} />
            <img className="image" src={require("./loginImages/image-2@2x.png")} />
            <img className="image" src={require("./loginImages/image-2@2x.png")} />
          </div>
          <div className="address-container">
            <div className="address">{"2022 Potion, Inc"}</div>
            <div className="address">{"2022 Potion, Inc"}</div>
            <div className="address">{"2022 Potion, Inc"}</div>
            <div className="address">{"2022 Potion, Inc"}</div>
          </div>
          <div className="image-container-1" style={{ backgroundImage: `url(${require("./loginImages/image-3@2x.png")})` }}>
            <img className="image-1" src={require("./loginImages/image-3@2x.png")} />
            <img className="image-1" src={require("./loginImages/image-3@2x.png")} />
            <img className="image-1" src={require("./loginImages/image-3@2x.png")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
