/*
 * Digital Health Twin — Full Application Page
 * Renders the complete Digital Health Twin demo dashboard
 * directly from the ported components (no iframe)
 */

import { lazy, Suspense } from "react";

const DemoDashboard = lazy(() => import("@/components/digital-twin/DemoDashboard"));

export default function DigitalHealthTwin() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#B8860B] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-body text-sm text-black/50">Loading Digital Health Twin...</p>
        </div>
      </div>
    }>
      <DemoDashboard />
    </Suspense>
  );
}
