// src/components/slides/Deployment/Enhanced/EnhancedInfra.tsx
import React from 'react';

const EnhancedInfra: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
      <span className="relative">
        Infrastructure & Hébergement
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
      </span>
    </h3>
    
    {/* Docker Architecture Diagram - Inspired by Image 1 */}
    <div className="max-w-4xl w-full mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <p className="text-sm font-medium mb-3">Architecture de déploiement Docker de ChimeraStack</p>
        
        {/* VPS Host Container */}
        <div className="border-2 border-gray-400 dark:border-gray-500 rounded-lg p-3 bg-gray-50 dark:bg-gray-900">
          <p className="text-sm font-medium mb-2">VPS Host</p>
          
          {/* Docker Environment */}
          <div className="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-gray-100 dark:bg-gray-800">
            <div className="flex justify-between mb-2">
              <p className="text-xs font-medium">Docker Environment</p>
              <p className="text-xs font-medium">chimera_network</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              {/* Nginx Container */}
              <div className="bg-blue-500 text-white p-2 rounded-lg">
                <p className="text-sm font-medium mb-1">Nginx Container</p>
                <div className="text-xs text-left space-y-1">
                  <p>Reverse Proxy</p>
                  <p>SSL Termination</p>
                  <p>Ports: 80, 443</p>
                </div>
              </div>
              
              {/* Frontend Container */}
              <div className="bg-green-500 text-white p-2 rounded-lg">
                <p className="text-sm font-medium mb-1">Frontend Container</p>
                <div className="text-xs text-left space-y-1">
                  <p>React Application</p>
                  <p>Built with Vite/ESBuild</p>
                  <p>Served via Nginx</p>
                </div>
              </div>
              
              {/* Backend Container */}
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <p className="text-sm font-medium mb-1">Backend Container</p>
                <div className="text-xs text-left space-y-1">
                  <p>PHP 8.1 API</p>
                  <p>RESTful Services</p>
                  <p>Served via Nginx</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* MySQL Container */}
              <div className="bg-purple-600 text-white p-2 rounded-lg">
                <p className="text-sm font-medium mb-1">MySQL Container</p>
                <div className="text-xs text-left space-y-1">
                  <p>MySQL 8.0</p>
                  <p>Persistent Storage</p>
                  <p>Volume: mysql_data</p>
                </div>
              </div>
              
              {/* phpMyAdmin Container */}
              <div className="bg-blue-400 text-white p-2 rounded-lg">
                <p className="text-sm font-medium mb-1">phpMyAdmin Container</p>
                <div className="text-xs text-left space-y-1">
                  <p>Database Admin</p>
                  <p>Protected Access</p>
                  <p>Connected to MySQL</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Host Volumes */}
          <div className="mt-3 border-2 border-yellow-400 dark:border-yellow-600 rounded-lg p-2 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20">
            <p className="text-xs font-medium mb-1">Host Volumes</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-xs text-left bg-yellow-100 dark:bg-yellow-800 dark:bg-opacity-30 p-1 rounded">
                <p>ssl-certs</p>
              </div>
              <div className="text-xs text-left bg-yellow-100 dark:bg-yellow-800 dark:bg-opacity-30 p-1 rounded">
                <p>mysql_data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* SSH Terminal */}
    <div className="max-w-2xl w-full mb-8 bg-black rounded-lg overflow-hidden shadow-md">
      <div className="bg-gray-800 p-2 flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="ml-2 text-white text-xs">Terminal</div>
      </div>
      <div className="p-4 text-green-400 font-mono text-xs text-left">
        <p className="mb-1">$ ssh chimera@89.117.59.71</p>
        <p className="mb-1">Welcome to Ubuntu 20.04.6 LTS (GNU/Linux 5.4.0-105-generic x86_64)</p>
        <p className="mb-1">* Documentation: https://help.ubuntu.com</p>
        <p className="mb-1">* Management: https://landscape.canonical.com</p>
        <p className="mb-1">* Support: https://ubuntu.com/pro</p>
        <p className="mb-3">Last login: Wed Apr 3 06:51:29 2025</p>
        <p className="text-yellow-400">chimera@vmi2251173:~$ <span className="animate-pulse">_</span></p>
      </div>
    </div>
    
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Utilisation d'un VPS Contabo avec Ubuntu 20.04 et gestion DNS via Namecheap.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Architecture Docker multi-conteneurs orchestrée par Docker Compose.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Configuration de Nginx pour la terminaison SSL et le routage sécurisé.
        </p>
      </div>
    </div>
  </div>
);

export default EnhancedInfra;