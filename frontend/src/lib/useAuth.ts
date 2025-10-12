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

  return { signup, verify, loading, error };
};