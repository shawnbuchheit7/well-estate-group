/*
 * Password Gate - Requires password to access the site
 * Stores authentication in sessionStorage so it persists during the browser session
 * but requires re-entry when the browser is closed
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

const CORRECT_PASSWORD = 'WEG2020';
const STORAGE_KEY = 'weg-auth';

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem(STORAGE_KEY);
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
      // Clear error after 3 seconds
      setTimeout(() => setError(false), 3000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  // If on a ZeroWheel route, skip the WEG gate entirely — ZWPasswordGate handles auth there
  if (window.location.pathname.startsWith('/gtm/zerowheel')) {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/LHselcWIkeWDRNuE.png"
          alt="Well Estate Group"
          className="w-16 h-16 animate-spin"
          style={{ animationDuration: '2s', animationTimingFunction: 'linear' }}
        />
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        className="relative z-10 w-full max-w-md mx-6"
      >
        <div className="bg-white border border-black/8 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-10">
          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <motion.img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/LHselcWIkeWDRNuE.png"
              alt="Well Estate Group"
              className="w-20 h-20 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <motion.h1
              className="font-display text-2xl font-semibold tracking-wide text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              WELL ESTATE GROUP
            </motion.h1>
            <motion.p
              className="font-body text-sm text-gray-400 mt-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Consulting Services in Fitness, Wellness & Longevity
            </motion.p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-[#C9A962] mx-auto mb-8" />

          {/* Password Form */}
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block font-body text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Access Code
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter access code"
                  autoFocus
                  className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border-[1.5px] border-black/8 rounded-xl font-body text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-[#C9A962] focus:ring-2 focus:ring-[#C9A962]/10 transition-all"
                  style={{ background: '#FAFAFA' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="font-body text-xs text-red-500 mt-2 ml-1"
                >
                  Incorrect access code. Please try again.
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full mt-6 py-3.5 bg-black text-white font-body text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-black/85 active:bg-black/90 transition-all shadow-sm"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Enter
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          {/* Footer */}
          <motion.p
            className="font-body text-[10px] text-gray-300 text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Private & Confidential
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
