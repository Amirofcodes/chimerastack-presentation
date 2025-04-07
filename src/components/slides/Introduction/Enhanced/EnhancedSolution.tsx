import React from 'react';

const EnhancedSolution: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-8 relative">
      <span className="relative">
        Solution ChimeraStack
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-400 rounded-full"></div>
      </span>
    </h3>
    
    <p className="text-lg mb-8 max-w-2xl">
      Un outil d'automatisation des environnements de développement qui a évolué en deux phases :
    </p>
    
    <div className="space-y-8 text-gray-700 dark:text-gray-300 max-w-xl">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-indigo-500">
        <div className="flex items-center mb-3">
          <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="font-medium text-xl text-indigo-600 dark:text-indigo-400">Phase 1 : ChimeraStack CLI</h4>
        </div>
        <p className="text-lg text-left">
          Outil en ligne de commande développé en Python permettant l'automatisation de la configuration via des templates Docker préconfigurés.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-indigo-500">
        <div className="flex items-center mb-3">
          <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h4 className="font-medium text-xl text-indigo-600 dark:text-indigo-400">Phase 2 : Plateforme Web</h4>
        </div>
        <p className="text-lg text-left">
          Évolution vers une interface web complète avec système d'authentification, catalogue de templates, et intégration de paiement.
        </p>
      </div>
    </div>
    
    {/* Visual element */}
    <div className="absolute bottom-5 right-5 opacity-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    </div>
  </div>
);

export default EnhancedSolution;