import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheckCircle } from 'react-icons/fi';
import './Solution.css';
import Credibility from './Credibility';

// Vite Glob Syntax to import logos automatically
const clientImages = import.meta.glob('../assets/logo/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });
const logos = Object.values(clientImages).filter(url => !url.includes('QMSLogo'));

const Solution = () => {
  const { t } = useTranslation();
  
  // 1. Fetch the translation
  const rawTrustPoints = t('hero.trust_points', { returnObjects: true });
  
  // 2. DEFENSIVE CHECK: Ensure it is an actual array before mapping
  const trustPoints = Array.isArray(rawTrustPoints) ? rawTrustPoints : [
    "Solution personnalisable",
    "Installation sur site",
    "Logiciel et matériel conçus en Algérie"
  ];

  return (
    <div className="solution-page" id="solution">
      
      {/* =========================================
          SECTION 1: HERO (SPLIT SCREEN & ANIMATED)
          ========================================= */}
      <section className="qms-hero">
        <div className="container hero-container">
          
          {/* Left Side: Copy and CTAs */}
          <div className="hero-content">
            <span className="eyebrow">{t('hero.eyebrow', "SYSTÈME DE GESTION DE FILES D'ATTENTE")}</span>
            <h1 className="hero-title">{t('hero.title', "Transformez chaque attente en une expérience fluide et maîtrisée.")}</h1>
            <p className="hero-subtitle">
              {t('hero.subtitle', "Ignite QMS centralise l'accueil, l'orientation, l'appel des visiteurs et l'analyse de vos performances dans une solution complète, personnalisable et déployée localement en Algérie.")}
            </p>
            
            <div className="hero-actions">
              <button className="btn-primary">{t('hero.cta_primary', "Tester la démo gratuitement")}</button>
              <button className="btn-secondary dark-mode-btn">{t('hero.cta_secondary', "Demander une présentation")}</button>
            </div>

            <div className="hero-trust">
              {trustPoints.map((point, index) => (
                <div className="trust-item" key={index}>
                  <FiCheckCircle className="trust-icon" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Animated Visual Composition */}
          <div className="hero-visual">
            <div className="visual-composition">
              {/* 1. Dashboard Element (Back) */}
              <div className="comp-element comp-dashboard">
                <div className="dash-header"></div>
                <div className="dash-chart">
                  <div className="chart-bar bar-1"></div>
                  <div className="chart-bar bar-2"></div>
                  <div className="chart-bar bar-3"></div>
                  <div className="chart-bar bar-4"></div>
                </div>
              </div>

              {/* 2. Customer Display Screen (Middle Right) */}
              <div className="comp-element comp-display">
                <div className="display-ticket">Ticket</div>
                <div className="display-number">A-142</div>
                <div className="display-counter">Guichet 03</div>
              </div>

              {/* 3. Kiosk with Ticket Printing (Front Left) */}
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

              {/* 4. Agent Notification (Floating Top Right) */}
              <div className="comp-element comp-notification">
                <div className="notif-dot"></div>
                <span>Nouveau Visiteur: A-142</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: CLIENT LOGOS
          ========================================= */}
      <section className="client-logo-section" id="clients">
        <div className="clients-container">
          <h3 className="clients-title">
            {t('clients.title', 'Des organisations de référence nous font confiance')}
          </h3>
          <p className="clients-subtitle">
            {t('clients.subtitle', "Entreprises, institutions publiques et organisations internationales utilisent Ignite QMS pour moderniser l'accueil de leurs visiteurs.")}
          </p>
          
          <div className="slider" dir="ltr">
            <div className="slide-track">
              {/* Quadrupled for seamless scrolling on ultra-wide screens */}
              {[...logos, ...logos, ...logos, ...logos].map((logoUrl, index) => (
                <div key={index} className="slide">
                  <img 
                    src={logoUrl} 
                    alt={`Client Logo ${index + 1}`} 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: CREDIBILITY CARDS
          ========================================= */}
      <Credibility />

    </div>
  );
};

export default Solution;