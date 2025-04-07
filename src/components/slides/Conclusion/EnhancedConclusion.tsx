import React from 'react';
import SlideTitle from '../../shared/SlideTitle';

const ConclusionPoint: React.FC<{ title: string; content: string; icon: React.ReactNode }> = ({ 
  title, 
  content,
  icon 
}) => {
  return (
    <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-indigo-500">
      <div className="mr-4 text-indigo-600 dark:text-indigo-400 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
};

const EnhancedConclusion: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-50 z-0"></div>
      
      {/* Content */}
      <div className="z-10 max-w-4xl">
        <SlideTitle>Conclusion</SlideTitle>
        
        <div className="space-y-6 mt-8">
          <ConclusionPoint 
            title="Compétences Acquises"
            content="La réalisation de ChimeraStack a permis de renforcer les compétences en développement full stack, notamment la conception d'architectures sécurisées, l'intégration continue et la gestion d'environnements Docker, conformément aux exigences du RNCP38606."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />
          
          <ConclusionPoint 
            title="Difficultés & Solutions"
            content="Les défis liés à la configuration des environnements et à la sécurisation des données ont été surmontés grâce à l'automatisation via Docker, à des tests rigoureux et à une architecture API robuste."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
          
          <ConclusionPoint 
            title="Perspectives d'Évolution"
            content="Le projet ouvre des perspectives pour intégrer de nouveaux templates, explorer des technologies complémentaires telles que Node.js ou Python, et améliorer en continu les performances et la sécurité de la plateforme."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EnhancedConclusion;