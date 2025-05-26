'use client';

import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import StatsCard from './components/statsCard';
import Chart from './components/chart';

const DashboardPage = () => {
const [chartPeriod, setChartPeriod] = useState('Daily');

return (
  <div className="min-h-screen bg-custom-dark text-custom-white font-sans">
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        <Header />

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-6">
          <StatsCard
            title="Total Proker"
            value={200}
            className="bg-gradient-to-br from-custom-cyan-700 to-custom-cyan-900 
                        hover:shadow-glow-cyan transition-all duration-300 
                        animate-gradient-xy"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   stroke="currentColor" className="w-10 h-10 text-custom-cyan-200">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            }
          />
          <StatsCard
            title="Total Anggota"
            value={200}
            className="bg-gradient-to-br from-custom-purple/70 to-custom-purple/90 
                        hover:shadow-glow-cyan transition-all duration-300 
                        animate-gradient-xy"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   stroke="currentColor" className="w-10 h-10 text-custom-white/80">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
          <StatsCard
            title="Total Pembina"
            value={200}
            className="bg-gradient-to-br from-custom-cyan-600/70 to-custom-cyan-800/90 
                        hover:shadow-glow-cyan transition-all duration-300 
                        animate-gradient-xy"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   stroke="currentColor" className="w-10 h-10 text-custom-cyan-200">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <StatsCard
            title="Total Artikel"
            value={200}
            className="bg-gradient-to-br from-custom-cyan-800/70 to-custom-cyan-900/90 
                        hover:shadow-glow-cyan transition-all duration-300 
                        animate-gradient-xy"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   stroke="currentColor" className="w-10 h-10 text-custom-cyan-100">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
        </div>

        {/* Chart Section */}
        <div className="bg-custom-dark/80 rounded-2xl shadow-card-shadow p-6 border border-custom-cyan-800/50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-custom-cyan-200">Total Proker Analytics</h2>
            <div className="flex items-center space-x-4">
              <select 
                value={chartPeriod}
                onChange={(e) => setChartPeriod(e.target.value)}
                className="bg-custom-dark/60 border border-custom-cyan-700 
                           text-custom-white rounded-lg px-4 py-2 
                           focus:ring-2 focus:ring-custom-cyan-500 
                           transition-all duration-300"
              >
                <option className="bg-custom-dark" value="Daily">Daily</option>
                <option className="bg-custom-dark" value="Weekly">Weekly</option>
                <option className="bg-custom-dark" value="Monthly">Monthly</option>
              </select>
              <button className="bg-custom-cyan-600 text-white 
                                 px-6 py-2 rounded-lg 
                                 hover:bg-custom-cyan-500 
                                 transition-colors duration-300 
                                 shadow-glow-cyan">
                Apply
              </button>
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