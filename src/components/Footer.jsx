import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contacts">
      <div className="footer__container">
        
        {/* Column 1: Info */}
        <div className="footer__column">
          <h3 className="footer__title">Ignite <span className="highlight">QMS</span></h3>
          <p className="footer__desc">
            {t('footer.desc')}
          </p>
          <div className="footer__contact-info">
            <p><strong>{t('footer.address_label')}</strong> {t('footer.address_value')}</p>
            <p><strong>{t('footer.phone_label')}</strong> <a href="tel:+213770625655">+213 770 625 655</a></p>
            <p><strong>{t('footer.email_label')}</strong> <a href="mailto:info@igniteae.com">info@igniteae.com</a></p>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="footer__column">
          <h4 className="footer__subtitle">{t('footer.quick_links')}</h4>
          <ul className="footer__links">
            {/* Reusing the 'nav' keys we already set up! */}
            <li><a href="#solution">{t('nav.solution')}</a></li>
            <li><a href="#fonctionnalites">{t('nav.features')}</a></li>
            <li><a href="#materiel">{t('nav.hardware')}</a></li>
            <li><a href="#faq">{t('nav.faq')}</a></li>
          </ul>
        </div>

        {/* Column 3: Demandez une Démo Form */}
        <div className="footer__column">
          <h4 className="footer__demo-title">{t('footer.demo_title')}</h4>
          
          <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder={t('footer.placeholder_name')} className="demo-input" required />
            <input type="email" placeholder={t('footer.placeholder_email')} className="demo-input" required />
            <input type="tel" placeholder={t('footer.placeholder_phone')} className="demo-input" required />
            <textarea placeholder={t('footer.placeholder_message')} className="demo-textarea" rows="4" required></textarea>
            
            <button type="submit" className="demo-submit-btn">{t('footer.submit_btn')}</button>
          </form>
        </div>

      </div>
      
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Ignite QMS. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;