import React from 'react';

const EnhancedDemo: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
      <span className="relative">
        Démonstration Frontend
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
      </span>
    </h3>
    
    {/* Mock Browser Demo */}
    <div className="mb-8 max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Browser Chrome */}
      <div className="bg-gray-200 dark:bg-gray-700 p-2 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 bg-white dark:bg-gray-600 rounded px-3 py-1 text-sm text-left">
          chimerastack.com/dashboard
        </div>
      </div>
      
      {/* Mock Content */}
      <div className="p-4 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-indigo-900 text-white rounded-lg p-4 mb-4 md:mb-0 md:mr-4">
          <div className="mb-4 pb-4 border-b border-indigo-800">
            <h2 className="text-xl font-bold">ChimeraStack</h2>
          </div>
          
          <div className="flex flex-col items-center py-4 mb-4 border-b border-indigo-800">
            <div className="w-16 h-16 bg-indigo-700 rounded-full mb-2"></div>
            <p className="text-sm">Utilisateur</p>
            <p className="text-xs text-indigo-300">Développeur</p>
          </div>
          
          <ul className="space-y-2">
            <li className="py-2 px-3 bg-indigo-700 rounded cursor-pointer">Dashboard</li>
            <li className="py-2 px-3 hover:bg-indigo-800 rounded cursor-pointer">Templates</li>
            <li className="py-2 px-3 hover:bg-indigo-800 rounded cursor-pointer">Mes projets</li>
            <li className="py-2 px-3 hover:bg-indigo-800 rounded cursor-pointer">Support</li>
            <li className="py-2 px-3 hover:bg-indigo-800 rounded cursor-pointer">Paramètres</li>
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 text-left">
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Tableau de bord</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-indigo-50 dark:bg-indigo-900 dark:bg-opacity-20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
              <h3 className="font-medium mb-2">Templates utilisés</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900 dark:bg-opacity-20 p-4 rounded-lg border border-green-100 dark:border-green-800">
              <h3 className="font-medium mb-2">Projets actifs</h3>
              <p className="text-2xl font-bold">4</p>
            </div>
          </div>
          
          <h3 className="font-medium mb-3">Templates récents</h3>
          <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <span>React + Node.js</span>
              <span className="text-sm text-gray-500">Il y a 2 jours</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span>LAMP Stack</span>
              <span className="text-sm text-gray-500">Il y a 5 jours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Navigation intuitive via la sidebar et changement de thèmes en direct.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Parcours utilisateur fluide mettant en avant les fonctionnalités clés.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Interaction dynamique avec les composants pour illustrer l'expérience utilisateur.
        </p>
      </div>
    </div>
  </div>
);

export default EnhancedDemo;