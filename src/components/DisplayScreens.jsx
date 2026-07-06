import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMonitor, FiCheck } from 'react-icons/fi'; // Removed FiX since the modal is gone
import './DisplayScreens.css';

const DisplayScreens = () => {
  const { t } = useTranslation();
  
  // Removed the modal state!
  const [ticketNumber, setTicketNumber] = useState(160);

  const bullets = t('display_screens.bullets', { returnObjects: true }) || [];

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

          {/* Left: Text Content - Staggered Fade Up */}
          <div className="ds-content">
            <span className="ds-eyebrow" data-aos="fade-up">
              {t('display_screens.eyebrow')}
            </span>
            <h2 className="ds-title" data-aos="fade-up" data-aos-delay="100">
              {t('display_screens.title')}
            </h2>
            <p className="ds-desc" data-aos="fade-up" data-aos-delay="200">
              {t('display_screens.desc')}
            </p>

            <ul className="ds-bullets">
              {bullets.map((bullet, index) => (
                <li 
                  key={index} 
                  className="ds-bullet-item"
                  data-aos="fade-up" 
                  data-aos-delay={300 + index * 100} 
                >
                  <FiCheck className="ds-check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Changed from <button> to <a> and linked to the footer ID */}
            {/* Added gap and inline-flex for perfect icon alignment */}
            <a 
              href="#contacts"
              className="ds-btn" 
              style={{ 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              data-aos="fade-up" 
              data-aos-delay="600" 
            >
              <FiMonitor />
              {t('display_screens.cta')}
            </a>
          </div>

          {/* Right: TV Mockup - Slides in from the right */}
          <div className="ds-visual" data-aos="fade-left" data-aos-delay="200">
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
                  {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                  <marquee>Welcome to our center. Please have your documents ready.</marquee>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* The modal block that used to be here has been fully removed */}
      
    </section>
  );
};

export default DisplayScreens;