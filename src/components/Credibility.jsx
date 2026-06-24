import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBuilding, FaGlobe, FaBolt, FaCogs, FaCode } from 'react-icons/fa';
import './Credibility.css';

const Credibility = () => {
  const { t } = useTranslation();

  return (
    <section className="credibility-section">
      <div className="credibility-container">
        <div className="cred-card">
          <FaBuilding className="cred-icon" />
          <h4 className="cred-title">{t('credibility.c1_title')}</h4>
          <p className="cred-desc">{t('credibility.c1_desc')}</p>
        </div>
        
        <div className="cred-card">
          <FaGlobe className="cred-icon" />
          <h4 className="cred-title">{t('credibility.c2_title')}</h4>
          <p className="cred-desc">{t('credibility.c2_desc')}</p>
        </div>

        <div className="cred-card">
          <FaBolt className="cred-icon" />
          <h4 className="cred-title">{t('credibility.c3_title')}</h4>
          <p className="cred-desc">{t('credibility.c3_desc')}</p>
        </div>

        <div className="cred-card">
          <FaCogs className="cred-icon" />
          <h4 className="cred-title">{t('credibility.c4_title')}</h4>
          <p className="cred-desc">{t('credibility.c4_desc')}</p>
        </div>

        <div className="cred-card">
          <FaCode className="cred-icon" />
          <h4 className="cred-title">{t('credibility.c5_title')}</h4>
          <p className="cred-desc">{t('credibility.c5_desc')}</p>
        </div>
      </div>
    </section>
  );
};

export default Credibility;