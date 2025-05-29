'use client';

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import UserTable from '../components/userTable';
import AddUserModal from '../components/addUserModal';
import EditUserModal from '../components/editUserModal';
import DeleteUserModal from '../components/deleteUserModal';
import axios from '@/utils/api';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@/types/errorResponse.type';
import useAuth from '@/hooks/useAuth';

// Definisi tipe User
interface User {
  id: string;
  username: string;
  email: string;
  password?: string; // Tipe ini menjadi opsional
  role: string;
  employeeName: string;
  status: string;
  image: File | string | null;
  createdAt: string;
  updatedAt: string;
}

const AnggotaPage = () => {
  // State untuk users
  const [users, setUsers] = useState<User[]>([]);
  // State untuk modal
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete' | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // State untuk form input
  const [formData, setFormData] = useState<User>({
    id: '',
    username: '',
    email: '',
    password: '',
    role: '',
    employeeName: '',
    status: 'ENABLE||DISABLE',
    image: null,
    createdAt: '',
    updatedAt: '',
  });

  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Jika pengguna belum login dan tidak sedang memuat, redirect ke halaman login
    if (!loading && !user) {
      router.push('/auth/login');
      return;
    }

    // Fetch data hanya ketika loading selesai dan user ada
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/user/get-user');
        console.log('Fetched Users:', res.data); // Log respons API
        setUsers(res.data.data);
      } catch (err) {
        const error = err as AxiosError<ErrorResponse>;
        if (error.response) {
          console.error('API Error:', error.response.data);
          console.error('Status Code:', error.response.status);
          console.error('Headers:', error.response.headers);
          alert(error.response.data.message || 'Terjadi kesalahan saat mengambil data.');
        } else if (error.request) {
          console.error('No response received:', error.request);
          alert('Tidak ada respons dari server.');
        } else {
          console.error('Error:', error.message);
          alert('Terjadi kesalahan tidak diketahui.');
        }
        console.error('Config:', error.config);
      }
    };

    if (!loading && user) {
      fetchUsers();
    }
  }, [user, loading, router]); // Dependensi user, loading, dan router

  // Fungsi untuk membuka modal
  const openAddModal = () => {
    setModalType('add');
    setSelectedUser(null);
    // Reset form data
    setFormData({
      id: '',
      username: '',
      email: '',
      password: '',
      role: '',
      employeeName: '',
      status: 'ENABLE||DISABLE',
      image: null,
      createdAt: '',
      updatedAt: '',
    });
  };

const openEditModal = (user: User) => {
  setModalType('edit');
  setSelectedUser(user);
  // Set form data dengan data user yang dipilih dan reset password
  setFormData({ ...user, password: '' });
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

  // Fungsi handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
      }));
    }
  };

  // Fungsi handler untuk aksi modal
// Sesudah
const handleAddUser = async () => {
  try {
    const formDataObject = new FormData();
    formDataObject.append('username', formData.username);
    formDataObject.append('email', formData.email);
    formDataObject.append('role', formData.role);
    formDataObject.append('status', formData.status);
    // Jika ada gambar, tambahkan ke formData
    if (formData.image instanceof File) {
      formDataObject.append('image', formData.image);
    } else if (typeof formData.image === 'string') {
      formDataObject.append('image', formData.image);
    }
    // Periksa apakah password ada sebelum menambahkannya ke formData
    if (formData.password) {
      formDataObject.append('password', formData.password);
    }
    const res = await axios.post('/user/create-user', formDataObject, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('User Added:', res.data); // Log respons API
    setUsers(prev => [...prev, res.data.data]);
    closeModal();
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    if (error.response) {
      console.error('API Error:', error.response.data);
      console.error('Status Code:', error.response.status);
      console.error('Headers:', error.response.headers);
      alert(error.response.data.message || 'Terjadi kesalahan saat menambahkan user.');
    } else if (error.request) {
      console.error('No response received:', error.request);
      alert('Tidak ada respons dari server.');
    } else {
      console.error('Error:', error.message);
      alert('Terjadi kesalahan tidak diketahui.');
    }
    console.error('Config:', error.config);
  }
};

// Sesudah
const handleEditUser = async () => {
  if (!selectedUser) return;
  try {
    const formDataObject = new FormData();
    formDataObject.append('username', formData.username);
    formDataObject.append('email', formData.email);
    formDataObject.append('role', formData.role);
    formDataObject.append('status', formData.status);
    // Jika ada gambar, tambahkan ke formData
    if (formData.image instanceof File) {
      formDataObject.append('image', formData.image);
    } else if (typeof formData.image === 'string') {
      formDataObject.append('image', formData.image);
    }
    // Periksa apakah password ada sebelum menambahkannya ke formData
    if (formData.password) {
      formDataObject.append('password', formData.password);
    }
    const res = await axios.put(`/user/update-user/${selectedUser.id}`, formDataObject, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('User Updated:', res.data); // Log respons API
    setUsers(prev =>
      prev.map(user =>
        user.id === selectedUser.id ? res.data.data : user
      )
    );
    closeModal();
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    if (error.response) {
      console.error('API Error:', error.response.data);
      console.error('Status Code:', error.response.status);
      console.error('Headers:', error.response.headers);
      alert(error.response.data.message || 'Terjadi kesalahan saat mengedit user.');
    } else if (error.request) {
      console.error('No response received:', error.request);
      alert('Tidak ada respons dari server.');
    } else {
      console.error('Error:', error.message);
      alert('Terjadi kesalahan tidak diketahui.');
    }
    console.error('Config:', error.config);
  }
};

  const handleDeleteUser = async () => {
    if (!selectedUser) return;
    try {
      const res = await axios.post(`/user/delete-user/${selectedUser.id}`);
      console.log('User Deleted:', res.data); // Log respons API
      setUsers(prev =>
        prev.filter(user => user.id !== selectedUser.id)
      );
      closeModal();
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      if (error.response) {
        console.error('API Error:', error.response.data);
        console.error('Status Code:', error.response.status);
        console.error('Headers:', error.response.headers);
        alert(error.response.data.message || 'Terjadi kesalahan saat menghapus user.');
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('Tidak ada respons dari server.');
      } else {
        console.error('Error:', error.message);
        alert('Terjadi kesalahan tidak diketahui.');
      }
      console.error('Config:', error.config);
    }
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
          handleImageChange={handleImageChange}
          handleAddUser={handleAddUser}
          closeModal={closeModal}
        />
      )}
      {modalType === 'edit' && (
        <EditUserModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleImageChange={handleImageChange}
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