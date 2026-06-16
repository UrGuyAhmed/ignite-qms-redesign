import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__container">
        
        {/* Column 1: Info */}
        <div className="footer__column">
          <h3 className="footer__title">Ignite <span className="highlight">QMS</span></h3>
          <p className="footer__desc">
            Transformez chaque attente en une expérience fluide et maîtrisée en Algérie.
          </p>
          <div className="footer__contact-info">
            <p><strong>Adresse:</strong> Alger, Algérie</p>
            <p><strong>Téléphone:</strong> <a href="tel:+213770625655">+213 770 625 655</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@igniteae.com">info@igniteae.com</a></p>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="footer__column">
          <h4 className="footer__subtitle">Liens Rapides</h4>
          <ul className="footer__links">
            <li><a href="#solution">Solution</a></li>
            <li><a href="#fonctionnalites">Fonctionnalités</a></li>
            <li><a href="#materiel">Matériel</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Demandez une Démo Form */}
        <div className="footer__column">
          <h4 className="footer__demo-title">Demandez une Démo</h4>
          
          <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nom et Prénom" className="demo-input" required />
            <input type="email" placeholder="E-mail" className="demo-input" required />
            <input type="tel" placeholder="Téléphone" className="demo-input" required />
            <textarea placeholder="Message" className="demo-textarea" rows="4" required></textarea>
            
            <button type="submit" className="demo-submit-btn">ENVOYER</button>
          </form>
        </div>

      </div>
      
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Ignite QMS. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;