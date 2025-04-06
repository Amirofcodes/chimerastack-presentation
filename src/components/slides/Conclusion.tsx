import React from 'react';
import SlideTitle from '../shared/SlideTitle';

const Conclusion: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <SlideTitle>Conclusion</SlideTitle>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-3xl">
        <p className="text-lg">
          <strong>Compétences Acquises :</strong> La réalisation de ChimeraStack a permis de renforcer les compétences en développement full stack, notamment la conception d’architectures sécurisées, l’intégration continue et la gestion d’environnements Docker, conformément aux exigences du RNCP38606.
        </p>
        <p className="text-lg">
          <strong>Difficultés & Solutions :</strong> Les défis liés à la configuration des environnements et à la sécurisation des données ont été surmontés grâce à l’automatisation via Docker, à des tests rigoureux et à une architecture API robuste.
        </p>
        <p className="text-lg">
          <strong>Perspectives d'Évolution :</strong> Le projet ouvre des perspectives pour intégrer de nouveaux templates, explorer des technologies complémentaires telles que Node.js ou Python, et améliorer en continu les performances et la sécurité de la plateforme.
        </p>
      </div>
    </div>
  );
};

export default Conclusion;
