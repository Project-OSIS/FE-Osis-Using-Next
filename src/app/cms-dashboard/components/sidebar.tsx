'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Define menu items with icons and routes
const menuItems = [
{ 
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  label: 'Dashboard',
  route: '/dashboard'
},
{ 
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  label: 'Proker',
  route: '/'
},
{ 
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  label: 'Anggota',
  route: '/cms-dashboard/anggota'
},
{ 
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  label: 'Artikel',
  route: '/artikel'
},
];

const Sidebar = () => {
const [activeRoute, setActiveRoute] = useState('/dashboard');
const [isExpanded, setIsExpanded] = useState(true);

return (
  <aside 
    className={`bg-custom-dark/80 border-r border-custom-cyan-800/30 
                h-screen transition-all duration-300 
                ${isExpanded ? 'w-64' : 'w-20'} 
                flex flex-col`}
  >
    {/* Logo Section */}
    <div className="flex items-center justify-between p-6 border-b border-custom-cyan-800/30">
      {isExpanded ? (
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-custom-cyan-600 rounded-full 
                          flex items-center justify-center text-white font-bold">
            MP
          </div>
          <div>
            <h2 className="text-lg font-bold text-custom-cyan-200">Monitoring</h2>
            <p className="text-xs text-custom-cyan-500">Management System</p>
          </div>
        </div>
      ) : (
        <div className="w-10 h-10 bg-custom-cyan-600 rounded-full 
                        flex items-center justify-center text-white font-bold mx-auto">
          MP
        </div>
      )}
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-custom-cyan-500 hover:text-custom-cyan-300"
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
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7" 
          />
        </svg>
      </button>
    </div>

    {/* Menu Items */}
    <nav className="flex-grow py-4 overflow-y-auto">
      <ul className="space-y-2 px-4">
        {menuItems.map((item) => (
          <li key={item.route}>
            <Link 
              href={item.route}
              onClick={() => setActiveRoute(item.route)}
              className={`flex items-center p-3 rounded-lg transition-all duration-300
                          ${activeRoute === item.route 
                            ? 'bg-custom-cyan-800/30 text-custom-cyan-300' 
                            : 'text-custom-cyan-500 hover:bg-custom-cyan-800/20 hover:text-custom-cyan-200'}
                          group`}
            >
              <span className={`w-6 h-6 mr-4 
                                ${activeRoute === item.route 
                                  ? 'text-custom-cyan-300' 
                                  : 'text-custom-cyan-500 group-hover:text-custom-cyan-300'}`}>
                {item.icon}
              </span>
              {isExpanded && (
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    {/* Footer Section */}
    {isExpanded && (
      <div className="p-4 border-t border-custom-cyan-800/30 text-center">
        <p className="text-xs text-custom-cyan-500">
          © {new Date().getFullYear()} Monitoring System
        </p>
      </div>
    )}
  </aside>
);
};

export default Sidebar;