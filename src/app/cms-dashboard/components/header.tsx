'use client';

import React, { useState } from 'react';

const Header = () => {
const [searchQuery, setSearchQuery] = useState('');
const [isNotificationOpen, setIsNotificationOpen] = useState(false);

return (
  <header className="w-full flex justify-between items-center py-4 border-b border-custom-cyan-800/30">
    {/* Search Bar */}
    <div className="relative flex-grow max-w-xl mr-6">
      <input 
        type="text" 
        placeholder="Search anything..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-custom-dark/60 text-custom-white 
                   border border-custom-cyan-700 rounded-full 
                   px-6 py-3 pl-12 
                   focus:ring-2 focus:ring-custom-cyan-500 
                   transition-all duration-300 
                   placeholder-custom-cyan-500"
      />
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 
                   w-6 h-6 text-custom-cyan-500"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
    </div>

    {/* Header Actions */}
    <div className="flex items-center space-x-4">
      {/* Notification Button */}
      <div className="relative">
        <button 
          onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          className="text-custom-cyan-300 hover:text-custom-cyan-100 
                     transition-colors duration-300 
                     relative p-2 rounded-full 
                     hover:bg-custom-cyan-800/30"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
            />
          </svg>
          <span className="absolute top-0 right-0 block h-2 w-2 
                           rounded-full ring-2 ring-white 
                           bg-custom-cyan-500 animate-pulse-cyan"></span>
        </button>

        {/* Notification Dropdown */}
        {isNotificationOpen && (
          <div className="absolute right-0 mt-2 w-72 
                          bg-custom-dark border border-custom-cyan-700 
                          rounded-xl shadow-lg 
                          text-custom-white p-4 
                          z-50 space-y-3">
            <h3 className="text-lg font-bold mb-2 text-custom-cyan-300">
              Notifications
            </h3>
            <div className="space-y-2">
              <div className="bg-custom-cyan-900/30 p-3 rounded-lg">
                <p className="text-sm">New project assigned</p>
                <span className="text-xs text-custom-cyan-500">2 mins ago</span>
              </div>
              <div className="bg-custom-cyan-900/30 p-3 rounded-lg">
                <p className="text-sm">Meeting scheduled</p>
                <span className="text-xs text-custom-cyan-500">30 mins ago</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <p className="text-sm text-custom-cyan-200">Monica Putri</p>
          <p className="text-xs text-custom-cyan-500">Admin</p>
        </div>
        <div className="w-10 h-10 rounded-full 
                        bg-gradient-to-br from-custom-cyan-600 to-custom-cyan-800 
                        flex items-center justify-center 
                        text-white font-bold">
          MP
        </div>
      </div>
    </div>
  </header>
);
};

export default Header;