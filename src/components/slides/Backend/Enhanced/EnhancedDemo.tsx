import React from 'react';

const EnhancedDemo: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
        <span className="relative">
          Démonstration Backend
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
        </span>
      </h3>
      
      {/* API Documentation Demo */}
      <div className="w-full max-w-4xl mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
        {/* Swagger UI Mock */}
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
          {/* Swagger Header */}
          <div className="bg-gray-100 dark:bg-gray-700 p-3 border-b border-gray-300 dark:border-gray-600 flex justify-between items-center">
            <h4 className="text-lg font-semibold">ChimeraStack API</h4>
            <div className="text-sm px-2 py-1 bg-green-600 text-white rounded">
              v1.0.0
            </div>
          </div>
          
          {/* Endpoints List */}
          <div className="divide-y divide-gray-300 dark:divide-gray-600">
            {/* Auth Endpoint */}
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="px-2 py-1 rounded text-xs font-bold mr-2 bg-green-500 text-white">
                  POST
                </div>
                <span className="font-mono text-sm">/auth/login</span>
              </div>
              <p className="text-sm text-left text-gray-600 dark:text-gray-400 mb-2">
                Authentifie un utilisateur et retourne un token JWT
              </p>
              <div className="flex justify-end">
                <button className="text-xs px-2 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                  Try it out
                </button>
              </div>
            </div>
            
            {/* Templates Endpoint */}
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="px-2 py-1 rounded text-xs font-bold mr-2 bg-blue-500 text-white">
                  GET
                </div>
                <span className="font-mono text-sm">/templates</span>
              </div>
              <p className="text-sm text-left text-gray-600 dark:text-gray-400 mb-2">
                Récupère la liste des templates disponibles
              </p>
              <div className="flex justify-end">
                <button className="text-xs px-2 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                  Try it out
                </button>
              </div>
            </div>
            
            {/* Templates Download Endpoint */}
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="px-2 py-1 rounded text-xs font-bold mr-2 bg-green-500 text-white">
                  POST
                </div>
                <span className="font-mono text-sm">/templates/{'{id}'}/download</span>
              </div>
              <p className="text-sm text-left text-gray-600 dark:text-gray-400 mb-2">
                Télécharge un template spécifique
              </p>
              <div className="flex justify-end">
                <button className="text-xs px-2 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                  Try it out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Response Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full max-w-4xl">
        {/* Success Response */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h4 className="text-sm font-semibold text-left mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Réponse API (Succès)
          </h4>
          <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded text-left overflow-auto h-40">
            <pre className="text-xs">
              {JSON.stringify({
                success: true,
                data: {
                  id: 12,
                  name: "LAMP Stack",
                  description: "Linux, Apache, MySQL, PHP stack",
                  version: "1.2.0",
                  downloads: 1458,
                  created_at: "2024-03-15T10:30:00Z"
                }
              }, null, 2)}
            </pre>
          </div>
        </div>
        
        {/* Error Response */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h4 className="text-sm font-semibold text-left mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Réponse API (Erreur)
          </h4>
          <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded text-left overflow-auto h-40">
            <pre className="text-xs">
              {JSON.stringify({
                success: false,
                error: {
                  code: "UNAUTHORIZED",
                  message: "Accès refusé. Veuillez vous authentifier.",
                  status: 401
                }
              }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Visualisation de l'API via Swagger pour explorer les endpoints.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Présentation d'exemples de réponses API formatées (succès et erreurs).
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Mise en avant de la robustesse et de la sécurité de l'architecture backend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDemo;