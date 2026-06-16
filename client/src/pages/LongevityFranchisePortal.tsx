/*
 * Longevity Franchise Portal — Full-screen embed of the WEG Franchise Portal
 * No parent nav or chrome — the portal has its own sidebar navigation
 */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const PORTAL_URL = "https://fountainfran-fruyeybc.manus.space";

export default function LongevityFranchisePortal() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Minimal escape bar — just a back button, no full nav */}
      <div className="flex items-center h-10 px-4 bg-black text-white shrink-0">
        <Link href="/longevity" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-medium">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to WEG</span>
        </Link>
      </div>
      {/* Full-screen iframe */}
      <iframe
        src={PORTAL_URL}
        className="flex-1 w-full border-0"
        title="Well Estate Group Franchise Portal"
        allow="clipboard-write; clipboard-read"
        loading="eager"
      />
    </div>
  );
}
