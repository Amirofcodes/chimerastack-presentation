import React from 'react';

const Payment: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Système de Paiement</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Intégration de Stripe et PayPal pour des transactions sécurisées.
      </p>
      <p className="text-lg">
        Suivi des paiements via un modèle de données dédié et gestion des transactions.
      </p>
      <p className="text-lg">
        Facilité d'extension pour ajouter de futures fonctionnalités premium.
      </p>
    </div>
  </div>
);

export default Payment;
