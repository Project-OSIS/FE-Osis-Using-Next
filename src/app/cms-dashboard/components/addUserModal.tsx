import React from 'react';

interface AddUserModalProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleAddUser: () => void;
  closeModal: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ formData, handleInputChange, handleAddUser, closeModal }) => {
  return (
    <div
      className="overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        className="modal"
        style={{
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
          zIndex: 1001,
        }}
      >
        <h3 className="text-2xl font-bold  text-gray-700 mb-8 text-center">
          Tambah Anggota Baru
        </h3>
        {/* Form tambah anggota */}
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Masukkan Username"
              className="w-full bg-custom-dark/80 border border-custom-cyan-700 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-custom-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full bg-custom-dark/80 border border-custom-cyan-700 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-custom-cyan-500"
            >
              <option value="">Pilih Role</option>
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div>
            <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="employeeName"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleInputChange}
              placeholder="Masukkan Nama Lengkap"
              className="w-full bg-custom-dark/80 border border-custom-cyan-700 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-custom-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full bg-custom-dark/80 border border-custom-cyan-700 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-custom-cyan-500"
            >
              <option value="Enable">Enable</option>
              <option value="Disable">Disable</option>
            </select>
          </div>
        </form>
        <div className="flex space-x-4 mt-8">
          <button
            onClick={handleAddUser}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-custom-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-custom-cyan-500"
          >
            Tambah
          </button>
          <button
            onClick={closeModal}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;