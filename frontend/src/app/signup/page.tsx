'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';

export default function SignupPage() {
  const [step, setStep] = useState<'signup' | 'verify'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  
  const { signup, verify, loading, error } = useAuth();
  const router = useRouter();

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    
    // Validate form before submission
    if (!validateForm()) {
      setMessage('Please fix the errors below');
      return;
    }
    
    try {
      await signup({ 
        email: email.trim(), 
        password, 
        name: name.trim() || undefined 
      });
      setMessage('Verification code sent to your email!');
      setStep('verify');
      setValidationErrors({});
    } catch (err) {
      setMessage(error || 'Signup failed. Please try again.');
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    
    if (!verificationCode.trim()) {
      setMessage('Please enter the verification code');
      return;
    }

    if (verificationCode.length !== 6) {
      setMessage('Verification code must be 6 digits');
      return;
    }
    
    try {
      await verify({ email, code: verificationCode.trim() });
      setMessage('Account verified successfully! Redirecting to sign in...');
      setTimeout(() => router.push('/signin'), 2000);
    } catch (err) {
      setMessage(error || 'Verification failed. Please check your code and try again.');
    }
  };

  return (
    <div className="gradient-auth flex items-center justify-center p-6">
      <div className="glass-3d p-10 w-full max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
            {step === 'signup' ? 'Create Your Account' : 'Verify Your Email'}
          </h1>
          <p className="text-white/70 text-lg">
            {step === 'signup' 
              ? 'Unlock full access to powerful file conversion tools.' 
              : 'Enter the 6-digit code we sent to your email.'}
          </p>
        </div>

        {step === 'signup' ? (
          <form onSubmit={handleSignup} className="space-y-7">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-white text-sm font-medium mb-2 tracking-wide">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (validationErrors.email) {
                      setValidationErrors(prev => ({...prev, email: ''}));
                    }
                  }}
                  required
                  className={`input-glass w-full px-5 py-4 rounded-xl text-base ${validationErrors.email ? 'border-red-400 border-2' : ''}`}
                  placeholder="you@example.com"
                />
                {validationErrors.email && (
                  <p className="text-red-300 text-sm mt-2">{validationErrors.email}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-white text-sm font-medium mb-2 tracking-wide">Full Name (Optional)</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-glass w-full px-5 py-4 rounded-xl text-base"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2 tracking-wide">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (validationErrors.password) {
                      setValidationErrors(prev => ({...prev, password: ''}));
                    }
                  }}
                  required
                  minLength={6}
                  className={`input-glass w-full px-5 py-4 rounded-xl text-base ${validationErrors.password ? 'border-red-400 border-2' : ''}`}
                  placeholder="••••••••"
                />
                {validationErrors.password && (
                  <p className="text-red-300 text-sm mt-2">{validationErrors.password}</p>
                )}
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2 tracking-wide">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (validationErrors.confirmPassword) {
                      setValidationErrors(prev => ({...prev, confirmPassword: ''}));
                    }
                  }}
                  required
                  className={`input-glass w-full px-5 py-4 rounded-xl text-base ${validationErrors.confirmPassword ? 'border-red-400 border-2' : ''}`}
                  placeholder="••••••••"
                />
                {validationErrors.confirmPassword && (
                  <p className="text-red-300 text-sm mt-2">{validationErrors.confirmPassword}</p>
                )}
              </div>
            </div>
            <div className="pt-2 space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="btn-gradient w-full py-4 px-6 text-white font-semibold rounded-xl text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account…' : 'Create Account'}
              </button>
              <div className="text-center">
                <p className="text-white/70 text-sm">
                  Already have an account?{' '}
                  <Link href="/signin" className="text-white font-semibold hover:text-purple-300 transition-colors">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-8">
            <div className="text-center">
              <p className="text-white/70 mb-6 text-lg">
                A 6-digit code was sent to
                <br />
                <span className="font-semibold text-white">{email}</span>
              </p>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-3 tracking-wide">Verification Code</label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                maxLength={6}
                className="input-glass code-input w-full px-6 py-5 rounded-xl text-3xl font-semibold tracking-[0.6em] text-center"
                placeholder="000000"
              />
            </div>
            <div className="space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="btn-gradient w-full py-4 px-6 text-white font-semibold rounded-xl text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying…' : 'Verify Account'}
              </button>
              <button
                type="button"
                onClick={() => setStep('signup')}
                className="btn-outline-light w-full py-3 px-5 rounded-xl text-white font-medium"
              >
                ← Back to Sign Up
              </button>
            </div>
          </form>
        )}

        {message && (
          <div className={`mt-10 p-5 rounded-xl text-center text-sm font-medium tracking-wide border ${
            message.includes('successfully') || message.includes('sent')
              ? 'bg-green-400/15 text-green-100 border-green-400/30'
              : 'bg-red-400/15 text-red-100 border-red-400/30'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}