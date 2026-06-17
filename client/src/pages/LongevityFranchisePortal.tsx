/*
 * Longevity Franchise Portal — Full-screen embed of the WEG Franchise Portal
 * Includes a compact nav bar for navigating back to main WEG site sections
 */
import { useState } from "react";
import { ArrowLeft, ChevronDown, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const PORTAL_URL = "https://fountainfran-fruyeybc.manus.space";

const navSections = [
  { href: "/longevity/luxury", label: "About" },
  { href: "/longevity/opportunity", label: "Opportunity" },
  { href: "/longevity/memberships", label: "Memberships" },
  { href: "/longevity/therapeutics", label: "Therapeutics" },
  { href: "/longevity/technology", label: "Technology" },
  { href: "/longevity/use-of-funds", label: "Funds" },
  { href: "/longevity/performance", label: "Economics" },
  { href: "/longevity/projections", label: "Projections" },
  { href: "/longevity/hiring", label: "Team" },
  { href: "/longevity/faq", label: "FAQ" },
];

export default function LongevityFranchisePortal() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Compact navigation bar */}
      <div className="flex items-center h-11 px-4 bg-[#0A0A0A] text-white shrink-0 border-b border-white/10 relative z-50">
        {/* Left: Back to main site */}
        <Link href="/longevity" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-medium mr-4">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Back to WEG</span>
        </Link>

        {/* Center: Logo + Section dropdown */}
        <div className="flex-1 flex items-center justify-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/weg-logo-mark-white.png" 
              alt="Well Estate Group" 
              className="w-5 h-5 no-sharpen"
            />
            <span className="text-[11px] font-semibold tracking-[0.08em] text-white/90 group-hover:text-white transition-colors hidden sm:inline">
              WELL ESTATE GROUP
            </span>
          </Link>

          {/* Section Navigator */}
          <div className="relative">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <span>Navigate Sections</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${navOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {navOpen && (
              <>
                {/* Backdrop */}
                <div className="fixed inset-0 z-40" onClick={() => setNavOpen(false)} />
                {/* Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#141414] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-50">
                  <div className="p-1.5">
                    <div className="px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      Longevity Ventures
                    </div>
                    {navSections.map((section) => (
                      <Link
                        key={section.href}
                        href={section.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/70 hover:text-white hover:bg-white/8 transition-all"
                        onClick={() => setNavOpen(false)}
                      >
                        <span>{section.label}</span>
                      </Link>
                    ))}
                    <div className="border-t border-white/10 mt-1 pt-1">
                      <Link
                        href="/longevity"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[#B8860B] hover:text-[#D4A853] hover:bg-[#B8860B]/10 transition-all font-medium"
                        onClick={() => setNavOpen(false)}
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>All Projects</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Current location indicator */}
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#B8860B] px-2 py-0.5 rounded border border-[#B8860B]/30 bg-[#B8860B]/10">
            Franchise Portal
          </span>
        </div>
      </div>

      {/* Full-screen iframe */}
      <iframe
        src={PORTAL_URL}
        className="w-full border-0"
        style={{ height: 'calc(100vh - 44px)' }}
        title="Well Estate Group Franchise Portal"
        allow="clipboard-write; clipboard-read"
        loading="eager"
      />
    </div>
  );
}
