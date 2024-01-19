import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import KeyFeature from './pages/KeyFeature';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Demo from './pages/Demo';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/features' element={<KeyFeature />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/demo' element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
