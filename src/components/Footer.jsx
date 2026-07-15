import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contacts">
      <div className="footer__container">
        
        
        <div className="footer__column" data-aos="fade-up">
          <h3 className="footer__title">Ignite <span className="highlight">QMS</span></h3>
          <p className="footer__desc">
            {t('footer.desc')}
          </p>
          <div className="footer__contact-info">
            <p><strong>{t('footer.address_label')}</strong> {t('footer.address_value')}</p>

            <p>
              <strong>{t('footer.phone_label')}</strong>
              <span className="footer__phone-group">
                <a href="tel:+213770615655">+213 770 615 655</a>
                <span className="footer__phone-sep">/</span>
                <a href="tel:+213770986528">+213 770 986 528</a>
              </span>
            </p>

            <p>
              <strong>{t('footer.address_setif_label', 'Sétif:')}</strong>
              <span className="footer__phone-group">
                <a href="tel:+213770301294">+213 770 301 294</a>
                <span className="footer__phone-sep">/</span>
                <a href="tel:+213770261410">+213 770 261 410</a>
              </span>
            </p>

            <p><strong>{t('footer.email_label')}</strong> <a href="mailto:info@igniteae.com">info@igniteae.com</a></p>
          </div>
          
          
          <div className="footer__socials">
            <a href="https://www.linkedin.com/company/68615549" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/ignitedxb" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/ignitedxb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

      
        <div className="footer__column" data-aos="fade-up" data-aos-delay="150">
          <h4 className="footer__subtitle">{t('footer.quick_links')}</h4>
          <ul className="footer__links">
            <li><a href="#solution">{t('nav.solution')}</a></li>
            <li><a href="#fonctionnalites">{t('nav.features')}</a></li>
            <li><a href="#materiel">{t('nav.hardware')}</a></li>
            <li><a href="#faq">{t('nav.faq')}</a></li>
          </ul>
        </div>

        
        <div className="footer__column demo-request-wrapper" data-aos="fade-up" data-aos-delay="300">
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
      
      
      <div className="footer__bottom" data-aos="fade-in" data-aos-delay="450">
        <p>© {new Date().getFullYear()} Ignite QMS. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;