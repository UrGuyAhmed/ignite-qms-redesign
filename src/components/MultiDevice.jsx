import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MultiDevice.css';

import KioskImg from '../assets/materiel/Kiosk 1.png';
import DesktopImg from '../assets/materiel/Dashboard.png';
import MobileImg from '../assets/materiel/Ecran.png'; 

const MultiDevice = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="multi-device-section" id="architecture">
      <div className="md-container">
        <div className="md-content">
          <span className="md-eyebrow">{t('architecture.eyebrow')}</span>
          <h2 className="md-title">{t('architecture.title')}</h2>
          <p className="md-desc">{t('architecture.desc')}</p>
          <ul className="md-bullets">
            {t('architecture.bullets', { returnObjects: true }).map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
            {t('architecture.cta')}
          </button>
        </div>
        
        <div className="md-visual-grid">
            <img src={KioskImg} alt="Kiosk" className="md-img-kiosk" />
            <img src={DesktopImg} alt="Dashboard" className="md-img-desktop" />
            <img src={MobileImg} alt="Mobile Interface" className="md-img-mobile" />
        </div>
      </div>

      {/* THE MODAL - Ensure this is included so it doesn't crash */}
      {isModalOpen && (
        <div className="md-modal" onClick={() => setIsModalOpen(false)}>
          <div className="md-modal-content" onClick={e => e.stopPropagation()}>
            <h3>{t('architecture.modal.title')}</h3>
            <p>{t('architecture.modal.text')}</p>
            <ul>
              {t('architecture.modal.highlights', { returnObjects: true }).map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            <button onClick={() => setIsModalOpen(false)}>Fermer</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MultiDevice;