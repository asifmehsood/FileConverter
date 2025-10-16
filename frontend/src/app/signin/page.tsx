'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const { login, loading, error } = useAuth();
  const router = useRouter();

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    
    try {
      await login({ email, password });
      setMessage('Sign in successful! Redirecting...');
      setTimeout(() => router.push('/dashboard'), 1500);
    } catch (err) {
      setMessage(error || 'Sign in failed');
    }
  };

  return (
    <div className="gradient-auth flex items-center justify-center p-6">
      <div className="glass-3d p-10 w-full max-w-lg">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
            Welcome Back
          </h1>
          <p className="text-white/70 text-lg">
            Sign in to access your file conversion dashboard.
          </p>
        </div>

        <form onSubmit={handleSignin} className="space-y-7">
          <div>
            <label className="block text-white text-sm font-medium mb-2 tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-glass w-full px-5 py-4 rounded-xl text-base"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2 tracking-wide">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-glass w-full px-5 py-4 rounded-xl text-base"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-400 bg-transparent border-white/30 rounded focus:ring-purple-400 focus:ring-2"
              />
              <span className="ml-2 text-white/70 text-sm">Remember me</span>
            </label>
            <Link 
              href="/forgot-password" 
              className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <div className="pt-2 space-y-4">
            <button
              type="submit"
              disabled={loading}
              className="btn-gradient w-full py-4 px-6 text-white font-semibold rounded-xl text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In…' : 'Sign In'}
            </button>

            <div className="text-center">
              <p className="text-white/70 text-sm">
                Don't have an account?{' '}
                <Link href="/signup" className="text-white font-semibold hover:text-purple-300 transition-colors">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>

        {message && (
          <div className={`mt-10 p-5 rounded-xl text-center text-sm font-medium tracking-wide border ${
            message.includes('successful') 
              ? 'bg-green-400/15 text-green-100 border-green-400/30'
              : 'bg-red-400/15 text-red-100 border-red-400/30'
          }`}>
            {message}
          </div>
        )}

        {/* Social Sign In Options */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-white/60">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="btn-outline-light flex justify-center items-center py-3 px-4 rounded-xl text-white font-medium"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="btn-outline-light flex justify-center items-center py-3 px-4 rounded-xl text-white font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}