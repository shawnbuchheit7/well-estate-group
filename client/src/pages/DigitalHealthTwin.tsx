/*
 * Digital Health Twin — Full Application Page
 * Renders the complete Digital Health Twin demo dashboard
 * directly from the ported components (no iframe)
 */

import { lazy, Suspense } from "react";
import FullScreenNav from "@/components/FullScreenNav";

const DemoDashboard = lazy(() => import("@/components/digital-twin/DemoDashboard"));

export default function DigitalHealthTwin() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <FullScreenNav
          currentLabel="Digital Health Twin"
          section="technology"
          backHref="/longevity/technology"
          backLabel="Back to Technology"
        />
      </div>
      <div className="pt-11">
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
      </div>
    </>
  );
}
