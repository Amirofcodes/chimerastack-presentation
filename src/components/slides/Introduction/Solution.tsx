import React from 'react';

const Solution: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Solution ChimeraStack</h3>
    <p className="text-lg mb-6 max-w-2xl">
      Un outil d'automatisation des environnements de développement qui a évolué en deux phases :
    </p>
    <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-xl">
      <div>
        <h4 className="font-medium text-xl mb-2">Phase 1 : ChimeraStack CLI</h4>
        <p className="text-lg">
          Outil en ligne de commande développé en Python permettant l'automatisation de la configuration via des templates Docker préconfigurés.
        </p>
      </div>
      <div>
        <h4 className="font-medium text-xl mb-2">Phase 2 : Plateforme Web</h4>
        <p className="text-lg">
          Évolution vers une interface web complète avec système d'authentification, catalogue de templates, et intégration de paiement.
        </p>
      </div>
    </div>
  </div>
);

export default Solution;
