import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiX, FiSettings, FiUsers, FiActivity, FiClock } from 'react-icons/fi';
import './AdvancedControl.css';

import dashboardImg from '../assets/materiel/Dashboard.png'; 

const AdvancedControl = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Fixed: cards live at the top level of the translation resources ("cards.*"),
  // not nested under "queue_control.cards.*"
  const featureCards = [
    {
      icon: <FiSettings />,
      title: t('cards.c1_title', 'Configuration sur mesure'),
      desc: t('cards.c1_desc', "Créez des services, des catégories personnalisées et définissez des règles de priorité parfaitement adaptées à votre flux d'accueil.")
    },
    {
      icon: <FiUsers />,
      title: t('cards.c2_title', 'Gestion des visiteurs'),
      desc: t('cards.c2_desc', "Appelez, mettez en pause ou transférez facilement un visiteur vers un autre service en un clic, sans jamais perdre le contexte du ticket.")
    },
    {
      icon: <FiActivity />,
      title: t('cards.c3_title', 'Supervision en direct'),
      desc: t('cards.c3_desc', "Visualisez en temps réel l'état de toutes vos files actives, et affectez dynamiquement vos agents selon l'affluence de chaque guichet.")
    },
    {
      icon: <FiClock />,
      title: t('cards.c4_title', 'Traçabilité complète'),
      desc: t('cards.c4_desc', "Conservez un journal détaillé de chaque interaction. Analysez l'historique complet pour optimiser vos opérations et réduire les temps d'attente.")
    }
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
          
          {/* Left Side: Visual */}
          <div className="sec7-visual" data-aos="fade-right">
            <div className="sec7-image-wrapper">
              <img src={dashboardImg} alt="Ignite QMS Admin Dashboard" className="sec7-img" />
            </div>
          </div>

          {/* Right Side: Text Content & 4 Cards */}
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
            
            {/* The New 2x2 Card Grid */}
            <div className="sec7-rich-cards">
              {featureCards.map((card, index) => (
                <div 
                  key={index}
                  className="sec7-rich-card"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="sec7-card-icon-wrapper">
                    {card.icon}
                  </div>
                  <div className="sec7-card-text">
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

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