'use client';

import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import UserTable from '../components/userTable';

const users = [
{
  username: "Admin",
  role: "Admin",
  employeeName: "Vina Afrilia Kurniawan",
  status: "Enable",
},
{
  username: "Lalisa",
  role: "Employee",
  employeeName: "Lalisa Manoban",
  status: "Enable",
},
];

const AnggotaPage = () => {
const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

return (
  <div className="flex h-screen bg-custom-dark text-custom-white">
    {/* Sidebar */}
    <Sidebar />

    {/* Konten Utama */}
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main className="flex-grow p-8 overflow-y-auto">
        {/* Header Section */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-custom-cyan-200 mb-2">
              Anggota
            </h2>
            <p className="text-sm text-custom-cyan-500">
              Daftar pengguna dan manajemen akses
            </p>
          </div>

          {/* Tombol Tambah Pengguna */}
          <button 
            onClick={() => setIsAddUserModalOpen(true)}
            className="
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
            "
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
              />
            </svg>
            <span>Tambah Anggota</span>
          </button>
        </div>

        {/* Tabel Pengguna dengan styling custom */}
        <div className="
          bg-custom-dark/80 
          border 
          border-custom-cyan-800/30 
          rounded-2xl 
          overflow-hidden 
          shadow-lg
        ">
          <UserTable 
            users={users} 
            className="
              w-full 
              text-custom-white 
              border-separate 
              border-spacing-0
            " 
          />
        </div>
      </main>
    </div>

    {/* Modal Tambah Anggota (placeholder) */}
    {isAddUserModalOpen && (
      <div className="
        fixed 
        inset-0 
        bg-black/50 
        flex 
        items-center 
        justify-center 
        z-50
      ">
        <div className="
          bg-custom-dark 
          border 
          border-custom-cyan-700 
          rounded-2xl 
          p-8 
          w-full 
          max-w-md
        ">
          <h3 className="
            text-2xl 
            font-bold 
            text-custom-cyan-300 
            mb-6
          ">
            Tambah Anggota Baru
          </h3>
          {/* Form tambah anggota akan ditambahkan di sini */}
          <button 
            onClick={() => setIsAddUserModalOpen(false)}
            className="
              w-full 
              bg-custom-cyan-600 
              text-white 
              py-3 
              rounded-lg 
              hover:bg-custom-cyan-500 
              transition-colors
            "
          >
            Tutup
          </button>
        </div>
      </div>
    )}
  </div>
);
};

export default AnggotaPage;