import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

// Added the new "Comment ça marche ?" item with video properties
const faqs = [
  {
    question: "Comment ça marche ?",
    answer: "Découvrez notre système en action ! Nous avons préparé une courte vidéo explicative qui vous montre exactement comment Ignite QMS transforme la gestion de vos files d'attente, de l'arrivée du client jusqu'à son service.",
    hasVideo: true,
    videoLink: "https://www.youtube.com/watch?v=votre-lien-ici" // Replace this with your actual video URL
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
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              
              <button 
                className={`faq-question ${openIndex === index ? 'active' : ''}`} 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
                
                {/* Conditionally render the video button if this FAQ has a video */}
                {faq.hasVideo && (
                  <a 
                    href={faq.videoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn--primary faq-video-btn"
                  >
                    ▶ Voir la vidéo explicative
                  </a>
                )}
              </div>

            </div>
          ))}

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