import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:appName/support" element={<Support />} />
          <Route path="/:appName/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
