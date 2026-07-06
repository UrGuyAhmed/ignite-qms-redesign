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

        {/* Mosaic Items stagger in automatically using the index */}
        <div className="showcase-mosaic">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`mosaic-item mosaic-item--${img.type}`}
              data-aos="fade-up" 
              data-aos-delay={index * 150} // 0ms, 150ms, 300ms, 450ms
            >
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