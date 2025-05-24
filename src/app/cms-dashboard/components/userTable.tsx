// src/app/cms-dashboard/components/userTable.tsx
import React from 'react';

interface User {
  username: string;
  role: string;
  employeeName: string;
  status: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header Tabel */}
      <div className="bg-gray-200 p-4 flex items-center space-x-4">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500"
        />
        <span>Username</span>
        <span>User Role</span>
        <span>Employee Name</span>
        <span>Status</span>
        <span>Action</span>
      </div>

      {/* Konten Tabel */}
      <div className="overflow-y-auto max-h-96">
        {users.map((user, index) => (
          <div
            key={index}
            className={`p-4 border-b border-gray-200 ${
              index % 2 === 0 ? 'bg-gray-50' : ''
            }`}
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span>{user.username}</span>
            <span>{user.role}</span>
            <span>{user.employeeName}</span>
            <span>{user.status}</span>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                </svg>
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTable;