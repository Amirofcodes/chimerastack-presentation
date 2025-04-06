// src/App.tsx
import React from 'react';
import { SlideProvider, useSlides } from './context/SlideContext';
import Sidebar from './components/layout/Sidebar';
import SlideContainer from './components/layout/SlideContainer';
import Title from './components/slides/Title';
import Summary from './components/slides/Summary';
import Introduction from './components/slides/Introduction';
import Frontend from './components/slides/Frontend';
import Backend from './components/slides/Backend';
import Deployment from './components/slides/Deployment';
import Conclusion from './components/slides/Conclusion'; // Import Conclusion

const Presentation: React.FC = () => {
  const { currentSlide } = useSlides();
  
  const renderCurrentSlide = () => {
    switch(currentSlide) {
      case 0:
        return <Title />;
      case 1:
        return <Summary />;
      case 2:
        return <Introduction />;
      case 3:
        return <Frontend />;
      case 4:
        return <Backend />;
      case 5:
        return <Deployment />;
      case 6:
        return <Conclusion />;
      default:
        return <div>Slide en construction</div>;
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
