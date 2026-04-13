import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MaterialsFAQ } from './pages/MaterialsFAQ';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materials-faq" element={<MaterialsFAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
