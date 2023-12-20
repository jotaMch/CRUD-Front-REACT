import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Filter from './components/sidebar/Filter';
import SaibaMais from './components/saibaMais/SaibaMais';
import { LateralProvider } from './LateralContext'; 

const App = () => {
  return (
    <Router>
      <LateralProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/inf' element={<SaibaMais />} />
        </Routes>
      </LateralProvider>
    </Router>
  );
};

export default App;
