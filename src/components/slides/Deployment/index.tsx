import React from 'react';
import SlideTitle from '../../shared/SlideTitle';
import Carousel from '../../shared/Carousel';
import Infra from './Infra';
import Pipeline from './Pipeline';
import Monitoring from './Monitoring';

const Deployment: React.FC = () => {
  const slides = [
    <Infra />,
    <Pipeline />,
    <Monitoring />
  ];

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Déploiement</SlideTitle>
      <div className="flex-1">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Deployment;
