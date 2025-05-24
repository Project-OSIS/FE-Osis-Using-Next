// src/app/cms-dashboard/components/header.tsx
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M15.71 7.04l-1.41-1.41-3.54 3.54 3.55 3.55L15.7 18.56l1.42-1.41-4-4 4-4z" />
        </svg>
        <span>Users</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-red-500 text-white rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M22 4.99c-.78 0-1.56.31-2.22.88l-1.94 1.94" />
          </svg>
        </div>
        <div className="bg-red-500 text-white rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M22 4.99c-.78 0-1.56.31-2.22.88l-1.94 1.94" />
          </svg>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://source.unsplash.com/random/30x30/?profile "
            alt="Profile Picture"
            className="w-8 h-8 rounded-full"
          />
          <span>Agatha Leonard</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;