import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Make sure to import your page components
import LoginPage from './components/LoginPage'; // Import LoginPage
import BitcoinRatesPage from './components/BitcoinRatesPage'; // Import BitcoinRatesPage
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bitcoin-rates" element={<BitcoinRatesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
