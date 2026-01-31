/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Shared layout with navigation for all pages
 */

import { useState } from "react";
import { Dna, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { href: "/investors", label: "Founders" },
  { href: "/team", label: "Advisors" },
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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <Dna className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-semibold tracking-tight">lumastem</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 font-body text-xs">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-md border transition-all ${
                  location === link.href
                    ? "text-primary font-medium border-primary/50 bg-primary/10"
                    : "text-muted-foreground border-border/50 hover:text-foreground hover:border-border hover:bg-muted/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:block">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-medium">
                Data Room
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background border-l border-border z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between h-20 px-6 border-b border-border">
                  <span className="font-display text-xl font-semibold">Menu</span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
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
                          className={`block px-4 py-3 rounded-lg font-body text-base transition-colors ${
                            location === link.href
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-foreground hover:bg-muted"
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
                  <Link href="/contact" onClick={closeMobileMenu}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body font-medium">
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

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Dna className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-semibold">lumastem</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground text-center">
              Live Longer. Live Happier. © 2025 Lumastem. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://lumastem.com" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Website
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
