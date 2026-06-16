import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage'; // Import the new page

// This component acts as your landing page
const Home = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <main style={{ flex: 1, marginTop: '5rem' }}>
      <Clients />
      <FAQ /> {/* Inserted exactly between Clients and Footer */}
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