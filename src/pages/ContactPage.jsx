import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import './ContactPage.css';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="contact-main">
        <div className="contact-container">
          
          {/* Left Column: Info & Support */}
          <div className="contact-info-col">
            <h1 className="contact-title">{t('contact_page.title')}</h1>
            <p className="contact-subtitle">
              {t('contact_page.subtitle')}
            </p>
            
            {/* Company location map */}
            <div className="contact-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0689233184503!2d3.0759401!3d36.7209059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad6accbe5d2f%3A0x4d43ee212e499157!2sSarl%20CECi!5e0!3m2!1sen!2sdz!4v1783673540568!5m2!1sen!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ignite Future Technologies Location"
              ></iframe>
            </div>

            <div className="quick-support">
              <h3>{t('contact_page.support_title')}</h3>
              <p>{t('contact_page.support_desc')}</p>
              
              <div className="support-cards">
                <a href="tel:+213000000000" className="support-card">
                  <span className="icon phone-icon">📞</span>
                  <div>
                    <strong>{t('contact_page.phone_label')}</strong>
                    <span>+213 770 625 655</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contact_page.form.first_name')} <span className="req">*</span></label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>{t('contact_page.form.last_name')} <span className="req">*</span></label>
                    <input type="text" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>{t('contact_page.form.company')} <span className="req">*</span></label>
                  <input type="text" required />
                </div>

                <div className="form-group">
                  <label>{t('contact_page.form.email')} <span className="req">*</span></label>
                  <input type="email" required />
                </div>

                <div className="form-group">
                  <label>{t('contact_page.form.phone')} <span className="req">*</span></label>
                  <input type="tel" required />
                </div>

                <div className="form-group">
                  <label>{t('contact_page.form.product')}</label>
                  <select>
                    <option>{t('contact_page.form.product_none')}</option>
                    <option>{t('contact_page.form.product_software')}</option>
                    <option>{t('contact_page.form.product_kiosks')}</option>
                    <option>{t('contact_page.form.product_screens')}</option>
                    <option>{t('contact_page.form.product_other')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>{t('contact_page.form.message')}</label>
                  <textarea rows="4"></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn--primary">{t('contact_page.form.submit')}</button>
                  <button type="reset" className="btn btn--secondary">{t('contact_page.form.reset')}</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ContactPage;