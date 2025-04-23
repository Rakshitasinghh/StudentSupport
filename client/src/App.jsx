import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Complaint from './pages/Complaint'
import About from './pages/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
