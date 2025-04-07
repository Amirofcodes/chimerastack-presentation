import React from 'react';

const EnhancedSecurity: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
        <span className="relative">
          Sécurité & Authentification
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
        </span>
      </h3>
      
      {/* JWT Authentication Flow - Inspired by Image 1 */}
      <div className="max-w-5xl w-full mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-x-auto">
        <div className="min-w-max">
          {/* Headers */}
          <div className="flex justify-between mb-2">
            <div className="w-40 p-2 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 rounded text-center">
              <p className="text-sm font-medium">Frontend Client</p>
            </div>
            <div className="w-40 p-2 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 rounded text-center">
              <p className="text-sm font-medium">API Backend</p>
            </div>
            <div className="w-40 p-2 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 rounded text-center">
              <p className="text-sm font-medium">Auth Controller</p>
            </div>
            <div className="w-40 p-2 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 rounded text-center">
              <p className="text-sm font-medium">JWT Service</p>
            </div>
            <div className="w-40 p-2 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 rounded text-center">
              <p className="text-sm font-medium">Database</p>
            </div>
          </div>
          
          {/* Login Flow */}
          <div className="relative">
            {/* Vertical lines */}
            <div className="absolute top-0 left-20 bottom-0 border-l-2 border-gray-300 dark:border-gray-700"></div>
            <div className="absolute top-0 left-1/4 translate-x-20 bottom-0 border-l-2 border-gray-300 dark:border-gray-700"></div>
            <div className="absolute top-0 left-2/4 bottom-0 border-l-2 border-gray-300 dark:border-gray-700"></div>
            <div className="absolute top-0 left-3/4 bottom-0 border-l-2 border-gray-300 dark:border-gray-700"></div>
            <div className="absolute top-0 right-20 bottom-0 border-l-2 border-gray-300 dark:border-gray-700"></div>
            
            {/* Login Request */}
            <div className="flex mb-6 relative">
              <div className="absolute top-6 left-20 right-3/4 border-t-2 border-gray-300 dark:border-gray-700">
                <div className="absolute right-0 -top-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="w-full pl-28 pr-8">
                <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg text-left">
                  <p className="text-xs">POST /auth/login (email, password)</p>
                </div>
              </div>
            </div>
            
            {/* Auth Request */}
            <div className="flex mb-6 relative">
              <div className="absolute top-6 left-1/4 translate-x-20 right-2/4 border-t-2 border-gray-300 dark:border-gray-700">
                <div className="absolute right-0 -top-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="w-full pl-64 pr-64">
                <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg text-left">
                  <p className="text-xs">routeAuthRequest()</p>
                </div>
              </div>
            </div>
            
            {/* DB Query */}
            <div className="flex mb-6 relative">
              <div className="absolute top-6 left-2/4 right-20 border-t-2 border-gray-300 dark:border-gray-700">
                <div className="absolute right-0 -top-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="w-full pl-64 pr-28">
                <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg text-left">
                  <p className="text-xs">getUserByEmail(email)</p>
                </div>
              </div>
            </div>
            
            {/* DB Response */}
            <div className="flex mb-6 relative">
              <div className="absolute top-6 right-20 left-2/4 border-t-2 border-gray-300 dark:border-gray-700 border-dashed">
                <div className="absolute left-0 -top-2">
                  <svg className="w-4 h-4 text-gray-500 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="w-full pl-64 pr-28">
                <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg text-left">
                  <p className="text-xs">user data (with password_hash)</p>
                </div>
              </div>
            </div>
            
            {/* Password Verify */}
            <div className="flex mb-6 relative">
              <div className="absolute top-6 left-2/4 right-3/4 border-t-2 border-gray-300 dark:border-gray-700">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <svg className="w-8 h-8 text-gray-500 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </div>
              </div>
              <div className="w-full pl-64 pr-64">
                <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg text-left">
                  <p className="text-xs">password_verify(password, password_hash)</p>
                </div>
              </div>
            </div>
            
            {/* JWT Generation */}
            <div className="flex mb-6 relative">
              <div className="absolute top-6 left-2/4 right-3/4 border-t-2 border-gray-300 dark:border-gray-700">
                <div className="absolute right-0 -top-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="w-full pl-64 pr-64">
                <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg text-left">
                  <p className="text-xs">generateJWT(id, email)</p>
                </div>
              </div>
            </div>
            
            {/* JWT Response */}
            <div className="flex mb-6 relative">
              <div className="absolute top-6 right-3/4 left-2/4 border-t-2 border-gray-300 dark:border-gray-700 border-dashed">
                <div className="absolute left-0 -top-2">
                  <svg className="w-4 h-4 text-gray-500 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="w-full pl-64 pr-64">
                <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg text-left">
                  <p className="text-xs">signed JWT token</p>
                </div>
              </div>
            </div>
            
            {/* Success Response */}
            <div className="flex mb-6 relative">
              <div className="absolute top-6 right-3/4 left-1/4 translate-x-20 border-t-2 border-gray-300 dark:border-gray-700 border-dashed">
                <div className="absolute left-0 -top-2">
                  <svg className="w-4 h-4 text-gray-500 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="w-full pl-28 pr-28">
                <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg text-left">
                  <p className="text-xs">
                    sendSuccessResponse({'{ user, access_token }'})
                  </p>
                </div>
              </div>
            </div>
            
            {/* Client Response */}
            <div className="flex mb-6 relative">
              <div className="absolute top-6 right-3/4 left-20 border-t-2 border-gray-300 dark:border-gray-700 border-dashed">
                <div className="absolute left-0 -top-2">
                  <svg className="w-4 h-4 text-gray-500 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="w-full pl-28 pr-28">
                <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-30 p-2 rounded-lg text-left">
                  <p className="text-xs">
                    {'{ success: true, user: {...}, access_token: "..." }'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Store token */}
            <div className="flex mb-8 relative">
              <div className="w-full pl-28 pr-64">
                <div className="bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-30 p-2 rounded-lg text-left">
                  <p className="text-xs">Store token in localStorage</p>
                </div>
              </div>
            </div>
            
            {/* Authentication Complete Label */}
            <div className="flex justify-center mb-8">
              <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg text-center w-full">
                <p className="text-sm font-medium">Authentication Complete</p>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Implémentation d'un système d'authentification sécurisé via JWT.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Utilisation de middleware pour protéger les endpoints sensibles.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
          <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 15a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <p className="text-lg text-left">
            Mesures de prévention contre les injections SQL, CSRF et XSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSecurity;
