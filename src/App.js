import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Pnf from './Page';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <h2> How React-Routers Work </h2>
     <Router>
     <Link to="/">Home</Link><br/><br/>
     <Link to="/About">About</Link><br/><br/>
     <Link to="/Contact">Contact</Link>
     <Link to="*"></Link>

     <Routes>
     <Route path="/" element={<Home/> } /> 
     <Route path="/About" element={<About/> } /> 
     <Route path="/Contact" element={<Contact/> } /> 
     <Route path="*" element={<Pnf />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
