// src/context/SlideContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface SlideContextType {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const SlideProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 20; // À ajuster selon le nombre réel de slides

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  return (
    <SlideContext.Provider value={{ currentSlide, totalSlides, nextSlide, prevSlide, goToSlide }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlides = () => {
  const context = useContext(SlideContext);
  if (context === undefined) {
    throw new Error('useSlides must be used within a SlideProvider');
  }
  return context;
};