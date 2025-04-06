import React from 'react';

const Overview: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">API RESTful & Structure MVC</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Conception d'une API RESTful modulable reposant sur le modèle MVC pour une organisation claire.
      </p>
      <p className="text-lg">
        Standardisation des réponses en JSON afin de faciliter la communication avec le frontend.
      </p>
      <p className="text-lg">
        Architecture orientée microservices pour une scalabilité efficace.
      </p>
    </div>
  </div>
);

export default Overview;
