/*
 * ZeroWheel Password Gate
 * Separate password protection for all /gtm/zerowheel/* routes
 * Password: ZW2026!
 * Stores auth in sessionStorage so it persists during the browser session
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

const ZW_PASSWORD = 'ZW2026!';
const MASTER_PASSWORD = 'ShawnFree';
const ZW_STORAGE_KEY = 'zw-auth';

interface ZWPasswordGateProps {
  children: React.ReactNode;
}

export default function ZWPasswordGate({ children }: ZWPasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem(ZW_STORAGE_KEY);
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ZW_PASSWORD || password === MASTER_PASSWORD) {
      sessionStorage.setItem(ZW_STORAGE_KEY, 'true');
      if (password === MASTER_PASSWORD) {
        // Master password unlocks all gates
        sessionStorage.setItem('weg-auth', 'true');
        sessionStorage.setItem('weg-master-auth', 'true');
        localStorage.setItem('lc-auth-ts', Date.now().toString());
      }
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 3000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="w-8 h-8 border border-[#B8860B] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8] relative overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 w-full max-w-md mx-6"
      >
        <div className="bg-white border border-[#B8860B]/55 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.07)] p-10">

          {/* ZeroWheel branding */}
          <div className="flex flex-col items-center mb-8">
            {/* ZeroWheel logo pill */}
            <motion.div
              className="bg-black rounded-xl px-5 py-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <img
                      loading="lazy"
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/zerowheel-logo-white.png"
                alt="ZeroWheel"
                className="h-7"
                onError={(e) => {
                  // Fallback to text if logo fails
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span style="color:white;font-family:serif;font-size:18px;font-weight:600;letter-spacing:0.05em;">zerowheel</span>';
                  }
                }}
              />
            </motion.div>

            <motion.p
              className="font-mono text-[10px] text-[#B8860B] uppercase tracking-[0.2em] mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              GTM Strategy
            </motion.p>
            <motion.h1
              className="font-display text-xl font-semibold text-black text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Confidential Access
            </motion.h1>
            <motion.p
              className="font-body text-xs text-black/55 mt-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              This section is restricted to authorized team members only.
            </motion.p>
          </div>

          {/* Divider */}
          <div className="w-10 h-px bg-[#B8860B] mx-auto mb-7" />

          {/* Password Form */}
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-3">
                Access Code
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter access code"
                  autoFocus
                  className="w-full pl-11 pr-12 py-3.5 bg-[#FAFAF8] border-[1.5px] border-[#B8860B]/55 rounded-xl font-body text-sm text-black placeholder:text-black/20 focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-black/20 hover:text-black/65 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="font-body text-xs text-red-500 mt-2 ml-1"
                >
                  Incorrect access code. Please try again.
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              className="w-full mt-5 py-3.5 bg-black text-white font-body text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-black/85 active:bg-black/90 transition-all"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Enter
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          <motion.p
            className="font-body text-[10px] text-black/20 text-center mt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Private & Confidential — ZeroWheel GTM 2026
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
