import React from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function MyApp() {
    return (
      <Router>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    );  
}

export default MyApp;