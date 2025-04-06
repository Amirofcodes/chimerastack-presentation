import React from 'react';

const UX: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Design Responsive & Accessibilité</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Conception mobile-first assurant une adaptation optimale sur tous les appareils.
      </p>
      <p className="text-lg">
        Respect des normes WCAG 2.1 pour une accessibilité maximale.
      </p>
      <p className="text-lg">
        Hiérarchie visuelle claire pour une expérience utilisateur intuitive.
      </p>
    </div>
  </div>
);

export default UX;
