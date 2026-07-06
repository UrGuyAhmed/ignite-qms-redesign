import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiX, FiCheckCircle } from 'react-icons/fi'; // Imported icons for a premium modal look
import './MultiDevice.css';

import KioskImg from '../assets/materiel/Kiosk 1.png';
import DesktopImg from '../assets/materiel/Dashboard.png';
import MobileImg from '../assets/materiel/Ecran.png'; 

const MultiDevice = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                data-aos-delay={300 + i * 100}
              >
                {b}
              </li>
            ))}
          </ul>
          
          <div data-aos="fade-up" data-aos-delay="600">
            <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
              {t('architecture.cta')}
            </button>
          </div>
        </div>
        
        <div className="md-visual-grid">
            {/* Images sliding in from the right with staggered delays */}
            <img src={KioskImg} alt="Kiosk" className="md-img-kiosk" data-aos="fade-left" data-aos-delay="100" />
            <img src={DesktopImg} alt="Dashboard" className="md-img-desktop" data-aos="fade-left" data-aos-delay="250" />
            <img src={MobileImg} alt="Mobile Interface" className="md-img-mobile" data-aos="fade-left" data-aos-delay="400" />
        </div>
      </div>

      {/* RESTORED AND STYLED MODAL */}
      {isModalOpen && (
        <div className="md-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="md-modal-content" onClick={e => e.stopPropagation()}>
            
            {/* Replaced the default 'Fermer' button with a clean X icon */}
            <button className="md-modal-close" onClick={() => setIsModalOpen(false)}>
              <FiX />
            </button>
            
            <h3 className="md-modal-title">{t('architecture.modal.title')}</h3>
            <p className="md-modal-text">{t('architecture.modal.text')}</p>
            
            {/* Added proper classes to the list so it can be styled */}
            <ul className="md-modal-highlights">
              {t('architecture.modal.highlights', { returnObjects: true }).map((h, i) => (
                <li key={i} className="md-modal-highlight-item">
                  <FiCheckCircle className="md-check-icon" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      )}
    </section>
  );
};

export default MultiDevice;