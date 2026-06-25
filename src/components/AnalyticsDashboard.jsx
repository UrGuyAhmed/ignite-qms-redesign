import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiBarChart2, FiCheckCircle, FiX } from 'react-icons/fi';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = t('analytics.tabs', { returnObjects: true }) || [];
  const bullets = t('analytics.bullets', { returnObjects: true }) || [];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="ad-section">
      <div className="ad-container">
        <div className="ad-grid">

          {/* Left: Dashboard Visual */}
          <div className="ad-visual">
            <div className="ad-mockup">

              <div className="ad-tabs">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`ad-tab ${activeTab === index ? 'ad-tab--active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="ad-dashboard">
                <div className="ad-metrics">
                  <div className="ad-metric">
                    <span className="ad-metric__label">Total Tickets</span>
                    <span className="ad-metric__value">1,284</span>
                  </div>
                  <div className="ad-metric">
                    <span className="ad-metric__label">Avg Wait Time</span>
                    <span className="ad-metric__value">12m</span>
                  </div>
                  <div className="ad-metric">
                    <span className="ad-metric__label">Service Time</span>
                    <span className="ad-metric__value">8m</span>
                  </div>
                </div>

                <div className="ad-chart-area">
                  <div className={`ad-bar-chart ${activeTab % 2 === 0 ? 'ad-anim-up' : 'ad-anim-down'}`}>
                    <div className="ad-bar" style={{ height: '60%' }} />
                    <div className="ad-bar" style={{ height: '80%' }} />
                    <div className="ad-bar" style={{ height: '40%' }} />
                    <div className="ad-bar" style={{ height: '90%' }} />
                    <div className="ad-bar" style={{ height: '50%' }} />
                    <div className="ad-bar" style={{ height: '75%' }} />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Text Content */}
          <div className="ad-content">
            <span className="ad-eyebrow">{t('analytics.eyebrow')}</span>
            <h2 className="ad-title">{t('analytics.title')}</h2>
            <p className="ad-desc">{t('analytics.desc')}</p>

            <ul className="ad-bullets">
              {bullets.map((bullet, index) => (
                <li key={index} className="ad-bullet-item">
                  <FiCheckCircle className="ad-check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <button className="ad-btn" onClick={toggleModal}>
              <FiBarChart2 />
              {t('analytics.cta')}
            </button>
          </div>

        </div>
      </div>

      {isModalOpen && (
        <div className="ad-modal-overlay" onClick={toggleModal}>
          <div className="ad-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ad-modal-close" onClick={toggleModal}><FiX /></button>
            <h3>{t('analytics.modal.title')}</h3>
            <p>{t('analytics.modal.text')}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnalyticsDashboard;