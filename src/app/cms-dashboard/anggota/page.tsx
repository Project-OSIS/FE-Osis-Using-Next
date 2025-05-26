'use client';

import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import UserTable from '../components/userTable';

// Definisi tipe User
interface User {
  username: string;
  role: string;
  employeeName: string;
  status: string;
}

const initialUsers: User[] = [
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
  // State untuk users
  const [users, setUsers] = useState<User[]>(initialUsers);

  // State untuk modal
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete' | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // State untuk form input
  const [formData, setFormData] = useState<User>({
    username: '',
    role: '',
    employeeName: '',
    status: 'Enable'
  });

  // Fungsi untuk membuka modal
  const openAddModal = () => {
    setModalType('add');
    setSelectedUser(null);
    // Reset form data
    setFormData({
      username: '',
      role: '',
      employeeName: '',
      status: 'Enable'
    });
  };

  const openEditModal = (user: User) => {
    setModalType('edit');
    setSelectedUser(user);
    // Set form data dengan data user yang dipilih
    setFormData({ ...user });
  };

  const openDeleteModal = (user: User) => {
    setModalType('delete');
    setSelectedUser(user);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalType(null);
    setSelectedUser(null);
  };

  // Fungsi handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Fungsi handler untuk aksi modal
  const handleAddUser = () => {
    // Logika tambah user
    setUsers(prev => [...prev, formData]);
    closeModal();
  };

  const handleEditUser = () => {
    // Logika edit user
    setUsers(prev => 
      prev.map(user => 
        user.username === selectedUser?.username ? formData : user
      )
    );
    closeModal();
  };

  const handleDeleteUser = () => {
    // Logika hapus user
    setUsers(prev => 
      prev.filter(user => user.username !== selectedUser?.username)
    );
    closeModal();
  };

  return (
    <div className="flex h-screen bg-custom-dark text-custom-white">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-grow p-8 overflow-y-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-custom-cyan-200 mb-2">
                Anggota
              </h2>
              <p className="text-sm text-custom-cyan-500">
                Daftar pengguna dan manajemen akses
              </p>
            </div>

            <button 
              onClick={openAddModal}
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
              onEdit={openEditModal}
              onDelete={openDeleteModal}
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

      {/* Modal Overlay */}
      {modalType && (
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
            {modalType === 'add' && (
              <>
                <h3 className="text-2xl font-bold text-custom-cyan-300 mb-6">
                  Tambah Anggota Baru
                </h3>
                {/* Form tambah anggota */}
                <div className="space-y-4">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className="
                      w-full 
                      bg-custom-dark/80 
                      border 
                      border-custom-cyan-700 
                      rounded-lg 
                      p-3 
                      text-custom-white
                    "
                  />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="
                      w-full 
                      bg-custom-dark/80 
                      border 
                      border-custom-cyan-700 
                      rounded-lg 
                      p-3 
                      text-custom-white
                    "
                  >
                    <option value="">Pilih Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                  </select>
                  <input
                    type="text"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleInputChange}
                    placeholder="Nama Lengkap"
                    className="
                      w-full 
                      bg-custom-dark/80 
                      border 
                      border-custom-cyan-700 
                      rounded-lg 
                      p-3 
                      text-custom-white
                    "
                  />
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="
                      w-full 
                      bg-custom-dark/80 
                      border 
                      border-custom-cyan-700 
                      rounded-lg 
                      p-3 
                      text-custom-white
                    "
                  >
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                </div>
                <div className="flex space-x-4 mt-6">
                  <button 
                    onClick={handleAddUser}
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
                    Tambah
                  </button>
                  <button 
                    onClick={closeModal}
                    className="
                      w-full 
                      bg-red-600 
                      text-white 
                      py-3 
                      rounded-lg 
                      hover:bg-red-500 
                      transition-colors
                    "
                  >
                    Batal
                  </button>
                </div>
              </>
            )}

            {modalType === 'edit' && (
              <>
                <h3 className="text-2xl font-bold text-custom-cyan-300 mb-6">
                  Edit Anggota
                </h3>
                {/* Form edit anggota */}
                <div className="space-y-4">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className="
                      w-full 
                      bg-custom-dark/80 
                      border 
                      border-custom-cyan-700 
                      rounded-lg 
                      p-3 
                      text-custom-white
                    "
                  />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="
                      w-full 
                      bg-custom-dark/80 
                      border 
                      border-custom-cyan-700 
                      rounded-lg 
                      p-3 
                      text-custom-white
                    "
                  >
                    <option value="">Pilih Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                  </select>
                  <input
                    type="text"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleInputChange}
                    placeholder="Nama Lengkap"
                    className="
                      w-full 
                      bg-custom-dark/80 
                      border 
                      border-custom-cyan-700 
                      rounded-lg 
                      p-3 
                      text-custom-white
                    "
                  />
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="
                      w-full 
                      bg-custom-dark/80 
                      border 
                      border-custom-cyan-700 
                      rounded-lg 
                      p-3 
                      text-custom-white
                    "
                  >
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                </div>
                <div className="flex space-x-4 mt-6">
                  <button 
                    onClick={handleEditUser}
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
                    Simpan
                  </button>
                  <button 
                    onClick={closeModal}
                    className="
                      w-full 
                      bg-red-600 
                      text-white 
                      py-3 
                      rounded-lg 
                      hover:bg-red-500 
                      transition-colors
                    "
                  >
                    Batal
                  </button>
                </div>
              </>
            )}

            {modalType === 'delete' && (
              <>
                <h3 className="text-2xl font-bold text-red-500 mb-6">
                  Konfirmasi Hapus Anggota
                </h3>
                <p className="text-custom-white mb-6">
                  Apakah Anda yakin ingin menghapus anggota{' '}
                  <span className="font-bold">{selectedUser?.username}</span>?
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={handleDeleteUser}
                    className="
                      w-full 
                      bg-red-600 
                      text-white 
                      py-3 
                      rounded-lg 
                      hover:bg-red-500 
                      transition-colors
                    "
                  >
                    Hapus
                  </button>
                  <button 
                    onClick={closeModal}
                    className="
                      w-full 
                      bg-custom-dark/80 
                      border 
                      border-custom-cyan-700 
                      text-white 
                      py-3 
                      rounded-lg 
                      hover:bg-custom-dark/50 
                      transition-colors
                    "
                  >
                    Batal
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnggotaPage;
