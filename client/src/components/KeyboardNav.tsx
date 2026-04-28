/**
 * KeyboardNav - Enables keyboard shortcuts for navigating between GTM tabs
 * Left/Right arrows navigate between tabs when on a GTM page
 * Supports both ZeroWheel and Sample GTM route sets
 */

import { useEffect } from "react";
import { useLocation } from "wouter";

const zwRoutes = [
  "/gtm/zerowheel",
  "/gtm/zerowheel/lines-of-business",
  "/gtm/zerowheel/sales",
  "/gtm/zerowheel/strategic-markets",
  "/gtm/zerowheel/global-markets",
  "/gtm/zerowheel/sales-infrastructure",
  "/gtm/zerowheel/business-intelligence",
  "/gtm/zerowheel/marketing-infrastructure",
  "/gtm/zerowheel/affiliate-program",
];

const sampleRoutes = [
  "/gtm/sample",
  "/gtm/sample/lines-of-business",
  "/gtm/sample/sales",
  "/gtm/sample/strategic-markets",
  "/gtm/sample/global-markets",
  "/gtm/sample/sales-infrastructure",
];

export default function KeyboardNav() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Determine which route set we're in
      let routes: string[] | null = null;
      if (zwRoutes.includes(location)) routes = zwRoutes;
      else if (sampleRoutes.includes(location)) routes = sampleRoutes;
      
      if (!routes) return;

      const currentIndex = routes.indexOf(location);
      if (currentIndex === -1) return;

      // Don't interfere with input fields
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, routes.length - 1);
        if (nextIndex !== currentIndex) {
          setLocation(routes[nextIndex]);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        if (prevIndex !== currentIndex) {
          setLocation(routes[prevIndex]);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [location, setLocation]);

  return null; // This component is invisible — it just listens for keys
}
