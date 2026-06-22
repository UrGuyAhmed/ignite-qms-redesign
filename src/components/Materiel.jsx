import React from 'react';
import './Materiel.css';

const materialImages = import.meta.glob('../assets/materiel/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });

const CheckIcon = () => (
  <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const materialDetails = {
  // --- The 4 Unique Kiosk Configurations ---
  'Kiosk 1': {
    badge: 'MODÈLE CLASSIQUE',
    title: 'Borne Autonome Standard',
    desc: 'La solution idéale pour l\'accueil de vos visiteurs offrant un équilibre parfait entre performance et encombrement.',
    features: [
      'Écran tactile interactif 15 pouces',
      'Imprimante thermique ultra-rapide intégrée',
      'Châssis en acier sécurisé anti-vandalisme',
      'Connexion réseau Wi-Fi ou Ethernet'
    ]
  },
  'Kiosk 2': {
    badge: 'MODÈLE COMPACT',
    title: 'Borne Murale Discrète',
    desc: 'Optimisez l\'espace de votre zone d\'accueil avec ce modèle mural conçu pour les environnements plus étroits.',
    features: [
      'Fixation murale sécurisée et robuste',
      'Faible encombrement au sol',
      'Installation rapide et accès facilité',
      'Idéal pour les couloirs ou petits halls'
    ]
  },
  'Kiosk 3': {
    badge: 'HAUT DE GAMME',
    title: 'Kiosque Premium Grand Écran',
    desc: 'Offrez une visibilité maximale et une expérience luxueuse avec ce modèle doté d\'un affichage étendu.',
    features: [
      'Écran large 22 pouces Full HD',
      'Lecteur de carte RFID et NFC intégré',
      'Design ergonomique et finitions premium',
      'Affichage ultra-lumineux'
    ]
  },
  'Kiosk 4': {
    badge: 'ACCESSIBILITÉ',
    title: 'Borne Adaptée (PMR)',
    desc: 'Garantissez un accès équitable pour tous avec notre borne spécialement pensée pour les personnes à mobilité réduite.',
    features: [
      'Hauteur de l\'écran et de l\'imprimante ajustée',
      'Interface avec assistance sonore',
      'Inclinaison adaptée pour les fauteuils roulants',
      'Respect total des normes d\'accessibilité'
    ]
  },
  'Kiosk': { // Generic fallback just in case you have a file named exactly "Kiosk.png"
    badge: 'BORNE INTERACTIVE',
    title: 'Kiosques Self-Service',
    desc: 'Offrez une expérience fluide dès l\'arrivée avec nos bornes interactives multi-fonctions.',
    features: [
      'Impression de tickets rapide',
      'Collecte de données client sans erreur',
      'Système d\'exploitation sécurisé',
      'Design personnalisable à vos couleurs'
    ]
  },

  // --- The Rest of Your Hardware ---
  'Ecran': {
    badge: 'AFFICHAGE DYNAMIQUE',
    title: 'Écrans Principaux',
    desc: 'Gardez vos clients informés et engagés pendant leur temps d\'attente.',
    features: [
      'Haute définition (HD/4K)',
      'Affichage clair des numéros appelés',
      'Support multimédia (Vidéos, Images)',
      'Mise à jour en temps réel'
    ]
  },
  'Guichet': {
    badge: 'POSTE DE TRAVAIL',
    title: 'Afficheurs de Guichet',
    desc: 'Indique clairement le numéro du ticket appelé au-dessus de chaque poste de travail.',
    features: [
      'Visibilité optimale',
      'Synchronisation immédiate',
      'Installation facile',
      'Design discret'
    ]
  },
  'Ticket': {
    badge: 'CONSOMMABLE',
    title: 'Rouleaux de Tickets',
    desc: 'Tickets de haute qualité pour une impression claire et nette avec notre solution QMS.',
    features: [
      'Papier thermique premium',
      'Lisibilité garantie',
      'Changement de rouleau facile',
      'Personnalisable'
    ]
  },
  'Modification': {
    badge: 'CONFIGURATION',
    title: 'Module de Modification',
    desc: 'Adaptez rapidement votre matériel selon les besoins de votre espace d\'accueil.',
    features: [
      'Ajustement ergonomique',
      'Composants modulables',
      'Entretien facilité',
      'Longue durée de vie'
    ]
  },
  'default': {
    badge: 'ÉQUIPEMENT QMS',
    title: 'Matériel Performant',
    desc: 'Une architecture matérielle conçue pour s\'intégrer parfaitement à notre logiciel Ignite QMS.',
    features: [
      'Fiabilité à toute épreuve',
      'Maintenance simplifiée',
      'Support technique dédié',
      'Intégration Plug & Play'
    ]
  }
};

const Materiel = () => {
  return (
    <section className="materiel-section" id="materiel">
      <div className="materiel__container">
        
        {Object.entries(materialImages).map(([path, url], index) => {
          
          const safePath = path.toLowerCase();
          let matchedKey = 'default';

          // --- Exact Matching Logic for the Kiosks ---
          if (safePath.includes('kiosk 1')) {
            matchedKey = 'Kiosk 1';
          } else if (safePath.includes('kiosk 2')) {
            matchedKey = 'Kiosk 2';
          } else if (safePath.includes('kiosk 3')) {
            matchedKey = 'Kiosk 3';
          } else if (safePath.includes('kiosk 4')) {
            matchedKey = 'Kiosk 4';
          } else if (safePath.includes('kiosk')) {
            matchedKey = 'Kiosk';
          } else if (safePath.includes('ecran')) {
            matchedKey = 'Ecran';
          } else if (safePath.includes('guichet')) {
            matchedKey = 'Guichet';
          } else if (safePath.includes('ticket')) {
            matchedKey = 'Ticket';
          } else if (safePath.includes('modification')) {
            matchedKey = 'Modification';
          }

          const details = materialDetails[matchedKey];
          
          // Alternates the layout: even indexes are text-left, odd indexes are text-right
          const isReverse = index % 2 !== 0;

          return (
            <div key={index} className={`materiel-row ${isReverse ? 'row-reverse' : ''}`}>
              
              {/* Text Content Block */}
              <div className="materiel-content">
                <span className="materiel-badge">{details.badge}</span>
                <h2 className="materiel-title">{details.title}</h2>
                <p className="materiel-desc">{details.desc}</p>
                
                <ul className="materiel-features-list">
                  {details.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="btn btn--primary materiel-btn">En savoir plus</button>
              </div>

              {/* Image Block */}
              <div className="materiel-image-wrapper">
                <img src={url} alt={details.title} loading="lazy" />
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Materiel;