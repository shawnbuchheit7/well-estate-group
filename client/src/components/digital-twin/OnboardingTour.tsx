import { useState, useEffect, useCallback, useRef } from "react";
import {
  Sparkles, ArrowRight, ArrowLeft, X, Zap, TrendingUp,
  Target, Link2, Brain, Gauge, ChevronRight, Check, Star,
  Rocket, Activity, Heart, BarChart3
} from "lucide-react";

/* ─── Tour Step Definition ─── */
interface TourStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  targetSelector?: string; // CSS selector for spotlight
  tabToNavigate?: string; // Tab to switch to before showing step
  expandBiomarker?: boolean; // Whether to expand a biomarker for this step
  position?: "center" | "top" | "bottom" | "left" | "right";
  accentColor: string;
  illustration?: React.ReactNode;
}

/* ─── Tour Steps: Designed for smooth linear flow ─── */
const TOUR_STEPS: TourStep[] = [
  // Step 0: Welcome (center overlay, no tab switch)
  {
    id: "welcome",
    title: "Welcome to Your Health Command Center",
    description: "Fountain Life's Digital Health Twin gives you unprecedented insight into your biology. Let us show you the powerful tools at your fingertips.",
    icon: <Rocket className="w-6 h-6" />,
    position: "center",
    accentColor: "#22D3EE",
    illustration: (
      <div className="relative w-full h-32 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} className="absolute rounded-full animate-ping" style={{
              width: `${60 + i * 40}px`, height: `${60 + i * 40}px`,
              border: `1px solid rgba(34,211,238,${0.3 - i * 0.05})`,
              animationDelay: `${i * 0.3}s`, animationDuration: '2s',
            }} />
          ))}
          <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center" style={{
            background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(16,185,129,0.2))',
            border: '1px solid rgba(34,211,238,0.3)',
            boxShadow: '0 0 40px rgba(34,211,238,0.2)',
          }}>
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </div>
    ),
  },
  // Step 1: Bio Age Badge (header, stays on twin tab)
  {
    id: "bio-age-badge",
    title: "Your Bio Age at a Glance",
    description: "This badge always shows your computed biological age — the average of all your organ ages. It stays visible across every tab so you can track your progress at all times.",
    icon: <Activity className="w-6 h-6" />,
    targetSelector: "[data-tour='bio-age-badge']",
    tabToNavigate: "twin",
    position: "bottom",
    accentColor: "#D4A574",
  },
  // Step 2: Bio Age Hero (center panel, still on twin tab)
  {
    id: "bio-age-hero",
    title: "Bio Age Deep Dive",
    description: "The hero card shows your biological age with a 6-assessment trend line. Watch the animated counter tick up — it reflects the weighted average of all your organ system ages.",
    icon: <TrendingUp className="w-6 h-6" />,
    targetSelector: "[data-tour='bio-age-hero']",
    tabToNavigate: "twin",
    position: "right",
    accentColor: "#22D3EE",
  },
  // Step 3: Organ System Ages (left panel, still on twin tab)
  {
    id: "organ-ages",
    title: "Organ System Ages",
    description: "Each of your major organs has its own biological age. Green means younger than your chronological age, red means it needs attention. Click any organ to see detailed findings and recommendations.",
    icon: <Heart className="w-6 h-6" />,
    targetSelector: "[data-tour='organ-ages']",
    tabToNavigate: "twin",
    position: "right",
    accentColor: "#10B981",
  },
  // Step 4: Organ Cards (right panel, still on twin tab)
  {
    id: "organ-cards",
    title: "Organ Detail Cards",
    description: "The right panel shows sparkline trends for each organ. Click any card to zoom into that organ's 3D view with detailed findings, physician recommendations, and historical data.",
    icon: <BarChart3 className="w-6 h-6" />,
    targetSelector: "[data-tour='organ-cards']",
    tabToNavigate: "twin",
    position: "left",
    accentColor: "#8B5CF6",
  },
  // Step 5: Vitals Bar (bottom, still on twin tab)
  {
    id: "vitals-bar",
    title: "Live Vitals Monitor",
    description: "Real-time vitals stream at the bottom — heart rate, blood pressure, SpO2, and temperature. These update continuously to give you a living snapshot of your current state.",
    icon: <Zap className="w-6 h-6" />,
    targetSelector: "[data-tour='vitals-bar']",
    tabToNavigate: "twin",
    position: "top",
    accentColor: "#F59E0B",
  },
  // Step 6: Health Momentum (switch to biomarkers tab — single transition)
  {
    id: "momentum",
    title: "Health Momentum Score",
    description: "Now let's look at your biomarkers. The Momentum indicator shows whether your markers are collectively improving, stable, or declining — a metric unique to Fountain Life.",
    icon: <TrendingUp className="w-6 h-6" />,
    targetSelector: "[data-tour='momentum']",
    tabToNavigate: "biomarkers",
    position: "bottom",
    accentColor: "#10B981",
  },
  // Step 7: Velocity Tracking (still on biomarkers tab)
  {
    id: "velocity",
    title: "Biomarker Velocity Tracking",
    description: "Each biomarker shows its rate of change — not just where you are, but how fast you're moving. Labels like 'Improving Fast' or 'Declining' give you instant actionable context.",
    icon: <Zap className="w-6 h-6" />,
    targetSelector: "[data-tour='velocity']",
    tabToNavigate: "biomarkers",
    position: "left",
    accentColor: "#F59E0B",
  },
  // Step 8: Gauges (expand biomarker, still on biomarkers tab)
  {
    id: "gauges",
    title: "Radial Gauges & Percentile Ranking",
    description: "Expand any biomarker to see an animated radial gauge showing your position in the optimal range, plus your percentile ranking versus the general population AND Fountain Life's elite cohort.",
    icon: <Gauge className="w-6 h-6" />,
    targetSelector: "[data-tour='gauges']",
    tabToNavigate: "biomarkers",
    expandBiomarker: true,
    position: "left",
    accentColor: "#8B5CF6",
  },
  // Step 9: Ask Zori (still expanded, still on biomarkers tab)
  {
    id: "zori",
    title: "Ask Zori — Your AI Health Advisor",
    description: "Get personalized AI-powered analysis for any biomarker. Zori understands your complete health profile and provides context-aware recommendations tailored specifically to you.",
    icon: <Brain className="w-6 h-6" />,
    targetSelector: "[data-tour='zori']",
    tabToNavigate: "biomarkers",
    expandBiomarker: true,
    position: "top",
    accentColor: "#8B5CF6",
  },
  // Step 10: Connections (still expanded, still on biomarkers tab)
  {
    id: "connections",
    title: "Biomarker Interconnections",
    description: "Discover how your biomarkers relate to each other. The network map reveals hidden correlations — click any connected biomarker to navigate directly to it.",
    icon: <Link2 className="w-6 h-6" />,
    targetSelector: "[data-tour='connections']",
    tabToNavigate: "biomarkers",
    expandBiomarker: true,
    position: "top",
    accentColor: "#EC4899",
  },
  // Step 11: Complete (center overlay)
  {
    id: "complete",
    title: "You're All Set!",
    description: "You now have the most advanced biomarker analysis platform in the world. Explore your data, set goals, and let Zori guide your health optimization journey.",
    icon: <Star className="w-6 h-6" />,
    position: "center",
    accentColor: "#10B981",
    illustration: (
      <div className="relative w-full h-32 flex items-center justify-center">
        <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center" style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(34,211,238,0.2))',
          border: '2px solid rgba(16,185,129,0.4)',
          boxShadow: '0 0 60px rgba(16,185,129,0.3)',
        }}>
          <Check className="w-8 h-8 text-emerald-400" strokeWidth={3} />
        </div>
      </div>
    ),
  },
];

