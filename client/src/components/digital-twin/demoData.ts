/**
 * Demo data for standalone Vercel deployment.
 * Provides realistic Fountain Life health data without database or auth dependencies.
 */

// ── Assessment dates (4 quarters of data) ──
const dates = ["2025-04-15", "2025-07-15", "2025-10-15", "2026-01-15"];

// ── Demo User ──
export const DEMO_USER = {
  id: 1,
  openId: "demo-user",
  name: "Demo Member",
  email: "demo@fountainlife.com",
  role: "admin" as const,
  lastSignedIn: new Date("2026-01-15"),
};

// ── Health Profile ──
export const DEMO_HEALTH_PROFILE = {
  id: 1,
  userId: 1,
  overallHealthScore: "88.50",
  biologicalAge: 40,
  chronologicalAge: 42,
  gender: "male" as const,
  lastAssessmentDate: new Date("2026-01-15"),
  createdAt: new Date("2025-04-15"),
  updatedAt: new Date("2026-01-15"),
};

// ── Organ Assessments (latest) ──
const organData = [
  {
    name: "Brain",
    category: "neurological",
    ages: [41, 40, 39, 39],
    scores: [82, 84, 86, 87],
    statuses: ["good", "good", "good", "excellent"],
    findings: [
      "Baseline cognitive assessment shows strong executive function. Minor attention variability noted.",
      "Improved processing speed. Memory consolidation metrics within top quartile.",
      "Cognitive reserve indicators improving. Sleep quality optimization showing results.",
      "Excellent cognitive performance across all domains. Brain age 3 years younger than chronological.",
    ],
    recommendations: [
      "Begin structured cognitive training. Optimize sleep to 7-8 hours. Consider omega-3 supplementation.",
      "Continue cognitive training protocol. Add meditation practice for attention improvement.",
      "Maintain current protocol. Consider adding lion's mane mushroom for neuroprotection.",
      "Maintain current regimen. Annual QEEG recommended to track continued progress.",
    ],
  },
  {
    name: "Heart",
    category: "cardiovascular",
    ages: [40, 39, 38, 37],
    scores: [80, 83, 86, 88],
    statuses: ["good", "good", "good", "excellent"],
    findings: [
      "Resting HR 74 bpm. Mild LDL elevation. Coronary calcium score: 0. Good cardiac structure on echo.",
      "Resting HR 71 bpm. LDL improving with statin therapy. HRV increasing.",
      "Resting HR 69 bpm. Lipid panel approaching optimal. VO2 max improved 8%.",
      "Resting HR 68 bpm. All cardiovascular markers optimal. VO2 max in top 10% for age.",
    ],
    recommendations: [
      "Increase aerobic exercise to 150+ min/week. Consider CoQ10 supplementation. Monitor LDL quarterly.",
      "Continue exercise protocol. Add zone 2 training 3x/week. Recheck lipids in 3 months.",
      "Excellent progress. Add HIIT 1x/week. Continue current supplementation protocol.",
      "Maintain current fitness regimen. Annual advanced cardiac imaging recommended.",
    ],
  },
  {
    name: "Lungs",
    category: "respiratory",
    ages: [42, 41, 41, 40],
    scores: [78, 80, 82, 84],
    statuses: ["good", "good", "good", "good"],
    findings: [
      "FEV1 92% predicted. Mild reduction in diffusion capacity. No structural abnormalities on CT.",
      "FEV1 improved to 94%. Breathing exercises showing benefit.",
      "FEV1 stable at 95%. Diffusion capacity normalizing. Good exercise tolerance.",
      "FEV1 96% predicted. All pulmonary function tests within normal limits. Lung age matches chronological.",
    ],
    recommendations: [
      "Begin structured breathing exercises. Consider air quality monitoring at home/office.",
      "Continue breathing protocol. Add altitude training simulation 2x/week.",
      "Maintain respiratory fitness. Annual PFT recommended.",
      "Continue current protocol. Lung function excellent for age.",
    ],
  },
  {
    name: "Muscle",
    category: "musculoskeletal",
    ages: [43, 42, 41, 40],
    scores: [76, 79, 82, 85],
    statuses: ["good", "good", "good", "good"],
    findings: [
      "Grip strength 38 kg (50th percentile). Lean mass slightly below optimal. DEXA shows 22% body fat.",
      "Grip strength 41 kg. Lean mass increasing. Body fat 20.5%.",
      "Grip strength 44 kg (65th percentile). Lean mass +2.1 kg from baseline. Body fat 19%.",
      "Grip strength 46 kg (75th percentile). Excellent lean mass gains. Body fat 18.2%. Muscle age improving.",
    ],
    recommendations: [
      "Begin progressive resistance training 3x/week. Increase protein to 1.6g/kg. Consider creatine.",
      "Continue resistance training. Add plyometric work. Protein intake adequate.",
      "Excellent progress. Consider periodization. Add mobility work to prevent injury.",
      "Maintain current strength program. Focus on maintaining gains long-term.",
    ],
  },
  {
    name: "Liver",
    category: "digestive",
    ages: [46, 45, 44, 44],
    scores: [72, 74, 76, 78],
    statuses: ["fair", "good", "good", "good"],
    findings: [
      "ALT mildly elevated at 42 U/L. Mild hepatic steatosis on ultrasound. GGT borderline.",
      "ALT improving at 35 U/L. Steatosis stable. GGT normalizing with lifestyle changes.",
      "ALT 28 U/L, within normal. Steatosis improving on follow-up imaging. GGT normal.",
      "ALT 22 U/L, optimal. Hepatic steatosis resolved. All liver markers in healthy range.",
    ],
    recommendations: [
      "Reduce alcohol to <3 drinks/week. Begin NAC supplementation. Mediterranean diet recommended.",
      "Continue dietary changes. Add milk thistle. Recheck liver panel in 3 months.",
      "Excellent improvement. Maintain dietary protocol. Consider intermittent fasting.",
      "Liver health significantly improved. Maintain current lifestyle. Annual monitoring sufficient.",
    ],
  },
  {
    name: "Kidneys",
    category: "urinary",
    ages: [40, 39, 39, 38],
    scores: [84, 86, 87, 89],
    statuses: ["good", "good", "excellent", "excellent"],
    findings: [
      "eGFR 93 mL/min. Creatinine 0.98. Microalbumin negative. Kidney function well-preserved.",
      "eGFR 94 mL/min. All renal markers stable. Hydration status improved.",
      "eGFR 95 mL/min. Excellent kidney function. No proteinuria.",
      "eGFR 95 mL/min. Kidney age 4 years younger than chronological. All markers optimal.",
    ],
    recommendations: [
      "Increase water intake to 3L/day. Monitor sodium intake. Annual renal panel recommended.",
      "Hydration improved. Continue current protocol. Consider electrolyte optimization.",
      "Maintain hydration. Kidney function excellent. Continue annual monitoring.",
      "Kidney health excellent. Maintain current hydration and dietary habits.",
    ],
  },
];

