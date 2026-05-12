/**
 * AnalyticsProvider — Global analytics tracking component
 * Mounts once in the app tree to enable page view, scroll depth, and engagement tracking.
 * Uses the Umami analytics script already loaded in index.html.
 */

import { usePageTracking, useScrollDepthTracking } from "@/hooks/useAnalytics";

export default function AnalyticsProvider() {
  // Track page views and time on page
  usePageTracking();
  
  // Track scroll depth milestones
  useScrollDepthTracking();

  return null; // Invisible component
}
