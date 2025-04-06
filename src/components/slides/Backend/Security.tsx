import React from 'react';

const Security: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Sécurité & Authentification</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Implémentation d'un système d'authentification sécurisé via JWT.
      </p>
      <p className="text-lg">
        Utilisation de middleware pour protéger les endpoints sensibles.
      </p>
      <p className="text-lg">
        Mesures de prévention contre les injections SQL, CSRF et XSS.
      </p>
    </div>
  </div>
);

export default Security;
