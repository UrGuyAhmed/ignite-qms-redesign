import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Simplified to 3 questions since the video is moving!
  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">{t('faq.title')}</h2>
        
        <div className="faq-card">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${isOpen ? 'active' : ''}`} 
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                
                <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="faq-footer">
            <Link to="/contact" className="btn btn--secondary faq-contact-btn">
              {t('faq.contact_btn')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;