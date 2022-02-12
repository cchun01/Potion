import React from "react";
import "./Home.css";
import {useNavigate} from "react-router-dom";

function Home() {
    let navigate = useNavigate();

    return (
      <div>
        <div className="header">Potion</div>
        <div className="logo">Logo</div>
        <button onClick={()=> {navigate("/signup");}} className="signUp">
        Sign Up
        </button>
        <button onClick={()=> {navigate("/login");}} className="logIn">
          Log In
        </button>
        <div className="testimonials">Testimonials</div>
        <div className="instructions">How To Get Started</div>
        <button onClick={()=> {navigate("/aboutus");}} className="about">
        About Us
        </button>
       
      </div>
    );
  }
  
  export default Home;