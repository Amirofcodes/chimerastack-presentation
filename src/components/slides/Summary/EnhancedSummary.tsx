import React from 'react';
import SlideTitle from '../../shared/SlideTitle';
import SummaryCard from './SummaryCard';

const EnhancedSummary: React.FC = () => {
  const sections = [
    {
      title: "1. Introduction",
      duration: "3 min",
      items: [
        "Présentation personnelle",
        "Problématique",
        "Solution et évolution"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "2. DÉMO CLI",
      duration: "2 min",
      items: [
        "CLI en action",
        "Avantages & limites"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "3. Frontend",
      duration: "5 min",
      items: [
        "Architecture & choix techniques",
        "Système de thèmes",
        "Responsive & Accessibilité",
        "DÉMO Frontend"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "4. Backend",
      duration: "5 min",
      items: [
        "API RESTful & MVC",
        "Sécurité & Authentification",
        "Système de paiement",
        "DÉMO Backend"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "5. Déploiement",
      duration: "3 min",
      items: [
        "Pipeline CI/CD",
        "Docker & Sécurité",
        "Monitoring"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "6. Conclusion",
      duration: "2 min",
      items: [
        "Compétences acquises",
        "Difficultés & solutions",
        "Perspectives d'évolution"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <SlideTitle>Sommaire</SlideTitle>
      
      {/* Timeline connector */}
      <div className="hidden md:block absolute top-1/4 bottom-3/4 left-1/2 w-0.5 bg-indigo-300 dark:bg-indigo-700 opacity-30"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-8 relative">
        {sections.map((section, index) => (
          <SummaryCard 
            key={index}
            title={section.title}
            duration={section.duration}
            items={section.items}
            icon={section.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedSummary;