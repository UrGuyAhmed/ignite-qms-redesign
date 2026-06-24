import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMonitor } from 'react-icons/fi';
import './FloatingActions.css';

const FloatingActions = () => {
  const { t } = useTranslation();

  // Replace these with your actual contact details
  const whatsappNumber = "213000000000"; 
  const phoneNumber = "tel:+213000000000";

  return (
    <>
      {/* 1. Floating WhatsApp Icon (Visible mostly on Desktop, hidden on mobile where sticky bar takes over) */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        className="floating-whatsapp"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      {/* 2. Mobile Sticky Bottom Bar (Visible ONLY on mobile devices) */}
      <div className="mobile-sticky-bar">
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