/* ─── Typewriter Effect ─── */
function TypewriterText({ text, speed = 18, onComplete }: { text: string; speed?: number; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setComplete(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setComplete(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {!complete && <span className="inline-block w-0.5 h-4 ml-0.5 bg-current animate-pulse" style={{ verticalAlign: 'text-bottom' }} />}
    </span>
  );
}

/* ─── Particle System ─── */
function Particles({ color, count = 20 }: { color: string; count?: number }) {
  const particles = useRef(
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.2,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: color,
            opacity: p.opacity,
            animation: `fl-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Confetti Celebration ─── */
function Confetti() {
  const pieces = useRef(
    Array.from({ length: 50 }, () => ({
      x: 50 + (Math.random() - 0.5) * 60,
      color: ['#22D3EE', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#EF4444'][Math.floor(Math.random() * 6)],
      delay: Math.random() * 0.5,
      rotation: Math.random() * 360,
      size: Math.random() * 6 + 3,
      drift: (Math.random() - 0.5) * 100,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {pieces.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: '-5%',
            width: `${p.size}px`,
            height: `${p.size * 0.6}px`,
            background: p.color,
            borderRadius: '1px',
            transform: `rotate(${p.rotation}deg)`,
            animation: `confetti-fall 2.5s ease-out ${p.delay}s forwards`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { opacity: 1; transform: translateY(0) rotate(0deg); }
          100% { opacity: 0; transform: translateY(100vh) rotate(720deg) translateX(${Math.random() > 0.5 ? '' : '-'}50px); }
        }
      `}</style>
    </div>
  );
}

/* ─── Spotlight Overlay ─── */
function SpotlightOverlay({ targetRect, transitioning }: { targetRect: DOMRect | null; transitioning: boolean }) {
  if (!targetRect) {
    return (
      <div className="fixed inset-0 z-[9998] transition-all duration-700" style={{
        background: 'rgba(2,6,15,0.85)',
        backdropFilter: 'blur(8px)',
      }} />
    );
  }

  const padding = 12;
  const x = targetRect.left - padding;
  const y = targetRect.top - padding;
  const w = targetRect.width + padding * 2;
  const h = targetRect.height + padding * 2;
  const r = 16;

  return (
    <div className="fixed inset-0 z-[9998]">
      <svg className="w-full h-full" style={{ transition: transitioning ? 'none' : undefined }}>
        <defs>
          <mask id="spotlight-mask">
            <rect width="100%" height="100%" fill="white" />
            <rect
              x={x} y={y} width={w} height={h} rx={r} ry={r}
              fill="black"
              style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
            />
          </mask>
          <filter id="spotlight-blur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <rect
          width="100%" height="100%"
          fill="rgba(2,6,15,0.82)"
          mask="url(#spotlight-mask)"
          filter="url(#spotlight-blur)"
        />
        <rect
          width="100%" height="100%"
          fill="rgba(2,6,15,0.78)"
          mask="url(#spotlight-mask)"
        />
        {/* Glow ring around spotlight */}
        <rect
          x={x - 2} y={y - 2} width={w + 4} height={h + 4} rx={r + 2} ry={r + 2}
          fill="none"
          stroke="rgba(34,211,238,0.3)"
          strokeWidth="2"
          style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
        <rect
          x={x - 6} y={y - 6} width={w + 12} height={h + 12} rx={r + 6} ry={r + 6}
          fill="none"
          stroke="rgba(34,211,238,0.1)"
          strokeWidth="1"
          style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </svg>
    </div>
  );
}

/* ─── Tour Tooltip Card ─── */
function TourCard({
  step,
  stepIndex,
  totalSteps,
  onNext,
  onPrev,
  onSkip,
  targetRect,
}: {
  step: TourStep;
  stepIndex: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onSkip: () => void;
  targetRect: DOMRect | null;
}) {
  const [entering, setEntering] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEntering(true);
    const timer = setTimeout(() => setEntering(false), 50);
    return () => clearTimeout(timer);
  }, [stepIndex]);

  // Calculate position
  const getCardStyle = (): React.CSSProperties => {
    if (step.position === "center" || !targetRect) {
      return {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) ${entering ? 'scale(0.9)' : 'scale(1)'}`,
        opacity: entering ? 0 : 1,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      };
    }

    const cardW = 420;
    const cardH = 280;
    const gap = 24;
    let top = 0;
    let left = 0;

    switch (step.position) {
      case "bottom":
        top = targetRect.bottom + gap;
        left = targetRect.left + targetRect.width / 2 - cardW / 2;
        break;
      case "top":
        top = targetRect.top - cardH - gap;
        left = targetRect.left + targetRect.width / 2 - cardW / 2;
        break;
      case "left":
        top = targetRect.top + targetRect.height / 2 - cardH / 2;
        left = targetRect.left - cardW - gap;
        break;
      case "right":
        top = targetRect.top + targetRect.height / 2 - cardH / 2;
        left = targetRect.right + gap;
        break;
    }

    // Clamp to viewport
    left = Math.max(20, Math.min(window.innerWidth - cardW - 20, left));
    top = Math.max(20, Math.min(window.innerHeight - cardH - 20, top));

    return {
      position: 'fixed',
      top: `${top}px`,
      left: `${left}px`,
      width: `${cardW}px`,
      opacity: entering ? 0 : 1,
      transform: entering ? 'translateY(12px)' : 'translateY(0)',
      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    };
  };

  const isFirst = stepIndex === 0;
  const isLast = stepIndex === totalSteps - 1;
  const progress = ((stepIndex + 1) / totalSteps) * 100;
  // Feature steps are between welcome and complete
  const featureSteps = totalSteps - 2;
  const featureIndex = stepIndex > 0 && stepIndex < totalSteps - 1 ? stepIndex : 0;

  return (
    <div
      ref={cardRef}
      className="z-[9999] max-w-[420px]"
      style={getCardStyle()}
    >
      {/* Glassmorphism card */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(10,22,40,0.95), rgba(13,27,42,0.95))',
          border: `1px solid ${step.accentColor}25`,
          boxShadow: `0 25px 60px rgba(0,0,0,0.5), 0 0 40px ${step.accentColor}15, inset 0 1px 0 rgba(255,255,255,0.05)`,
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Top accent line */}
        <div className="h-[2px]" style={{
          background: `linear-gradient(90deg, transparent, ${step.accentColor}, transparent)`,
        }} />

        <Particles color={step.accentColor} count={12} />

        <div className="relative p-6">
          {/* Header: Icon + Step counter + Skip */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
                background: `${step.accentColor}15`,
                border: `1px solid ${step.accentColor}30`,
                color: step.accentColor,
                boxShadow: `0 0 20px ${step.accentColor}10`,
              }}>
                {step.icon}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: step.accentColor }}>
                  {isFirst ? 'Welcome' : isLast ? 'Complete' : `Step ${featureIndex}`}
                </span>
                <span className="text-[10px] text-gray-600">/ {featureSteps} features</span>
              </div>
            </div>
            {!isLast && (
              <button
                onClick={onSkip}
                className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors px-2 py-1 rounded-lg hover:bg-white/[0.04]"
              >
                Skip tour
              </button>
            )}
          </div>

          {/* Illustration (for center steps) */}
          {step.illustration && (
            <div className="mb-4">
              {step.illustration}
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 leading-tight">
            {step.title}
          </h3>

          {/* Description with typewriter */}
          <p className="text-[13px] leading-relaxed text-gray-400 min-h-[48px]">
            <TypewriterText text={step.description} speed={12} />
          </p>

          {/* Progress bar */}
          <div className="mt-5 mb-4">
            <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${step.accentColor}80, ${step.accentColor})`,
                  boxShadow: `0 0 10px ${step.accentColor}40`,
                }}
              />
            </div>
            {/* Step dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {TOUR_STEPS.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === stepIndex ? '20px' : '6px',
                    height: '6px',
                    background: i === stepIndex
                      ? step.accentColor
                      : i < stepIndex
                        ? `${step.accentColor}60`
                        : 'rgba(255,255,255,0.1)',
                    boxShadow: i === stepIndex ? `0 0 8px ${step.accentColor}50` : undefined,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            {!isFirst && (
              <button
                onClick={onPrev}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[12px] font-semibold transition-all hover:scale-[1.02]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            )}
            <button
              onClick={onNext}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[12px] font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}CC)`,
                color: '#000',
                boxShadow: `0 4px 20px ${step.accentColor}30`,
              }}
            >
              {isLast ? (
                <>
                  Start Exploring
                  <Sparkles className="w-4 h-4" />
                </>
              ) : (
                <>
                  {isFirst ? "Begin Tour" : "Next"}
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main OnboardingTour Component ─── */
export function OnboardingTour({
  isOpen,
  onClose,
  onNavigateTab,
  onExpandBiomarker,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab?: (tab: string) => void;
  onExpandBiomarker?: (name: string) => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const prevTabRef = useRef<string | null>(null);

  const step = TOUR_STEPS[currentStep];

  // Find and spotlight target element
  const updateSpotlight = useCallback(() => {
    if (!step.targetSelector) {
      setTargetRect(null);
      return;
    }

    const el = document.querySelector(step.targetSelector);
    if (el) {
      const rect = el.getBoundingClientRect();
      setTargetRect(rect);
      // Scroll element into view if needed
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    } else {
      setTargetRect(null);
    }
  }, [step]);

  // Navigate to correct tab and expand biomarker before spotlighting
  useEffect(() => {
    if (!isOpen) return;

    const needsTabSwitch = step.tabToNavigate && step.tabToNavigate !== prevTabRef.current;

    if (step.tabToNavigate && onNavigateTab) {
      onNavigateTab(step.tabToNavigate);
      prevTabRef.current = step.tabToNavigate;
    }

    // For steps that need an expanded biomarker
    if (step.expandBiomarker && onExpandBiomarker) {
      const delay = needsTabSwitch ? 500 : 300;
      setTimeout(() => {
        onExpandBiomarker('Fasting Glucose');
        setTimeout(updateSpotlight, 400);
      }, delay);
    } else {
      const delay = needsTabSwitch ? 500 : 300;
      setTimeout(updateSpotlight, delay);
    }
  }, [currentStep, isOpen, step, onNavigateTab, onExpandBiomarker, updateSpotlight]);

  // Reset step when tour opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      prevTabRef.current = null;
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'Enter') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, currentStep]);

  // Handle window resize
  useEffect(() => {
    if (!isOpen) return;
    const handleResize = () => updateSpotlight();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, updateSpotlight]);

  const handleNext = () => {
    if (currentStep >= TOUR_STEPS.length - 1) {
      onClose();
      return;
    }
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 100);

    // Show confetti on completion step
    if (currentStep === TOUR_STEPS.length - 2) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep <= 0) return;
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 100);
    setCurrentStep(prev => prev - 1);
  };

  const handleSkip = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9997]">
      {/* Spotlight overlay */}
      <SpotlightOverlay targetRect={targetRect} transitioning={transitioning} />

      {/* Confetti celebration */}
      {showConfetti && <Confetti />}

      {/* Tour card */}
      <TourCard
        step={step}
        stepIndex={currentStep}
        totalSteps={TOUR_STEPS.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onSkip={handleSkip}
        targetRect={targetRect}
      />
    </div>
  );
}

/* ─── Tour Trigger Button ─── */
export function TourTriggerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all hover:scale-105 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(139,92,246,0.08))',
        border: '1px solid rgba(34,211,238,0.2)',
        color: '#22D3EE',
        boxShadow: '0 0 15px rgba(34,211,238,0.05)',
      }}
    >
      <Sparkles className="w-3.5 h-3.5" />
      Take Tour
    </button>
  );
}
