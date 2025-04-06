// src/components/slides/Introduction/index.tsx
import React from 'react';
import SlideTitle from '../../shared/SlideTitle';
import Carousel from '../../shared/Carousel';
import PersonalIntro from './PersonalIntro';
import Problem from './Problem';
import Solution from './Solution';

const Introduction: React.FC = () => {
  const slides = [
    <PersonalIntro />,
    <Problem />,
    <Solution />
  ];
  
  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Introduction</SlideTitle>
      <div className="flex-1">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Introduction;