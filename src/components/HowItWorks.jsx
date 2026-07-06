import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHandPointer, FaTicketAlt, FaUserTie, FaVolumeUp, FaChartLine, FaTimes } from 'react-icons/fa';
import './HowItWorks.css';

// Import your video here
import explainerVideo from '../assets/Video/explainerVideo.MP4';

const HowItWorks = () => {
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const icons = [
    <FaHandPointer />,
    <FaTicketAlt />,
    <FaUserTie />,
    <FaVolumeUp />,
    <FaChartLine />
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">
        
        {/* Header Content Animations */}
        <div className="how-header">
          <span className="how-eyebrow" data-aos="fade-up">{t('how.eyebrow')}</span>
          <h2 className="how-title" data-aos="fade-up" data-aos-delay="100">{t('how.title')}</h2>
        </div>

        {/* Timeline Items Stagger Automatically */}
        <div className="how-timeline">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div 
              key={num} 
              className="how-step-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 150} // 0ms, 150ms, 300ms, 450ms, 600ms
            >
              <div className="how-step-icon">
                {icons[index]}
              </div>
              <div className="how-step-content">
                <span className="how-step-num">Step {num}</span>
                <h3>{t(`how.s${num}_title`)}</h3>
                <p>{t(`how.s${num}_desc`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA Button */}
        <div className="how-footer" data-aos="zoom-in" data-aos-delay="300">
          <button 
            className="btn btn--primary how-cta-btn"
            onClick={() => setIsVideoOpen(true)}
          >
            {t('how.cta')}
          </button>
        </div>

      </div>

      {/* THE VIDEO MODAL POPUP */}
      {isVideoOpen && (
        <div className="how-video-modal" onClick={() => setIsVideoOpen(false)}>
          <div className="how-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="how-modal-close" onClick={() => setIsVideoOpen(false)}>
              <FaTimes />
            </button>
            <video controls autoPlay className="how-modal-video">
              <source src={explainerVideo} type="video/mp4" />
              {t('how.video_fallback') || 'Your browser does not support the video tag.'}
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;