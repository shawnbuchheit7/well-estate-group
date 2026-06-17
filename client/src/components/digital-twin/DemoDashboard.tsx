/**
 * Demo Dashboard — standalone version that uses local demo data
 * instead of tRPC/database queries. Used for Vercel demo deployment.
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
    <div className="h-screen flex flex-col overflow-hidden fl-theme-transition fl-bg-texture" style={{ background: "var(--fl-bg-deep)" }}>

      {/* ═══ Elite Frosted Glass Header ═══ */}
      <header className="flex-shrink-0 fl-glass-header sticky top-0 z-50">
        {/* Desktop header */}
        <div className="hidden md:flex px-4 h-11 items-center justify-between">

          {/* Left: Tab Navigation */}
          <nav className="flex items-center gap-0.5" data-tour="tab-nav">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[var(--fl-text-primary)] bg-[var(--fl-accent-glow)]"
                      : "text-[var(--fl-text-muted)] hover:text-[var(--fl-text-secondary)] hover:bg-[var(--fl-accent-glow)]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[var(--fl-accent)]" : ""}`} />
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--fl-accent)] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Theme Toggle + Bio Age Badge + Demo Badge */}
          <div className="flex items-center gap-3">
            {!isTwinTab && healthProfile && (
              <span className="text-xs text-[var(--fl-text-muted)] font-medium">
                {user.name || user.email}
              </span>
            )}

            {/* Demo Badge — non-interactive label */}
            <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded text-amber-400/70 uppercase tracking-widest select-none" style={{ letterSpacing: '0.2em' }}>
              Demo
            </span>

            {/* Tour Button */}
            <TourTriggerButton onClick={handleStartTour} />

            {healthProfile && (
              <div className="fl-animated-border" data-tour="bio-age-badge">
                <div className="flex items-center gap-2.5 rounded-lg px-4 py-1.5 fl-glow-gold" style={{ background: "var(--fl-bg-card)", border: "1px solid var(--fl-border-gold)" }}>
                  <span className="fl-label" style={{ color: "var(--fl-text-gold)", letterSpacing: "0.15em" }}>Bio Age</span>
                  <span className="fl-display text-2xl leading-none fl-gold-text">
                    {healthProfile?.biologicalAge || "--"}
                  </span>
                  {healthProfile?.biologicalAge && healthProfile?.chronologicalAge && (
                    <span className="text-[11px] font-semibold text-emerald-400">
                      {healthProfile.chronologicalAge - healthProfile.biologicalAge}y younger
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile header — ultra-compact single strip */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-2 h-9">
            <div className="flex items-center gap-1">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/UKotCKzgQInRqgjy.svg"
                alt="Fountain Life"
                className="h-4 opacity-80"
              />
              <span className="px-1.5 py-0.5 text-[8px] font-semibold rounded text-amber-400/70 uppercase tracking-widest select-none">Demo</span>
            </div>
            <nav className="flex items-center gap-0 overflow-x-auto no-scrollbar flex-1 mx-2" data-tour="tab-nav-mobile">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? "text-[var(--fl-text-primary)] bg-[var(--fl-accent-glow)]"
                        : "text-[var(--fl-text-muted)]"
                    }`}
                  >
                    <Icon className={`w-2.5 h-2.5 ${isActive ? "text-[var(--fl-accent)]" : ""}`} />
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1 right-1 h-[1px] bg-[var(--fl-accent)] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>
            <div className="flex items-center gap-1">
            </div>
          </div>
        </div>
      </header>

      {/* ═══ Content Area ═══ */}
      <div className="flex-1 overflow-hidden fl-bg-ambient" style={{ position: "relative", zIndex: 1 }}>

        {/* Digital Twin — Full bleed, immersive */}
        {activeTab === "twin" && (
          <>
            {organAssessments.length > 0 ? (
              <DigitalHealthTwin organAssessments={organAssessments} onTabChange={setActiveTab} gender={healthProfile?.gender as "male" | "female" | undefined} />
            ) : (
              <div className="flex justify-center items-center h-full">
                <Card className="p-12 text-center max-w-md" style={{ background: "var(--fl-bg-card)", border: "1px solid var(--fl-border)", boxShadow: "var(--fl-shadow-card)" }}>
                  <AlertCircle className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--fl-text-muted)" }} />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--fl-text-primary)" }}>No Health Data Available</h3>
                  <p className="text-sm" style={{ color: "var(--fl-text-muted)" }}>Your health assessments will appear here once they are completed.</p>
                </Card>
              </div>
            )}
          </>
        )}

        {/* Organ Details */}
        {activeTab === "organs" && (
          <div className="h-full overflow-y-auto p-3 md:p-5">
            {organAssessments.length > 0 ? (
              <OrganGrid organAssessments={organAssessments} />
            ) : (
              <Card className="p-12 text-center" style={{ background: "var(--fl-bg-card)", border: "1px solid var(--fl-border)", boxShadow: "var(--fl-shadow-card)" }}>
                <AlertCircle className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--fl-text-muted)" }} />
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--fl-text-primary)" }}>No Organ Assessments</h3>
                <p className="text-sm" style={{ color: "var(--fl-text-muted)" }}>Your organ health data will be displayed here.</p>
              </Card>
            )}
          </div>
        )}

        {/* Biomarkers */}
        {activeTab === "biomarkers" && (
          <div className="h-full overflow-y-auto p-2 md:p-5">
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
          <div className="h-full overflow-y-auto p-2 md:p-5">
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
          <div className="h-full overflow-y-auto p-2 md:p-5">
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
