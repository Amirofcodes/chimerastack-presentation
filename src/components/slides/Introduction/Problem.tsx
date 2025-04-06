import React from 'react';

const Problem: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Problématique</h3>
    <p className="text-lg mb-6 max-w-2xl">
      La configuration complexe des environnements de développement freine l'apprentissage des compétences fondamentales de programmation :
    </p>
    <div className="space-y-3 text-gray-700 dark:text-gray-300 max-w-xl">
      <p className="text-lg">• 2-3 heures perdues par projet pour la configuration</p>
      <p className="text-lg">• Frustration et démotivation pour les apprenants</p>
      <p className="text-lg">• Problèmes récurrents : conflits de ports, incompatibilités...</p>
    </div>
  </div>
);

export default Problem;
