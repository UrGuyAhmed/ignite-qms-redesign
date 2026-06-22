import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

// Import your local video file
import explainerVideo from '../assets/Video/explainerVideo.MP4';

const faqs = [
  {
    question: "Comment ça marche ?",
    answer: "Découvrez notre système en action ! Nous avons préparé une courte vidéo explicative qui vous montre exactement comment Ignite QMS transforme la gestion de vos files d'attente, de l'arrivée du client jusqu'à son service.",
    hasVideo: true,
    videoSrc: explainerVideo 
  },
  {
    question: "Qu'est-ce qu'un système de gestion de file d'attente ?",
    answer: "Un système de gestion de file d'attente est une solution qui organise et gère les files d'attente des clients de manière numérique. Il aide à rationaliser les processus de service, à réduire les temps d'attente et à améliorer la satisfaction des clients."
  },
  {
    question: "Pourquoi les entreprises devraient-elles utiliser ce système ?",
    answer: "Il optimise le flux des clients, augmente l'efficacité du personnel, fournit des données analytiques précieuses sur les temps de service, et améliore considérablement l'expérience globale du visiteur."
  },
  {
    question: "Est-ce qu'Ignite QMS est adapté aux hôpitaux et cliniques ?",
    answer: "Absolument. Ignite QMS est hautement personnalisable et parfaitement adapté aux environnements de santé, aux banques, aux administrations publiques et aux centres de télécommunications."
  }
];

// --- New Sub-Component to handle Video Playback/Pause ---
const FAQVideoPlayer = ({ src, isOpen }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Automatically pause the video if the user closes the FAQ tab
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  useEffect(() => {
    // Setup an observer to watch when the video leaves the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the video is not intersecting (visible on screen), pause it
          if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.1 } // Triggers when 90% of the video is off-screen
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="faq-video-wrapper">
      <video 
        ref={videoRef}
        controls 
        className="faq-video"
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
};

// --- Main FAQ Component ---
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">Foire Aux Questions</h2>
        
        <div className="faq-card">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="faq-item">
                
                <button 
                  className={`faq-question ${isOpen ? 'active' : ''}`} 
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                
                <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                    
                    {/* Render the Video Player Component */}
                    {faq.hasVideo && (
                      <FAQVideoPlayer src={faq.videoSrc} isOpen={isOpen} />
                    )}
                  </div>
                </div>

              </div>
            );
          })}

          <div className="faq-footer">
            <Link to="/contact" className="btn btn--secondary faq-contact-btn">
              Vous avez d'autres questions ? Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;