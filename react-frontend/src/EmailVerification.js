import React from "react";
import "./EmailVerification.css";


function clicked() {
  const code = document.getElementsByClassName("textboxC")[0].value;
  if(code === ""){
    console.log("No code provided");
  }else{
    console.log("Profile\n\nCode: " + code);
  }
}

function EmailVerification() {
  return (
    <div>
      <div className="headerLog">Email Verification</div>
      <div className="fieldNameCLog">Enter Code:</div>
      <div className="fieldNameILog">We sent a code to the provided email. Please enter the code below to authenticate your account.</div>
      <input type="text" className="textboxCLog" />
      <button onClick={clicked} className="submitLog">
        Submit
      </button>
    </div>
  );
}

export default EmailVerification;