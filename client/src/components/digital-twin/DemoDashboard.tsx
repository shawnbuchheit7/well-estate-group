/**
 * Demo Dashboard — WEG-branded Digital Health Twin
 * Luxury white/gold aesthetic with Playfair Display headings
 */
import "./digital-twin.css";
import { Card } from "@/components/ui/card";
import DigitalHealthTwin from "./DigitalHealthTwin";
import { OrganGrid } from "./OrganGrid";
import { AlertCircle, Dna, BarChart3, Clock, Layers, LineChart } from "lucide-react";
import { HealthTimeline } from "./HealthTimeline";
import { Biomarkers } from "./Biomarkers";
import { BiomarkerTrends } from "./BiomarkerTrends";
import { OnboardingTour, TourTriggerButton } from "./OnboardingTour";

import { useState, useMemo, useCallback, useRef } from "react";
import { filterBiomarkersByGender } from "./genderBiomarkers";
import { useDemoAuth, useDemoHealthData } from "./useDemoData";

export default function DemoDashboard() {
  const { user } = useDemoAuth();
  const [activeTab, setActiveTab] = useState("twin");

  const {
    healthProfile,
    organAssessments,
    organsWithHistory,
    biomarkersWithHistory: biomarkersWithHistoryRaw,
    assessments,
    timeline,
    goalsForBiomarkers,
    insightsForBiomarkers,
    insightsLoading,
    handleSetGoal,
    handleGenerateInsights,
    handleAskZori,
    organsLoading,
    biomarkersLoading,
    timelineLoading,
  } = useDemoHealthData();

  /* ─── Onboarding Tour ─── */
  const [tourOpen, setTourOpen] = useState(false);
  const expandedBiomarkerRef = useRef<string | null>(null);

  const handleStartTour = useCallback(() => {
    setTourOpen(true);
  }, []);

  const handleCloseTour = useCallback(() => {
    setTourOpen(false);
    localStorage.setItem("fl-tour-completed", "true");
  }, []);

  const handleTourNavigateTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const handleTourExpandBiomarker = useCallback((name: string) => {
    expandedBiomarkerRef.current = name;
    setExpandedBiomarkerForTour(name);
  }, []);

  const [expandedBiomarkerForTour, setExpandedBiomarkerForTour] = useState<string | null>(null);

  // Filter biomarkers based on member gender
  const biomarkersWithHistory = useMemo(
    () => filterBiomarkersByGender(biomarkersWithHistoryRaw, healthProfile?.gender as "male" | "female" | undefined),
    [biomarkersWithHistoryRaw, healthProfile?.gender]
  );

  /* ─── Tab Config ─── */
  const tabs = [
    { id: "twin", label: "Digital Twin", icon: Dna },
    { id: "organs", label: "Organs", icon: Layers },
    { id: "biomarkers", label: "Biomarkers", icon: BarChart3 },
    { id: "trends", label: "Trends", icon: LineChart },
    { id: "timeline", label: "Timeline", icon: Clock },
  ];

  const isTwinTab = activeTab === "twin";

  return (
    <div className="dht-root h-screen flex flex-col overflow-hidden" style={{ background: "var(--fl-bg-deep)" }}>

      {/* ═══ WEG Luxury Header ═══ */}
      <header className="flex-shrink-0 sticky top-0 z-50" style={{
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(20px) saturate(1.5)",
        WebkitBackdropFilter: "blur(20px) saturate(1.5)",
        borderBottom: "1px solid rgba(184, 134, 11, 0.20)",
        boxShadow: "0 1px 0 rgba(184, 134, 11, 0.05), 0 4px 20px rgba(0, 0, 0, 0.03)"
      }}>
        {/* Desktop header */}
        <div className="hidden md:flex px-5 h-12 items-center justify-between">

          {/* Left: Tab Navigation */}
          <nav className="flex items-center gap-1" data-tour="tab-nav">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[13px] transition-all duration-200 ${
                    isActive
                      ? "font-semibold"
                      : "font-medium"
                  }`}
                  style={{
                    color: isActive ? "#0A0A0A" : "#888888",
                    background: isActive ? "rgba(184, 134, 11, 0.08)" : "transparent",
                    border: isActive ? "1px solid rgba(184, 134, 11, 0.30)" : "1px solid transparent",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: isActive ? "#B8860B" : undefined }} />
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full" style={{ background: "#B8860B" }} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: User + Bio Age Badge */}
          <div className="flex items-center gap-3">
            {!isTwinTab && healthProfile && (
              <span className="text-xs font-medium" style={{ color: "#888", fontFamily: "'DM Sans', sans-serif" }}>
                {user.name || user.email}
              </span>
            )}

            {/* WEG Demo Badge */}
            <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded uppercase select-none" style={{
              letterSpacing: '0.15em',
              color: '#B8860B',
              border: '1px solid rgba(184, 134, 11, 0.30)',
              background: 'rgba(184, 134, 11, 0.06)',
              fontFamily: "'Space Mono', monospace",
            }}>
              Demo
            </span>

            {/* Tour Button */}
            <TourTriggerButton onClick={handleStartTour} />

            {healthProfile && (
              <div data-tour="bio-age-badge">
                <div className="flex items-center gap-2.5 rounded-lg px-4 py-1.5" style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(184, 134, 11, 0.50)",
                  boxShadow: "0 0 20px rgba(184, 134, 11, 0.08)"
                }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#B8860B"
                  }}>Bio Age</span>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    lineHeight: 1,
                    color: "#0A0A0A"
                  }}>
                    {healthProfile?.biologicalAge || "--"}
                  </span>
                  {healthProfile?.biologicalAge && healthProfile?.chronologicalAge && (
                    <span className="text-[11px] font-semibold" style={{ color: "#2D8A4E" }}>
                      {healthProfile.chronologicalAge - healthProfile.biologicalAge}y younger
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile header */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-3 h-10">
            <span className="px-1.5 py-0.5 text-[8px] font-semibold rounded uppercase select-none" style={{
              letterSpacing: '0.15em',
              color: '#B8860B',
              fontFamily: "'Space Mono', monospace",
            }}>WEG</span>
            <nav className="flex items-center gap-0 overflow-x-auto no-scrollbar flex-1 mx-2" data-tour="tab-nav-mobile">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium transition-all whitespace-nowrap flex-shrink-0"
                    style={{
                      color: isActive ? "#0A0A0A" : "#888888",
                      background: isActive ? "rgba(184, 134, 11, 0.08)" : "transparent",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <Icon className="w-2.5 h-2.5" style={{ color: isActive ? "#B8860B" : undefined }} />
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1 right-1 h-[1px] rounded-full" style={{ background: "#B8860B" }} />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* ═══ Content Area ═══ */}
      <div className="flex-1 overflow-hidden" style={{ position: "relative", zIndex: 1, background: "var(--fl-bg-base)" }}>

        {/* Digital Twin — Full bleed, immersive */}
        {activeTab === "twin" && (
          <>
            {organAssessments.length > 0 ? (
              <DigitalHealthTwin organAssessments={organAssessments} onTabChange={setActiveTab} gender={healthProfile?.gender as "male" | "female" | undefined} />
            ) : (
              <div className="flex justify-center items-center h-full">
                <Card className="p-12 text-center max-w-md" style={{ background: "#FFFFFF", border: "1px solid rgba(184, 134, 11, 0.25)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                  <AlertCircle className="w-10 h-10 mx-auto mb-4" style={{ color: "#888" }} />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#0A0A0A", fontFamily: "'Playfair Display', serif" }}>No Health Data Available</h3>
                  <p className="text-sm" style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}>Your health assessments will appear here once they are completed.</p>
                </Card>
              </div>
            )}
          </>
        )}

        {/* Organ Details */}
        {activeTab === "organs" && (
          <div className="h-full overflow-y-auto p-3 md:p-6">
            {organAssessments.length > 0 ? (
              <OrganGrid organAssessments={organAssessments} />
            ) : (
              <Card className="p-12 text-center" style={{ background: "#FFFFFF", border: "1px solid rgba(184, 134, 11, 0.25)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                <AlertCircle className="w-10 h-10 mx-auto mb-4" style={{ color: "#888" }} />
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#0A0A0A", fontFamily: "'Playfair Display', serif" }}>No Organ Assessments</h3>
                <p className="text-sm" style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}>Your organ health data will be displayed here.</p>
              </Card>
            )}
          </div>
        )}

        {/* Biomarkers */}
        {activeTab === "biomarkers" && (
          <div className="h-full overflow-y-auto p-2 md:p-6">
            <Biomarkers
              dbBiomarkers={biomarkersWithHistory}
              goals={goalsForBiomarkers}
              insights={insightsForBiomarkers}
              insightsLoading={insightsLoading}
              onSetGoal={handleSetGoal}
              onGenerateInsights={handleGenerateInsights}
              onAskZori={handleAskZori}
              expandBiomarkerName={expandedBiomarkerForTour}
            />
          </div>
        )}

        {/* Trends */}
        {activeTab === "trends" && (
          <div className="h-full overflow-y-auto p-2 md:p-6">
            <BiomarkerTrends
              dbBiomarkers={biomarkersWithHistory}
              timelineEvents={timeline.map((t: any) => ({
                id: String(t.id),
                date: t.eventDate,
                title: t.title,
                category: t.eventType || "assessment",
                status: "completed",
                result: "",
                resultStatus: "neutral",
              }))}
              goals={goalsForBiomarkers}
            />
          </div>
        )}

        {/* Timeline */}
        {activeTab === "timeline" && (
          <div className="h-full overflow-y-auto p-2 md:p-6">
            <HealthTimeline dbTimeline={timeline} />
          </div>
        )}
      </div>

      {/* Onboarding Tour */}
      <OnboardingTour
        isOpen={tourOpen}
        onClose={handleCloseTour}
        onNavigateTab={handleTourNavigateTab}
        onExpandBiomarker={handleTourExpandBiomarker}
      />
    </div>
  );
}
