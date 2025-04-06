// src/components/slides/Summary.tsx
import React from 'react';
import SlideTitle from '../shared/SlideTitle';

const Summary: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <SlideTitle>Sommaire</SlideTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-8">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">1. Introduction (3 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>Présentation personnelle</li>
            <li>Problématique</li>
            <li>Solution et évolution</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">2. DÉMO CLI (2 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>CLI en action</li>
            <li>Avantages & limites</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">3. Frontend (5 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>Architecture & choix techniques</li>
            <li>Système de thèmes</li>
            <li>Responsive & Accessibilité</li>
            <li>DÉMO Frontend</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">4. Backend (5 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>API RESTful & MVC</li>
            <li>Sécurité & Authentification</li>
            <li>Système de paiement</li>
            <li>DÉMO Backend</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">5. Déploiement (3 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>Pipeline CI/CD</li>
            <li>Docker & Sécurité</li>
            <li>Monitoring</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">6. Conclusion (2 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>Compétences acquises</li>
            <li>Difficultés & solutions</li>
            <li>Perspectives d'évolution</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;
