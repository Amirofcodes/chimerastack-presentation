// src/components/slides/Introduction/PersonalIntro.tsx
import React from 'react';

const PersonalIntro: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Parcours personnel</h3>
    <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">• Formation initiale en administration des entreprises</p>
      <p className="text-lg">• Expérience en Cinématographie et Communication</p>
      <p className="text-lg">• Reconversion vers le développement Full Stack</p>
    </div>
  </div>
);

export default PersonalIntro;