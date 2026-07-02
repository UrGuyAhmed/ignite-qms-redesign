import React from 'react';
import './PageLoader.css'; 
import QMSLogo from '../assets/logo/QMSLogo.png'; 

const PageLoader = () => {
  return (
    <div className="page-loader-overlay">
      <div className="loader-content">
        
        {/* Flex container to keep logo and text side-by-side */}
        <div className="loader-brand-row">
          
          {/* 1. The Logo Container */}
          <div className="logo-loader-container">
            <img src={QMSLogo} alt="Loading Base" className="logo-base" />
            <div className="logo-fill-wrapper">
              <img src={QMSLogo} alt="Loading Fill" className="logo-filled" />
            </div>
          </div>

          {/* 2. The Text Container */}
          <div className="text-loader-container">
            <span className="brand-text-base">Ignite QMS</span>
            <span className="brand-text-filled">Ignite QMS</span>
          </div>

        </div>

        <p className="loading-text">Loading...</p>
        
      </div>
    </div>
  );
};

export default PageLoader;