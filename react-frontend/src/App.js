import React from "react";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";
import EmailVerification from "./EmailVerification";
import MyNotes from "./MyNotes";
import LogIn from "./LogIn";
import Home from "./Home";
import Help from "./Help";
import NewNote from "./NewNote";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "green",
};

function MyApp() {
  return (
    <Router>
      <nav>
        <div className="overlap-group4">
          <div className="nav-bar">
            <Link to="/" className="align-self-flex-center" style={linkStyle}>
              <img
                className="image-1-1"
                alt=""
                src={require("./navbarImages/image-1@2x.png")}
              />
            </Link>

            <div className="text">
              <Link to="/" style={linkStyle}>
                <div className="potion">
                  <span className="montserrat-bold-envy-20px">{"Potion"}</span>
                  <span className="montserrat-medium-envy-20px">{""}</span>
                </div>
              </Link>
              <Link to="/about-us" style={linkStyle}>
                <div className="about-us">{"About Us"}</div>
              </Link>
              <Link to="/help" style={linkStyle}>
                <div className="help">{"Help"}</div>
              </Link>
            </div>
            <div className="text-1">
              <Link to="/log-in" style={linkStyle}>
                <div className="log-in-1">{"Log In"}</div>
              </Link>
              <Link to="/try-notion-free" style={linkStyle}>
                <div className="try-potion-free">{"Try Potion Free"}</div>
              </Link>
            </div>
          </div>
          <img
            className="line-1"
            alt=""
            src={require("./navbarImages/line-1@2x.png")}
          />
          <img
            className="line-2"
            alt=""
            src={require("./navbarImages/line-3@1x.png")}
          />
        </div>
      </nav>
      <Routes>
        <Route path="/try-notion-free" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/my-notes" element={<MyNotes />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/new-note" element={<NewNote myid={0} />} />
        <Route path="/new-note1" element={<NewNote myid={1} />} />
        <Route path="/new-note2" element={<NewNote myid={2} />} />
        <Route path="/new-note3" element={<NewNote myid={3} />} />
        <Route path="/new-note4" element={<NewNote myid={4} />} />
        <Route path="/new-note5" element={<NewNote myid={5} />} />
        <Route path="/new-note6" element={<NewNote myid={6} />} />
        <Route path="/new-note7" element={<NewNote myid={7} />} />
        <Route path="/new-note8" element={<NewNote myid={8} />} />
        <Route path="/new-note9" element={<NewNote myid={9} />} />
        <Route path="/new-note10" element={<NewNote myid={10} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
//other comment!
export default MyApp;
