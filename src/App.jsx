import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- AOS Imports ---
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Solution from './components/Solution'; 
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
import PageLoader from './components/PageLoader'; 

// Transition Wrapper
const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <PageLoader />}
      {children}
    </>
  );
};

const Home = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingBottom: '70px' }}>
    <Navbar />
    
    <main style={{ flex: 1 }}> 
      {/* 1. Solution */}
      <section id="solution">
        <Solution />  
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
  // Initialize AOS globally when the app loads
  useEffect(() => {
    AOS.init({
      duration: 1000, // The animation takes 1 second
      once: true,     // Elements only animate once when you scroll down
      offset: 100,    // Triggers the animation 100px before the element enters the screen
    });
  }, []);

  return (
    <Router>
      <PageTransitionWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageTransitionWrapper>
    </Router>
  );
}

export default App;