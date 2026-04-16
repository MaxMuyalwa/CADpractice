import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { MaterialsFAQ } from './pages/MaterialsFAQ';
import { Layout } from './components/Layout';

// App component
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/materials-faq" element={<MaterialsFAQ />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
