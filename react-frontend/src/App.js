import React from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn';
import Home from './Home';
import AboutUs from './AboutUs';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import styled from "styled-components";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'green'
};

function MyApp() {
    return (
      <Router>
        <nav>
          <Link to="/" style={linkStyle}> Home </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    );  
}

export default MyApp;