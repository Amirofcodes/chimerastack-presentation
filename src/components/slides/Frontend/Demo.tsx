import React from 'react';

const Demo: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Démonstration Frontend</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Navigation intuitive via la sidebar et changement de thèmes en direct.
      </p>
      <p className="text-lg">
        Parcours utilisateur fluide mettant en avant les fonctionnalités clés.
      </p>
      <p className="text-lg">
        Interaction dynamique avec les composants pour illustrer l’expérience utilisateur.
      </p>
    </div>
  </div>
);

export default Demo;
