import React, { useEffect, useState } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  employeeName: string;
  status: string;
  image: File | string | null;
  createdAt: string;
  updatedAt: string;
  password?: string; // Tambahkan properti password jika diperlukan
}

interface UserTableProps {
  users: User[];
  className?: string;
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
}

const UserTable = ({ 
  users, 
  className = '', 
  onEdit = () => {}, 
  onDelete = () => {} 
}: UserTableProps) => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const toggleUserSelection = (index: number) => {
    setSelectedUsers(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  const isAllSelected = selectedUsers.length === users.length;
  const toggleSelectAll = () => {
    setSelectedUsers(isAllSelected ? [] : users.map((_, idx) => idx));
  };
  const handleBulkDelete = () => {
    // Implementasi bulk delete (opsional, bisa disesuaikan dengan kebutuhan)
    console.log('Selected users to delete:', selectedUsers);
  };
  return (
    <div className={`
      w-full 
      ${className}
    `}>
      {/* Tabel */}
      <table className="w-full border-collapse">
        {/* Header Tabel */}
        <thead className="
          bg-custom-dark/90 
          border-b 
          border-custom-cyan-800/50
        ">
          <tr>
            <th className="
              p-4 
              text-center 
              w-12
            ">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={toggleSelectAll}
                className="
                  form-checkbox 
                  h-5 
                  w-5 
                  text-custom-cyan-500 
                  bg-custom-dark 
                  border-custom-cyan-700 
                  rounded
                "
              />
            </th>
            <th className="
              p-4 
              text-center
              text-sm 
              font-semibold 
              text-custom-cyan-300 
              uppercase 
              tracking-wider
            ">
              Username
            </th>
            <th className="
              p-4 
              text-center
              text-sm 
              font-semibold 
              text-custom-cyan-300 
              uppercase 
              tracking-wider
            ">
              User Role
            </th>
         
            <th className="
              p-4 
              text-center
              text-sm 
              font-semibold 
              text-custom-cyan-300 
              uppercase 
              tracking-wider
            ">
              Email
            </th>
            <th className="
              p-4 
              text-center
              text-sm 
              font-semibold 
              text-custom-cyan-300 
              uppercase 
              tracking-wider
            ">
              Status
            </th>
            <th className="
              p-4 
              text-center
              text-sm 
              font-semibold 
              text-custom-cyan-300 
              uppercase 
              tracking-wider
            ">
              Action
            </th>
          </tr>
        </thead>
        {/* Konten Tabel */}
        <tbody>
          {users.map((user, index) => (
            <tr 
              key={index} 
              className={`
                border-b 
                border-custom-cyan-800/30 
                hover:bg-custom-dark/20 
                transition-colors 
                duration-200
                ${selectedUsers.includes(index) 
                  ? 'bg-custom-cyan-900/30' 
                  : ''
                }
              `}
            >
              <td className="p-4 text-center">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(index)}
                  onChange={() => toggleUserSelection(index)}
                  className="
                    form-checkbox 
                    h-5 
                    w-5 
                    text-custom-cyan-500 
                    bg-custom-dark 
                    border-custom-cyan-700 
                    rounded
                  "
                />
              </td>
              <td className="p-4 text-center text-custom-white">{user.username}</td>
              <td className="p-4 text-center text-custom-cyan-400">{user.role}</td>
              <td className="p-4 text-center text-custom-white">{user.employeeName}</td>
              <td className="p-4 text-center text-custom-white">{user.email}</td>
              <td className="p-4 text-center">
                <span className={`
                  px-3 
                  py-1 
                  rounded-full 
                  text-xs 
                  font-semibold 
                  ${user.status === 'ENABLE' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                  }
                `}>
                  {user.status}
                </span>
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button 
                    onClick={() => onEdit(user)}
                    className="
                      bg-yellow-500 
                      text-white 
                      p-2 
                      rounded-lg 
                      hover:bg-yellow-400 
                      transition-colors 
                      duration-300
                    "
                    title="Edit"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      className="w-5 h-5"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                      />
                    </svg>
                  </button>
                  <button 
                    onClick={() => onDelete(user)}
                    className="
                      bg-red-600 
                      text-white 
                      p-2 
                      rounded-lg 
                      hover:bg-red-500 
                      transition-colors 
                      duration-300
                    "
                    title="Delete"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      className="w-5 h-5"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Informasi Jumlah Terpilih */}
      {selectedUsers.length > 0 && (
        <div className="
          bg-custom-cyan-900/30 
          text-custom-cyan-300 
          p-4 
          flex 
          justify-between 
          items-center
          border-t 
          border-custom-cyan-800/50
        ">
          <span>
            {selectedUsers.length} pengguna dipilih
          </span>
          <div className="space-x-2">
            <button 
              onClick={handleBulkDelete}
              className="
                bg-custom-cyan-600 
                text-white 
                px-4 
                py-2 
                rounded-lg 
                hover:bg-custom-cyan-500 
                transition-colors
              "
            >
              Hapus Terpilih
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;