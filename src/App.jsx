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
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

// Import the new Floating Actions component
import FloatingActions from './components/FloatingActions';

const Home = () => (
  // Added paddingBottom: '70px' to prevent the mobile sticky bar from overlapping content
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingBottom: '70px' }}>
    <Navbar />
    <main style={{ flex: 1, marginTop: '5rem' }}>
      <Clients />
      <Showcase />
      <HowItWorks />
      <MultiDevice />
      <AdvancedControl /> 
      <DisplayScreens />
      <AnalyticsDashboard />
      
      {/* <Materiel /> <-- Don't forget to import and add this back if you need the Hardware section! */}
      
      <FAQ /> 
    </main>
    
    {/* Floating elements injected here so they sit on top of everything */}
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