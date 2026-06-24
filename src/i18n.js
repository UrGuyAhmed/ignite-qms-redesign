import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        solution: "Solution",
        features: "Fonctionnalités",
        hardware: "Matériel",
        sectors: "Secteurs",
        references: "Références",
        resources: "Ressources",
        faq: "FAQ"
      },
      cta: {
        demo: "Demander une démo",
        test: "Tester gratuitement"
      },
      hero: {
        eyebrow: "SYSTÈME DE GESTION DE FILES D'ATTENTE",
        title: "Transformez chaque attente en une expérience fluide et maîtrisée.",
        subtitle: "Ignite QMS centralise l'accueil, l'orientation, l'appel des visiteurs et l'analyse de vos performances dans une solution complète, personnalisable et déployée localement en Algérie.",
        cta_primary: "Tester la démo gratuitement",
        features: {
          multi_branch: "MULTI-SITES",
          multi_branch_desc: "Gérez plusieurs agences",
          vertical: "SOLUTION MÉTIER",
          vertical_desc: "Déploiement Rapide",
          visitors: "PLUS DE 5M+ DE VISITEURS",
          visitors_desc: "À travers 4+ pays",
          security: "CONFORMITÉ & RGPD",
          security_desc: "Sécurité des processus et données",
          local: "PRODUIT LOCAL",
          local_desc: "Leader dans la région"
        },
        clients_title: "Ils nous font confiance"
      },
      architecture: {
        eyebrow: "UN SYSTÈME, PLUSIEURS INTERFACES",
        title: "Une architecture flexible adaptée à votre organisation.",
        desc: "Ignite QMS s'adapte à votre environnement, que vous utilisiez une borne tactile, un poste informatique, une tablette ou un écran d'affichage.",
        bullets: [
          "Bornes tactiles avec impression de tickets",
          "Interfaces adaptées aux agents et aux administrateurs",
          "Compatibilité avec écrans TV et affichage dynamique",
          "Configuration personnalisée selon vos services",
          "Gestion centralisée depuis une seule plateforme"
        ],
        cta: "En savoir plus",
        modal: {
          title: "Une configuration conçue selon votre flux de visiteurs",
          text: "Chaque organisation fonctionne différemment. Ignite QMS permet de définir les services disponibles, les catégories de visiteurs, les règles de priorité, les guichets actifs, les écrans d'affichage et les utilisateurs autorisés.",
          highlights: [
            "Configuration selon le nombre de services",
            "Interfaces personnalisées selon les rôles",
            "Déploiement pour un seul site ou plusieurs agences",
            "Évolution progressive selon vos besoins"
          ]
        }
      },
      credibility: {
        c1_title: "MULTI-SITES",
        c1_desc: "Gérez plusieurs agences depuis une plateforme centralisée.",
        c2_title: "MULTILINGUE",
        c2_desc: "Interfaces, tickets et annonces vocales adaptés à votre public.",
        c3_title: "DÉPLOIEMENT RAPIDE",
        c3_desc: "Installation, configuration et formation assurées localement.",
        c4_title: "ADMINISTRATION AVANCÉE",
        c4_desc: "Personnalisez vos services, guichets, utilisateurs et paramètres tout en accédant à des statistiques détaillées.",
        c5_title: "DÉVELOPPEMENT LOCAL",
        c5_desc: "Logiciel conçu et développé sur mesure par notre équipe en Algérie pour répondre à vos besoins spécifiques."
      },
      faq: {
        title: "Foire Aux Questions",
        q1: "Qu'est-ce qu'un système de gestion de file d'attente ?",
        a1: "Un système de gestion de file d'attente est une solution qui organise et gère les files d'attente des clients de manière numérique. Il aide à rationaliser les processus de service et à réduire les temps d'attente.",
        q2: "Pourquoi les entreprises devraient-elles utiliser ce système ?",
        a2: "Il optimise le flux des clients, augmente l'efficacité du personnel, et fournit des données analytiques précieuses sur les temps de service.",
        q3: "Est-ce qu'Ignite QMS est adapté aux hôpitaux et cliniques ?",
        a3: "Absolument. Ignite QMS est hautement personnalisable et parfaitement adapté aux environnements de santé, banques et administrations.",
        contact_btn: "Vous avez d'autres questions ? Contactez-nous"
      },
      footer: {
        desc: "Transformez chaque attente en une expérience fluide et maîtrisée en Algérie.",
        address_label: "Adresse:",
        address_value: "Alger, Algérie",
        phone_label: "Téléphone:",
        email_label: "Email:",
        quick_links: "Liens Rapides",
        demo_title: "Demandez une Démo",
        placeholder_name: "Nom et Prénom",
        placeholder_email: "E-mail",
        placeholder_phone: "Téléphone",
        placeholder_message: "Message",
        submit_btn: "ENVOYER",
        rights: "Tous droits réservés."
      },
      materiel: {
        btn_more: "En savoir plus",
        kiosk1: {
          badge: "MODÈLE CLASSIQUE",
          title: "Borne Autonome Standard",
          desc: "La solution idéale pour l'accueil de vos visiteurs offrant un équilibre parfait entre performance et encombrement.",
          f1: "Écran tactile interactif 15 pouces",
          f2: "Imprimante thermique ultra-rapide intégrée",
          f3: "Châssis en acier sécurisé anti-vandalisme",
          f4: "Connexion réseau Wi-Fi ou Ethernet"
        },
        kiosk2: {
          badge: "MODÈLE COMPACT",
          title: "Borne Murale Discrète",
          desc: "Optimisez l'espace de votre zone d'accueil avec ce modèle mural conçu pour les environnements plus étroits.",
          f1: "Fixation murale sécurisée et robuste",
          f2: "Faible encombrement au sol",
          f3: "Installation rapide et accès facilité",
          f4: "Idéal pour les couloirs ou petits halls"
        },
        kiosk3: {
          badge: "HAUT DE GAMME",
          title: "Kiosque Premium Grand Écran",
          desc: "Offrez une visibilité maximale et une expérience luxueuse avec ce modèle doté d'un affichage étendu.",
          f1: "Écran large 22 pouces Full HD",
          f2: "Lecteur de carte RFID et NFC intégré",
          f3: "Design ergonomique et finitions premium",
          f4: "Affichage ultra-lumineux"
        },
        kiosk4: {
          badge: "ACCESSIBILITÉ",
          title: "Borne Adaptée (PMR)",
          desc: "Garantissez un accès équitable pour tous avec notre borne spécialement pensée pour les personnes à mobilité réduite.",
          f1: "Hauteur de l'écran et de l'imprimante ajustée",
          f2: "Interface avec assistance sonore",
          f3: "Inclinaison adaptée pour les fauteuils roulants",
          f4: "Respect total des normes d'accessibilité"
        },
        kiosk: {
          badge: "BORNE INTERACTIVE",
          title: "Kiosques Self-Service",
          desc: "Offrez une expérience fluide dès l'arrivée avec nos bornes interactives multi-fonctions.",
          f1: "Impression de tickets rapide",
          f2: "Collecte de données client sans erreur",
          f3: "Système d'exploitation sécurisé",
          f4: "Design personnalisable à vos couleurs"
        },
        ecran: {
          badge: "AFFICHAGE DYNAMIQUE",
          title: "Écrans Principaux",
          desc: "Gardez vos clients informés et engagés pendant leur temps d'attente.",
          f1: "Haute définition (HD/4K)",
          f2: "Affichage clair des numéros appelés",
          f3: "Support multimédia (Vidéos, Images)",
          f4: "Mise à jour en temps réel"
        },
        guichet: {
          badge: "POSTE DE TRAVAIL",
          title: "Afficheurs de Guichet",
          desc: "Indique clairement le numéro du ticket appelé au-dessus de chaque poste de travail.",
          f1: "Visibilité optimale",
          f2: "Synchronisation immédiate",
          f3: "Installation facile",
          f4: "Design discret"
        },
        ticket: {
          badge: "CONSOMMABLE",
          title: "Rouleaux de Tickets",
          desc: "Tickets de haute qualité pour une impression claire et nette avec notre solution QMS.",
          f1: "Papier thermique premium",
          f2: "Lisibilité garantie",
          f3: "Changement de rouleau facile",
          f4: "Personnalisable"
        },
        mod: {
          badge: "CONFIGURATION",
          title: "Module de Modification",
          desc: "Adaptez rapidement votre matériel selon les besoins de votre espace d'accueil.",
          f1: "Ajustement ergonomique",
          f2: "Composants modulables",
          f3: "Entretien facilité",
          f4: "Longue durée de vie"
        },
        def: {
          badge: "ÉQUIPEMENT QMS",
          title: "Matériel Performant",
          desc: "Une architecture matérielle conçue pour s'intégrer parfaitement à notre logiciel Ignite QMS.",
          f1: "Fiabilité à toute épreuve",
          f2: "Maintenance simplifiée",
          f3: "Support technique dédié",
          f4: "Intégration Plug & Play"
        }
      },
      showcase: {
        eyebrow: "UNE SOLUTION COMPLÈTE",
        title: "Le matériel, le logiciel et les données réunis dans une seule plateforme.",
        desc: "Ignite QMS simplifie chaque étape du parcours visiteur: prise de ticket, orientation, gestion des guichets, affichage en temps réel, suivi des performances et analyse opérationnelle."
      },
      how: {
        eyebrow: "UN PARCOURS SIMPLE ET EFFICACE",
        title: "Une meilleure expérience dès l'entrée de vos visiteurs.",
        s1_title: "Le visiteur choisit son service",
        s1_desc: "Depuis la borne tactile, le visiteur sélectionne rapidement le service souhaité dans la langue de son choix.",
        s2_title: "Un ticket personnalisé est généré",
        s2_desc: "Le ticket peut afficher le numéro d'appel, le service sélectionné, l'heure, la date, le logo de votre établissement et d'autres informations utiles.",
        s3_title: "L'agent appelle le prochain visiteur",
        s3_desc: "Depuis une interface simple et intuitive, chaque agent peut appeler, rappeler, transférer ou clôturer un ticket.",
        s4_title: "Le visiteur est orienté automatiquement",
        s4_desc: "L'écran d'affichage et les annonces vocales indiquent clairement le numéro appelé et le guichet concerné.",
        s5_title: "Les responsables suivent les performances",
        s5_desc: "Le tableau de bord fournit une vision claire des flux, des délais d'attente, de la charge des services et de la productivité des équipes.",
        cta: "Voir la démo interactive"
      },
      queue_control: {
        eyebrow: "GESTION DES FLUX",
        title: "Gardez le contrôle sur chaque file d'attente.",
        desc: "Organisez vos visiteurs efficacement, réduisez les files physiques et améliorez la répartition de la charge entre vos équipes.",
        bullets: [
          "Création de services et de catégories personnalisées",
          "Appel et rappel des visiteurs",
          "Transfert d'un ticket vers un autre service",
          "Gestion de files prioritaires",
          "Affectation des agents aux guichets",
          "Visualisation en temps réel des files actives",
          "Historique complet des tickets"
        ],
        cta: "Découvrir les fonctionnalités",
        modal: {
          title: "Une gestion opérationnelle plus fluide au quotidien",
          text: "Depuis leur interface, les agents visualisent les visiteurs en attente et gèrent les appels en quelques clics. Les administrateurs peuvent définir les droits d'accès, organiser les services et suivre l'activité en direct.",
          highlights: [
            "Appel du prochain visiteur",
            "Rappel d'un ticket",
            "Transfert entre services",
            "Mise en pause d'un guichet",
            "Gestion des priorités",
            "Historique des actions"
          ]
        }
      },
      display_screens: {
        eyebrow: "AFFICHAGE EN TEMPS RÉEL",
        title: "Orientez clairement chaque visiteur vers le bon guichet.",
        desc: "Les écrans installés dans vos espaces d'accueil affichent les appels en temps réel et facilitent l'orientation de vos visiteurs.",
        bullets: [
          "Affichage du numéro de ticket et du guichet",
          "Plusieurs appels visibles simultanément",
          "Historique des derniers numéros appelés",
          "Design personnalisable selon votre identité visuelle",
          "Annonces vocales multilingues",
          "Contenu adaptable à la taille de vos écrans"
        ],
        cta: "Voir un exemple d'affichage",
        modal: {
          title: "Une communication claire dans vos espaces d'accueil",
          text: "Vos visiteurs restent informés sans avoir à solliciter votre personnel. L'affichage peut être adapté à votre marque, à la taille de votre écran et à la configuration de votre établissement."
        }
      },
      analytics: {
        eyebrow: "DONNÉES ET PERFORMANCE",
        title: "Prenez de meilleures décisions grâce à des données concrètes.",
        desc: "Ignite QMS transforme vos flux visiteurs en informations utiles afin de vous aider à identifier les périodes de forte affluence, optimiser vos équipes et améliorer la qualité de service.",
        tabs: ["Vue générale", "Services", "Agents", "Guichets", "Temps d'attente", "Historique"],
        bullets: [
          "Suivi du nombre de tickets émis",
          "Analyse des temps d'attente",
          "Mesure du temps moyen de traitement",
          "Performances par service",
          "Performances par agent",
          "Identification des heures de pointe",
          "Historique filtrable",
          "Rapports exportables"
        ],
        cta: "Explorer le tableau de bord",
        modal: {
          title: "Des indicateurs utiles pour améliorer vos opérations",
          text: "Visualisez la performance de vos services sur une période donnée, comparez les guichets, identifiez les points de congestion et adaptez vos ressources aux besoins réels de votre établissement."
        }
      }
    }
  },

  en: {
    translation: {
      nav: {
        solution: "Solution",
        features: "Features",
        hardware: "Hardware",
        sectors: "Sectors",
        references: "References",
        resources: "Resources",
        faq: "FAQ"
      },
      cta: {
        demo: "Request a demo",
        test: "Try for free"
      },
      hero: {
        eyebrow: "QUEUE MANAGEMENT SYSTEM",
        title: "Transform every wait into a seamless and controlled experience.",
        subtitle: "Ignite QMS centralizes reception, orientation, visitor calling, and performance analysis into a complete, customizable solution deployed locally.",
        cta_primary: "Try the demo for free",
        features: {
          multi_branch: "MULTI BRANCHES",
          multi_branch_desc: "Across Multiple Languages",
          vertical: "INDUSTRY VERTICAL SOLUTION",
          vertical_desc: "Deploy Quickly",
          visitors: "USED BY OVER 5M+ VISITORS",
          visitors_desc: "Across 4+ Countries",
          security: "COMPLIANCE & GDPR",
          security_desc: "For Process & Data Security",
          local: "UAE BASED PRODUCT",
          local_desc: "Leading In The Region"
        },
        clients_title: "They trust us"
      },
      architecture: {
        eyebrow: "ONE SYSTEM, MULTIPLE INTERFACES",
        title: "Flexible architecture tailored to your organization.",
        desc: "Ignite QMS adapts to your environment, whether you use a touch kiosk, a desktop, a tablet, or a display screen.",
        bullets: [
          "Touch kiosks with ticket printing",
          "Interfaces adapted for agents and admins",
          "Compatibility with TV screens and digital signage",
          "Customized configuration per your services",
          "Centralized management from one platform"
        ],
        cta: "Learn more",
        modal: {
          title: "Configuration designed to your visitor flow",
          text: "Every organization functions differently. Ignite QMS allows you to define available services, visitor categories, priority rules, active counters, display screens, and authorized users.",
          highlights: [
            "Configuration based on number of services",
            "Personalized interfaces by role",
            "Deployment for single site or multiple branches",
            "Progressive evolution based on your needs"
          ]
        }
      },
      credibility: {
        c1_title: "MULTI-BRANCH",
        c1_desc: "Manage multiple branches from a centralized platform.",
        c2_title: "MULTILINGUAL",
        c2_desc: "Interfaces, tickets, and voice announcements adapted to your audience.",
        c3_title: "RAPID DEPLOYMENT",
        c3_desc: "Installation, configuration, and training provided locally.",
        c4_title: "ADVANCED ADMIN",
        c4_desc: "Customize your services, counters, users, and settings while accessing detailed statistics.",
        c5_title: "LOCAL DEVELOPMENT",
        c5_desc: "Software custom-designed and developed by our team to meet your specific organizational needs."
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "How does it work?",
        a1: "See our system in action! We have prepared a short explainer video that shows you exactly how Ignite QMS transforms your queue management, from customer arrival to service.",
        q2: "What is a queue management system?",
        a2: "A queue management system is a solution that digitally organizes and manages customer queues. It helps streamline service processes, reduce wait times, and improve customer satisfaction.",
        q3: "Why should businesses use this system?",
        a3: "It optimizes customer flow, increases staff efficiency, provides valuable analytics on service times, and significantly improves the overall visitor experience.",
        q4: "Is Ignite QMS suitable for hospitals and clinics?",
        a4: "Absolutely. Ignite QMS is highly customizable and perfectly suited for healthcare environments, banks, public administrations, and telecommunication centers.",
        video_fallback: "Your browser does not support video playback.",
        contact_btn: "Have more questions? Contact us"
      },
      footer: {
        desc: "Transform every wait into a seamless and controlled experience in Algeria.",
        address_label: "Address:",
        address_value: "Algiers, Algeria",
        phone_label: "Phone:",
        email_label: "Email:",
        quick_links: "Quick Links",
        demo_title: "Request a Demo",
        placeholder_name: "Full Name",
        placeholder_email: "Email",
        placeholder_phone: "Phone",
        placeholder_message: "Message",
        submit_btn: "SEND",
        rights: "All rights reserved."
      },
      materiel: {
        btn_more: "Learn more",
        kiosk1: {
          badge: "CLASSIC MODEL",
          title: "Standard Standalone Kiosk",
          desc: "The ideal solution for welcoming your visitors, offering a perfect balance between performance and footprint.",
          f1: "15-inch interactive touch screen",
          f2: "Integrated ultra-fast thermal printer",
          f3: "Secure anti-vandal steel chassis",
          f4: "Wi-Fi or Ethernet network connection"
        },
        kiosk2: {
          badge: "COMPACT MODEL",
          title: "Discreet Wall-Mounted Kiosk",
          desc: "Optimize your reception area space with this wall-mounted model designed for narrower environments.",
          f1: "Secure and robust wall mounting",
          f2: "Small floor footprint",
          f3: "Fast installation and easy access",
          f4: "Ideal for corridors or small lobbies"
        },
        kiosk3: {
          badge: "PREMIUM",
          title: "Large Screen Premium Kiosk",
          desc: "Offer maximum visibility and a luxurious experience with this wide-display model.",
          f1: "22-inch Full HD wide screen",
          f2: "Integrated RFID and NFC card reader",
          f3: "Ergonomic design and premium finishes",
          f4: "Ultra-bright display"
        },
        kiosk4: {
          badge: "ACCESSIBILITY",
          title: "Accessible Kiosk (PRM)",
          desc: "Ensure fair access for everyone with our kiosk specially designed for people with reduced mobility.",
          f1: "Adjusted screen and printer height",
          f2: "Interface with voice assistance",
          f3: "Tilt adapted for wheelchairs",
          f4: "Full compliance with accessibility standards"
        },
        kiosk: {
          badge: "INTERACTIVE KIOSK",
          title: "Self-Service Kiosks",
          desc: "Provide a seamless experience right from arrival with our multi-function interactive kiosks.",
          f1: "Fast ticket printing",
          f2: "Error-free customer data collection",
          f3: "Secure operating system",
          f4: "Customizable design to your colors"
        },
        ecran: {
          badge: "DIGITAL SIGNAGE",
          title: "Main Displays",
          desc: "Keep your customers informed and engaged during their waiting time.",
          f1: "High definition (HD/4K)",
          f2: "Clear display of called numbers",
          f3: "Multimedia support (Videos, Images)",
          f4: "Real-time updates"
        },
        guichet: {
          badge: "WORKSTATION",
          title: "Counter Displays",
          desc: "Clearly indicates the called ticket number above each workstation.",
          f1: "Optimal visibility",
          f2: "Immediate synchronization",
          f3: "Easy installation",
          f4: "Discreet design"
        },
        ticket: {
          badge: "CONSUMABLE",
          title: "Ticket Rolls",
          desc: "High-quality tickets for clear and crisp printing with our QMS solution.",
          f1: "Premium thermal paper",
          f2: "Guaranteed readability",
          f3: "Easy roll change",
          f4: "Customizable"
        },
        mod: {
          badge: "CONFIGURATION",
          title: "Modification Module",
          desc: "Quickly adapt your hardware according to the needs of your reception area.",
          f1: "Ergonomic adjustment",
          f2: "Modular components",
          f3: "Easy maintenance",
          f4: "Long lifespan"
        },
        def: {
          badge: "QMS EQUIPMENT",
          title: "High-Performance Hardware",
          desc: "A hardware architecture designed to perfectly integrate with our Ignite QMS software.",
          f1: "Unfailing reliability",
          f2: "Simplified maintenance",
          f3: "Dedicated technical support",
          f4: "Plug & Play integration"
        }
      },
      showcase: {
        eyebrow: "A COMPLETE SOLUTION",
        title: "Hardware, software, and data united in a single platform.",
        desc: "Ignite QMS simplifies every step of the visitor journey: ticketing, orientation, counter management, real-time displays, performance tracking, and operational analysis."
      },
      how: {
        eyebrow: "A SIMPLE AND EFFICIENT JOURNEY",
        title: "A better experience right from your visitors' arrival.",
        s1_title: "The visitor chooses their service",
        s1_desc: "From the touch kiosk, the visitor quickly selects their desired service in the language of their choice.",
        s2_title: "A personalized ticket is generated",
        s2_desc: "The ticket can display the called number, selected service, time, date, your establishment's logo, and other useful info.",
        s3_title: "The agent calls the next visitor",
        s3_desc: "From a simple and intuitive interface, each agent can call, recall, transfer, or close a ticket.",
        s4_title: "The visitor is automatically guided",
        s4_desc: "The display screen and voice announcements clearly indicate the called number and the relevant counter.",
        s5_title: "Managers track performance",
        s5_desc: "The dashboard provides a clear view of flows, wait times, service loads, and team productivity.",
        cta: "View the interactive demo"
      },
      queue_control: {
        eyebrow: "QUEUE MANAGEMENT",
        title: "Keep control over every waiting line.",
        desc: "Organize your visitors efficiently, reduce physical queues, and improve workload distribution among your teams.",
        bullets: [
          "Creation of personalized services and categories",
          "Calling and recalling visitors",
          "Transferring a ticket to another service",
          "Priority queue management",
          "Assigning agents to counters",
          "Real-time visualization of active queues",
          "Complete ticket history"
        ],
        cta: "Discover features",
        modal: {
          title: "Smoother daily operational management",
          text: "From their interface, agents view waiting visitors and manage calls in a few clicks. Administrators can define access rights, organize services, and monitor activity live.",
          highlights: [
            "Call next visitor",
            "Recall a ticket",
            "Transfer between services",
            "Pause a counter",
            "Priority management",
            "Action history"
          ]
        }
      },
      display_screens: {
        eyebrow: "REAL-TIME DISPLAY",
        title: "Clearly guide each visitor to the right counter.",
        desc: "The screens installed in your reception areas display real-time calls and make it easier to guide your visitors.",
        bullets: [
          "Display of ticket and counter number",
          "Multiple calls visible simultaneously",
          "History of last called numbers",
          "Customizable design according to your visual identity",
          "Multilingual voice announcements",
          "Content adaptable to your screen size"
        ],
        cta: "See a display example",
        modal: {
          title: "Clear communication in your reception areas",
          text: "Your visitors stay informed without having to ask your staff. The display can be adapted to your brand, your screen size, and your establishment's configuration."
        }
      },
      analytics: {
        eyebrow: "DATA AND PERFORMANCE",
        title: "Make better decisions with actionable data.",
        desc: "Ignite QMS transforms your visitor flows into useful information to help you identify peak periods, optimize your teams, and improve service quality.",
        tabs: ["Overview", "Services", "Agents", "Counters", "Wait Times", "History"],
        bullets: [
          "Track number of issued tickets",
          "Wait time analysis",
          "Average processing time measurement",
          "Performance by service",
          "Performance by agent",
          "Peak hour identification",
          "Filterable history",
          "Exportable reports"
        ],
        cta: "Explore the dashboard",
        modal: {
          title: "Useful indicators to improve your operations",
          text: "Visualize the performance of your services over a given period, compare counters, identify congestion points, and adapt your resources to your establishment's real needs."
        },
        "hero": {
          "eyebrow": "QUEUE MANAGEMENT SYSTEM",
          "title": "Transform every wait into a seamless and controlled experience.",
          "subtitle": "Ignite QMS centralizes reception, orientation, visitor calling, and performance analysis into a complete, customizable solution deployed locally in Algeria.",
          "cta_primary": "Try the demo for free",
          "cta_secondary": "Request a presentation",
          "trust_points": [
            "Customizable solution",
            "On-site installation",
            "Software & hardware designed in Algeria"
          ]
        }
      }
    }
  },

  ar: {
    translation: {
      nav: {
        solution: "الحل",
        features: "الميزات",
        hardware: "المعدات",
        sectors: "القطاعات",
        references: "المراجع",
        resources: "الموارد",
        faq: "الأسئلة الشائعة"
      },
      cta: {
        demo: "اطلب عرضاً",
        test: "جرب مجاناً"
      },
      hero: {
        eyebrow: "نظام إدارة طوابير الانتظار",
        title: "حوّل كل انتظار إلى تجربة سلسة ومحكمة.",
        subtitle: "يقوم نظام Ignite QMS بمركزة الاستقبال والتوجيه واستدعاء الزوار وتحليل أدائك في حل متكامل وقابل للتخصيص يتم نشره محلياً في الجزائر.",
        cta_primary: "جرب النسخة التجريبية مجاناً",
        features: {
          multi_branch: "فروع متعددة",
          multi_branch_desc: "عبر لغات متعددة",
          vertical: "حلول القطاعات المتخصصة",
          vertical_desc: "نشر سريع",
          visitors: "يستخدمه أكثر من 5 ملايين زائر",
          visitors_desc: "في أكثر من 4 دول",
          security: "الامتثال وحماية البيانات",
          security_desc: "لأمن العمليات والبيانات",
          local: "منتج محلي",
          local_desc: "رائد في المنطقة"
        },
        clients_title: "يثقون بنا"
      },
      architecture: {
        eyebrow: "نظام واحد، واجهات متعددة",
        title: "بنية مرنة تتكيف مع مؤسستك.",
        desc: "يتكيف نظام Ignite QMS مع بيئتك، سواء كنت تستخدم كشكاً تفاعلياً، أو حاسوباً، أو جهازاً لوحياً، أو شاشة عرض.",
        bullets: [
          "أكشاك تفاعلية مع طباعة التذاكر",
          "واجهات مخصصة للموظفين والإداريين",
          "التوافق مع شاشات التلفاز واللافتات الرقمية",
          "تكوين مخصص حسب خدماتك",
          "إدارة مركزية من منصة واحدة"
        ],
        cta: "اعرف المزيد",
        modal: {
          title: "تكوين مصمم وفقاً لتدفق زوارك",
          text: "تعمل كل مؤسسة بشكل مختلف. يتيح لك Ignite QMS تحديد الخدمات المتاحة، فئات الزوار، قواعد الأولوية، الشبابيك النشطة، شاشات العرض، والمستخدمين المصرح لهم.",
          highlights: [
            "تكوين يعتمد على عدد الخدمات",
            "واجهات مخصصة حسب الأدوار",
            "النشر لموقع واحد أو عدة فروع",
            "تطور تدريجي حسب احتياجاتك"
          ]
        }
      },
      credibility: {
        c1_title: "فروع متعددة",
        c1_desc: "إدارة فروع متعددة من منصة مركزية.",
        c2_title: "متعدد اللغات",
        c2_desc: "واجهات وتذاكر وإعلانات صوتية تتناسب مع جمهورك.",
        c3_title: "نشر سريع",
        c3_desc: "توفير التركيب والإعداد والتدريب محلياً.",
        c4_title: "إدارة متقدمة",
        c4_desc: "تخصيص الخدمات والشبابيك مع الوصول إلى إحصائيات مفصلة.",
        c5_title: "تطوير محلي",
        c5_desc: "برنامج مصمم ومطور خصيصاً من قبل فريقنا في الجزائر لتلبية الاحتياجات الخاصة بمؤسستك."
      },
      faq: {
        title: "الأسئلة الشائعة",
        q1: "كيف يعمل النظام؟",
        a1: "اكتشف نظامنا عملياً! لقد أعددنا فيديو توضيحي قصير يوضح لك بالضبط كيف يقوم نظام Ignite QMS بتحويل إدارة الطوابير، من وصول العميل حتى خدمته.",
        q2: "ما هو نظام إدارة طوابير الانتظار؟",
        a2: "نظام إدارة الطوابير هو حل ينظم ويدير طوابير العملاء رقمياً. يساعد على تبسيط عمليات الخدمة، تقليل أوقات الانتظار، وتحسين رضا العملاء.",
        q3: "لماذا يجب على الشركات استخدام هذا النظام؟",
        a3: "لأنه يحسن تدفق العملاء، يزيد من كفاءة الموظفين، يوفر تحليلات قيمة لأوقات الخدمة، ويحسن بشكل كبير من التجربة العامة للزوار.",
        q4: "هل نظام Ignite QMS مناسب للمستشفيات والعيادات؟",
        a4: "بالتأكيد. نظام Ignite QMS قابل للتخصيص بدرجة عالية ومناسب تماماً لبيئات الرعاية الصحية، البنوك، الإدارات العامة، ومراكز الاتصالات.",
        video_fallback: "متصفحك لا يدعم تشغيل الفيديو.",
        contact_btn: "لديك أسئلة أخرى؟ اتصل بنا"
      },
      footer: {
        desc: "حوّل كل انتظار إلى تجربة سلسة ومحكمة في الجزائر.",
        address_label: "العنوان:",
        address_value: "الجزائر العاصمة، الجزائر",
        phone_label: "الهاتف:",
        email_label: "البريد الإلكتروني:",
        quick_links: "روابط سريعة",
        demo_title: "اطلب عرضاً توضيحياً",
        placeholder_name: "الاسم الكامل",
        placeholder_email: "البريد الإلكتروني",
        placeholder_phone: "الهاتف",
        placeholder_message: "الرسالة",
        submit_btn: "إرسال",
        rights: "جميع الحقوق محفوظة."
      },
      materiel: {
        btn_more: "اعرف المزيد",
        kiosk1: {
          badge: "الطراز الكلاسيكي",
          title: "كشك مستقل قياسي",
          desc: "الحل المثالي لاستقبال زوارك، يوفر توازناً مثالياً بين الأداء والمساحة.",
          f1: "شاشة لمسية تفاعلية 15 بوصة",
          f2: "طابعة حرارية فائقة السرعة مدمجة",
          f3: "هيكل فولاذي مقاوم للتخريب",
          f4: "اتصال شبكي Wi-Fi أو Ethernet"
        },
        kiosk2: {
          badge: "الطراز المدمج",
          title: "كشك جداري صغير",
          desc: "استثمر مساحة منطقة الاستقبال بهذا الطراز الجداري المصمم للبيئات الضيقة.",
          f1: "تثبيت جداري آمن ومتين",
          f2: "حجم صغير على الأرض",
          f3: "تركيب سريع وسهل الوصول",
          f4: "مثالي للممرات أو القاعات الصغيرة"
        },
        kiosk3: {
          badge: "فئة ممتازة",
          title: "كشك بريميوم بشاشة كبيرة",
          desc: "قدّم أقصى قدر من الوضوح وتجربة راقية مع هذا الطراز ذي الشاشة الواسعة.",
          f1: "شاشة عريضة 22 بوصة Full HD",
          f2: "قارئ بطاقات RFID و NFC مدمج",
          f3: "تصميم مريح وتشطيبات راقية",
          f4: "عرض فائق السطوع"
        },
        kiosk4: {
          badge: "إمكانية الوصول",
          title: "كشك مخصص لذوي الاحتياجات الخاصة",
          desc: "ضمان وصول عادل للجميع مع كشكنا المصمم خصيصاً لذوي الإعاقات الحركية.",
          f1: "ارتفاع الشاشة والطابعة مُعدَّل",
          f2: "واجهة بمساعدة صوتية",
          f3: "ميل مناسب لكراسي الإعاقة",
          f4: "الامتثال الكامل لمعايير إمكانية الوصول"
        },
        kiosk: {
          badge: "كشك تفاعلي",
          title: "أكشاك الخدمة الذاتية",
          desc: "قدّم تجربة سلسة منذ لحظة الوصول مع أكشاكنا التفاعلية متعددة الوظائف.",
          f1: "طباعة تذاكر سريعة",
          f2: "جمع بيانات العملاء بدون أخطاء",
          f3: "نظام تشغيل آمن",
          f4: "تصميم قابل للتخصيص بألوانك"
        },
        ecran: {
          badge: "لافتات رقمية",
          title: "الشاشات الرئيسية",
          desc: "أبقِ عملاءك على اطلاع وتفاعل أثناء وقت الانتظار.",
          f1: "دقة عالية (HD/4K)",
          f2: "عرض واضح للأرقام المستدعاة",
          f3: "دعم الوسائط المتعددة (فيديو، صور)",
          f4: "تحديثات فورية"
        },
        guichet: {
          badge: "محطة عمل",
          title: "شاشات عرض الشباك",
          desc: "يعرض بوضوح رقم التذكرة المستدعاة فوق كل محطة عمل.",
          f1: "رؤية مثالية",
          f2: "مزامنة فورية",
          f3: "تركيب سهل",
          f4: "تصميم أنيق"
        },
        ticket: {
          badge: "مستهلكات",
          title: "لفائف التذاكر",
          desc: "تذاكر عالية الجودة لطباعة واضحة وحادة مع حل QMS الخاص بنا.",
          f1: "ورق حراري ممتاز",
          f2: "قابلية قراءة مضمونة",
          f3: "تغيير اللفافة بسهولة",
          f4: "قابل للتخصيص"
        },
        mod: {
          badge: "تكوين",
          title: "وحدة التعديل",
          desc: "تكيّف سريعاً مع معداتك وفقاً لاحتياجات منطقة الاستقبال.",
          f1: "ضبط مريح",
          f2: "مكونات قابلة للتعديل",
          f3: "صيانة سهلة",
          f4: "عمر افتراضي طويل"
        },
        def: {
          badge: "معدات QMS",
          title: "معدات عالية الأداء",
          desc: "بنية معدات مصممة للتكامل المثالي مع برنامج Ignite QMS.",
          f1: "موثوقية لا تتزعزع",
          f2: "صيانة مبسطة",
          f3: "دعم تقني متخصص",
          f4: "تكامل Plug & Play"
        }
      },
      showcase: {
        eyebrow: "حل متكامل",
        title: "المعدات والبرمجيات والبيانات في منصة واحدة.",
        desc: "يبسّط نظام Ignite QMS كل خطوة في رحلة الزائر: إصدار التذاكر، التوجيه، إدارة الشبابيك، العرض الفوري، تتبع الأداء والتحليل التشغيلي."
      },
      how: {
        eyebrow: "مسار بسيط وفعال",
        title: "تجربة أفضل منذ لحظة وصول زوارك.",
        s1_title: "يختار الزائر خدمته",
        s1_desc: "من خلال الكشك اللمسي، يختار الزائر بسرعة الخدمة المطلوبة باللغة التي يختارها.",
        s2_title: "يتم إنشاء تذكرة مخصصة",
        s2_desc: "يمكن أن تعرض التذكرة رقم الاستدعاء، الخدمة المحددة، الوقت، التاريخ، شعار مؤسستك ومعلومات مفيدة أخرى.",
        s3_title: "يقوم الموظف باستدعاء الزائر التالي",
        s3_desc: "من خلال واجهة بسيطة وبديهية، يمكن لكل موظف استدعاء، إعادة استدعاء، تحويل أو إغلاق التذكرة.",
        s4_title: "يتم توجيه الزائر تلقائياً",
        s4_desc: "توضح شاشة العرض والإعلانات الصوتية بوضوح الرقم المستدعى والشباك المعني.",
        s5_title: "يتابع المسؤولون الأداء",
        s5_desc: "توفر لوحة القيادة رؤية واضحة للتدفقات، أوقات الانتظار، أعباء الخدمات، وإنتاجية الفِرق.",
        cta: "شاهد العرض التفاعلي"
      },
      queue_control: {
        eyebrow: "إدارة التدفقات",
        title: "تحكم في كل طابور انتظار.",
        desc: "نظم زوارك بكفاءة، قلل من الطوابير الفعلية، وحسّن توزيع عبء العمل بين فرقك.",
        bullets: [
          "إنشاء خدمات وفئات مخصصة",
          "استدعاء وإعادة استدعاء الزوار",
          "تحويل تذكرة إلى خدمة أخرى",
          "إدارة الطوابير ذات الأولوية",
          "تعيين الموظفين للشبابيك",
          "رؤية في الوقت الفعلي للطوابير النشطة",
          "سجل كامل للتذاكر"
        ],
        cta: "اكتشف الميزات",
        modal: {
          title: "إدارة تشغيلية يومية أكثر سلاسة",
          text: "من خلال واجهتهم، يعرض الموظفون الزوار المنتظرين ويديرون الاستدعاءات ببضع نقرات. يمكن للمسؤولين تحديد حقوق الوصول، تنظيم الخدمات، ومتابعة النشاط مباشرة.",
          highlights: [
            "استدعاء الزائر التالي",
            "إعادة استدعاء تذكرة",
            "التحويل بين الخدمات",
            "إيقاف مؤقت للشباك",
            "إدارة الأولويات",
            "سجل الإجراءات"
          ]
        }
      },
      display_screens: {
        eyebrow: "عرض في الوقت الفعلي",
        title: "وجّه كل زائر بوضوح إلى الشباك الصحيح.",
        desc: "تعرض الشاشات المثبتة في مناطق الاستقبال الخاصة بك الاستدعاءات في الوقت الفعلي وتسهل توجيه زوارك.",
        bullets: [
          "عرض رقم التذكرة والشباك",
          "عدة استدعاءات مرئية في وقت واحد",
          "سجل لآخر الأرقام المستدعاة",
          "تصميم قابل للتخصيص حسب هويتك البصرية",
          "إعلانات صوتية متعددة اللغات",
          "محتوى قابل للتكيف مع حجم شاشتك"
        ],
        cta: "شاهد مثالاً للعرض",
        modal: {
          title: "تواصل واضح في مناطق الاستقبال الخاصة بك",
          text: "يبقى زوارك على اطلاع دون الحاجة إلى سؤال موظفيك. يمكن تكييف العرض مع علامتك التجارية وحجم شاشتك وتكوين مؤسستك."
        }
      },
      analytics: {
        eyebrow: "البيانات والأداء",
        title: "اتخذ قرارات أفضل بفضل البيانات الملموسة.",
        desc: "يحول نظام Ignite QMS تدفقات زوارك إلى معلومات مفيدة لمساعدتك في تحديد فترات الذروة وتحسين فرقك وتحسين جودة الخدمة.",
        tabs: ["نظرة عامة", "الخدمات", "الموظفون", "الشبابيك", "أوقات الانتظار", "السجل"],
        bullets: [
          "تتبع عدد التذاكر الصادرة",
          "تحليل أوقات الانتظار",
          "قياس متوسط وقت المعالجة",
          "الأداء حسب الخدمة",
          "الأداء حسب الموظف",
          "تحديد ساعات الذروة",
          "سجل قابل للتصفية",
          "تقارير قابلة للتصدير"
        ],
        cta: "استكشف لوحة القيادة",
        modal: {
          title: "مؤشرات مفيدة لتحسين عملياتك",
          text: "تصور أداء خدماتك خلال فترة زمنية معينة، وقارن بين الشبابيك، وحدد نقاط الازدحام، وقم بتكييف مواردك مع الاحتياجات الحقيقية لمؤسستك."
        },
        "hero":{
          "eyebrow": "SYSTÈME DE GESTION DE FILES D'ATTENTE",
          "title": "Transformez chaque attente en une expérience fluide et maîtrisée.",
          "subtitle": "Ignite QMS centralise l'accueil, l'orientation, l'appel des visiteurs et l'analyse de vos performances dans une solution complète, personnalisable et déployée localement en Algérie.",
          "cta_primary": "Tester la démo gratuitement",
          "cta_secondary": "Demander une présentation",
          "trust_points": [
            "Solution personnalisable",
            "Installation sur site",
            "Logiciel et matériel conçus en Algérie"
          ]
        },
        "hero": {
          "eyebrow": "نظام إدارة طوابير الانتظار",
          "title": "حوّل كل انتظار إلى تجربة سلسة ومحكمة.",
          "subtitle": "يقوم نظام Ignite QMS بمركزة الاستقبال والتوجيه واستدعاء الزوار وتحليل أدائك في حل متكامل وقابل للتخصيص يتم نشره محلياً في الجزائر.",
          "cta_primary": "جرب النسخة التجريبية مجاناً",
          "cta_secondary": "اطلب عرضاً تقديمياً",
          "trust_points": [
            "حل قابل للتخصيص",
            "تركيب في الموقع",
            "برامج ومعدات مصممة في الجزائر"
          ]
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    load: 'languageOnly',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;