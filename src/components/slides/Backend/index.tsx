import React from 'react';
import SlideTitle from '../../shared/SlideTitle';
import Carousel from '../../shared/Carousel';
import Overview from './Overview';
import Security from './Security';
import Payment from './Payment';
import Demo from './Demo';

const Backend: React.FC = () => {
  const slides = [
    <Overview />,
    <Security />,
    <Payment />,
    <Demo />
  ];

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Backend</SlideTitle>
      <div className="flex-1">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Backend;
