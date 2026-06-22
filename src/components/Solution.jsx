import React from 'react';
import './Solution.css';

// Updated path to dynamically import images from the new 'logo' subfolder
const clientImages = import.meta.glob('../assets/logo/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });

// Filter to exclude the main QMS logo (just in case you moved it into the logo folder too)
const logos = Object.values(clientImages).filter(url => !url.includes('QMSLogo'));

const Clients = () => {
  return (
    <section className="clients-section" id="clients">
      <h2 className="clients__title">Ils nous font confiance</h2>
      <div className="slider">
        <div className="slide-track">
          {/* Double the logos to create a seamless infinite loop */}
          {[...logos, ...logos].map((logoUrl, index) => (
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
  );
};

export default Clients;