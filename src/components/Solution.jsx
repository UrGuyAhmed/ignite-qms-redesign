import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheckCircle } from 'react-icons/fi';
import './Solution.css';
import Credibility from './Credibility';

const clientImages = import.meta.glob('../assets/logo/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });
const logos = Object.values(clientImages).filter(url => !url.includes('QMSLogo'));

const Solution = () => {
  const { t } = useTranslation();
  
  const rawTrustPoints = t('hero.trust_points', { returnObjects: true });
  const trustPoints = Array.isArray(rawTrustPoints) ? rawTrustPoints : [
    "Solution personnalisable",
    "Installation sur site",
    "Logiciel et matériel conçus en Algérie"
  ];

  return (
    <div className="solution-page" id="solution">
      
      <section className="qms-hero">
        <div className="container hero-container">
          
          {/* Left Side: Staggered Fade Up */}
          <div className="hero-content">
            <span className="eyebrow" data-aos="fade-up">
              {t('hero.eyebrow', "SYSTÈME DE GESTION DE FILES D'ATTENTE")}
            </span>
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              {t('hero.title', "Transformez chaque attente en une expérience fluide et maîtrisée.")}
            </h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              {t('hero.subtitle', "Ignite QMS centralise l'accueil, l'orientation, l'appel des visiteurs et l'analyse de vos performances dans une solution complète, personnalisable et déployée localement en Algérie.")}
            </p>
            
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
              <a href="#contacts" className="btn-primary">{t('hero.cta_primary', "Demander une démo")}</a>
            </div>

            <div className="hero-trust" data-aos="fade-up" data-aos-delay="400">
              {trustPoints.map((point, index) => (
                <div className="trust-item" key={index}>
                  <FiCheckCircle className="trust-icon" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Slides in from the left */}
          <div className="hero-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="visual-composition">
              <div className="comp-element comp-dashboard">
                <div className="dash-header"></div>
                <div className="dash-chart">
                  <div className="chart-bar bar-1"></div>
                  <div className="chart-bar bar-2"></div>
                  <div className="chart-bar bar-3"></div>
                  <div className="chart-bar bar-4"></div>
                </div>
              </div>
              <div className="comp-element comp-display">
                <div className="display-ticket">Ticket</div>
                <div className="display-number">A-142</div>
                <div className="display-counter">Guichet 03</div>
              </div>
              <div className="comp-element comp-kiosk">
                <div className="kiosk-screen">
                  <div className="kiosk-btn"></div>
                  <div className="kiosk-btn"></div>
                </div>
                <div className="kiosk-printer">
                  <div className="printed-ticket">
                    <div className="ticket-line"></div>
                    <div className="ticket-line short"></div>
                  </div>
                </div>
              </div>
              <div className="comp-element comp-notification">
                <div className="notif-dot"></div>
                <span>Nouveau Visiteur: A-142</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Client Logos Section */}
      <section className="client-logo-section" id="clients">
        <div className="clients-container">
          <h3 className="clients-title" data-aos="fade-up">
            {t('clients.title', 'Des organisations de référence nous font confiance')}
          </h3>
          <p className="clients-subtitle" data-aos="fade-up" data-aos-delay="100">
            {t('clients.subtitle', "Entreprises, institutions publiques et organisations internationales utilisent Ignite QMS pour moderniser l'accueil de leurs visiteurs.")}
          </p>
          
          {/* We animate the whole slider container, not individual logos, to preserve the CSS marquee effect */}
          <div className="slider" dir="ltr" data-aos="fade-up" data-aos-delay="200">
            <div className="slide-track">
              {[...logos, ...logos, ...logos, ...logos].map((logoUrl, index) => (
                <div key={index} className="slide">
                  <img src={logoUrl} alt={`Client Logo ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Credibility />

    </div>
  );
};

export default Solution;