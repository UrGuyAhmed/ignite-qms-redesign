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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="analytics-section">
      <div className="container">
        <div className="analytics-grid">
          
          {/* Left Side: Interactive Dashboard Visual */}
          <div className="analytics-visual">
            <div className="dashboard-mockup card-shadow">
              
              {/* Interactive Tabs above dashboard */}
              <div className="dashboard-tabs">
                {tabs.map((tab, index) => (
                  <button 
                    key={index}
                    className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dashboard Content Area */}
              <div className="dashboard-content">
                {/* Header Metrics */}
                <div className="metrics-row">
                  <div className="metric-card">
                    <span className="m-label">Total Tickets</span>
                    <span className="m-value">1,284</span>
                  </div>
                  <div className="metric-card">
                    <span className="m-label">Avg Wait Time</span>
                    <span className="m-value">12m</span>
                  </div>
                  <div className="metric-card">
                    <span className="m-label">Service Time</span>
                    <span className="m-value">8m</span>
                  </div>
                </div>

                {/* Animated Charts (Changes slightly based on active tab) */}
                <div className="chart-area">
                  <div className={`bar-chart ${activeTab % 2 === 0 ? 'animate-up' : 'animate-down'}`}>
                    <div className="bar b1" style={{height: '60%'}}></div>
                    <div className="bar b2" style={{height: '80%'}}></div>
                    <div className="bar b3" style={{height: '40%'}}></div>
                    <div className="bar b4" style={{height: '90%'}}></div>
                    <div className="bar b5" style={{height: '50%'}}></div>
                    <div className="bar b6" style={{height: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="analytics-text">
            <span className="eyebrow">{t('analytics.eyebrow')}</span>
            <h2>{t('analytics.title')}</h2>
            <p className="description">{t('analytics.desc')}</p>
            
            <ul className="feature-list">
              {bullets.map((bullet, index) => (
                <li key={index}>
                  <FiCheckCircle className="check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary" onClick={toggleModal}>
              <FiBarChart2 className="btn-icon" />
              {t('analytics.cta')}
            </button>
          </div>

        </div>
      </div>

      {/* Details Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content card-shadow" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>
              <FiX />
            </button>
            <h3>{t('analytics.modal.title')}</h3>
            <p>{t('analytics.modal.text')}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnalyticsDashboard;