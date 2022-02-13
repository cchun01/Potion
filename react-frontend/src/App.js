import React from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn';
import Home from './Home';
import AboutUs from './AboutUs';
import EmailVerification from './EmailVerification';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

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
          <Route path="/emailverification" element={<EmailVerification />} />
        </Routes>
      </Router>
    );  
}

export default MyApp;