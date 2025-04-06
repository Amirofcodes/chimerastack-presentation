import React from 'react';

const Overview: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Architecture & Choix Techniques</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Utilisation de React, TypeScript et Tailwind CSS pour une interface moderne et sécurisée.
      </p>
      <p className="text-lg">
        Organisation modulaire des composants et intégration via Context API.
      </p>
      <p className="text-lg">
        Communication avec le backend via un service API dédié.
      </p>
    </div>
  </div>
);

export default Overview;
