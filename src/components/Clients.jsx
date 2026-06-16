import React from 'react';
import './Clients.css';

// Dynamically import all images from the assets folder
const clientImages = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });
// Filter to only include specific client logos and exclude the QMS logo
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
              <img src={logoUrl} alt="Client Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;