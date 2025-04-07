import React from 'react';

const EnhancedThemes: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
        <span className="relative">
          Système de Thèmes Adaptatif
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
        </span>
      </h3>
      
      <div className="max-w-5xl w-full mb-8">
        {/* Theme Diagram */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Theme Context */}
            <div className="border-2 border-blue-500 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30 p-3 rounded-lg text-center w-full md:w-48">
              <p className="font-medium">ThemeContext</p>
            </div>
            
            {/* Arrow */}
            <div className="transform md:rotate-0 rotate-90">
              <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Theme Functions */}
            <div className="border-2 border-orange-500 bg-orange-50 dark:bg-orange-900 dark:bg-opacity-30 p-3 rounded-lg text-center w-full md:w-64">
              <p className="font-medium">Theme Functions</p>
              <p className="text-sm">(getTheme, toggleDarkMode)</p>
            </div>
            
            {/* Arrow */}
            <div className="transform md:rotate-0 rotate-90">
              <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Theme State */}
            <div className="border-2 border-orange-500 bg-orange-50 dark:bg-orange-900 dark:bg-opacity-30 p-3 rounded-lg text-center w-full md:w-64">
              <p className="font-medium">Theme State</p>
              <p className="text-sm">(theme, isDarkMode)</p>
            </div>
          </div>
          
          {/* LocalStorage Connection */}
          <div className="mt-6 flex justify-center">
            <svg className="w-6 h-6 text-indigo-500 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4" />
            </svg>
          </div>
          
          <div className="mt-2 flex justify-center gap-4">
            <div className="border-2 border-purple-500 bg-purple-50 dark:bg-purple-900 dark:bg-opacity-30 p-2 rounded-lg text-center">
              <p className="font-medium text-sm">localStorage (theme)</p>
            </div>
            <div className="border-2 border-purple-500 bg-purple-50 dark:bg-purple-900 dark:bg-opacity-30 p-2 rounded-lg text-center">
              <p className="font-medium text-sm">localStorage (darkMode)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Implémentation d'un système de thèmes avec options clair/sombre et classique/moderne.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Permet aux utilisateurs de personnaliser leur expérience selon leurs préférences.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Changement de thème dynamique en temps réel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedThemes;