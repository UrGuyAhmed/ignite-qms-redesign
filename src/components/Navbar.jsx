import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import QMSLogo from '../assets/logo/QMSLogo.png'; 
import './Navbar.css';

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Safely get the current language (fallback to 'FR' if not set yet)
  const currentLang = (i18n.language || 'fr').substring(0, 2).toUpperCase();

  // Flag map
  const flags = {
    FR: '🇫🇷',
    AR: '🇩🇿',
    EN: '🇬🇧'
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile drawer lock
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'unset';
  }, [isDrawerOpen]);

  // Handle RTL layout for Arabic
  useEffect(() => {
    if (i18n.language) {
      document.body.dir = i18n.language.startsWith('ar') ? 'rtl' : 'ltr';
    }
  }, [i18n.language]);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode.toLowerCase());
    setIsLangOpen(false);
  };

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
              <li><a href="/#solution" className="nav__link">{t('nav.solution')}</a></li>
              <li><a href="/#fonctionnalites" className="nav__link">{t('nav.features')}</a></li>
              <li><a href="/#materiel" className="nav__link">{t('nav.hardware')}</a></li>
              <li><a href="/#secteurs" className="nav__link">{t('nav.sectors')}</a></li>
              <li><a href="/#references" className="nav__link">{t('nav.references')}</a></li>
              <li><a href="/#ressources" className="nav__link">{t('nav.resources')}</a></li>
              <li><a href="/#faq" className="nav__link">{t('nav.faq')}</a></li>
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
                <span className="flag-icon">{flags[currentLang] || '🌍'}</span> 
                <span className="arrow">▼</span>
              </button>
              
              {isLangOpen && (
                <ul className="lang-menu">
                  {Object.keys(flags).map(lang => (
                    <li key={lang}>
                      <button onClick={() => changeLanguage(lang)}>
                        <span className="flag-icon">{flags[lang]}</span> {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link to="/contact" className="btn btn--secondary navbar-btn-secondary">{t('cta.demo')}</Link>
            <Link to="/contact" className="btn btn--primary">{t('cta.test')}</Link>
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
            <a href="/#solution" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>{t('nav.solution')}</a>
            <a href="/#fonctionnalites" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>{t('nav.features')}</a>
            <a href="/#materiel" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>{t('nav.hardware')}</a>
            <a href="/#secteurs" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>{t('nav.sectors')}</a>
            <a href="/#references" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>{t('nav.references')}</a>
            <a href="/#ressources" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>{t('nav.resources')}</a>
            <a href="/#faq" className="mobile__link" onClick={() => setIsDrawerOpen(false)}>{t('nav.faq')}</a>
          </nav>

          <div className="mobile-drawer__contact">
            {/* Mobile Language Selector */}
            <div className="mobile-drawer__lang">
              {Object.keys(flags).map((lang) => (
                <React.Fragment key={lang}>
                  <button 
                    className={`lang-btn ${currentLang === lang ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang)}
                  >
                    {flags[lang]}
                  </button>
                  {lang !== 'EN' && <span className="lang-separator">|</span>}
                </React.Fragment>
              ))}
            </div>
            
            <Link to="/contact" className="btn btn--primary" style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }} onClick={() => setIsDrawerOpen(false)}>
              {t('cta.test')}
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