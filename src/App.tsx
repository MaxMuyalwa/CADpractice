import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { MaterialsFAQ } from './pages/MaterialsFAQ';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { StudentPrivacy } from './pages/StudentPrivacy';
import { EULA } from './pages/EULA';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

// App component
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/materials-faq" element={<MaterialsFAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/student-privacy" element={<StudentPrivacy />} />
          <Route path="/eula" element={<EULA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
