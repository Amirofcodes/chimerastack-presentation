import React from 'react';

const Monitoring: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Monitoring & Maintenance</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Surveillance continue des services via healthchecks et monitoring.
      </p>
      <p className="text-lg">
        Centralisation et rotation des logs pour une maintenance proactive.
      </p>
      <p className="text-lg">
        Processus de mise à jour et de maintenance réguliers pour garantir la disponibilité.
      </p>
    </div>
  </div>
);

export default Monitoring;
