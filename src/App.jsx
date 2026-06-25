import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Clients from './components/Solution'; // <-- This acts as Hero + Clients + Credibility
import Showcase from './components/Showcase'; 
import HowItWorks from './components/HowItWorks';
import MultiDevice from './components/MultiDevice';
import AdvancedControl from './components/AdvancedControl'; 
import DisplayScreens from './components/DisplayScreens'; 
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Customization from './components/Customization'; 
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import FloatingActions from './components/FloatingActions';

const Home = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingBottom: '70px' }}>
    <Navbar />
    
    <main style={{ flex: 1 }}> 
      <Clients />  
      <Showcase />

      <HowItWorks />
      <MultiDevice />
      <AdvancedControl />

      <DisplayScreens />
      
      <AnalyticsDashboard />
      <Customization /> 
      <FAQ /> 
    </main>
    
    <FloatingActions />
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