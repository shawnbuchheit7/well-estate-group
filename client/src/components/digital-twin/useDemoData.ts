/**
 * Hook that provides demo data matching the shape of tRPC queries.
 * Used when the app is in demo mode (no auth/database configured).
 */
import { useMemo, useCallback, useState } from "react";
import {
  DEMO_USER,
  DEMO_HEALTH_PROFILE,
  DEMO_ORGAN_ASSESSMENTS,
  DEMO_ORGAN_HISTORY,
  DEMO_ORGANS_WITH_HISTORY,
  DEMO_BIOMARKERS_WITH_HISTORY,
  DEMO_BIOMARKERS,
  DEMO_ASSESSMENTS,
  DEMO_TIMELINE,
  DEMO_GOALS,
  DEMO_INSIGHTS,
} from "./demoData";

export function useDemoAuth() {
  return {
    user: DEMO_USER,
    loading: false,
    error: null,
    isAuthenticated: true,
    refresh: () => Promise.resolve(),
    logout: async () => {},
  };
}

export function useDemoHealthData() {
  const [goals, setGoals] = useState(DEMO_GOALS);

  const handleSetGoal = useCallback((biomarkerName: string, targetValue: number, targetDate?: string) => {
    setGoals(prev => {
      const existing = prev.find(g => g.biomarkerName === biomarkerName);
      if (existing) {
        return prev.map(g =>
          g.biomarkerName === biomarkerName
            ? { ...g, targetValue: targetValue.toString(), targetDate: targetDate ? new Date(targetDate) : g.targetDate }
            : g
        );
      }
      return [...prev, {
        id: prev.length + 1,
        userId: 1,
        biomarkerName,
        targetValue: targetValue.toString(),
        targetDate: targetDate ? new Date(targetDate) : new Date("2026-06-15"),
        notes: "",
        isActive: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }];
    });
  }, []);

  const goalsForBiomarkers = useMemo(() => {
    return goals.map(g => ({
      biomarkerName: g.biomarkerName,
      targetValue: parseFloat(g.targetValue),
      targetDate: g.targetDate ? new Date(g.targetDate).toISOString().split("T")[0] : undefined,
    }));
  }, [goals]);

  const insightsForBiomarkers = useMemo(() => {
    const summary = DEMO_INSIGHTS
      .filter(i => i.insightType === "overall")
      .map(i => i.content)
      .join(" ");
    const recommendations = DEMO_INSIGHTS
      .filter(i => i.priority === "medium" || i.priority === "low")
      .map(i => `${i.title}: ${i.content}`);
    const riskFactors = DEMO_INSIGHTS
      .filter(i => i.priority === "high")
      .map(i => `${i.title}: ${i.content}`);
    return {
      summary,
      recommendations,
      riskFactors,
      generatedAt: new Date("2026-01-15").toISOString(),
    };
  }, []);

  const handleGenerateInsights = useCallback(() => {
    // In demo mode, insights are already pre-loaded
  }, []);

  const handleAskZori = useCallback(async (biomarker: any) => {
    // Return a realistic demo response
    return `Your ${biomarker.name} at ${biomarker.value} ${biomarker.unit} is ${
      biomarker.value >= biomarker.optimalLow && biomarker.value <= biomarker.optimalHigh
        ? "within the optimal range"
        : "trending toward optimal"
    }. ${
      biomarker.trend === "down"
        ? "The downward trend is positive, showing your interventions are working."
        : biomarker.trend === "up"
        ? "The upward trend suggests continued improvement."
        : "Your levels have been stable, which is a good sign of consistency."
    } Continue your current protocol and we'll reassess at your next quarterly check-in.`;
  }, []);

  return {
    healthProfile: DEMO_HEALTH_PROFILE,
    organAssessments: DEMO_ORGAN_ASSESSMENTS,
    organHistory: DEMO_ORGAN_HISTORY,
    organsWithHistory: DEMO_ORGANS_WITH_HISTORY,
    biomarkersWithHistory: DEMO_BIOMARKERS_WITH_HISTORY,
    biomarkers: DEMO_BIOMARKERS,
    assessments: DEMO_ASSESSMENTS,
    timeline: DEMO_TIMELINE,
    goals,
    goalsForBiomarkers,
    insights: DEMO_INSIGHTS,
    insightsForBiomarkers,
    insightsLoading: false,
    handleSetGoal,
    handleGenerateInsights,
    handleAskZori,
    // Loading states - all false for demo
    profileLoading: false,
    organsLoading: false,
    organsHistoryLoading: false,
    biomarkersLoading: false,
    assessmentsLoading: false,
    timelineLoading: false,
    goalsLoading: false,
  };
}
