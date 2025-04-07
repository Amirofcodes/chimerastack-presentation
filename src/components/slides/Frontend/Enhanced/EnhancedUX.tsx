import React from 'react';

const EnhancedUX: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
        <span className="relative">
          Design Responsive & Accessibilité
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
        </span>
      </h3>
      
      <div className="max-w-4xl w-full mb-8">
        {/* User Flow Diagram - Inspired by Image 3 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex flex-col">
            <div className="text-center mb-4">
              <div className="inline-block border-2 border-gray-500 rounded-lg p-2 bg-gray-100 dark:bg-gray-700">
                <p className="font-medium">Utilisateur arrive sur ChimeraStack</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left Column - Discovery */}
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                <div className="text-center mb-2">
                  <p className="font-medium text-indigo-600">Parcours de Découverte</p>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-50 p-2 rounded border border-blue-500 text-center">
                    <p>Page d'accueil</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-600 text-center">
                    <p>Présentation du Concept</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-600 text-center">
                    <p>Téléchargement CLI</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-50 p-2 rounded border border-green-500 text-center">
                    <p>Inscription</p>
                  </div>
                </div>
              </div>
              
              {/* Middle Column - Regular Use */}
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                <div className="text-center mb-2">
                  <p className="font-medium text-indigo-600">Parcours d'Utilisation Régul.</p>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-600 text-center">
                    <p>Login</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-50 p-2 rounded border border-blue-500 text-center">
                    <p>Dashboard</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-600 text-center">
                    <p>Exploration Templates</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-50 p-2 rounded border border-green-500 text-center">
                    <p>Téléchargement Template</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Support */}
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                <div className="text-center mb-2">
                  <p className="font-medium text-indigo-600">Parcours de Support</p>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-50 p-2 rounded border border-blue-500 text-center">
                    <p>Page Support</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-600 text-center">
                    <p>Sélection niveau de support</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-50 p-2 rounded border border-green-500 text-center">
                    <p>Paiement</p>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-50 p-2 rounded border border-green-500 text-center">
                    <p>Confirmation</p>
                  </div>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Conception mobile-first assurant une adaptation optimale sur tous les appareils.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Respect des normes WCAG 2.1 pour une accessibilité maximale.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Hiérarchie visuelle claire pour une expérience utilisateur intuitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedUX;