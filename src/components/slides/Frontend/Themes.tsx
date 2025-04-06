import React from 'react';

const Themes: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Système de Thèmes Adaptatif</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Implémentation d’un système de thèmes avec options clair/sombre et classique/moderne.
      </p>
      <p className="text-lg">
        Permet aux utilisateurs de personnaliser leur expérience selon leurs préférences.
      </p>
      <p className="text-lg">
        Changement de thème dynamique en temps réel.
      </p>
    </div>
  </div>
);

export default Themes;
