// src/App.tsx
import React from 'react';
import { SlideProvider, useSlides } from './context/SlideContext';
import Sidebar from './components/layout/Sidebar';
import SlideContainer from './components/layout/SlideContainer';
import Title from './components/slides/Title';
import Summary from './components/slides/Summary';
import Introduction from './components/slides/Introduction';
// Importez les autres sections

const Presentation: React.FC = () => {
  const { currentSlide } = useSlides();
  
  const renderCurrentSlide = () => {
    switch(currentSlide) {
      case 0: return <Title />;
      case 1: return <Summary />;
      case 2: return <Introduction />;
      // Autres sections
      default: return <div>Slide en construction</div>;
    }
  };
  
  return (
    <div className="flex h-screen">
      <Sidebar />
      <SlideContainer>
        {renderCurrentSlide()}
      </SlideContainer>
    </div>
  );
};

function App() {
  return (
    <SlideProvider>
      <Presentation />
    </SlideProvider>
  );
}

export default App;