/*
 * DESIGN: Well Estate Group - Premium Longevity Consultancy
 * Shared layout with navigation for all pages - Luxury Light Theme
 * Supports multiple sections: "longevity", "gtm", "gtm-zerowheel", "gtm-sample", "products"
 * OPTIMIZED: Enhanced footer, cross-pillar nav, luxury spacing, multi-project GTM
 * Saltleaf routes use Saltleaf brand colors (#1a3e4c teal) instead of WEG gold
 */

import { useState } from "react";
import { Menu, X, ChevronLeft, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgressBar, BackToTop } from "@/components/NavigationEnhancements";
import { DarkModeToggle, usePresentationMode } from "@/components/PresentationMode";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FloatingCTA } from "@/components/FloatingCTA";

interface LayoutProps {
  children: React.ReactNode;
  section?: "longevity" | "longevity-performance" | "longevity-saltleaf" | "gtm" | "gtm-zerowheel" | "gtm-sample" | "products";
}

// Longevity Luxury Model nav links
const longevityNavLinks = [
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

// Saltleaf project nav links
const saltleafNavLinks = [
  { href: "/longevity/saltleaf", label: "Overview" },
  { href: "/longevity/saltleaf/longevity-suite", label: "Longevity Suite" },
  { href: "/longevity/saltleaf/fitness-layout", label: "Fitness Layout" },
  { href: "/longevity/saltleaf/level-3-wellness", label: "Level 3 Wellness" },
  { href: "/longevity/saltleaf/outdoor-wellness", label: "Outdoor Wellness" },
  { href: "/longevity/saltleaf/wellness-consultants", label: "Wellness Consultants" },
];

// Longevity Performance Model nav links
const longevityPerformanceNavLinks = [
  { href: "/longevity/performance-model", label: "Overview" },
  { href: "/longevity/performance-model/about", label: "About" },
  { href: "/longevity/performance-model/platform", label: "Platform" },
  { href: "/longevity/performance-model/products", label: "Products" },
  { href: "/longevity/performance-model/partnerships", label: "Partnerships" },
  { href: "/longevity/performance-model/diagnostics", label: "Diagnostics" },
  { href: "/longevity/performance-model/hospitality", label: "Hospitality" },
  { href: "/longevity/performance-model/academy", label: "Academy" },
];

// ZeroWheel GTM tabs
const zwNavLinks = [
  { href: "/gtm/zerowheel", label: "1. Overview" },
  { href: "/gtm/zerowheel/product-analysis", label: "2. Product Analysis" },
  { href: "/gtm/zerowheel/lines-of-business", label: "3. Lines of Business" },
  { href: "/gtm/zerowheel/sales", label: "4. Sales Enablement" },
  { href: "/gtm/zerowheel/commercial-strategy", label: "5. Commercial Strategy" },
  { href: "/gtm/zerowheel/strategic-markets", label: "6. Strategic Exercise" },
  { href: "/gtm/zerowheel/sales-infrastructure", label: "7. Infrastructure & Analytics" },
  { href: "/gtm/zerowheel/marketing-infrastructure", label: "8. Marketing & Growth" },
];

// Sample GTM tabs (original generic)
const sampleNavLinks = [
  { href: "/gtm/sample", label: "Overview" },
  { href: "/gtm/sample/lines-of-business", label: "Lines of Business" },
  { href: "/gtm/sample/sales", label: "Sales Enablement" },
  { href: "/gtm/sample/strategic-markets", label: "Strategic Markets" },
  { href: "/gtm/sample/global-markets", label: "Global Markets" },
  { href: "/gtm/sample/sales-infrastructure", label: "Platform Stack" },
];

// Product Intelligence section nav
const productNavLinks = [
  { href: "/product-intelligence", label: "Products" },
];

// Cross-pillar navigation
const pillarOrder = [
  { href: "/gtm", label: "Go-To-Market", num: "I" },
  { href: "/longevity", label: "Longevity Ventures", num: "II" },
  { href: "/product-intelligence", label: "Product Intelligence", num: "III" },
  { href: "/venture-capital", label: "Venture & Product Capital", num: "IV" },
];

export default function Layout({ children, section = "longevity" }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPresentMode } = usePresentationMode();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Determine which nav links to use based on section and current location
  const isEstateRoute = location.startsWith("/longevity/estate");
  const isLongevityPerformanceRoute = location.startsWith("/longevity/performance-model");
  const isSaltleafRoute = location.startsWith("/longevity/saltleaf");
  const isLongevityProjectsRoute = location === "/longevity";
  const isLongevityRoute = location.startsWith("/longevity");
  const isZWRoute = location.startsWith("/gtm/zerowheel");
  const isSampleRoute = location.startsWith("/gtm/sample");
  const isGtmProjectsRoute = location === "/gtm";
  const isGtmRoute = location.startsWith("/gtm");
  const isProductRoute = location.startsWith("/product-intelligence");
  const isVentureRoute = location.startsWith("/venture-capital");
  
  // Saltleaf brand accent color
  const saltleafAccent = "#1a3e4c";
  // Default WEG accent
  const wegAccent = "#B8860B";
  // Estate uses black/dark grey — NO GOLD
  const estateAccent = "#1A1A1A";
  // Active accent based on route
  const accent = isEstateRoute ? estateAccent : isSaltleafRoute ? saltleafAccent : wegAccent;
  
  let navLinks: typeof longevityNavLinks;
  let homeLink: string;
  let sectionLabel = "";
  let showDataRoom = false;
  let backLink = "/";
  
  if (isZWRoute || section === "gtm-zerowheel") {
    navLinks = zwNavLinks;
    homeLink = "/gtm/zerowheel";
    sectionLabel = "ZeroWheel";
    backLink = "/gtm";
  } else if (isSampleRoute || section === "gtm-sample") {
    navLinks = sampleNavLinks;
    homeLink = "/gtm/sample";
    sectionLabel = "Sample GTM";
    backLink = "/gtm";
  } else if (isGtmProjectsRoute || section === "gtm") {
    navLinks = [];
    homeLink = "/gtm";
    sectionLabel = "Go-To-Market";
    backLink = "/";
  } else if (isProductRoute || section === "products") {
    navLinks = productNavLinks;
    homeLink = "/product-intelligence";
    sectionLabel = "Product Intelligence";
  } else if (isVentureRoute) {
    navLinks = [];
    homeLink = "/";
    sectionLabel = "Venture & Product Capital";
  } else if (isEstateRoute) {
    navLinks = [
      { href: "/longevity/estate", label: "Overview" },
      { href: "/longevity/estate/about", label: "Vision" },
      { href: "/longevity/estate/opportunity", label: "Opportunity" },
      { href: "/longevity/estate/memberships", label: "Membership" },
      { href: "/longevity/estate/therapeutics", label: "Experience" },
      { href: "/longevity/estate/technology", label: "Technology" },
      { href: "/longevity/estate/projections", label: "Pipeline" },
      { href: "/longevity/estate/team", label: "Platform" },
      { href: "/longevity/estate/faq", label: "FAQ" },
    ];
    homeLink = "/longevity/estate";
    sectionLabel = "The Estate";
    backLink = "/longevity";
  } else if (isSaltleafRoute || section === "longevity-saltleaf") {
    navLinks = saltleafNavLinks;
    homeLink = "/longevity/saltleaf";
    sectionLabel = "Saltleaf on Estero Bay";
    backLink = "/longevity";
  } else if (isLongevityPerformanceRoute || section === "longevity-performance") {
    navLinks = longevityPerformanceNavLinks;
    homeLink = "/longevity/performance-model";
    sectionLabel = "Performance & Recovery Model";
    backLink = "/longevity";
  } else if (isLongevityProjectsRoute) {
    navLinks = [];
    homeLink = "/longevity";
    sectionLabel = "Longevity Ventures";
    backLink = "/";
  } else if (isLongevityRoute) {
    navLinks = longevityNavLinks;
    homeLink = "/longevity/luxury";
    sectionLabel = "Luxury Model";
    showDataRoom = true;
    backLink = "/longevity";
  } else {
    navLinks = longevityNavLinks;
    homeLink = "/";
    sectionLabel = "";
  }

  const showBackButton = isGtmRoute || isLongevityRoute || isProductRoute || isVentureRoute;

  // Determine current pillar for cross-pillar nav
  const currentPillarIndex = pillarOrder.findIndex(p => location.startsWith(p.href));
  const nextPillar = currentPillarIndex >= 0 && currentPillarIndex < pillarOrder.length - 1
    ? pillarOrder[currentPillarIndex + 1]
    : currentPillarIndex === pillarOrder.length - 1
    ? pillarOrder[0]
    : null;
  const prevPillar = currentPillarIndex > 0
    ? pillarOrder[currentPillarIndex - 1]
    : currentPillarIndex === 0
    ? pillarOrder[pillarOrder.length - 1]
    : null;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      {/* Scroll Progress Indicator — hidden in present mode */}
      {!isPresentMode && <ScrollProgressBar />}
      
      {/* Navigation — hidden in present mode */}
      {!isPresentMode && (
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/97"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.03)' }}
      >
        <div className="w-full px-6 lg:px-10 xl:px-16 flex flex-col">
          <div className="flex items-center justify-between h-16">
          {/* Logo - Far Left with back button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {showBackButton && (
              <Link href={backLink} className="flex items-center gap-1 transition-colors mr-2 text-black/55 hover:text-black" onClick={closeMobileMenu}>
                <ChevronLeft className="w-4 h-4" />
              </Link>
            )}
            {isSaltleafRoute ? (
              <Link href="/longevity/saltleaf" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
                <motion.img 
                  src="/saltleaf-logo.svg" 
                  alt="Saltleaf" 
                  className="w-8 h-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="font-display text-lg font-bold tracking-[0.04em] transition-colors whitespace-nowrap text-black" style={{ color: undefined }}>
                  SALTLEAF
                </span>
              </Link>
            ) : isEstateRoute ? (
              <Link href="/longevity/estate" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
                <span className="font-display text-lg font-bold tracking-[0.25em] transition-colors whitespace-nowrap text-black uppercase">
                  THE ESTATE
                </span>
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
                <motion.img 
                  src="/weg-logo-mark-gold-dark.png" 
                  alt="Well Estate Group" 
                  className="w-10 h-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="font-display text-lg font-bold tracking-[0.04em] group-hover:text-[#B8860B] transition-colors whitespace-nowrap text-black">
                  WELL ESTATE GROUP
                </span>
              </Link>
            )}
          </div>
          
          {/* Desktop Navigation - only shown inline when few tabs */}
          {navLinks.length <= 6 && (
            <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
              <div className="flex items-center gap-1 font-body text-xs">
                {navLinks.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <div
                      key={link.href}
                    >
                      <Link
                        href={link.href}
                        className={`relative px-3.5 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                          isActive
                            ? "text-white font-semibold border-2 shadow-sm"
                            : "text-black/70 border hover:text-black"
                        }`}
                        style={isActive
                          ? { borderColor: accent, backgroundColor: accent, boxShadow: `0 2px 8px ${accent}40` }
                          : { borderColor: `${accent}66`, }
                        }
                        onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = `${accent}99`; e.currentTarget.style.backgroundColor = `${accent}08`; } }}
                        onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = `${accent}66`; e.currentTarget.style.backgroundColor = 'transparent'; } }}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* Section Label, Dark Mode Toggle, or Data Room Button - Far Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <DarkModeToggle />
            {showDataRoom ? (
              <Link href="/longevity/data-room" className="hidden sm:block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-black hover:bg-black/90 text-white font-body font-medium shadow-md hover:shadow-lg transition-all px-6">
                    Data Room
                  </Button>
                </motion.div>
              </Link>
            ) : sectionLabel ? (
              <span className="hidden sm:block font-mono text-[11px] tracking-wider uppercase text-black/50">
                {sectionLabel}
              </span>
            ) : null}
            
            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 transition-colors text-black"
              style={{ }}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={(e) => { e.currentTarget.style.color = accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
          </div>
          {/* Second row: scrollable tab strip — only shown when many tabs */}
          {navLinks.length > 6 && (
            <div className="hidden lg:block relative">
              <div className="overflow-x-auto scrollbar-hide pb-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="flex items-center justify-center gap-1 px-4 py-1.5 font-body text-xs w-full">
                  {navLinks.map((link) => {
                    const isActive = location === link.href;
                    return (
                      <div
                        key={link.href}
                      >
                        <Link
                          href={link.href}
                          className={`relative px-3 py-1 rounded-md transition-all whitespace-nowrap text-[11px] ${
                            isActive
                              ? "text-white font-semibold border-2 shadow-sm"
                              : "text-black/70 border hover:text-black"
                          }`}
                          style={isActive
                            ? { borderColor: accent, backgroundColor: accent }
                            : { borderColor: `${accent}66` }
                          }
                          onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = `${accent}99`; e.currentTarget.style.backgroundColor = `${accent}08`; } }}
                          onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = `${accent}66`; e.currentTarget.style.backgroundColor = 'transparent'; } }}
                        >
                          {link.label}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}
        </div>
      </motion.nav>
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl"
              style={{ borderLeft: `1px solid ${accent}88` }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between h-20 px-6" style={{ borderBottom: `1px solid ${accent}66` }}>
                  <span className="font-display text-xl font-semibold text-black">Menu</span>
                  <motion.button
                    onClick={closeMobileMenu}
                    className="p-2 text-black transition-colors"
                    aria-label="Close menu"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
                
                {/* Back to Landing */}
                {showBackButton && (
                  <div className="px-4 pt-4">
                    <Link
                      href={backLink}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 px-4 py-2 text-black/65 hover:text-black transition-colors font-body text-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </Link>
                  </div>
                )}
                
                {/* Mobile Menu Links */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="flex flex-col gap-1 px-4">
                    {navLinks.map((link) => (
                      <div
                        key={link.href}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={`block px-4 py-3 rounded-lg font-body text-base transition-all ${
                            location === link.href
                              ? "text-white font-semibold"
                              : "text-black/60 hover:bg-black/[0.03] hover:translate-x-2"
                          }`}
                          style={location === link.href ? { backgroundColor: accent } : undefined}
                        >
                          {link.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Menu Footer */}
                {showDataRoom && (
                  <div className="p-6" style={{ borderTop: `1px solid ${accent}66` }}>
                    <Link href="/longevity/data-room" onClick={closeMobileMenu}>
                      <Button className="w-full bg-black hover:bg-black/90 text-white font-body font-medium shadow-md">
                        Data Room
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={isPresentMode ? "pt-0" : (navLinks.length > 6 ? "pt-28" : "pt-20")}>
        {children}
      </main>

      {/* Cross-Pillar Navigation — hidden on ZeroWheel, Saltleaf, and Estate pages, and in present mode */}
      {!isPresentMode && currentPillarIndex >= 0 && !isZWRoute && !isSaltleafRoute && !isEstateRoute && (
        <section className="py-12 border-t bg-white" style={{ borderColor: `${accent}66` }}>
          <div className="container px-6">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {prevPillar ? (
                <Link href={prevPillar.href} className="group flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all" style={{ borderColor: `${accent}66` }}>
                    <ChevronLeft className="w-4 h-4 transition-colors text-black/55" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-wider uppercase text-black/50">Pillar {prevPillar.num}</p>
                    <p className="font-body text-sm transition-colors text-black/70 group-hover:text-black">{prevPillar.label}</p>
                  </div>
                </Link>
              ) : <div />}
              
              <Link href="/" className="font-mono text-[10px] tracking-wider uppercase transition-colors text-black/45" style={{ }}>
                All Pillars
              </Link>
              
              {nextPillar ? (
                <Link href={nextPillar.href} className="group flex items-center gap-3 text-right">
                  <div>
                    <p className="font-mono text-[10px] tracking-wider uppercase text-black/50">Pillar {nextPillar.num}</p>
                    <p className="font-body text-sm transition-colors text-black/70 group-hover:text-black">{nextPillar.label}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all" style={{ borderColor: `${accent}66` }}>
                    <ArrowRight className="w-4 h-4 transition-colors text-black/55" />
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}

      {/* Back to Top Button — hidden in present mode */}
      {!isPresentMode && <BackToTop />}
      {!isPresentMode && <FloatingCTA />}

      {/* Footer — hidden in present mode */}
      {!isPresentMode && isEstateRoute && (
        <footer className="py-16 border-t bg-[#0A0A0A]" style={{ borderColor: 'rgba(250,247,242,0.08)' }}>
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
                <div className="flex flex-col gap-4 max-w-sm">
                  <Link href="/longevity/estate" className="flex items-center gap-3 group">
                    <span className="font-display text-base font-semibold tracking-[0.25em] transition-colors text-white uppercase">
                      THE ESTATE
                    </span>
                  </Link>
                  <p className="font-body text-sm leading-relaxed text-white/60">
                    Where Vitality is the Ultimate Luxury. The world's first residential ecosystem built entirely around longevity.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex flex-col gap-3">
                    <p className="font-mono text-[10px] tracking-wider uppercase mb-1 text-white/50">Explore</p>
                    <Link href="/longevity/estate" className="font-body text-sm hover:text-white transition-colors text-white/60">Overview</Link>
                    <Link href="/longevity/estate/about" className="font-body text-sm hover:text-white transition-colors text-white/60">Vision</Link>
                    <Link href="/longevity/estate/opportunity" className="font-body text-sm hover:text-white transition-colors text-white/60">Opportunity</Link>
                    <Link href="/longevity/estate/memberships" className="font-body text-sm hover:text-white transition-colors text-white/60">Membership</Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-mono text-[10px] tracking-wider uppercase mb-1 text-white/50">Contact</p>
                    <a 
                      href="mailto:shawn@wellestategroup.com" 
                      className="group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all bg-white/5"
                      style={{ borderColor: 'rgba(250,247,242,0.15)' }}
                    >
                      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-white">Inquire</p>
                        <p className="font-body text-xs text-white/60">shawn@wellestategroup.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-body text-[11px] tracking-wider text-white/40">
                  &copy; 2026 The Estate. All rights reserved.
                </p>
                <span className="font-mono text-[10px] tracking-wider text-white/20">CONFIDENTIAL</span>
              </div>
            </div>
          </div>
        </footer>
      )}
      {!isPresentMode && !isEstateRoute && (
      <footer className="py-16 border-t bg-[#1A1A1A]" style={{ borderColor: `${accent}66` }}>
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            {/* Footer Top */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
              {/* Brand */}
              <div className="flex flex-col gap-4 max-w-sm">
                {isSaltleafRoute ? (
                  <>
                    <Link href="/longevity/saltleaf" className="flex items-center gap-3 group">
                      <motion.img 
                        src="/saltleaf-logo.svg" 
                        alt="Saltleaf" 
                        className="w-7 h-9 brightness-[2] invert"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="font-display text-base font-semibold tracking-wide transition-colors text-white">
                        SALTLEAF ON ESTERO BAY
                      </span>
                    </Link>
                    <p className="font-body text-sm leading-relaxed text-white/60">
                      Wellness Advisory for Saltleaf Tower 1. Curating world-class longevity, fitness, and recovery amenities for a premier coastal community.
                    </p>
                  </>
                ) : (
                  <>
                    <Link href="/" className="flex items-center gap-3 group">
                      <motion.img 
                        src="/weg-logo-mark-white.png" 
                        alt="Well Estate Group" 
                        className="w-9 h-9"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="font-display text-base font-semibold tracking-wide group-hover:text-[#B8860B] transition-colors text-white">
                        WELL ESTATE GROUP
                      </span>
                    </Link>
                    <p className="font-body text-sm leading-relaxed text-white/60">
                      Consulting Services in Fitness, Wellness & Longevity. Delivering end-to-end strategy from market entry to global expansion.
                    </p>
                  </>
                )}
              </div>

              {/* Footer Links + Contact */}
              <div className="flex flex-col md:flex-row gap-12">
                {/* Pillar Links — hidden on ZeroWheel and Saltleaf project pages */}
                {!isZWRoute && !isSaltleafRoute && (
                  <div className="flex flex-col gap-3">
                    <p className="font-mono text-[10px] tracking-wider uppercase mb-1" style={{ color: accent }}>Pillars</p>
                    {pillarOrder.map((pillar) => (
                      <Link key={pillar.href} href={pillar.href} className="font-body text-sm hover:text-white transition-colors text-white/60">
                        {pillar.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Saltleaf section links */}
                {isSaltleafRoute && (
                  <div className="flex flex-col gap-3">
                    <p className="font-mono text-[10px] tracking-wider uppercase mb-1" style={{ color: accent }}>Sections</p>
                    {saltleafNavLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="font-body text-sm hover:text-white transition-colors text-white/60">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Contact CTA */}
                {!isSaltleafRoute && (
                  <div className="flex flex-col gap-3">
                    <p className="font-mono text-[10px] tracking-wider uppercase mb-1" style={{ color: accent }}>Get in Touch</p>
                    <a 
                      href="mailto:info@wellestategroup.com" 
                      className="group flex items-center gap-3 px-5 py-3 rounded-xl border transition-all bg-white/5"
                      style={{ borderColor: `${accent}66` }}
                    >
                      <div className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: accent }}>
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-white">Inquire</p>
                        <p className="font-body text-xs text-white/60">info@wellestategroup.com</p>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Divider */}
            <div className="h-px bg-gradient-to-r from-transparent to-transparent mb-8" style={{ backgroundImage: `linear-gradient(to right, transparent, ${accent}4D, transparent)` }} />

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-[11px] tracking-wider text-white/40">
                {isSaltleafRoute
                  ? <>&copy; 2026 Saltleaf on Estero Bay. Confidential wellness advisory.</>
                  : <>&copy; 2026 Well Estate Group. All rights reserved.</>
                }
              </p>
              <div className="flex items-center gap-6">
                <span className="font-mono text-[10px] tracking-wider text-white/20">
                  CONFIDENTIAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
}
