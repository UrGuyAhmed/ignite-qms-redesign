import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMonitor, FiX, FiCheck } from 'react-icons/fi';
import './DisplayScreens.css';

const DisplayScreens = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(160);

  // Add a fallback array to prevent mapping over undefined during loading
  const bullets = t('display_screens.bullets', { returnObjects: true }) || [];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Simulate a gentle ticket number change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTicketNumber(prev => (prev >= 199 ? 101 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="display-screens-section">
      <div className="container">
        <div className="display-grid">
          
          {/* Left Side: Text Content */}
          <div className="display-content">
            <span className="eyebrow">{t('display_screens.eyebrow')}</span>
            <h2>{t('display_screens.title')}</h2>
            <p className="description">{t('display_screens.desc')}</p>
            
            <ul className="feature-list">
              {bullets.map((bullet, index) => (
                <li key={index}>
                  <FiCheck className="check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary" onClick={toggleModal}>
              <FiMonitor className="btn-icon" />
              {t('display_screens.cta')}
            </button>
          </div>

          {/* Right Side: TV Screen Mockup with Animations */}
          <div className="display-visual">
            <div className="tv-mockup card-shadow">
              <div className="tv-screen">
                
                {/* TV Header */}
                <div className="tv-header">
                  <div className="tv-logo">Ignite QMS</div>
                  <div className="tv-time">10:22 AM</div>
                </div>
                
                {/* TV Body Layout */}
                <div className="tv-body">
                  {/* Active Call (Animated) */}
                  <div className="active-call">
                    <div className="call-label">TICKET</div>
                    <div className="call-ticket animate-pulse">A-{ticketNumber}</div>
                    <div className="call-counter-box">
                      <span>Counter</span>
                      <span className="counter-number">03</span>
                    </div>
                  </div>
                  
                  {/* Call History */}
                  <div className="history-sidebar">
                    <div className="history-title">History</div>
                    <div className="history-item"><span>A-{ticketNumber - 1}</span> <span>C-02</span></div>
                    <div className="history-item"><span>B-089</span> <span>C-01</span></div>
                    <div className="history-item"><span>A-{ticketNumber - 2}</span> <span>C-03</span></div>
                  </div>
                </div>

                {/* TV Ticker */}
                <div className="tv-ticker">
                  <marquee>Welcome to our center. Please have your documents ready.</marquee>
                </div>

              </div>
            </div>
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
            <h3>{t('display_screens.modal.title')}</h3>
            <p>{t('display_screens.modal.text')}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DisplayScreens;