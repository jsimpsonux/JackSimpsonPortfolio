import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
