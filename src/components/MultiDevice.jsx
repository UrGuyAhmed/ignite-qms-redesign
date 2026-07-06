import React from 'react'; // Removed useState since the modal is gone
import { useTranslation } from 'react-i18next';
import './MultiDevice.css';

import KioskImg from '../assets/materiel/Kiosk 1.png';
import DesktopImg from '../assets/materiel/Dashboard.png';
import MobileImg from '../assets/materiel/Ecran.png'; 

const MultiDevice = () => {
  const { t } = useTranslation();
  
  // Safely fetch the bullets
  const rawBullets = t('architecture.bullets', { returnObjects: true });
  const bullets = Array.isArray(rawBullets) ? rawBullets : [];

  return (
    <section className="multi-device-section" id="architecture">
      <div className="md-container">
        
        <div className="md-content">
          {/* Text elements staggered fading up */}
          <span className="md-eyebrow" data-aos="fade-up">
            {t('architecture.eyebrow')}
          </span>
          <h2 className="md-title" data-aos="fade-up" data-aos-delay="100">
            {t('architecture.title')}
          </h2>
          <p className="md-desc" data-aos="fade-up" data-aos-delay="200">
            {t('architecture.desc')}
          </p>
          
          <ul className="md-bullets">
            {bullets.map((b, i) => (
              <li 
                key={i}
                data-aos="fade-up" 
                data-aos-delay={300 + i * 100} // Dynamic staggering for bullets
              >
                {b}
              </li>
            ))}
          </ul>
          
          {/* Converted to a link that scrolls to the footer form */}
          <a 
            href="#contacts"
            className="btn btn--primary" 
            style={{ 
              textDecoration: 'none', 
              display: 'inline-block',
              marginTop: '15px'
            }}
            data-aos="fade-up" 
            data-aos-delay="600"
          >
            {t('architecture.cta')}
          </a>
        </div>
        
        <div className="md-visual-grid">
            {/* Images sliding in from the right with staggered delays */}
            <img src={KioskImg} alt="Kiosk" className="md-img-kiosk" data-aos="fade-left" data-aos-delay="100" />
            <img src={DesktopImg} alt="Dashboard" className="md-img-desktop" data-aos="fade-left" data-aos-delay="250" />
            <img src={MobileImg} alt="Mobile Interface" className="md-img-mobile" data-aos="fade-left" data-aos-delay="400" />
        </div>
      </div>

      {/* The entire unstyled modal block has been permanently deleted! */}
      
    </section>
  );
};

export default MultiDevice;