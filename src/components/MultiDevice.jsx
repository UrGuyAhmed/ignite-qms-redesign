import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiX, FiCheckCircle } from 'react-icons/fi';
import './MultiDevice.css';

import KioskImg from '../assets/materiel/Kiosk 1.png';
import DesktopImg from '../assets/materiel/Dashboard.png';
import MobileImg from '../assets/materiel/Ecran.png';
// NOTE: guessed filename to follow the same convention as the other three.
// If this isn't the real file in your assets/materiel folder, just tell me
// the correct name and I'll fix this one import line.
import GuichetImg from '../assets/materiel/Guichet.png';

const MultiDevice = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rawBullets = t('architecture.bullets', { returnObjects: true });
  const bullets = Array.isArray(rawBullets) ? rawBullets : [];

  // Each card pairs a real product image with the existing translated
  // bullet that best matches it, so no new copy/i18n keys are needed.
  const cards = [
    { img: KioskImg, alt: 'Kiosk', caption: bullets[0] },
    { img: DesktopImg, alt: 'Dashboard', caption: bullets[1] },
    { img: MobileImg, alt: 'Display screen', caption: bullets[2] },
    { img: GuichetImg, alt: 'Counter display', caption: bullets[4] || t('materiel.guichet.title') },
  ];

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

        <div className="md-card-grid">
          {cards.map((card, i) => (
            <div
              className="md-photo-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img src={card.img} alt={card.alt} className="md-photo-card-img" />
              <div className="md-photo-card-overlay">
                <span>{card.caption}</span>
              </div>
            </div>
          ))}
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