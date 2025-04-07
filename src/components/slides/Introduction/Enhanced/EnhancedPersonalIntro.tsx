import React from 'react';

const EnhancedPersonalIntro: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
    {/* Background element */}
    <div className="absolute right-10 top-10 w-32 h-32 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-20"></div>
    <div className="absolute left-10 bottom-10 w-24 h-24 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20"></div>
    
    <h3 className="text-2xl font-semibold text-indigo-600 mb-8 relative">
      <span className="relative">
        Parcours personnel
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-400 rounded-full"></div>
      </span>
    </h3>
    
    <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-2xl z-10">
      <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="mr-4 text-indigo-500 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <p className="text-lg">Formation initiale en administration des entreprises</p>
      </div>
      
      <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="mr-4 text-indigo-500 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-lg">Expérience en Cinématographie et Communication</p>
      </div>
      
      <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="mr-4 text-indigo-500 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <p className="text-lg">Reconversion vers le développement Full Stack</p>
      </div>
    </div>
  </div>
);

export default EnhancedPersonalIntro;