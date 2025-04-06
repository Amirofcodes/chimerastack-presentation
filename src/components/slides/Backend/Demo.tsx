import React from 'react';

const Demo: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Démonstration Backend</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Visualisation de l'API via Swagger pour explorer les endpoints.
      </p>
      <p className="text-lg">
        Présentation d'exemples de réponses API formatées (succès et erreurs).
      </p>
      <p className="text-lg">
        Mise en avant de la robustesse et de la sécurité de l'architecture backend.
      </p>
    </div>
  </div>
);

export default Demo;
