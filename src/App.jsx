import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Clients from './components/Solution'; 
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
      {/* 1. Solution */}
      <section id="solution">
        <Clients />  
      </section>

      {/* 2. Features (Fonctionnalités) */}
      <section id="fonctionnalites">
        <HowItWorks />
        <MultiDevice />
        <AdvancedControl />
      </section>

      {/* 3. Hardware (Matériel) */}
      <section id="materiel">
        <DisplayScreens />
      </section>

      {/* 4. Sectors (Secteurs) */}
      <section id="secteurs">
        {/* <SectorsComponent /> */}
        <Showcase />
      </section>
      
      {/* 5. References */}
      <section id="references">
        <AnalyticsDashboard />
      </section>

      {/* 6. Resources (Ressources) */}
      <section id="ressources">
        <Customization /> 
      </section>

      {/* 7. FAQ */}
      <section id="faq">
        <FAQ /> 
      </section>
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