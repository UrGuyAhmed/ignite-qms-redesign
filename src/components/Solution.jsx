import React from 'react';
import { useTranslation } from 'react-i18next';
import './Solution.css';
import { FaApple, FaAndroid, FaWindows, FaSitemap, FaLayerGroup, FaUsers, FaShieldAlt, FaAward } from 'react-icons/fa';

import Credibility from './Credibility';

// 1. FIXED VITE GLOB SYNTAX (to prevent the white screen crash!)
const clientImages = import.meta.glob('../assets/logo/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });
const logos = Object.values(clientImages).filter(url => !url.includes('QMSLogo'));

const Solution = () => {
  const { t } = useTranslation();

  return (
    <div className="solution-page" id="solution">
      
      {/* SECTION 1: HERO */}
      <section className="qms-hero">
        <div className="qms-hero__platforms">
          <FaApple className="platform-icon" />
          <FaAndroid className="platform-icon" />
          <FaWindows className="platform-icon" />
        </div>

        <h2 className="qms-hero__eyebrow" style={{ color: '#ccff00', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
          {t('hero.eyebrow')}
        </h2>
        
        <h1 className="qms-hero__title">{t('hero.title')}</h1>
        
        <p className="qms-hero__subtitle">
          {t('hero.subtitle')}
        </p>

        <button className="qms-hero__cta">{t('hero.cta_primary')}</button>

        <div className="qms-hero__features">
          <div className="feature">
            <FaSitemap className="feature-icon" />
            <h3>{t('hero.features.multi_branch')}</h3>
            <p>{t('hero.features.multi_branch_desc')}</p>
          </div>
          <div className="feature">
            <FaLayerGroup className="feature-icon" />
            <h3>{t('hero.features.vertical')}</h3>
            <p>{t('hero.features.vertical_desc')}</p>
          </div>
          <div className="feature">
            <FaUsers className="feature-icon" />
            <h3>{t('hero.features.visitors')}</h3>
            <p>{t('hero.features.visitors_desc')}</p>
          </div>
          <div className="feature">
            <FaShieldAlt className="feature-icon" />
            <h3>{t('hero.features.security')}</h3>
            <p>{t('hero.features.security_desc')}</p>
          </div>
          <div className="feature">
            <FaAward className="feature-icon" />
            <h3>{t('hero.features.local')}</h3>
            <p>{t('hero.features.local_desc')}</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CLIENT LOGOS */}
      <section className="clients-section" id="clients">
        <h2 className="clients__title">{t('hero.clients_title')}</h2>
        
        {/* 2. ADDED dir="ltr" TO PROTECT THE ANIMATION FROM ARABIC RTL */}
        <div className="slider" dir="ltr">
          <div className="slide-track">
            
            {/* 3. QUADRUPLED THE LOGOS ARRAY FOR ULTRA-WIDE SCREENS */}
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
      </section>

      {/* SECTION 3: CREDIBILITY CARDS */}
      <Credibility />

    </div>
  );
};

export default Solution;