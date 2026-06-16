import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QMSLogo from '../assets/QMSLogo.png'; 
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'unset';
  }, [isDrawerOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar__container">
          
          <div className="navbar__logo-wrapper">
            <Link to="/">
              <img src={QMSLogo} alt="Ignite QMS Logo" style={{height:'40px', width:'auto'}}/>
            </Link>
          </div>

          <div className="navbar__nav desktop-only">
            <ul className="nav__list">
              <li><a href="/#solution" className="nav__link">Solution</a></li>
              <li><a href="/#caracteristiques" className="nav__link">Caractéristiques</a></li>
              <li><a href="/#clients" className="nav__link">Clients</a></li>
              {/* Updated to Link to the new Contact Page */}
              <li><Link to="/contact" className="nav__link">Contacts</Link></li>
            </ul>
          </div>

          <div className="navbar__actions desktop-only">
            {/* Updated buttons to Link to the new Contact Page */}
            <Link to="/contact" className="btn btn--secondary navbar-btn-secondary">Demandez une démo</Link>
            <Link to="/contact" className="btn btn--primary">Essayez Maintenant</Link>
          </div>

          <button className="burger-btn mobile-only" onClick={() => setIsDrawerOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="mobile-drawer__content">
          <button className="close-btn" onClick={() => setIsDrawerOpen(false)}>&times;</button>
          
          <nav className="mobile-drawer__nav">
            <a href="/#solution" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>Solution</a>
            <a href="/#caracteristiques" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>Caractéristiques</a>
            <a href="/#clients" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>Clients</a>
            {/* Updated Mobile Contact Link */}
            <Link to="/contact" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>Contacts</Link>
          </nav>

          <div className="mobile-drawer__contact">
            <a href="tel:+213770625655" className="contact-link">📞 +213 770 625 655</a>
            <a href="mailto:info@igniteae.com" className="contact-link">✉️ info@igniteae.com</a>
            <a href="https://wa.me/213770625655" className="btn btn--primary" style={{ backgroundColor: '#25D366', marginTop: '1rem' }}>WhatsApp</a>
          </div>
        </div>
        <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}></div>
      </div>
    </>
  );
};

export default Navbar;