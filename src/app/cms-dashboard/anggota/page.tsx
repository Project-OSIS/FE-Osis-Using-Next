// src/app/cms-dashboard/anggota/page.tsx
'use client';

import React from 'react';
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
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten Utama */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Header />

        {/* Judul Halaman */}
        <h2 className="text-xl font-bold mb-4">Anggota</h2>
        <p className="text-sm text-gray-500">List of users</p>

        {/* Tombol Tambah Pengguna */}
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              <path d="M19 12h-6v6h-2v-6H7v-2h6V6h2v6h6v2z" />
            </svg>
            Add User
          </button>
        </div>

        {/* Tabel Pengguna */}
<UserTable users={users} />      </div>
    </div>
  );
};

export default AnggotaPage;