'use client';
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import UserTable from '../components/userTable';
import AddUserModal from '../components/addUserModal';
import EditUserModal from '../components/editUserModal';
import DeleteUserModal from '../components/deleteUserModal';

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
                border 
                border-custom-cyan-700/50 
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
      {modalType === 'add' && (
        <AddUserModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleAddUser={handleAddUser}
          closeModal={closeModal}
        />
      )}
      {modalType === 'edit' && (
        <EditUserModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleEditUser={handleEditUser}
          closeModal={closeModal}
        />
      )}
      {modalType === 'delete' && (
        <DeleteUserModal
          selectedUser={selectedUser}
          handleDeleteUser={handleDeleteUser}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default AnggotaPage;