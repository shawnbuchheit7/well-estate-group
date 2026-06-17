/*
 * Longevity Franchise Portal — Branded launcher page
 * Keeps the URL at wellestategroup.com/longevity/franchise-portal while
 * providing navigation back to the main site sections. Opens the external
 * franchise portal in a new tab for full functionality.
 */
import { useState } from "react";
import { ArrowLeft, ChevronDown, ExternalLink, Lock, BookOpen, Users, BarChart3, FileText } from "lucide-react";
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

const portalFeatures = [
  { icon: BookOpen, title: "Franchise Playbook", desc: "SOPs, brand standards, and operational guides" },
  { icon: BarChart3, title: "Launch Roadmap", desc: "Five-phase path from agreement to steady state" },
  { icon: Users, title: "Corporate Support Pod", desc: "Your dedicated leadership team contacts" },
  { icon: FileText, title: "Compliance & Records", desc: "Regulatory documents and acknowledgments" },
];

export default function LongevityFranchisePortal() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-[#FAFAF7] flex flex-col">
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
                <div className="fixed inset-0 z-40" onClick={() => setNavOpen(false)} />
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

      {/* Main content — branded launcher */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl w-full mx-auto text-center px-8 pt-16 pb-12">
          {/* Logo & Title */}
          <img 
            src="/weg-logo-mark-gold-dark.png" 
            alt="Well Estate Group" 
            className="w-16 h-16 mx-auto mb-6 no-sharpen"
          />
          <h1 className="text-3xl font-light text-[#1A1A1A] tracking-tight mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            International Franchise Portal
          </h1>
          <p className="text-base text-[#555] font-light leading-relaxed max-w-lg mx-auto mb-10">
            Your living playbook from corporate — site selection, build-out, hiring, licensing, and day-to-day operations.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {portalFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-5 border border-[#E8E4DE] text-left shadow-sm">
                <feature.icon className="w-5 h-5 text-[#C5A059] mb-3" />
                <div className="text-sm font-medium text-[#1A1A1A] mb-1">{feature.title}</div>
                <div className="text-xs text-[#777] leading-relaxed">{feature.desc}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white text-base font-medium rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            <span>Open Franchise Portal</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          {/* Security note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#999]">
            <Lock className="w-4 h-4" />
            <span>Secure access · Authorized partners only</span>
          </div>
        </div>
      </div>
    </div>
  );
}
