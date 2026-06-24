import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheckCircle, FiX } from 'react-icons/fi';
import './AdvancedControl.css';

// Note: Replace the src with your actual admin dashboard asset later
import dashboardImg from '../assets/materiel/Dashboard.png'; 

const AdvancedControl = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Retrieve arrays directly from i18n
  const bullets = t('queue_control.bullets', { returnObjects: true });
  const highlights = t('queue_control.modal.highlights', { returnObjects: true });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="advanced-control-section">
      <div className="container">
        
        {/* Reversed Layout: Image Left, Text Right */}
        <div className="control-grid">
          
          {/* Left Side: Visual */}
          <div className="control-visual">
            <div className="image-wrapper card-shadow">
              <img src={dashboardImg} alt="Ignite QMS Admin Dashboard" />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="control-content">
            <span className="eyebrow">{t('queue_control.eyebrow')}</span>
            <h2>{t('queue_control.title')}</h2>
            <p className="description">{t('queue_control.desc')}</p>
            
            <ul className="feature-list">
              {bullets.map((bullet, index) => (
                <li key={index}>
                  <FiCheckCircle className="check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary" onClick={toggleModal}>
              {t('queue_control.cta')}
            </button>
          </div>

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content card-shadow" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>
              <FiX />
            </button>
            
            <h3>{t('queue_control.modal.title')}</h3>
            <p>{t('queue_control.modal.text')}</p>
            
            <div className="modal-highlights">
              {highlights.map((highlight, index) => (
                <div className="highlight-item" key={index}>
                  <div className="highlight-dot"></div>
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