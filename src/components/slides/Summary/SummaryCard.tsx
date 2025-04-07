import React from 'react';

interface SummaryCardProps {
  title: string;
  duration: string;
  items: string[];
  icon: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, duration, items, icon }) => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border-l-4 border-indigo-500 dark:border-indigo-400">
      <div className="flex items-start mb-3">
        <div className="mr-3 text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-indigo-600 mb-1">{title}</h3>
          <p className="text-sm text-indigo-400 mb-2">{duration}</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryCard;