// src/components/shared/SlideTitle.tsx
import React from 'react';

interface SlideTitleProps {
  children: React.ReactNode;
}

const SlideTitle: React.FC<SlideTitleProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold mb-8 text-indigo-700 dark:text-indigo-400">
      {children}
    </h2>
  );
};

export default SlideTitle;