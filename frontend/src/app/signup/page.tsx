'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/useAuth';

export default function SignupPage() {
  const [step, setStep] = useState<'signup' | 'verify'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  
  const { signup, verify, loading, error } = useAuth();
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    
    try {
      await signup({ email, password, name: name || undefined });
      setMessage('Verification code sent to your email!');
      setStep('verify');
    } catch (err) {
      setMessage(error || 'Signup failed');
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await verify({ email, code: verificationCode });
      setMessage('Account verified successfully!');
      setTimeout(() => router.push('/dashboard'), 2000);
    } catch (err) {
      setMessage(error || 'Verification failed');
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="glass-light p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {step === 'signup' ? 'Create Account' : 'Verify Email'}
          </h1>
          <p className="text-white/80">
            {step === 'signup' 
              ? 'Join us to access all features' 
              : 'Enter the verification code sent to your email'
            }
          </p>
        </div>

        {step === 'signup' ? (
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Full Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Enter password (min 6 chars)"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:hover:shadow-none"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="text-center">
              <p className="text-white/80 mb-4">
                We sent a 6-digit code to <br />
                <span className="font-semibold text-white">{email}</span>
              </p>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Verification Code
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                maxLength={6}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-center text-2xl tracking-widest"
                placeholder="000000"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-green-600 hover:to-blue-600 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:hover:shadow-none"
            >
              {loading ? 'Verifying...' : 'Verify Account'}
            </button>

            <button
              type="button"
              onClick={() => setStep('signup')}
              className="w-full py-2 text-white/80 hover:text-white transition-colors"
            >
              ← Back to Sign Up
            </button>
          </form>
        )}

        {message && (
          <div className={`mt-6 p-4 rounded-lg text-center ${
            message.includes('successfully') || message.includes('sent') 
              ? 'bg-green-500/20 text-green-100 border border-green-400/30' 
              : 'bg-red-500/20 text-red-100 border border-red-400/30'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}