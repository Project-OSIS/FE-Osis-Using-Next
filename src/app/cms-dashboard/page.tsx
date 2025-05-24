// src/app/cms-dashboard/page.tsx
'use client';

import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import StatsCard from './components/statsCard';
import Chart from './components/chart';

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten Utama */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Header />

        {/* Statistik */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          <StatsCard
            title="Total Proker"
            value={200}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M22 4.99c-.78 0-1.56.31-2.22.88l-1.94 1.94" />
            </svg>}
          />
          <StatsCard
            title="Total Anggota"
            value={200}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M22 4.99c-.78 0-1.56.31-2.22.88l-1.94 1.94" />
            </svg>}
          />
          <StatsCard
            title="Total Pembina"
            value={200}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M22 4.99c-.78 0-1.56.31-2.22.88l-1.94 1.94" />
            </svg>}
          />
          <StatsCard
            title="Total Artikel"
            value={200}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M22 4.99c-.78 0-1.56.31-2.22.88l-1.94 1.94" />
            </svg>}
          />
        </div>

        {/* Grafik */}
        <div className="mt-8">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Total Proker</h2>
              <div className="flex items-center space-x-2">
                <select className="border rounded p-2">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Choose daily</button>
              </div>
            </div>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;