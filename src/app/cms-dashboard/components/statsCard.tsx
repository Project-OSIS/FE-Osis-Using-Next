// src/app/cms-dashboard/components/statsCard.tsx
import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-4">
      <div className="bg-red-500 text-white rounded-full p-2">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;