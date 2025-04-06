// src/components/slides/Title.tsx
import React from 'react';

const Title: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
        ChimeraStack
      </h1>
      <p className="text-2xl mb-8">
        Plateforme d'automatisation d'environnements de développement
      </p>
      <div className="text-lg text-gray-600 dark:text-gray-300 mt-16">
        <p>Jaouad Bouddehbine</p>
        <p>Certification RNCP38606 - Développeur Full Stack</p>
        <p>IT-Akademy - Avril 2025</p>
      </div>
    </div>
  );
};

export default Title;