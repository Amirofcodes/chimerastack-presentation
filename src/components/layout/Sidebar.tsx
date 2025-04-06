// src/components/layout/Sidebar.tsx
import React from 'react';
import { useSlides } from '../../context/SlideContext';

const slidesTitles = [
  "Titre",
  "Sommaire",
  "Introduction",
  "Frontend",
  "Backend",
  "Déploiement",
  "Conclusion"
];

const Sidebar: React.FC = () => {
  const { currentSlide, goToSlide } = useSlides();
  
  return (
    <div className="w-64 bg-indigo-900 text-white h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-indigo-800">
        <h2 className="text-xl font-bold">ChimeraStack</h2>
      </div>
      
      {/* Profile Section */}
      <div className="flex flex-col items-center py-6 border-b border-indigo-800">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 shadow-md border-2 border-indigo-700">
          <img 
            src="/images/amirofcodepic.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm">Jaouad Bouddehbine</p>
        <p className="text-xs text-indigo-300">Développeur Full Stack</p>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {slidesTitles.map((title, index) => (
            <li 
              key={index}
              className={`py-2 px-4 rounded cursor-pointer ${currentSlide === index ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}
              onClick={() => goToSlide(index)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
