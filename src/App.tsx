import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/🏠';
import PrivacyPolicy from './components/pages/㊙️';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1em', display: 'flex', gap: '1em' }}>
        <Link to="/">Home</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;