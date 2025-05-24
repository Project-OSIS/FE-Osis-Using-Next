// src/app/cms-dashboard/components/sidebar.tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-white w-64 p-4 border-r border-gray-200">
      <h1 className="text-xl font-bold mb-4">Osis Bobotsari</h1>
      <nav>
        <ul>
          <li
            className={`py-2 px-4 cursor-pointer ${
              isActive('/cms-dashboard') ? 'bg-gray-200' : ''
            }`}
            onClick={() => window.location.href = '/cms-dashboard'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
            </svg>
            Dashboard
          </li>
          <li
            className={`py-2 px-4 cursor-pointer ${
              isActive('/cms-dashboard/anggota') ? 'bg-gray-200' : ''
            }`}
            onClick={() => window.location.href = '/cms-dashboard/anggota'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
            </svg>
            Anggota
          </li>
          <li
            className={`py-2 px-4 cursor-pointer ${
              isActive('/cms-dashboard/proker') ? 'bg-gray-200' : ''
            }`}
            onClick={() => window.location.href = '/cms-dashboard/proker'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
            </svg>
            Proker
          </li>
          <li
            className={`py-2 px-4 cursor-pointer ${
              isActive('/cms-dashboard/artikel') ? 'bg-gray-200' : ''
            }`}
            onClick={() => window.location.href = '/cms-dashboard/artikel'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
            </svg>
            Artikel
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;