import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Clients from './components/Solution';
import Showcase from './components/Showcase'; 
import HowItWorks from './components/HowItWorks';
import MultiDevice from './components/MultiDevice';
import AdvancedControl from './components/AdvancedControl'; 
import DisplayScreens from './components/DisplayScreens'; 

import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

const Home = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <main style={{ flex: 1, marginTop: '5rem' }}>
      <Clients />
      <Showcase />
      <HowItWorks />
      <MultiDevice />
      <AdvancedControl /> 
      <DisplayScreens />
      
      <FAQ /> 
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;