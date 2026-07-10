import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMonitor } from 'react-icons/fi';
import './FloatingActions.css';

const FloatingActions = () => {
  const { t } = useTranslation();

  // Primary contact: Alger office
  const whatsappNumber = "213770615655"; 
  const phoneNumber = "tel:+213770615655";

  return (
    <>
      {/* 1. Floating WhatsApp Icon */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        className="floating-whatsapp"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
        data-aos="zoom-in"
        data-aos-delay="800" 
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      {/* 2. Mobile Sticky Bottom Bar */}
      <div 
        className="mobile-sticky-bar"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-anchor-placement="bottom-bottom"
      >
        <button className="sticky-btn demo-btn">
          <FiMonitor className="sticky-icon" />
          <span>{t('cta.test', 'Tester la démo')}</span>
        </button>
        
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="sticky-btn whatsapp-btn">
          <FaWhatsapp className="sticky-icon" />
          <span>WhatsApp</span>
        </a>
        
        <a href={phoneNumber} className="sticky-btn phone-btn">
          <FiPhone className="sticky-icon" />
          <span>Appeler</span>
        </a>
      </div>
    </>
  );
};

export default FloatingActions;