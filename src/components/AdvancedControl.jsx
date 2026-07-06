import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheckCircle, FiX } from 'react-icons/fi';
import './AdvancedControl.css';

import dashboardImg from '../assets/materiel/Dashboard.png'; 

const AdvancedControl = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Defensive i18n mapping
  const rawBullets = t('queue_control.bullets', { returnObjects: true });
  const bullets = Array.isArray(rawBullets) ? rawBullets : [
    "Création de services et de catégories personnalisées",
    "Appel et rappel des visiteurs",
    "Transfert d'un ticket vers un autre service",
    "Gestion de files prioritaires",
    "Affectation des agents aux guichets",
    "Visualisation en temps réel des files actives",
    "Historique complet des tickets"
  ];

  const rawHighlights = t('queue_control.modal.highlights', { returnObjects: true });
  const highlights = Array.isArray(rawHighlights) ? rawHighlights : [
    "Appel du prochain visiteur",
    "Rappel d'un ticket",
    "Transfert entre services",
    "Mise en pause d'un guichet",
    "Gestion des priorités",
    "Historique des actions"
  ];

  return (
    <section className="sec7-advanced-control" id="gestion-des-flux">
      <div className="container">
        
        <div className="sec7-grid">
          
          {/* Left Side: Visual (Slides in from the left) */}
          <div className="sec7-visual" data-aos="fade-right">
            <div className="sec7-image-wrapper">
              <img src={dashboardImg} alt="Ignite QMS Admin Dashboard" className="sec7-img" />
            </div>
          </div>

          {/* Right Side: Text Content (Staggered Fade Up) */}
          <div className="sec7-content">
            <span className="sec7-eyebrow" data-aos="fade-up">
              {t('queue_control.eyebrow', 'GESTION DES FLUX')}
            </span>
            <h2 className="sec7-title" data-aos="fade-up" data-aos-delay="100">
              {t('queue_control.title', "Gardez le contrôle sur chaque file d'attente.")}
            </h2>
            <p className="sec7-description" data-aos="fade-up" data-aos-delay="200">
              {t('queue_control.desc', "Organisez vos visiteurs efficacement, réduisez les files physiques et améliorez la répartition de la charge entre vos équipes.")}
            </p>
            
            <ul className="sec7-feature-list">
              {bullets.map((bullet, index) => (
                <li 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100} // Dynamic staggering
                >
                  <FiCheckCircle className="sec7-check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <button 
              className="sec7-btn" 
              onClick={toggleModal}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t('queue_control.cta', 'Découvrir les fonctionnalités')}
            </button>
          </div>

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="sec7-modal-overlay" onClick={toggleModal}>
          <div className="sec7-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="sec7-modal-close" onClick={toggleModal}><FiX /></button>
            <h3>{t('queue_control.modal.title', "Une gestion opérationnelle plus fluide au quotidien")}</h3>
            <p>{t('queue_control.modal.text', "Depuis leur interface, les agents visualisent les visiteurs en attente et gèrent les appels en quelques clics. Les administrateurs peuvent définir les droits d'accès, organiser les services et suivre l'activité en direct.")}</p>
            <div className="sec7-modal-highlights">
              {highlights.map((highlight, index) => (
                <div className="sec7-highlight-item" key={index}>
                  <div className="sec7-highlight-dot"></div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdvancedControl;