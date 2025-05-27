// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { AuthResponse, User } from '@/types/auth.types'; // Impor tipe dari auth.type.ts
import api from '@/utils/api';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuth = (): AuthContextValue => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Stored Token:', token); // Log token untuk verifikasi
        if (token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const res = await api.get('/auth/me');
          console.log('Fetched User:', res.data.user); // Log user yang didapat
          setUser(res.data.user);
        } else {
          console.log('No token found in localStorage');
        }
      } catch (error) {
        console.error('Fetch user failed:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post<AuthResponse>('/auth/login', { email, password });
      localStorage.setItem('token', res.data.results.data.token); // Simpan token di localStorage
      console.log('Saved Token:', res.data.results.data.token); // Log token yang disimpan
      api.defaults.headers.common['Authorization'] = `Bearer ${res.data.results.data.token}`; // Set header Authorization
      setUser(res.data.results.data.user);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('token'); // Hapus token dari localStorage
      delete api.defaults.headers.common['Authorization']; // Hapus header Authorization
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { user, loading, login, logout };
};

export default useAuth;