import React from "react";
import { Link } from "react-router-dom";
import Text222 from "../Text222";
import Text3 from "../Text3";
import "./SignInBox.css";

function SignInBox(props) {
  const {
    overlapGroup1,
    email,
    overlapGroup3,
    password,
    rectangle4,
    signIn,
    line7,
    or,
    line8,
    rectangle5,
    signUp,
  } = props;

  return (
    <div className="sign-in-box">
      <Text222 />
      <div
        className="overlap-group1"
        style={{ backgroundImage: `url(${overlapGroup1})` }}
      >
        <div className="email montserrat-medium-nobel-20px">{email}</div>
      </div>
      <div
        className="overlap-group3"
        style={{ backgroundImage: `url(${overlapGroup3})` }}
      >
        <div className="password montserrat-medium-nobel-20px">{password}</div>
      </div>
      <Text3 />
      <div className="overlap-group">
        <Link to="/my-notes">
          <img className="rectangle" alt="" src={rectangle4} />
        </Link>
        <div className="sign-in montserrat-extra-bold-white-20px">{signIn}</div>
      </div>
      <div className="flex-row">
        <img className="line-7" alt="" src={line7} />
        <div className="or montserrat-medium-nobel-20px">{or}</div>
        <img className="line-8" alt="" src={line8} />
      </div>
      <div className="overlap-group2">
        <Link to="/try-notion-free">
          <img className="rectangle" alt="" src={rectangle5} />
        </Link>
        <Link to="/try-notion-free">
          <div className="sign-up montserrat-extra-bold-black-20px">
            {signUp}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SignInBox;
