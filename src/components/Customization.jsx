import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiSliders } from 'react-icons/fi';
import './Customization.css';

const Customization = () => {
  const { t } = useTranslation();
  
  // Define the interactive color themes
  const colorThemes = [
    { id: 'orange', hex: '#FF7F11', name: 'Ignite Orange' },
    { id: 'blue', hex: '#00ABE7', name: 'Corporate Blue' },
    { id: 'green', hex: '#6DBA3A', name: 'Eco Green' }
  ];

  const [activeTheme, setActiveTheme] = useState(colorThemes[0]);
  const bullets = t('customization.bullets', { returnObjects: true }) || [];

  return (
    <section className="customization-section" id="customization">
      <div className="container">
        <div className="customization-grid">
          
          {/* Left Side: Text & Swatches (Staggered Fade Up) */}
          <div className="customization-content">
            <span className="eyebrow" data-aos="fade-up">
              {t('customization.eyebrow')}
            </span>
            <h2 data-aos="fade-up" data-aos-delay="100">
              {t('customization.title')}
            </h2>
            <p className="description" data-aos="fade-up" data-aos-delay="200">
              {t('customization.desc')}
            </p>
            
            {/* Color Swatch Selector */}
            <div className="theme-selector" data-aos="fade-up" data-aos-delay="300">
              <span className="theme-label">Testez vos couleurs :</span>
              <div className="swatch-container">
                {colorThemes.map((theme) => (
                  <button
                    key={theme.id}
                    className={`color-swatch ${activeTheme.id === theme.id ? 'active' : ''}`}
                    style={{ backgroundColor: theme.hex }}
                    onClick={() => setActiveTheme(theme)}
                    aria-label={`Select ${theme.name} theme`}
                  />
                ))}
              </div>
            </div>

            <ul className="feature-list">
              {bullets.map((bullet, index) => (
                <li 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100} 
                >
                  <FiCheck className="check-icon" style={{ color: activeTheme.hex }} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Changed from <button> to <a> and linked to the footer ID */}
            {/* Added inline-flex and gap: 8px to fix the icon overlapping the text */}
            <a 
              href="#contacts"
              className="btn-primary" 
              style={{ 
                backgroundColor: activeTheme.hex, 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <FiSliders className="btn-icon" />
              {t('customization.cta')}
            </a>
          </div>

          {/* Right Side: Interactive Mockups (Staggered Fade Left) */}
          <div className="customization-visuals">
            
            {/* Mockup 1: Kiosk Interface */}
            <div 
              className="mockup-kiosk card-shadow" 
              data-aos="fade-left" 
              data-aos-delay="200"
            >
              <div className="kiosk-header" style={{ backgroundColor: activeTheme.hex }}>
                <div className="mock-logo">LOGO</div>
                <div className="mock-lang">FR</div>
              </div>
              <div className="kiosk-body">
                <div className="mock-btn">Service 1</div>
                <div className="mock-btn">Service 2</div>
                <div className="mock-btn">Service 3</div>
              </div>
            </div>

            {/* Mockup 2: Printed Ticket */}
            <div 
              className="mockup-ticket card-shadow" 
              data-aos="fade-left" 
              data-aos-delay="400"
            >
              <div className="ticket-logo" style={{ color: activeTheme.hex }}>LOGO</div>
              <div className="ticket-date">14/10/2026 - 10:30</div>
              <div className="ticket-number">A-142</div>
              <div className="ticket-service">Service Client</div>
              <div className="ticket-qr" style={{ borderColor: activeTheme.hex }}>
                <div className="qr-inner" style={{ backgroundColor: activeTheme.hex }}></div>
              </div>
              <div className="ticket-footer">Bienvenue</div>
            </div>

            {/* Mockup 3: Display Screen */}
            <div 
              className="mockup-display card-shadow" 
              data-aos="fade-left" 
              data-aos-delay="600"
            >
              <div className="display-main">
                <div className="display-ticket-call" style={{ color: activeTheme.hex }}>A-142</div>
                <div className="display-counter">Guichet 03</div>
              </div>
              <div className="display-sidebar">
                <div className="history-line"><span>A-141</span><span>G-01</span></div>
                <div className="history-line"><span>B-089</span><span>G-02</span></div>
              </div>
              <div className="display-ticker" style={{ backgroundColor: activeTheme.hex }}>
                Veuillez préparer votre pièce d'identité.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;