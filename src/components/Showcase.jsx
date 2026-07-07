import React from 'react';
import { useTranslation } from 'react-i18next';
import './Showcase.css';

import KioskImg from '../assets/materiel/Kiosk.png'
import AgentG from '../assets/materiel/Guichet.png'
import dashboardImg from '../assets/materiel/Dashboard.png';
import TvImg from '../assets/materiel/TvSC.png'

const Showcase = () => {
  const { t } = useTranslation();

  // Paired the images with the "cards" translations from your i18n file
  const cardsData = [
    { src: KioskImg, alt: 'Kiosk Interface', titleKey: 'cards.c1_title', descKey: 'cards.c1_desc' },
    { src: AgentG, alt: 'Agent Dashboard', titleKey: 'cards.c2_title', descKey: 'cards.c2_desc' },
    { src: dashboardImg, alt: 'Admin Dashboard', titleKey: 'cards.c3_title', descKey: 'cards.c3_desc' },
    { src: TvImg, alt: 'Display Screen', titleKey: 'cards.c4_title', descKey: 'cards.c4_desc' }
  ];

  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-container">
        
        {/* Header Content animates first */}
        <div className="showcase-header">
          <span className="showcase-eyebrow" data-aos="fade-up">
            {t('showcase.eyebrow')}
          </span>
          <h2 className="showcase-title" data-aos="fade-up" data-aos-delay="100">
            {t('showcase.title')}
          </h2>
          <p className="showcase-desc" data-aos="fade-up" data-aos-delay="200">
            {t('showcase.desc')}
          </p>
        </div>

        {/* Cards layout replacing the mosaic */}
        <div className="showcase-cards">
          {cardsData.map((card, index) => (
            <div 
              key={index} 
              className="showcase-card"
              data-aos="fade-up" 
              data-aos-delay={index * 150} // Staggered animation: 0ms, 150ms, 300ms, 450ms
            >
              <div className="card-image">
                <img src={card.src} alt={card.alt} loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{t(card.titleKey)}</h3>
                <p>{t(card.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Showcase;