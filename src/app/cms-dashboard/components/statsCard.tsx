import React from 'react';

interface StatsCardProps {
title: string;
value: number;
icon: React.ReactNode;
className?: string;
}

const StatsCard = ({ title, value, icon, className = '' }: StatsCardProps) => {
return (
  <div className={`
    bg-custom-dark/80 
    border border-custom-cyan-700/50 
    rounded-2xl 
    p-6 
    flex 
    items-center 
    space-x-6 
    transform 
    hover:scale-105 
    transition-all 
    duration-300 
    hover:shadow-2xl 
    hover:border-custom-cyan-500/70 
    ${className}
  `}>
    <div className="
      bg-custom-cyan-900/30 
      p-4 
      rounded-xl 
      border 
      border-custom-cyan-700/50
    ">
      {icon}
    </div>
    <div className="flex-grow">
      <p className="
        text-sm 
        uppercase 
        tracking-wider 
        text-custom-cyan-400 
        mb-1 
        opacity-80
      ">
        {title}
      </p>
      <h3 className="
        text-4xl 
        font-bold 
        text-custom-white 
        transition-colors 
        duration-300
      ">
        {value}
      </h3>
    </div>
    <div className="
      opacity-50 
      hover:opacity-100 
      transition-opacity 
      duration-300
    ">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        className="w-6 h-6 text-custom-cyan-500"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M13 7l5 5m0 0l-5 5m5-5H6" 
        />
      </svg>
    </div>
  </div>
);
};

export default StatsCard;