/**
 * Analytics Hook — Lightweight engagement tracking
 * Uses Umami analytics (already loaded via index.html script tag)
 * Tracks: page views, section visibility, CTA clicks, time on page
 */

import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";

// Umami global interface
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, string | number>) => void;
    };
  }
}

/**
 * Track a custom event via Umami (gracefully no-ops if Umami not loaded)
 */
export function trackEvent(eventName: string, data?: Record<string, string | number>) {
  if (window.umami?.track) {
    window.umami.track(eventName, data);
  }
  // Also log to console in dev for debugging
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`, data || "");
  }
}

/**
 * Hook: Track page view on route change + time on page
 */
export function usePageTracking() {
  const [location] = useLocation();
  const startTime = useRef(Date.now());

  useEffect(() => {
    // Reset timer on page change
    startTime.current = Date.now();
    trackEvent("page_view", { path: location });

    return () => {
      // Track time spent when leaving page
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      if (timeSpent > 2) {
        trackEvent("page_time", { path: location, seconds: timeSpent });
      }
    };
  }, [location]);
}

/**
 * Hook: Track section visibility (engagement) using IntersectionObserver
 * Pass an array of section IDs to observe. Fires event when section becomes >50% visible.
 */
export function useSectionTracking(sectionIds: string[]) {
  const trackedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !trackedSections.current.has(entry.target.id)) {
            trackedSections.current.add(entry.target.id);
            trackEvent("section_view", {
              section: entry.target.id,
              path: window.location.pathname,
            });
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px" }
    );

    // Observe each section element
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);
}

/**
 * Hook: Track CTA button clicks
 */
export function useCtaTracking() {
  const trackCta = useCallback((ctaName: string, destination?: string) => {
    trackEvent("cta_click", {
      cta: ctaName,
      path: window.location.pathname,
      ...(destination ? { destination } : {}),
    });
  }, []);

  return trackCta;
}

/**
 * Hook: Track scroll depth (25%, 50%, 75%, 100%)
 */
export function useScrollDepthTracking() {
  const milestones = useRef<Set<number>>(new Set());
  const [location] = useLocation();

  useEffect(() => {
    milestones.current.clear();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
      
      [25, 50, 75, 100].forEach((milestone) => {
        if (scrollPercent >= milestone && !milestones.current.has(milestone)) {
          milestones.current.add(milestone);
          trackEvent("scroll_depth", { depth: milestone, path: location });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);
}
