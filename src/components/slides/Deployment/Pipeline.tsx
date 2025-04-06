import React from 'react';

const Pipeline: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Pipeline CI/CD & Sécurité</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Intégration continue et déploiement automatisé via GitHub Actions.
      </p>
      <p className="text-lg">
        Tests automatisés et validation du code avant déploiement en production.
      </p>
      <p className="text-lg">
        Gestion sécurisée des variables d’environnement pour la flexibilité.
      </p>
    </div>
  </div>
);

export default Pipeline;
