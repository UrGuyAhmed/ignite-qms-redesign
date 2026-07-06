import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiBarChart2, FiCheckCircle } from 'react-icons/fi';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = t('analytics.tabs', { returnObjects: true }) || [];
  const bullets = t('analytics.bullets', { returnObjects: true }) || [];

  return (
    <section className="ad-section">
      <div className="ad-container">
        <div className="ad-grid">

          {/* Left: Dashboard Visual (NOW FULLY TRANSLATED) */}
          <div className="ad-visual" data-aos="fade-right">
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
                    <span className="ad-metric__label">{t('analytics.mockup.total_tickets', 'Total Tickets')}</span>
                    <span className="ad-metric__value">1,284</span>
                  </div>
                  <div className="ad-metric">
                    <span className="ad-metric__label">{t('analytics.mockup.avg_wait', 'Avg Wait Time')}</span>
                    <span className="ad-metric__value">12m</span>
                  </div>
                  <div className="ad-metric">
                    <span className="ad-metric__label">{t('analytics.mockup.service_time', 'Service Time')}</span>
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
            <span className="ad-eyebrow" data-aos="fade-up">
              {t('analytics.eyebrow')}
            </span>
            <h2 className="ad-title" data-aos="fade-up" data-aos-delay="100">
              {t('analytics.title')}
            </h2>
            <p className="ad-desc" data-aos="fade-up" data-aos-delay="200">
              {t('analytics.desc')}
            </p>

            <ul className="ad-bullets">
              {bullets.map((bullet, index) => (
                <li 
                  key={index} 
                  className="ad-bullet-item"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <FiCheckCircle className="ad-check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#contacts"
              className="ad-btn" 
              style={{ 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <FiBarChart2 />
              {t('analytics.cta')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;