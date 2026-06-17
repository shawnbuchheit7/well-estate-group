import { useState } from "react";
import { Link } from "wouter";

const sections = [
  { label: "About", href: "/longevity/luxury" },
  { label: "Opportunity", href: "/longevity/opportunity" },
  { label: "Memberships", href: "/longevity/memberships" },
  { label: "Therapeutics", href: "/longevity/therapeutics" },
  { label: "Technology", href: "/longevity/technology" },
  { label: "Funds", href: "/longevity/use-of-funds" },
  { label: "Economics", href: "/longevity/performance" },
  { label: "Projections", href: "/longevity/projections" },
  { label: "Team", href: "/longevity/hiring" },
  { label: "FAQ", href: "/longevity/faq" },
  { label: "All Projects", href: "/longevity" },
];

/** Inline SVG logo mark — renders crisply at any size without pixelation */
function WEGLogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 591 591"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="295.5"
        cy="295.5"
        r="265"
        fill="none"
        stroke="currentColor"
        strokeWidth="26"
      />
      <path
        fillRule="evenodd"
        d="M 168 180 L 220 180 L 295.5 400 L 371 180 L 423 180 L 330 430 L 295.5 430 L 261 430 Z M 232 180 L 295.5 305 L 359 180 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function LongevityFranchisePortal() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex flex-col bg-black">
      {/* Compact navigation bar */}
      <div className="flex items-center h-11 px-4 bg-[#0A0A0A] text-white shrink-0 border-b border-white/10 relative z-50">
        {/* Left: Back to main site */}
        <Link href="/longevity" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-medium mr-4">
          <span className="text-sm">←</span>
          <span className="hidden sm:inline">Back to WEG</span>
        </Link>

        {/* Center: Logo + Navigate dropdown */}
        <div className="flex-1 flex items-center justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <WEGLogoMark className="w-7 h-7 text-white/90 group-hover:text-white transition-colors" />
            <span className="text-[11px] font-semibold tracking-[0.08em] text-white/90 group-hover:text-white transition-colors hidden sm:inline">WELL ESTATE GROUP</span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <span>Navigate Sections</span>
              <span className={`text-[10px] transition-transform inline-block ${navOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {navOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setNavOpen(false)} />
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 bg-[#141414] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-50">
                  <div className="p-1.5">
                    <div className="px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">Longevity Ventures</div>
                    {sections.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/70 hover:text-white hover:bg-white/8 transition-all"
                        onClick={() => setNavOpen(false)}
                      >
                        <span>{s.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Current section badge */}
        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#B8860B] px-2 py-0.5 rounded border border-[#B8860B]/30 bg-[#B8860B]/10">
          Franchise Portal
        </span>
      </div>

      {/* Franchise Portal iframe - takes remaining height */}
      <iframe
        src="https://fountainfran-fruyeybc.manus.space"
        className="flex-1 w-full border-0"
        style={{ minHeight: 0 }}
        allow="storage-access; cross-origin-isolated"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-top-navigation"
        title="Franchise Portal"
      />
    </div>
  );
}
