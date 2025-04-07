import React from 'react';

const EnhancedProblem: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-8 relative">
      <span className="relative">
        Problématique
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-400 rounded-full"></div>
      </span>
    </h3>
    
    <p className="text-lg mb-6 max-w-2xl">
      La configuration complexe des environnements de développement freine l'apprentissage des compétences fondamentales de programmation :
    </p>
    
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-xl">
      <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
        <div className="text-red-500 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-lg text-left">2-3 heures perdues par projet pour la configuration</p>
      </div>
      
      <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
        <div className="text-red-500 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-lg text-left">Frustration et démotivation pour les apprenants</p>
      </div>
      
      <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
        <div className="text-red-500 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-lg text-left">Problèmes récurrents : conflits de ports, incompatibilités...</p>
      </div>
    </div>
    
    {/* Visual element */}
    <div className="absolute bottom-10 right-10 opacity-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    </div>
  </div>
);

export default EnhancedProblem;