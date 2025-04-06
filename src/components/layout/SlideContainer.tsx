// src/components/layout/SlideContainer.tsx
import React, { useEffect } from 'react';
import { useSlides } from '../../context/SlideContext';

interface SlideContainerProps {
  children: React.ReactNode;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
  const { nextSlide, prevSlide } = useSlides();
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);
  
  return (
    <div className="flex-1 overflow-hidden bg-gray-50 dark:bg-gray-900 p-8">
      {children}
    </div>
  );
};

export default SlideContainer;