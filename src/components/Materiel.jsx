import React from 'react';
import { useTranslation } from 'react-i18next';
import './Materiel.css';

// FIXED LINE: Updated to the new Vite glob syntax
const materialImages = import.meta.glob('../assets/materiel/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });

const CheckIcon = () => (
  <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Materiel = () => {
  const { t } = useTranslation();

  const materialDetails = {
    'Kiosk 1': {
      badge: t('materiel.kiosk1.badge'),
      title: t('materiel.kiosk1.title'),
      desc: t('materiel.kiosk1.desc'),
      features: [
        t('materiel.kiosk1.f1'),
        t('materiel.kiosk1.f2'),
        t('materiel.kiosk1.f3'),
        t('materiel.kiosk1.f4')
      ]
    },
    'Kiosk 2': {
      badge: t('materiel.kiosk2.badge'),
      title: t('materiel.kiosk2.title'),
      desc: t('materiel.kiosk2.desc'),
      features: [
        t('materiel.kiosk2.f1'),
        t('materiel.kiosk2.f2'),
        t('materiel.kiosk2.f3'),
        t('materiel.kiosk2.f4')
      ]
    },
    'Kiosk 3': {
      badge: t('materiel.kiosk3.badge'),
      title: t('materiel.kiosk3.title'),
      desc: t('materiel.kiosk3.desc'),
      features: [
        t('materiel.kiosk3.f1'),
        t('materiel.kiosk3.f2'),
        t('materiel.kiosk3.f3'),
        t('materiel.kiosk3.f4')
      ]
    },
    'Kiosk 4': {
      badge: t('materiel.kiosk4.badge'),
      title: t('materiel.kiosk4.title'),
      desc: t('materiel.kiosk4.desc'),
      features: [
        t('materiel.kiosk4.f1'),
        t('materiel.kiosk4.f2'),
        t('materiel.kiosk4.f3'),
        t('materiel.kiosk4.f4')
      ]
    },
    'Kiosk': { 
      badge: t('materiel.kiosk.badge'),
      title: t('materiel.kiosk.title'),
      desc: t('materiel.kiosk.desc'),
      features: [
        t('materiel.kiosk.f1'),
        t('materiel.kiosk.f2'),
        t('materiel.kiosk.f3'),
        t('materiel.kiosk.f4')
      ]
    },
    'Ecran': {
      badge: t('materiel.ecran.badge'),
      title: t('materiel.ecran.title'),
      desc: t('materiel.ecran.desc'),
      features: [
        t('materiel.ecran.f1'),
        t('materiel.ecran.f2'),
        t('materiel.ecran.f3'),
        t('materiel.ecran.f4')
      ]
    },
    'Guichet': {
      badge: t('materiel.guichet.badge'),
      title: t('materiel.guichet.title'),
      desc: t('materiel.guichet.desc'),
      features: [
        t('materiel.guichet.f1'),
        t('materiel.guichet.f2'),
        t('materiel.guichet.f3'),
        t('materiel.guichet.f4')
      ]
    },
    'TicketMockup': {
      badge: t('materiel.ticket.badge'),
      title: t('materiel.ticket.title'),
      desc: t('materiel.ticket.desc'),
      features: [
        t('materiel.ticket.f1'),
        t('materiel.ticket.f2'),
        t('materiel.ticket.f3'),
        t('materiel.ticket.f4')
      ]
    },
    'Modification': {
      badge: t('materiel.mod.badge'),
      title: t('materiel.mod.title'),
      desc: t('materiel.mod.desc'),
      features: [
        t('materiel.mod.f1'),
        t('materiel.mod.f2'),
        t('materiel.mod.f3'),
        t('materiel.mod.f4')
      ]
    },
    'default': {
      badge: t('materiel.def.badge'),
      title: t('materiel.def.title'),
      desc: t('materiel.def.desc'),
      features: [
        t('materiel.def.f1'),
        t('materiel.def.f2'),
        t('materiel.def.f3'),
        t('materiel.def.f4')
      ]
    }
  };

  return (
    <section className="materiel-section" id="materiel">
      <div className="materiel__container">
        
        {Object.entries(materialImages).map(([path, url], index) => {
          
          const safePath = path.toLowerCase();
          let matchedKey = 'default';

          if (safePath.includes('kiosk 1')) {
            matchedKey = 'Kiosk 1';
          } else if (safePath.includes('kiosk 2')) {
            matchedKey = 'Kiosk 2';
          } else if (safePath.includes('kiosk 3')) {
            matchedKey = 'Kiosk 3';
          } else if (safePath.includes('kiosk 4')) {
            matchedKey = 'Kiosk 4';
          } else if (safePath.includes('kiosk')) {
            matchedKey = 'Kiosk';
          } else if (safePath.includes('ecran')) {
            matchedKey = 'Ecran';
          } else if (safePath.includes('guichet')) {
            matchedKey = 'Guichet';
          } else if (safePath.includes('ticketmockup')) {
            matchedKey = 'TicketMockup';
          } else if (safePath.includes('modification')) {
            matchedKey = 'Modification';
          }

          const details = materialDetails[matchedKey];
          const isReverse = index % 2 !== 0;

          return (
            <div key={index} className={`materiel-row ${isReverse ? 'row-reverse' : ''}`}>
              
              <div className="materiel-content">
                <span className="materiel-badge">{details.badge}</span>
                <h2 className="materiel-title">{details.title}</h2>
                <p className="materiel-desc">{details.desc}</p>
                
                <ul className="materiel-features-list">
                  {details.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="btn btn--primary materiel-btn">{t('materiel.btn_more')}</button>
              </div>

              <div className="materiel-image-wrapper">
                <img src={url} alt={details.title} loading="lazy" />
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Materiel;