import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.js'
import Landing_page from './components/Landing_page/Landing_page.js'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recording" element={<Landing_page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
