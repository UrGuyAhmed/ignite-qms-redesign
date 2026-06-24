import React from 'react';
import { useTranslation } from 'react-i18next';
import './Showcase.css';

import dashboardImg from '../assets/materiel/Dashboard.png';
import KioskImg from '../assets/materiel/Kiosk.png'
import TvImg from '../assets/materiel/TvSC.png'
import AgentG from '../assets/materiel/Guichet.png'

const Showcase = () => {
  const { t } = useTranslation();

  const images = [

    { src: dashboardImg, alt: 'Admin Dashboard', type: 'large' },
    { src: KioskImg, alt: 'Kiosk Interface', type: 'large'},
    { src: TvImg, alt:'Display Screen', type: 'large'},
    { src: AgentG, alt: 'Agent Dashboard', type: 'large'}
  ];

  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-container">
        
        <div className="showcase-header">
          <span className="showcase-eyebrow">{t('showcase.eyebrow')}</span>
          <h2 className="showcase-title">{t('showcase.title')}</h2>
          <p className="showcase-desc">{t('showcase.desc')}</p>
        </div>

        <div className="showcase-mosaic">
          {images.map((img, index) => (
            <div key={index} className={`mosaic-item mosaic-item--${img.type}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="mosaic-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Showcase;