// Build latest organ assessments
export const DEMO_ORGAN_ASSESSMENTS = organData.map((organ, idx) => ({
  id: idx + 1,
  userId: 1,
  organName: organ.name,
  organCategory: organ.category,
  healthScore: organ.scores[3].toFixed(2),
  status: organ.statuses[3] as "excellent" | "good" | "fair" | "attention_needed" | "critical",
  assessmentDate: new Date(dates[3]),
  findings: organ.findings[3],
  recommendations: organ.recommendations[3],
  imageUrl: null,
  createdAt: new Date(dates[3]),
}));

// Build full organ history
export const DEMO_ORGAN_HISTORY = organData.flatMap((organ, oidx) =>
  dates.map((date, didx) => ({
    id: oidx * dates.length + didx + 1,
    userId: 1,
    organName: organ.name,
    organCategory: organ.category,
    healthScore: organ.scores[didx].toFixed(2),
    status: organ.statuses[didx] as "excellent" | "good" | "fair" | "attention_needed" | "critical",
    assessmentDate: new Date(date),
    findings: organ.findings[didx],
    recommendations: organ.recommendations[didx],
    imageUrl: null,
    createdAt: new Date(date),
  }))
);

// Build organs with history (for trends)
export const DEMO_ORGANS_WITH_HISTORY = organData.map((organ, idx) => {
  const latest = {
    id: idx + 1,
    userId: 1,
    organName: organ.name,
    organCategory: organ.category,
    healthScore: organ.scores[3],
    status: organ.statuses[3] as "excellent" | "good" | "fair" | "attention_needed" | "critical",
    assessmentDate: new Date(dates[3]),
    findings: organ.findings[3],
    recommendations: organ.recommendations[3],
    imageUrl: null,
    createdAt: new Date(dates[3]),
  };

  return {
    ...latest,
    history: dates.map((date, didx) => ({
      date: new Date(date),
      score: organ.scores[didx],
      status: organ.statuses[didx] as "excellent" | "good" | "fair" | "attention_needed" | "critical",
    })),
  };
});

// ── Biomarker Data ──
const biomarkerData = [
  // Metabolic
  { name: "Fasting Glucose", cat: "metabolic", unit: "mg/dL", refMin: 70, refMax: 100, vals: [95, 92, 90, 88], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "HbA1c", cat: "metabolic", unit: "%", refMin: 4.0, refMax: 5.7, vals: [5.5, 5.4, 5.3, 5.2], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "Fasting Insulin", cat: "metabolic", unit: "µIU/mL", refMin: 2.6, refMax: 24.9, vals: [7.2, 6.1, 5.3, 4.8], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "HOMA-IR", cat: "metabolic", unit: "", refMin: 0, refMax: 2.5, vals: [1.64, 1.36, 1.14, 1.04], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "Uric Acid", cat: "metabolic", unit: "mg/dL", refMin: 3.5, refMax: 7.2, vals: [5.3, 5.2, 5.0, 5.1], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  // Cardiovascular
  { name: "Total Cholesterol", cat: "cardiovascular", unit: "mg/dL", refMin: 125, refMax: 200, vals: [210, 198, 192, 185], statuses: ["borderline", "normal", "normal", "optimal"] },
  { name: "LDL Cholesterol", cat: "cardiovascular", unit: "mg/dL", refMin: 0, refMax: 130, vals: [128, 115, 105, 98], statuses: ["normal", "normal", "normal", "optimal"] },
  { name: "HDL Cholesterol", cat: "cardiovascular", unit: "mg/dL", refMin: 40, refMax: 100, vals: [52, 55, 59, 62], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "Triglycerides", cat: "cardiovascular", unit: "mg/dL", refMin: 0, refMax: 150, vals: [120, 102, 88, 78], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "ApoB", cat: "cardiovascular", unit: "mg/dL", refMin: 40, refMax: 120, vals: [105, 95, 88, 82], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "Lp(a)", cat: "cardiovascular", unit: "nmol/L", refMin: 0, refMax: 75, vals: [19, 18, 18, 18], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  { name: "hs-CRP", cat: "cardiovascular", unit: "mg/L", refMin: 0, refMax: 3.0, vals: [1.8, 1.2, 0.8, 0.6], statuses: ["normal", "normal", "optimal", "optimal"] },
  // Inflammatory
  { name: "IL-6", cat: "inflammatory", unit: "pg/mL", refMin: 0, refMax: 5.0, vals: [2.8, 2.1, 1.5, 1.2], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "TNF-alpha", cat: "inflammatory", unit: "pg/mL", refMin: 0, refMax: 2.2, vals: [1.1, 0.9, 0.8, 0.8], statuses: ["normal", "optimal", "optimal", "optimal"] },
  { name: "Homocysteine", cat: "inflammatory", unit: "µmol/L", refMin: 5.0, refMax: 15.0, vals: [11.5, 10.2, 9.0, 8.2], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "Ferritin", cat: "inflammatory", unit: "ng/mL", refMin: 20, refMax: 300, vals: [92, 88, 84, 85], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  // Hormonal
  { name: "Free Testosterone", cat: "hormonal", unit: "pg/mL", refMin: 5.0, refMax: 21.0, vals: [11.5, 12.8, 14.1, 15.2], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "DHEA-S", cat: "hormonal", unit: "µg/dL", refMin: 100, refMax: 500, vals: [245, 275, 300, 320], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "Cortisol (AM)", cat: "hormonal", unit: "µg/dL", refMin: 6.0, refMax: 18.4, vals: [16.8, 15.5, 14.8, 14.5], statuses: ["normal", "optimal", "optimal", "optimal"] },
  { name: "TSH", cat: "hormonal", unit: "mIU/L", refMin: 0.4, refMax: 4.0, vals: [2.1, 1.9, 1.8, 1.8], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  { name: "Free T3", cat: "hormonal", unit: "pg/mL", refMin: 2.0, refMax: 4.4, vals: [3.0, 3.1, 3.2, 3.2], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  { name: "IGF-1", cat: "hormonal", unit: "ng/mL", refMin: 83, refMax: 290, vals: [155, 168, 178, 185], statuses: ["normal", "normal", "optimal", "optimal"] },
  // Reproductive - Male
  { name: "PSA", cat: "hormonal", unit: "ng/mL", refMin: 0, refMax: 4.0, vals: [1.4, 1.3, 1.2, 1.2], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  { name: "Total Testosterone", cat: "hormonal", unit: "ng/dL", refMin: 300, refMax: 1000, vals: [580, 600, 615, 620], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "SHBG", cat: "hormonal", unit: "nmol/L", refMin: 10, refMax: 57, vals: [38, 35, 33, 32], statuses: ["normal", "normal", "optimal", "optimal"] },
  // Reproductive - Female
  { name: "Estradiol", cat: "hormonal", unit: "pg/mL", refMin: 15, refMax: 350, vals: [78, 82, 84, 85], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "Progesterone", cat: "hormonal", unit: "ng/mL", refMin: 1.0, refMax: 20.0, vals: [10, 11, 12, 12], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "AMH", cat: "hormonal", unit: "ng/mL", refMin: 1.0, refMax: 10.0, vals: [2.5, 2.6, 2.7, 2.8], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "FSH", cat: "hormonal", unit: "mIU/mL", refMin: 1.5, refMax: 12.4, vals: [6.8, 6.5, 6.2, 6.0], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "LH", cat: "hormonal", unit: "mIU/mL", refMin: 1.7, refMax: 8.6, vals: [5.2, 4.8, 4.5, 4.3], statuses: ["normal", "normal", "optimal", "optimal"] },
  // Nutritional (liver/kidney markers)
  { name: "ALT", cat: "nutritional", unit: "U/L", refMin: 7, refMax: 56, vals: [35, 28, 24, 22], statuses: ["normal", "optimal", "optimal", "optimal"] },
  { name: "AST", cat: "nutritional", unit: "U/L", refMin: 10, refMax: 40, vals: [28, 26, 25, 24], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  { name: "GGT", cat: "nutritional", unit: "U/L", refMin: 0, refMax: 65, vals: [32, 25, 20, 18], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  { name: "eGFR", cat: "nutritional", unit: "mL/min", refMin: 60, refMax: 120, vals: [93, 94, 95, 95], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  { name: "Creatinine", cat: "nutritional", unit: "mg/dL", refMin: 0.7, refMax: 1.3, vals: [0.98, 0.96, 0.95, 0.95], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  // Longevity
  { name: "Vitamin D (25-OH)", cat: "immune", unit: "ng/mL", refMin: 30, refMax: 100, vals: [38, 45, 55, 62], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "Omega-3 Index", cat: "immune", unit: "%", refMin: 4.0, refMax: 12.0, vals: [5.2, 6.5, 7.8, 8.5], statuses: ["normal", "normal", "normal", "optimal"] },
  { name: "NAD+ Levels", cat: "immune", unit: "µM", refMin: 10, refMax: 50, vals: [18.2, 23.5, 28.8, 32.5], statuses: ["normal", "normal", "optimal", "optimal"] },
  { name: "Telomere Length", cat: "immune", unit: "kb", refMin: 5.0, refMax: 10.0, vals: [7.1, 7.1, 7.2, 7.2], statuses: ["optimal", "optimal", "optimal", "optimal"] },
  { name: "GlycanAge", cat: "immune", unit: "years", refMin: 25, refMax: 60, vals: [42, 40, 38, 37], statuses: ["normal", "normal", "optimal", "optimal"] },
];

// Build biomarkers with history (matching getBiomarkersWithHistory format)
export const DEMO_BIOMARKERS_WITH_HISTORY = biomarkerData.map((bm) => {
  const history = dates.map((date, idx) => ({
    date: new Date(date),
    value: bm.vals[idx],
  }));

  const latestIdx = dates.length - 1;
  let trend: "up" | "down" | "stable" = "stable";
  if (history.length >= 2) {
    const prev = history[history.length - 2].value;
    const curr = history[history.length - 1].value;
    const changePct = ((curr - prev) / prev) * 100;
    if (changePct > 2) trend = "up";
    else if (changePct < -2) trend = "down";
  }

  return {
    name: bm.name,
    category: bm.cat,
    currentValue: bm.vals[latestIdx],
    unit: bm.unit,
    refMin: bm.refMin,
    refMax: bm.refMax,
    status: bm.statuses[latestIdx],
    trend,
    history,
    notes: null,
  };
});

// Build flat biomarker records (matching getBiomarkersByUserId format)
export const DEMO_BIOMARKERS = biomarkerData.flatMap((bm) =>
  dates.map((date, idx) => ({
    id: 0, // Will be overridden
    userId: 1,
    biomarkerName: bm.name,
    biomarkerCategory: bm.cat,
    value: bm.vals[idx].toFixed(3),
    unit: bm.unit,
    referenceRangeMin: bm.refMin.toFixed(3),
    referenceRangeMax: bm.refMax.toFixed(3),
    status: bm.statuses[idx],
    testDate: new Date(date),
    notes: null,
    createdAt: new Date(date),
  }))
);

// ── Health Assessments ──
export const DEMO_ASSESSMENTS = [
  { id: 1, userId: 1, assessmentType: "Initial Comprehensive Assessment", assessmentDate: new Date("2025-04-15"), overallScore: "82.00", summary: "Baseline evaluation. Overall health good with areas for improvement in cardiovascular and metabolic markers.", createdAt: new Date("2025-04-15") },
  { id: 2, userId: 1, assessmentType: "Q2 Follow-Up Assessment", assessmentDate: new Date("2025-07-15"), overallScore: "84.50", summary: "Positive trends across most markers. Lifestyle interventions showing early results.", createdAt: new Date("2025-07-15") },
  { id: 3, userId: 1, assessmentType: "Q3 Follow-Up Assessment", assessmentDate: new Date("2025-10-15"), overallScore: "86.80", summary: "Continued improvement. Liver markers normalizing. Cardiovascular fitness improving significantly.", createdAt: new Date("2025-10-15") },
  { id: 4, userId: 1, assessmentType: "Annual Comprehensive Re-Assessment", assessmentDate: new Date("2026-01-15"), overallScore: "88.50", summary: "Excellent progress. Biological age reduced by 7 years. Most biomarkers now in optimal range.", createdAt: new Date("2026-01-15") },
];

// ── Timeline Events ──
export const DEMO_TIMELINE = [
  { id: 1, userId: 1, eventType: "assessment", eventDate: new Date("2026-01-15"), title: "Annual Comprehensive Re-Assessment", description: "Full annual health evaluation. Biological age now 35 — 7 years younger than chronological age of 42.", relatedOrgan: null, createdAt: new Date("2026-01-15") },
  { id: 2, userId: 1, eventType: "assessment", eventDate: new Date("2026-01-15"), title: "Semi-Annual Full-Body MRI", description: "Follow-up cancer screening MRI. No new findings. All clear.", relatedOrgan: "Full Body", createdAt: new Date("2026-01-15") },
  { id: 3, userId: 1, eventType: "treatment", eventDate: new Date("2025-12-01"), title: "Hormone Optimization Protocol", description: "DHEA and testosterone optimization protocol initiated based on hormonal panel results.", relatedOrgan: null, createdAt: new Date("2025-12-01") },
  { id: 4, userId: 1, eventType: "milestone", eventDate: new Date("2025-11-01"), title: "Biological Age Milestone", description: "Biological age reduced from 40 to 37 — a 3-year improvement in 6 months.", relatedOrgan: null, createdAt: new Date("2025-11-01") },
  { id: 5, userId: 1, eventType: "assessment", eventDate: new Date("2025-10-15"), title: "Q3 Comprehensive Re-Assessment", description: "Full biomarker panel and organ age recalculation showing continued improvement.", relatedOrgan: null, createdAt: new Date("2025-10-15") },
  { id: 6, userId: 1, eventType: "milestone", eventDate: new Date("2025-09-01"), title: "Liver Health Improvement", description: "ALT normalized. Hepatic steatosis improving on follow-up ultrasound.", relatedOrgan: "Liver", createdAt: new Date("2025-09-01") },
  { id: 7, userId: 1, eventType: "lifestyle_change", eventDate: new Date("2025-08-01"), title: "NAD+ Supplementation Added", description: "NMN supplementation protocol added to address declining NAD+ levels.", relatedOrgan: null, createdAt: new Date("2025-08-01") },
  { id: 8, userId: 1, eventType: "assessment", eventDate: new Date("2025-07-15"), title: "Q2 Follow-Up Blood Panel", description: "Quarterly biomarker re-test showing positive trends in metabolic and inflammatory markers.", relatedOrgan: null, createdAt: new Date("2025-07-15") },
  { id: 9, userId: 1, eventType: "milestone", eventDate: new Date("2025-06-15"), title: "First Fitness Milestone", description: "VO2 max improved 5% from baseline. Resting heart rate dropped from 74 to 71 bpm.", relatedOrgan: "Heart", createdAt: new Date("2025-06-15") },
  { id: 10, userId: 1, eventType: "treatment", eventDate: new Date("2025-05-15"), title: "Statin Therapy Initiated", description: "Low-dose rosuvastatin started for LDL optimization based on cardiovascular risk profile.", relatedOrgan: "Heart", createdAt: new Date("2025-05-15") },
  { id: 11, userId: 1, eventType: "lifestyle_change", eventDate: new Date("2025-05-01"), title: "Personalized Longevity Protocol Started", description: "Began customized exercise, nutrition, and supplementation protocol based on assessment findings.", relatedOrgan: null, createdAt: new Date("2025-05-01") },
  { id: 12, userId: 1, eventType: "assessment", eventDate: new Date("2025-04-15"), title: "Initial Comprehensive Health Assessment", description: "Full Fountain Life executive health evaluation including 150+ biomarkers, advanced cardiac imaging, and cognitive testing.", relatedOrgan: null, createdAt: new Date("2025-04-15") },
  { id: 13, userId: 1, eventType: "assessment", eventDate: new Date("2025-04-15"), title: "Full-Body MRI Cancer Screening", description: "Whole-body MRI with AI-powered analysis for early cancer detection covering 500+ conditions.", relatedOrgan: "Full Body", createdAt: new Date("2025-04-15") },
  { id: 14, userId: 1, eventType: "assessment", eventDate: new Date("2025-04-15"), title: "Whole Genome Sequencing", description: "Complete genomic analysis with pharmacogenomic profiling and hereditary risk assessment.", relatedOrgan: null, createdAt: new Date("2025-04-15") },
  { id: 15, userId: 1, eventType: "assessment", eventDate: new Date("2025-04-15"), title: "Advanced Cardiac Imaging", description: "Coronary CT angiography, echocardiogram, and cardiac MRI for comprehensive heart evaluation.", relatedOrgan: "Heart", createdAt: new Date("2025-04-15") },
  { id: 16, userId: 1, eventType: "assessment", eventDate: new Date("2025-04-15"), title: "Neurocognitive Assessment", description: "Comprehensive cognitive testing including memory, processing speed, executive function, and attention.", relatedOrgan: "Brain", createdAt: new Date("2025-04-15") },
];

// ── Demo Goals ──
export const DEMO_GOALS = [
  { id: 1, userId: 1, biomarkerName: "LDL Cholesterol", targetValue: "90", targetDate: new Date("2026-06-15"), notes: "Target optimal LDL for cardiovascular protection", isActive: 1, createdAt: new Date("2025-10-15"), updatedAt: new Date("2025-10-15") },
  { id: 2, userId: 1, biomarkerName: "Vitamin D (25-OH)", targetValue: "70", targetDate: new Date("2026-04-15"), notes: "Optimize vitamin D for immune and bone health", isActive: 1, createdAt: new Date("2025-10-15"), updatedAt: new Date("2025-10-15") },
  { id: 3, userId: 1, biomarkerName: "Omega-3 Index", targetValue: "10", targetDate: new Date("2026-07-15"), notes: "Target 10%+ for optimal cardiovascular protection", isActive: 1, createdAt: new Date("2025-10-15"), updatedAt: new Date("2025-10-15") },
];

// ── Demo AI Insights ──
export const DEMO_INSIGHTS = [
  { id: 1, userId: 1, insightType: "overall", biomarkerName: null, category: null, title: "Exceptional Health Trajectory", content: "Your biological age of 40 vs chronological age of 42 represents a 2-year advantage. Over the past year, your overall health score improved from 82 to 88.5, with 78% of biomarkers now in optimal range. This trajectory puts you in the top 15% of Fountain Life members.", priority: "medium", expiresAt: new Date("2026-02-15"), createdAt: new Date("2026-01-15") },
  { id: 2, userId: 1, insightType: "category", biomarkerName: null, category: "cardiovascular", title: "Cardiovascular Transformation", content: "Your cardiovascular markers show remarkable improvement. LDL dropped from 128 to 98 mg/dL, hs-CRP from 1.8 to 0.6 mg/L, and your heart age is now 5 years younger than your chronological age. The combination of statin therapy and exercise has been highly effective.", priority: "low", expiresAt: new Date("2026-02-15"), createdAt: new Date("2026-01-15") },
  { id: 3, userId: 1, insightType: "individual", biomarkerName: "NAD+ Levels", category: "immune", title: "NAD+ Supplementation Working", content: "Your NAD+ levels have nearly doubled from 18.2 to 32.5 µM since starting NMN supplementation. This is a key longevity biomarker and your current level is associated with improved cellular energy, DNA repair, and healthy aging.", priority: "low", expiresAt: new Date("2026-02-15"), createdAt: new Date("2026-01-15") },
  { id: 4, userId: 1, insightType: "individual", biomarkerName: "Omega-3 Index", category: "immune", title: "Continue Omega-3 Optimization", content: "Your Omega-3 Index improved from 5.2% to 8.5%, but hasn't yet reached the optimal target of 10%+. Consider increasing EPA/DHA supplementation to 3g/day or adding more fatty fish to your diet. Reaching 10%+ is associated with 30% lower cardiovascular mortality risk.", priority: "high", expiresAt: new Date("2026-02-15"), createdAt: new Date("2026-01-15") },
  { id: 5, userId: 1, insightType: "category", biomarkerName: null, category: "metabolic", title: "Metabolic Health Optimized", content: "All metabolic markers are now in optimal range. Fasting glucose 88 mg/dL, HbA1c 5.2%, and HOMA-IR 1.04 indicate excellent insulin sensitivity. Your metabolic health is a strong foundation for longevity.", priority: "low", expiresAt: new Date("2026-02-15"), createdAt: new Date("2026-01-15") },
];

// ── Helper: Check if we're in demo mode ──
export function isDemoMode(): boolean {
  const oauthUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  return !oauthUrl || !appId;
}
