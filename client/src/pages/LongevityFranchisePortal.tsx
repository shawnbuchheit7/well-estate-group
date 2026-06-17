import { useState } from "react";
import { Link } from "wouter";

const sections = [
  { label: "About", href: "/longevity/about" },
  { label: "Opportunity", href: "/longevity/opportunity" },
  { label: "Memberships", href: "/longevity/memberships" },
  { label: "Therapeutics", href: "/longevity/therapeutics" },
  { label: "Technology", href: "/longevity/technology" },
  { label: "Funds", href: "/longevity/funds" },
  { label: "Economics", href: "/longevity/economics" },
  { label: "Projections", href: "/longevity/projections" },
  { label: "Team", href: "/longevity/team" },
  { label: "FAQ", href: "/longevity/faq" },
  { label: "All Projects", href: "/longevity" },
];

export default function LongevityFranchisePortal() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex flex-col bg-black">
      {/* Compact navigation bar */}
      <div className="flex items-center h-11 px-4 bg-[#0A0A0A] text-white shrink-0 border-b border-white/10 relative z-50">
        {/* Left: Back to main site */}
        <Link href="/longevity" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-medium mr-4">
          <span className="text-sm">←</span> Back to WEG
        </Link>

        {/* Center: Logo + Navigate dropdown */}
        <div className="flex-1 flex items-center justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <img src="/weg-logo-mark-white.png" alt="Well Estate Group" className="h-5 w-5" />
            <span className="text-xs font-semibold tracking-wide text-white/90">WELL ESTATE GROUP</span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-1"
            >
              Navigate Sections <span className="text-[10px]">▾</span>
            </button>

            {navOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setNavOpen(false)} />
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#1A1A1A] border border-white/10 rounded-lg shadow-2xl py-2 min-w-[180px] z-50">
                  <div className="px-3 py-1.5 text-[10px] font-semibold text-white/40 uppercase tracking-wider">Longevity Ventures</div>
                  {sections.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-3 py-1.5 text-xs text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Current section badge */}
        <span className="text-[10px] font-semibold tracking-wider text-white/50 border border-white/20 rounded px-2 py-0.5 uppercase">
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
