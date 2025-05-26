import React from 'react';

interface DeleteUserModalProps {
  selectedUser: any;
  handleDeleteUser: () => void;
  closeModal: () => void;
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({ selectedUser, handleDeleteUser, closeModal }) => {
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
        <h3 className="text-2xl font-bold text-red-500 mb-8 text-center">
          Konfirmasi Hapus Anggota
        </h3>
        <p className="text-gray-700 mb-8">
          Apakah Anda yakin ingin menghapus anggota{' '}
          <span className="font-bold text-red-500">{selectedUser?.username}</span>?
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleDeleteUser}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Hapus
          </button>
          <button
            onClick={closeModal}
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;