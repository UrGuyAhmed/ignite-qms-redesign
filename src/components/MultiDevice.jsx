import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiX, FiCheckCircle, FiUsers, FiGrid } from 'react-icons/fi';
import './MultiDevice.css';

import KioskImg from '../assets/materiel/Kiosk 1.png';
import DesktopImg from '../assets/materiel/Dashboard.png';
import MobileImg from '../assets/materiel/Ecran.png';
import GuichetImg from '../assets/materiel/Guichet.png';

const MultiDevice = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rawBullets = t('architecture.bullets', { returnObjects: true });
  const bullets = Array.isArray(rawBullets) ? rawBullets : [];

  return (
    <section className="multi-device-section" id="architecture">
      <div className="md-container">

        <div className="md-intro">
          <span className="md-eyebrow" data-aos="fade-up">
            {t('architecture.eyebrow')}
          </span>
          <h2 className="md-title" data-aos="fade-up" data-aos-delay="100">
            {t('architecture.title')}
          </h2>
          <p className="md-desc" data-aos="fade-up" data-aos-delay="200">
            {t('architecture.desc')}
          </p>
        </div>

        <div className="md-bento" data-aos="fade-up" data-aos-delay="300">

          {/* --- Panel A: white, Kiosk photo dominant --- */}
          <div className="md-panel md-panel--white">
            <div className="md-panel-photo md-panel-photo--kiosk">
              <img src={KioskImg} alt="Kiosk" />
              <div className="md-flow-badge">
                <FiUsers className="md-flow-badge-icon" />
                <span className="md-flow-badge-arrow">→</span>
                <FiGrid className="md-flow-badge-icon" />
              </div>
            </div>
            <div className="md-panel-copy">
              <h3 className="md-panel-title">{t('architecture.panelA.title', 'Modern Workplace Reimagined')}</h3>
              <p className="md-panel-text">{bullets[0] || t('architecture.desc')}</p>
            </div>
          </div>

          {/* --- Panel B: navy, Dashboard photo dominant --- */}
          <div className="md-panel md-panel--dark">
            <div className="md-panel-photo md-panel-photo--dashboard">
              <img src={DesktopImg} alt="Dashboard" />
            </div>
            <div className="md-panel-copy">
              <h3 className="md-panel-title md-panel-title--light">
                {t('architecture.panelB.title', 'Every Device, One Platform')}
              </h3>
              <p className="md-panel-text md-panel-text--light">
                {bullets[1] || t('architecture.desc')}
              </p>
            </div>
          </div>

          {/* --- Panel C: green, Mobile photo dominant --- */}
          <div className="md-panel md-panel--green">
            <div className="md-panel-photo md-panel-photo--mobile">
              <img src={MobileImg} alt="Display screen" />
            </div>
            <div className="md-panel-copy">
              <h3 className="md-panel-title">{t('architecture.panelC.title', 'Built for Flow')}</h3>
              <p className="md-panel-text">{bullets[2] || t('architecture.desc')}</p>
            </div>
          </div>

          {/* --- Panel D: pink, Guichet photo dominant --- */}
          <div className="md-panel md-panel--pink">
            <div className="md-panel-photo md-panel-photo--guichet">
              <img src={GuichetImg} alt="Counter display" />
            </div>
            <div className="md-panel-copy">
              <h3 className="md-panel-title md-panel-title--light">
                {t('architecture.panelD.title', 'Industry Leading Performance')}
              </h3>
              <p className="md-panel-text md-panel-text--light">
                {bullets[3] || t('architecture.desc')}
              </p>
            </div>
          </div>

        </div>

        <div className="md-cta-wrap" data-aos="fade-up" data-aos-delay="400">
          <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
            {t('architecture.cta')}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="md-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="md-modal-content" onClick={e => e.stopPropagation()}>
            <button className="md-modal-close" onClick={() => setIsModalOpen(false)}>
              <FiX />
            </button>
            <h3 className="md-modal-title">{t('architecture.modal.title')}</h3>
            <p className="md-modal-text">{t('architecture.modal.text')}</p>
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