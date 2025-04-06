// src/components/slides/Summary.tsx
import React from 'react';
import SlideTitle from '../shared/SlideTitle';

const Summary: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Sommaire</SlideTitle>
      
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/2 pr-8">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            Partie Frontend (10 min)
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            <li>Conception de l'interface utilisateur
              <ul className="list-[circle] list-inside ml-5 mt-2 space-y-1 text-sm">
                <li>Wireframes et maquettes</li>
                <li>Système de thèmes adaptatif</li>
              </ul>
            </li>
            <li>Technologies et architecture
              <ul className="list-[circle] list-inside ml-5 mt-2 space-y-1 text-sm">
                <li>React/TypeScript/Tailwind CSS</li>
                <li>Organisation des composants</li>
              </ul>
            </li>
            <li>Expérience utilisateur
              <ul className="list-[circle] list-inside ml-5 mt-2 space-y-1 text-sm">
                <li>Responsive design</li>
                <li>Accessibilité WCAG 2.1</li>
              </ul>
            </li>
            <li>Démonstration frontend</li>
          </ul>
        </div>
        
        <div className="md:w-1/2 pl-0 md:pl-8 mt-6 md:mt-0">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            Partie Backend (10 min)
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            <li>Architecture API RESTful
              <ul className="list-[circle] list-inside ml-5 mt-2 space-y-1 text-sm">
                <li>Structure MVC et organisation</li>
                <li>Format de réponse standardisé</li>
              </ul>
            </li>
            <li>Sécurité et authentification
              <ul className="list-[circle] list-inside ml-5 mt-2 space-y-1 text-sm">
                <li>Système JWT</li>
                <li>Protection contre les injections</li>
              </ul>
            </li>
            <li>Système de paiement
              <ul className="list-[circle] list-inside ml-5 mt-2 space-y-1 text-sm">
                <li>Intégration Stripe/PayPal</li>
                <li>Suivi des transactions</li>
              </ul>
            </li>
            <li>Démonstration backend</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-auto pt-6 text-gray-500 text-sm border-t border-gray-200 dark:border-gray-700">
        <p>Temps total de présentation: 20 minutes + questions</p>
      </div>
    </div>
  );
};

export default Summary;