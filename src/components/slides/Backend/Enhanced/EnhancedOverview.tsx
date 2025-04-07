import React from 'react';

const EnhancedOverview: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
        <span className="relative">
          API RESTful & Structure MVC
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
        </span>
      </h3>
      
      {/* API Architecture Diagram - Based on Image 3 */}
      <div className="max-w-4xl w-full mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="flex flex-col">
          {/* Client Layer */}
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30 border-2 border-yellow-200 dark:border-yellow-800 p-2 rounded-lg w-48 text-center">
              <div className="bg-blue-500 text-white p-2 rounded-md mb-1">
                <p className="font-medium">Frontend React</p>
              </div>
              <p className="text-xs">Client</p>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center mb-1">
            <svg className="w-5 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          
          {/* API EntryPoint */}
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30 border-2 border-yellow-200 dark:border-yellow-800 p-2 rounded-lg w-72">
              <p className="text-xs mb-1">API EntryPoint</p>
              <div className="bg-orange-500 text-white p-2 rounded-md mb-1">
                <p className="font-medium">index.php</p>
              </div>
              <div className="bg-orange-500 text-white p-2 rounded-md">
                <p className="font-medium">Router Principal</p>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center mb-1">
            <svg className="w-5 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          
          {/* Controllers */}
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30 border-2 border-yellow-200 dark:border-yellow-800 p-2 rounded-lg w-full max-w-md">
              <p className="text-xs mb-1">Controller Layer</p>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-green-500 text-white p-2 rounded-md text-xs">
                  <p className="font-medium">PaymentController</p>
                </div>
                <div className="bg-green-500 text-white p-2 rounded-md text-xs">
                  <p className="font-medium">UserController</p>
                </div>
                <div className="bg-green-500 text-white p-2 rounded-md text-xs">
                  <p className="font-medium">TemplateController</p>
                </div>
                <div className="bg-green-500 text-white p-2 rounded-md text-xs">
                  <p className="font-medium">AuthController</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center mb-1">
            <svg className="w-5 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          
          {/* Models & Services */}
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30 border-2 border-yellow-200 dark:border-yellow-800 p-2 rounded-lg w-full max-w-md">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <p className="text-xs mb-1">Model Layer</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-700 text-white p-2 rounded-md text-xs">
                      <p className="font-medium">Payment Model</p>
                    </div>
                    <div className="bg-blue-700 text-white p-2 rounded-md text-xs">
                      <p className="font-medium">Template Model</p>
                    </div>
                    <div className="bg-blue-700 text-white p-2 rounded-md text-xs">
                      <p className="font-medium">User Model</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs mb-1">Core Services</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-purple-600 text-white p-2 rounded-md text-xs">
                      <p className="font-medium">JWT Service</p>
                    </div>
                    <div className="bg-purple-600 text-white p-2 rounded-md text-xs">
                      <p className="font-medium">Response Formatter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center mb-1">
            <svg className="w-5 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          
          {/* Database */}
          <div className="flex justify-center mb-1">
            <div className="flex-col items-center">
              <div className="w-32 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center">
                <p className="font-medium text-xs">MySQL Database</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key points */}
      <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Conception d'une API RESTful modulable reposant sur le modèle MVC pour une organisation claire.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Standardisation des réponses en JSON afin de faciliter la communication avec le frontend.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Architecture orientée microservices pour une scalabilité efficace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedOverview;