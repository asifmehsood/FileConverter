import { useState } from 'react';
import { api } from '@/lib/api';

interface SignupData {
  email: string;
  password: string;
  name?: string;
}

interface VerifyData {
  email: string;
  code: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (data: SignupData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/signup', data);
      return response.data;
    } catch (err: any) {
      const message = err.response?.data?.message || 'Signup failed';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const verify = async (data: VerifyData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/verify', data);
      return response.data;
    } catch (err: any) {
      const message = err.response?.data?.message || 'Verification failed';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/login', data);
      // Store token if login is successful
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }
      return response.data;
    } catch (err: any) {
      const message = err.response?.data?.message || 'Login failed';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, verify, login, loading, error };
};