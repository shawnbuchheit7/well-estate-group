/*
 * Longevity Center Password Gate
 * Time-limited access (48 hours) for all /longevity/* routes
 * Password: vitakavana2026
 * Stores auth timestamp in localStorage — expires after 48 hours
 * Saltleaf routes use Saltleaf teal branding instead of WEG gold
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight, Eye, EyeOff, Clock, Layers } from 'lucide-react';
import { useLocation } from 'wouter';

const LC_PASSWORD = 'vitakavana2026';
const MASTER_PASSWORD = 'ShawnFree';
const LC_STORAGE_KEY = 'lc-auth-ts';
const EXPIRY_HOURS = 48;

interface LongevityPasswordGateProps {
  children: React.ReactNode;
}

function isSessionValid(): boolean {
  const stored = localStorage.getItem(LC_STORAGE_KEY);
  if (!stored) return false;
  const timestamp = parseInt(stored, 10);
  if (isNaN(timestamp)) return false;
  const elapsed = Date.now() - timestamp;
  const maxMs = EXPIRY_HOURS * 60 * 60 * 1000;
  return elapsed < maxMs;
}

function getRemainingTime(): string {
  const stored = localStorage.getItem(LC_STORAGE_KEY);
  if (!stored) return '';
  const timestamp = parseInt(stored, 10);
  if (isNaN(timestamp)) return '';
  const elapsed = Date.now() - timestamp;
  const maxMs = EXPIRY_HOURS * 60 * 60 * 1000;
  const remaining = maxMs - elapsed;
  if (remaining <= 0) return '';
  const hours = Math.floor(remaining / (60 * 60 * 1000));
  const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
  if (hours > 0) return `${hours}h ${minutes}m remaining`;
  return `${minutes}m remaining`;
}

export default function LongevityPasswordGate({ children }: LongevityPasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [remainingTime, setRemainingTime] = useState('');
  const [location] = useLocation();

  const isSaltleafRoute = location.startsWith('/longevity/saltleaf');
  const accent = isSaltleafRoute ? '#1a3e4c' : '#B8860B';
  const brandLabel = isSaltleafRoute ? 'Saltleaf on Estero Bay' : 'Well Estate Group';

  useEffect(() => {
    if (isSessionValid()) {
      setIsAuthenticated(true);
      setRemainingTime(getRemainingTime());
    } else {
      // Clear expired session
      localStorage.removeItem(LC_STORAGE_KEY);
    }
    setIsLoading(false);
  }, []);

  // Update remaining time every minute
  useEffect(() => {
    if (!isAuthenticated) return;
    const interval = setInterval(() => {
      if (!isSessionValid()) {
        setIsAuthenticated(false);
        localStorage.removeItem(LC_STORAGE_KEY);
      } else {
        setRemainingTime(getRemainingTime());
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === LC_PASSWORD || password === MASTER_PASSWORD) {
      localStorage.setItem(LC_STORAGE_KEY, Date.now().toString());
      if (password === MASTER_PASSWORD) {
        // Master password unlocks all gates
        sessionStorage.setItem('weg-auth', 'true');
        sessionStorage.setItem('weg-master-auth', 'true');
        sessionStorage.setItem('zw-auth', 'true');
      }
      setIsAuthenticated(true);
      setRemainingTime(getRemainingTime());
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
        <div className="w-8 h-8 border border-t-transparent rounded-full animate-spin" style={{ borderColor: `${accent}`, borderTopColor: 'transparent' }} />
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

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundImage: `linear-gradient(to right, transparent, ${accent}4D, transparent)` }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundImage: `linear-gradient(to right, transparent, ${accent}4D, transparent)` }} />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 w-full max-w-md mx-6"
      >
        <div className="bg-white rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.07)] p-10" style={{ border: `1px solid ${accent}88` }}>

          {/* Branding */}
          <div className="flex flex-col items-center mb-8">
            <motion.div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: `${accent}1A` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <Layers className="w-7 h-7" style={{ color: accent }} />
            </motion.div>

            <motion.p
              className="font-mono text-[10px] uppercase tracking-[0.2em] mb-1"
              style={{ color: accent }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              {isSaltleafRoute ? 'Wellness Advisory' : 'Longevity Center'}
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
              This section requires an invitation code. Access expires after 48 hours.
            </motion.p>
          </div>

          {/* Divider */}
          <div className="w-10 h-px mx-auto mb-7" style={{ backgroundColor: accent }} />

          {/* Time notice */}
          <motion.div
            className="flex items-center gap-2 rounded-lg px-4 py-2.5 mb-6"
            style={{ backgroundColor: `${accent}0D`, border: `1px solid ${accent}26` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38 }}
          >
            <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
            <p className="font-body text-[11px] text-black/55">
              Access is time-limited to <span className="font-medium text-black/75">48 hours</span> from code entry.
            </p>
          </motion.div>

          {/* Password Form */}
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-3">
                Invitation Code
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
                  placeholder="Enter invitation code"
                  autoFocus
                  className="w-full pl-11 pr-12 py-3.5 bg-[#FAFAF8] rounded-xl font-body text-sm text-black placeholder:text-black/20 focus:outline-none transition-all"
                  style={{ border: `1.5px solid ${accent}88`, }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.boxShadow = `0 0 0 2px ${accent}1A`; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = `${accent}88`; e.currentTarget.style.boxShadow = 'none'; }}
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
                  Invalid invitation code. Please check and try again.
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
            Private & Confidential — {brandLabel}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
