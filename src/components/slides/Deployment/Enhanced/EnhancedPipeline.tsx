// src/components/slides/Deployment/Enhanced/EnhancedPipeline.tsx
import React from 'react';

const EnhancedPipeline: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
      <span className="relative">
        Pipeline CI/CD & Sécurité
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
      </span>
    </h3>
    
    {/* CI/CD Pipeline Diagram */}
    <div className="max-w-4xl w-full mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <p className="text-sm font-medium mb-3">
          Pipeline d'Intégration et Déploiement Continus
        </p>
        
        <div className="flex flex-col">
          {/* GitHub Section */}
          <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <p className="font-medium">GitHub Repository</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>Feature Branch</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Code & Tests</p>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>Pull Request</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Code Review</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>Main Branch</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Production Code</p>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          
          {/* GitHub Actions Section */}
          <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .25a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.9.1-3.9 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 2 .3 3.5.2 3.9.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .25Z" />
              </svg>
              <p className="font-medium">GitHub Actions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>Test</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Unit & Integration
                </p>
              </div>
              <div className="bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>Lint</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Code Quality
                </p>
              </div>
              <div className="bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>Build</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Create Artifacts
                </p>
              </div>
              <div className="bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>Deploy</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Push to Production
                </p>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          
          {/* VPS Section */}
          <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg">
            <div className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              <p className="font-medium">VPS (Contabo)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="bg-orange-100 dark:bg-orange-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>SSH Connection</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Secure File Transfer
                </p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>Docker Rebuild</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  docker-compose up -d
                </p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900 dark:bg-opacity-30 p-2 rounded text-left text-sm">
                <p>Verification</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Health Checks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* GitHub Actions Workflow Example */}
    <div className="max-w-2xl w-full mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="bg-gray-800 p-2 flex items-center">
        <svg className="w-5 h-5 mr-2 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .25a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.9.1-3.9 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 2 .3 3.5.2 3.9.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .25Z" />
        </svg>
        <p className="text-sm text-white">deploy.yml</p>
      </div>
      <div className="bg-gray-900 p-3 font-mono text-xs text-green-400 text-left overflow-auto h-40">
        <pre>
{`name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.VPS_HOST }}
          username: \${{ secrets.VPS_USER }}
          key: \${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /path/to/project
            git pull
            docker-compose down
            docker-compose up -d --build
            docker system prune -f`}
        </pre>
      </div>
    </div>
    
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Intégration continue et déploiement automatisé via GitHub Actions.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Tests automatisés et validation du code avant déploiement en production.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
        <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <p className="text-lg text-left">
          Gestion sécurisée des variables d'environnement pour la flexibilité.
        </p>
      </div>
    </div>
  </div>
);

export default EnhancedPipeline;
