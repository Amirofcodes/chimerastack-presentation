import React from 'react';

const EnhancedOverview: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
        <span className="relative">
          Architecture & Choix Techniques
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
        </span>
      </h3>
      
      <div className="max-w-4xl w-full">
        {/* Architecture Diagram */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-8">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
              {/* Top Row */}
              <div className="col-span-3 border-2 border-indigo-500 rounded-lg p-3 text-center bg-indigo-50 dark:bg-indigo-900 dark:bg-opacity-30">
                <p className="font-medium">Client/Browser</p>
              </div>
              
              {/* Arrow */}
              <div className="col-span-3 flex justify-center">
                <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Middle Row */}
              <div className="col-span-3 border-2 border-indigo-500 rounded-lg p-3 text-center bg-indigo-50 dark:bg-indigo-900 dark:bg-opacity-30">
                <p className="font-medium">React/TypeScript/Tailwind</p>
              </div>
              
              {/* Arrow */}
              <div className="col-span-3 flex justify-center">
                <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Bottom Row */}
              <div className="col-span-3 grid grid-cols-2 gap-4">
                <div className="border-2 border-indigo-500 rounded-lg p-3 text-center bg-indigo-50 dark:bg-indigo-900 dark:bg-opacity-30">
                  <p className="font-medium">Context API</p>
                </div>
                <div className="border-2 border-indigo-500 rounded-lg p-3 text-center bg-indigo-50 dark:bg-indigo-900 dark:bg-opacity-30">
                  <p className="font-medium">Services API</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Utilisation de React, TypeScript et Tailwind CSS pour une interface moderne et sécurisée.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Organisation modulaire des composants et intégration via Context API.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Communication avec le backend via un service API dédié.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedOverview;