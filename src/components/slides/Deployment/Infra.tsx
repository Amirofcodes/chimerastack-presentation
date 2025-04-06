import React from 'react';

const Infra: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Infrastructure & Hébergement</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Utilisation d’un VPS Contabo avec Ubuntu 20.04 et gestion DNS via Namecheap.
      </p>
      <p className="text-lg">
        Architecture Docker multi-conteneurs orchestrée par Docker Compose.
      </p>
      <p className="text-lg">
        Configuration de Nginx pour la terminaison SSL et le routage sécurisé.
      </p>
    </div>
  </div>
);

export default Infra;
