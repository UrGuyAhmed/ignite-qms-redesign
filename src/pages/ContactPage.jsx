import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="contact-main">
        <div className="contact-container">
          
          {/* Left Column: Info & Support */}
          <div className="contact-info-col">
            <h1 className="contact-title">Contactez-nous</h1>
            <p className="contact-subtitle">
              Contactez notre équipe pour toute demande de renseignements, d'assistance ou d'opportunités de partenariat. Nous serons ravis de vous entendre.
            </p>
            
            {/* Placeholder for the device image from your screenshot */}
            <div className="contact-image-placeholder">
              {/* <img src={devicesImage} alt="Ignite QMS Devices" /> */}
            </div>

            <div className="quick-support">
              <h3>Besoin d'aide ou d'une assistance rapide ?</h3>
              <p>Contactez-nous instantanément via l'une des méthodes suivantes.</p>
              
              <div className="support-cards">
                <a href="https://wa.me/213770625655" className="support-card">
                  <span className="icon whatsapp-icon">💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>+213 770 625 655</span>
                  </div>
                </a>
                <a href="tel:+213770625655" className="support-card">
                  <span className="icon phone-icon">📞</span>
                  <div>
                    <strong>Téléphone</strong>
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
                    <label>Prénom <span className="req">*</span></label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Nom <span className="req">*</span></label>
                    <input type="text" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Entreprise <span className="req">*</span></label>
                  <input type="text" required />
                </div>

                <div className="form-group">
                  <label>E-mail <span className="req">*</span></label>
                  <input type="email" required />
                </div>

                <div className="form-group">
                  <label>Téléphone <span className="req">*</span></label>
                  <input type="tel" required />
                </div>

                <div className="form-group">
                  <label>Produit</label>
                  <select>
                    <option>- Aucun -</option>
                    <option>Ignite QMS Logiciel</option>
                    <option>Bornes Interactives</option>
                    <option>Écrans d'Affichage</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message / Demande</label>
                  <textarea rows="4"></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn--primary">Réserver une Démo</button>
                  <button type="reset" className="btn btn--secondary">Effacer</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;