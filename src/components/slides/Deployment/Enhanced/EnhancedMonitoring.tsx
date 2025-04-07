// src/components/slides/Deployment/Enhanced/EnhancedMonitoring.tsx
import React from 'react';

const EnhancedMonitoring: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
      <span className="relative">
        Monitoring & Maintenance
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
      </span>
    </h3>
    
    {/* Monitoring Dashboard */}
    <div className="max-w-4xl w-full mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <p className="text-sm font-medium mb-3">Dashboard de Monitoring</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Server Stats */}
          <div className="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="text-sm font-medium mb-2 text-blue-600 dark:text-blue-400">Serveur</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs">CPU</span>
                <span className="text-xs font-medium">12%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-xs">RAM</span>
                <span className="text-xs font-medium">1.7GB / 4GB</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-xs">Disque</span>
                <span className="text-xs font-medium">12GB / 50GB</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>
          </div>
          
          {/* Container Health */}
          <div className="bg-green-50 dark:bg-green-900 dark:bg-opacity-20 p-3 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="text-sm font-medium mb-2 text-green-600 dark:text-green-400">Conteneurs</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs">Frontend</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                  Healthy
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs">Backend</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                  Healthy
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs">MySQL</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                  Healthy
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs">Nginx</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                  Healthy
                </span>
              </div>
            </div>
          </div>
          
          {/* SSL Certificate */}
          <div className="bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="text-sm font-medium mb-2 text-purple-600 dark:text-purple-400">Certificats SSL</h4>
            <div className="space-y-2">
              <div className="text-left text-xs">
                <p><span className="font-medium">Domaine:</span> chimerastack.com</p>
                <p><span className="font-medium">Émetteur:</span> Let's Encrypt Authority X3</p>
                <p><span className="font-medium">Validité:</span> 2025-02-15 - 2025-05-15</p>
              </div>
              
              <div className="flex justify-between">
                <span className="text-xs">Jours restants</span>
                <span className="text-xs font-medium">38 jours</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
              
              <div className="flex justify-center mt-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                  Valide
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Log Dashboard */}
        <div className="bg-gray-50 dark:bg-gray-900 dark:bg-opacity-50 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium mb-2">Logs Système</h4>
          <div className="bg-black rounded p-2 text-xs font-mono text-green-400 text-left h-32 overflow-auto">
            <p>[2025-04-06 12:23:45] [info] Starting daily maintenance tasks</p>
            <p>[2025-04-06 12:23:46] [info] Rotating logs (nginx, mysql, php)</p>
            <p>[2025-04-06 12:23:48] [info] Checking certificate expiration</p>
            <p>[2025-04-06 12:23:50] [info] Running database optimization</p>
            <p>[2025-04-06 12:24:01] [info] Cleaning up temporary files</p>
            <p>[2025-04-06 12:24:05] [info] Pruning unused Docker images</p>
            <p>[2025-04-06 12:24:15] [info] Creating backup snapshot</p>
            <p>[2025-04-06 12:24:45] [info] Backup completed successfully</p>
            <p>[2025-04-06 12:24:46] [info] All maintenance tasks completed</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Maintenance Schedule */}
    <div className="max-w-2xl w-full mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h4 className="text-sm font-medium mb-3">Calendrier de Maintenance</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Tâche</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Fréquence</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Dernière exécution</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-4 py-2 text-xs">Rotation des logs</td>
              <td className="px-4 py-2 text-xs">Quotidien</td>
              <td className="px-4 py-2 text-xs">2025-04-06</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-xs">Nettoyage des images Docker</td>
              <td className="px-4 py-2 text-xs">Hebdomadaire</td>
              <td className="px-4 py-2 text-xs">2025-04-06</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-xs">Sauvegarde complète</td>
              <td className="px-4 py-2 text-xs">Hebdomadaire</td>
              <td className="px-4 py-2 text-xs">2025-04-06</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-xs">Test de restauration</td>
              <td className="px-4 py-2 text-xs">Mensuel</td>
              <td className="px-4 py-2 text-xs">2025-03-15</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-xs">Mise à jour de sécurité</td>
              <td className="px-4 py-2 text-xs">Mensuel</td>
              <td className="px-4 py-2 text-xs">2025-03-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Surveillance continue des services via healthchecks et monitoring.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Centralisation et rotation des logs pour une maintenance proactive.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Processus de mise à jour et de maintenance réguliers pour garantir la disponibilité.
        </p>
      </div>
    </div>
  </div>
);

export default EnhancedMonitoring;