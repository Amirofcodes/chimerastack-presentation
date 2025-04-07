import React from 'react';

const EnhancedTitle: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Docker-inspired containers */}
          <g className="text-indigo-600">
            <rect x="150" y="100" width="120" height="80" rx="4" fill="currentColor" opacity="0.7" />
            <rect x="310" y="150" width="120" height="80" rx="4" fill="currentColor" opacity="0.5" />
            <rect x="230" y="220" width="120" height="80" rx="4" fill="currentColor" opacity="0.3" />
            <rect x="400" y="240" width="120" height="80" rx="4" fill="currentColor" opacity="0.6" />
            <rect x="500" y="180" width="120" height="80" rx="4" fill="currentColor" opacity="0.4" />
          </g>
          
          {/* Connection lines */}
          <g stroke="currentColor" strokeWidth="2" className="text-indigo-400" opacity="0.5">
            <path d="M 210 140 L 310 190" fill="none" />
            <path d="M 270 200 L 290 220" fill="none" />
            <path d="M 350 230 L 400 280" fill="none" />
            <path d="M 430 150 L 500 220" fill="none" />
          </g>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="z-10">
        <h1 className="text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
          ChimeraStack
        </h1>
        <p className="text-2xl mb-8">
          Plateforme d'automatisation d'environnements de développement
        </p>
        
        <div className="mt-16 flex flex-col items-center space-y-1">
          <div className="w-16 h-1 bg-indigo-500 mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">Jaouad Bouddehbine</p>
          <p className="text-lg text-gray-600 dark:text-gray-300">Certification RNCP38606 - Développeur Full Stack</p>
          <p className="text-lg text-gray-600 dark:text-gray-300">IT-Akademy - Avril 2025</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTitle;