/*
 * DESIGN: Well Estate Group - Premium Longevity Consultancy
 * Shared layout with navigation for all pages - Light Theme
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgressBar, BackToTop } from "@/components/NavigationEnhancements";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/opportunity", label: "Opportunity" },
  { href: "/memberships", label: "Memberships" },
  { href: "/therapeutics", label: "Therapeutics" },
  { href: "/technology", label: "Technology" },
  { href: "/use-of-funds", label: "Funds" },
  { href: "/performance", label: "Economics" },
  { href: "/projections", label: "Projections" },
  { href: "/hiring", label: "Team" },
  { href: "/faq", label: "FAQ" },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />
      
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="w-full px-6 lg:px-10 xl:px-16 flex items-center justify-between h-20">
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" onClick={closeMobileMenu}>
            <motion.img 
              src="/images/logos/logo-icon-dark-outline.png" 
              alt="Well Estate Group" 
              className="w-10 h-10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <span className="font-display text-lg font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
              WELL ESTATE GROUP
            </span>
          </Link>
          
          {/* Desktop Navigation - Visible tabs across the top */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center gap-1 font-body text-xs">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-2 py-1.5 rounded-md border transition-all whitespace-nowrap ${
                      location === link.href
                        ? "text-primary font-medium border-primary/50 bg-primary/10"
                        : "text-muted-foreground border-transparent hover:text-foreground hover:border-border hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                    {location === link.href && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        layoutId="navIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Data Room Button - Far Right */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link href="/data-room" className="hidden sm:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white font-body font-medium shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all px-6">
                  Data Room
                </Button>
              </motion.div>
            </Link>
            
            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background border-l border-border z-50 lg:hidden shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between h-20 px-6 border-b border-border">
                  <span className="font-display text-xl font-semibold">Menu</span>
                  <motion.button
                    onClick={closeMobileMenu}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Close menu"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
                
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
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-foreground hover:bg-muted hover:translate-x-2"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-border">
                  <Link href="/data-room" onClick={closeMobileMenu}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-body font-medium shadow-md">
                      Data Room
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.img 
                src="/images/logos/logo-icon-dark-outline.png" 
                alt="Well Estate Group" 
                className="w-8 h-8"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-display text-lg font-semibold tracking-wide group-hover:text-primary transition-colors">WELL ESTATE GROUP</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground text-center">
              Premium Longevity Consulting. © 2025 Well Estate Group. All rights reserved.
            </p>
            <div className="flex gap-6">
              <motion.a 
                href="#" 
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                Website
              </motion.a>
              <motion.a 
                href="#" 
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy
              </motion.a>
              <motion.a 
                href="#" 
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
