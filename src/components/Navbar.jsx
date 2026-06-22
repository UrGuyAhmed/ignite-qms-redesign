import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QMSLogo from '../assets/logo/QMSLogo.png'; 
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // State for language dropdown
  const [currentLang, setCurrentLang] = useState('FR');
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Flag map
  const flags = {
    FR: '🇫🇷',
    AR: '🇩🇿',
    EN: '🇬🇧'
  };

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
              <li><a href="/#fonctionnalites" className="nav__link">Fonctionnalités</a></li>
              <li><a href="/#materiel" className="nav__link">Matériel</a></li>
              <li><a href="/#secteurs" className="nav__link">Secteurs</a></li>
              <li><a href="/#references" className="nav__link">Références</a></li>
              <li><a href="/#ressources" className="nav__link">Ressources</a></li>
              <li><a href="/#faq" className="nav__link">FAQ</a></li>
            </ul>
          </div>

          <div className="navbar__actions desktop-only">
            
            {/* Language Dropdown */}
            <div 
              className="navbar__lang-dropdown" 
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <button 
                className="lang-toggle" 
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <span className="flag-icon">{flags[currentLang]}</span> 
                <span className="arrow">▼</span>
              </button>
              
              {isLangOpen && (
                <ul className="lang-menu">
                  {Object.keys(flags).map(lang => (
                    <li key={lang}>
                      <button 
                        onClick={() => {
                          setCurrentLang(lang);
                          setIsLangOpen(false);
                        }}
                      >
                        <span className="flag-icon">{flags[lang]}</span> {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link to="/contact" className="btn btn--secondary navbar-btn-secondary">Demander une démo</Link>
            <Link to="/contact" className="btn btn--primary">Tester gratuitement</Link>
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
            <a href="/#fonctionnalites" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>Fonctionnalités</a>
            <a href="/#materiel" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>Matériel</a>
            <a href="/#secteurs" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>Secteurs</a>
            <a href="/#references" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>Références</a>
            <a href="/#ressources" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>Ressources</a>
            <a href="/#faq" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>FAQ</a>
          </nav>

          <div className="mobile-drawer__contact">
            {/* Mobile Language Selector */}
            <div className="mobile-drawer__lang">
              {Object.keys(flags).map((lang) => (
                <React.Fragment key={lang}>
                  <button 
                    className={`lang-btn ${currentLang === lang ? 'active' : ''}`}
                    onClick={() => setCurrentLang(lang)}
                  >
                    {flags[lang]}
                  </button>
                  {lang !== 'EN' && <span className="lang-separator">|</span>}
                </React.Fragment>
              ))}
            </div>
            
            {/* Mobile Main CTA added here */}
            <Link to="/contact" className="btn btn--primary" style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }} onClick={() => setIsDrawerOpen(false)}>
              Tester gratuitement
            </Link>

            <a href="tel:+213770625655" className="contact-link">📞 +213 770 625 655</a>
            <a href="mailto:info@igniteae.com" className="contact-link">✉️ info@igniteae.com</a>
            <a href="https://wa.me/213770625655" className="btn btn--primary" style={{ backgroundColor: '#25D366', marginTop: '0.5rem', textAlign: 'center' }}>WhatsApp</a>
          </div>
        </div>
        <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}></div>
      </div>
    </>
  );
};

export default Navbar;