import React from 'react';
import SlideTitle from '../../shared/SlideTitle';
import Carousel from '../../shared/Carousel';
import Overview from './Overview';
import Themes from './Themes';
import UX from './UX';
import Demo from './Demo';

const Frontend: React.FC = () => {
  const slides = [
    <Overview />,
    <Themes />,
    <UX />,
    <Demo />
  ];

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Frontend</SlideTitle>
      <div className="flex-1">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Frontend;
