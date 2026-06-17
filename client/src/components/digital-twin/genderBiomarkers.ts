/**
 * Gender-specific biomarker filtering
 * 
 * Some biomarkers are only relevant to specific genders.
 * This module defines which biomarkers to show/hide based on gender.
 */

// Biomarkers only relevant to male members
export const MALE_ONLY_BIOMARKERS = [
  "PSA",
  "Total Testosterone",
  "Free Testosterone",
  "SHBG",
];

// Biomarkers only relevant to female members
export const FEMALE_ONLY_BIOMARKERS = [
  "Estradiol",
  "Progesterone",
  "AMH",
  "FSH",
  "LH",
];

/**
 * Filter biomarkers based on gender.
 * - Male members see all biomarkers except female-only ones.
 * - Female members see all biomarkers except male-only ones.
 * - If gender is not specified, show all biomarkers (no filtering).
 */
export function filterBiomarkersByGender<T extends { biomarkerName?: string; name?: string }>(
  biomarkers: T[],
  gender?: "male" | "female" | null
): T[] {
  if (!gender) return biomarkers;

  const excludeList = gender === "male" ? FEMALE_ONLY_BIOMARKERS : MALE_ONLY_BIOMARKERS;

  return biomarkers.filter((bm) => {
    const name = bm.biomarkerName || bm.name || "";
    return !excludeList.includes(name);
  });
}
