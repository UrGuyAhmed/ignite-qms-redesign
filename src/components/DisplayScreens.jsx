import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMonitor, FiX, FiCheck } from 'react-icons/fi';
import './DisplayScreens.css';

const DisplayScreens = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(160);

  const bullets = t('display_screens.bullets', { returnObjects: true }) || [];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicketNumber(prev => (prev >= 199 ? 101 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ds-section">
      <div className="ds-container">
        <div className="ds-grid">

          {/* Left: Text Content */}
          <div className="ds-content">
            <span className="ds-eyebrow">{t('display_screens.eyebrow')}</span>
            <h2 className="ds-title">{t('display_screens.title')}</h2>
            <p className="ds-desc">{t('display_screens.desc')}</p>

            <ul className="ds-bullets">
              {bullets.map((bullet, index) => (
                <li key={index} className="ds-bullet-item">
                  <FiCheck className="ds-check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <button className="ds-btn" onClick={toggleModal}>
              <FiMonitor />
              {t('display_screens.cta')}
            </button>
          </div>

          {/* Right: TV Mockup */}
          <div className="ds-visual">
            <div className="ds-tv-mockup">
              <div className="ds-tv-screen">

                <div className="ds-tv-header">
                  <span className="ds-tv-logo">Ignite QMS</span>
                  <span className="ds-tv-time">10:22 AM</span>
                </div>

                <div className="ds-tv-body">
                  <div className="ds-active-call">
                    <div className="ds-call-label">TICKET</div>
                    <div className="ds-call-number ds-pulse">A-{ticketNumber}</div>
                    <div className="ds-counter-box">
                      <span>Counter</span>
                      <span className="ds-counter-num">03</span>
                    </div>
                  </div>

                  <div className="ds-history">
                    <div className="ds-history-title">History</div>
                    <div className="ds-history-row"><span>A-{ticketNumber - 1}</span><span>C-02</span></div>
                    <div className="ds-history-row"><span>B-089</span><span>C-01</span></div>
                    <div className="ds-history-row"><span>A-{ticketNumber - 2}</span><span>C-03</span></div>
                  </div>
                </div>

                <div className="ds-ticker">
                  <marquee>Welcome to our center. Please have your documents ready.</marquee>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {isModalOpen && (
        <div className="ds-modal-overlay" onClick={toggleModal}>
          <div className="ds-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ds-modal-close" onClick={toggleModal}><FiX /></button>
            <h3>{t('display_screens.modal.title')}</h3>
            <p>{t('display_screens.modal.text')}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DisplayScreens;