/*
 * DESIGN: Well Estate Group - Premium Longevity Consultancy
 * Shared layout with navigation for all pages - Luxury Light Theme
 * Supports multiple sections: "longevity", "gtm", "gtm-zerowheel", "gtm-sample", "products"
 * OPTIMIZED: Enhanced footer, cross-pillar nav, luxury spacing, multi-project GTM
 */

import { useState } from "react";
import { Menu, X, ChevronLeft, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgressBar, BackToTop } from "@/components/NavigationEnhancements";
import { DarkModeToggle } from "@/components/PresentationMode";

interface LayoutProps {
  children: React.ReactNode;
  section?: "longevity" | "gtm" | "gtm-zerowheel" | "gtm-sample" | "products";
}

// Only show pages with real content
const longevityNavLinks = [
  { href: "/longevity", label: "About" },
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

// ZeroWheel GTM tabs
const zwNavLinks = [
  { href: "/gtm/zerowheel", label: "Overview" },
  { href: "/gtm/zerowheel/lines-of-business", label: "Lines of Business" },
  { href: "/gtm/zerowheel/sales", label: "Sales Enablement" },
  { href: "/gtm/zerowheel/strategic-markets", label: "Strategic Markets" },
  { href: "/gtm/zerowheel/global-markets", label: "Global Markets" },
  { href: "/gtm/zerowheel/sales-infrastructure", label: "Platform Stack" },
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

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Determine which nav links to use based on section and current location
  const isLongevityRoute = location.startsWith("/longevity");
  const isZWRoute = location.startsWith("/gtm/zerowheel");
  const isSampleRoute = location.startsWith("/gtm/sample");
  const isGtmProjectsRoute = location === "/gtm";
  const isGtmRoute = location.startsWith("/gtm");
  const isProductRoute = location.startsWith("/product-intelligence");
  const isVentureRoute = location.startsWith("/venture-capital");
  
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
  } else if (isLongevityRoute) {
    navLinks = longevityNavLinks;
    homeLink = "/longevity";
    sectionLabel = "Longevity Ventures";
    showDataRoom = true;
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
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />
      
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/[0.10]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        style={{ boxShadow: '0 1px 24px rgba(0,0,0,0.05)' }}
      >
        <div className="w-full px-6 lg:px-10 xl:px-16 flex items-center justify-between h-20">
          {/* Logo - Far Left with back button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {showBackButton && (
              <Link href={backLink} className="flex items-center gap-1 text-black/40 hover:text-black transition-colors mr-2" onClick={closeMobileMenu}>
                <ChevronLeft className="w-4 h-4" />
              </Link>
            )}
            <Link href={homeLink} className="flex items-center gap-3 group" onClick={closeMobileMenu}>
              <motion.img 
                src="/manus-storage/logo-gold_557c1883.png" 
                alt="Well Estate Group" 
                className="w-10 h-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-display text-lg font-semibold tracking-wide text-black group-hover:text-[#C9A962] transition-colors whitespace-nowrap">
                WELL ESTATE GROUP
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Visible tabs across the top */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center gap-1 font-body text-xs">
              {navLinks.map((link, index) => {
                const isActive = location === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative px-3 py-1.5 rounded-md border transition-all whitespace-nowrap ${
                        isActive
                          ? "text-white font-semibold border-black bg-black shadow-sm"
                          : "text-black/60 border-transparent hover:text-black hover:border-black/15 hover:bg-black/[0.03]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Section Label, Dark Mode Toggle, or Data Room Button - Far Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
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
              <span className="hidden sm:block font-mono text-[11px] text-black/35 tracking-wider uppercase">
                {sectionLabel}
              </span>
            ) : null}
            
            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-black hover:text-[#C9A962] transition-colors"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

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
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white border-l border-black/10 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between h-20 px-6 border-b border-black/8">
                  <span className="font-display text-xl font-semibold text-black">Menu</span>
                  <motion.button
                    onClick={closeMobileMenu}
                    className="p-2 text-black hover:text-[#C9A962] transition-colors"
                    aria-label="Close menu"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
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
                      className="flex items-center gap-2 px-4 py-2 text-black/50 hover:text-black transition-colors font-body text-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </Link>
                  </div>
                )}
                
                {/* Mobile Menu Links */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="flex flex-col gap-1 px-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={`block px-4 py-3 rounded-lg font-body text-base transition-all ${
                            location === link.href
                              ? "bg-black text-white font-semibold"
                              : "text-black/60 hover:bg-black/[0.03] hover:translate-x-2"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Menu Footer */}
                {showDataRoom && (
                  <div className="p-6 border-t border-black/8">
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
      <main className="pt-20">
        {children}
      </main>

      {/* Cross-Pillar Navigation */}
      {currentPillarIndex >= 0 && (
        <section className="py-12 bg-white border-t border-black/[0.08]">
          <div className="container px-6">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {prevPillar ? (
                <Link href={prevPillar.href} className="group flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:border-[#C9A962]/50 group-hover:bg-[#C9A962]/[0.04] transition-all">
                    <ChevronLeft className="w-4 h-4 text-black/40 group-hover:text-[#C9A962] transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-black/35 tracking-wider uppercase">Pillar {prevPillar.num}</p>
                    <p className="font-body text-sm text-black/70 group-hover:text-black transition-colors">{prevPillar.label}</p>
                  </div>
                </Link>
              ) : <div />}
              
              <Link href="/" className="font-mono text-[10px] text-black/30 tracking-wider uppercase hover:text-[#C9A962] transition-colors">
                All Pillars
              </Link>
              
              {nextPillar ? (
                <Link href={nextPillar.href} className="group flex items-center gap-3 text-right">
                  <div>
                    <p className="font-mono text-[10px] text-black/35 tracking-wider uppercase">Pillar {nextPillar.num}</p>
                    <p className="font-body text-sm text-black/70 group-hover:text-black transition-colors">{nextPillar.label}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center group-hover:border-[#C9A962]/50 group-hover:bg-[#C9A962]/[0.04] transition-all">
                    <ArrowRight className="w-4 h-4 text-black/40 group-hover:text-[#C9A962] transition-colors" />
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}

      {/* Back to Top Button */}
      <BackToTop />

      {/* Enhanced Footer with Contact CTA */}
      <footer className="py-16 border-t border-black/[0.10] bg-[#FAFAF8]">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            {/* Footer Top */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
              {/* Brand */}
              <div className="flex flex-col gap-4 max-w-sm">
                <Link href="/" className="flex items-center gap-3 group">
                  <motion.img 
                    src="/manus-storage/logo-gold_557c1883.png" 
                    alt="Well Estate Group" 
                    className="w-9 h-9"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="font-display text-base font-semibold tracking-wide text-black group-hover:text-[#C9A962] transition-colors">
                    WELL ESTATE GROUP
                  </span>
                </Link>
                <p className="font-body text-sm text-black/50 leading-relaxed">
                  Consulting Services in Fitness, Wellness & Longevity. Delivering end-to-end strategy from market entry to global expansion.
                </p>
              </div>

              {/* Footer Links + Contact */}
              <div className="flex flex-col md:flex-row gap-12">
                {/* Pillar Links */}
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-[10px] text-black/40 tracking-wider uppercase mb-1">Pillars</p>
                  {pillarOrder.map((pillar) => (
                    <Link key={pillar.href} href={pillar.href} className="font-body text-sm text-black/60 hover:text-[#C9A962] transition-colors">
                      {pillar.label}
                    </Link>
                  ))}
                </div>

                {/* Contact CTA */}
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-[10px] text-black/40 tracking-wider uppercase mb-1">Get in Touch</p>
                  <a 
                    href="mailto:info@wellestategroup.com" 
                    className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-black/15 hover:border-[#C9A962]/50 bg-white hover:bg-[#C9A962]/[0.03] transition-all"
                  >
                    <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center group-hover:bg-[#C9A962] transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-black">Inquire</p>
                      <p className="font-body text-xs text-black/45">info@wellestategroup.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-black/[0.10] to-transparent mb-8" />

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-[11px] text-black/35 tracking-wider">
                &copy; 2026 Well Estate Group. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className="font-mono text-[10px] text-black/25 tracking-wider">
                  CONFIDENTIAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
