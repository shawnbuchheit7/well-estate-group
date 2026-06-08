/**
 * Saltleaf — Wellness Consultants Comparison Matrix
 * Deep-dive research on all 7 shortlisted candidates with top projects
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Check, Minus, MapPin, Building2, Star } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ─── Consultant Data ─── */
const consultants = [
  {
    name: "TLEE Spas + Wellness",
    shortName: "TLEE",
    leader: "Tracy Lee",
    founded: "2010",
    hq: "San Francisco, CA",
    website: "https://tleespas.com",
    scope: { design: true, programming: true, operations: true },
    specialization: "Spa design & elevated wellness experiences for hospitality and real estate",
    differentiator: "Human-centered environmental design with 70+ global projects. Currently engaged on SLT1 — already embedded in the project.",
    residentialExp: "strong",
    flExperience: false,
    engaged: true,
    floridaPresence: true,
    floridaCount: 2,
    recognition: "Multiple Forbes Five-Star Spa Awards",
    keyStrength: "Already on the project",
    projectCount: "70+",
    luxuryBrands: ["Equinox Hotel", "Ritz-Carlton Reserve", "EDITION", "Waldorf Astoria", "Auberge Resorts"],
    topProjects: [
      { name: "Spa Botánico", location: "Dorado Beach, Puerto Rico", type: "Ritz-Carlton Reserve", desc: "Game-changing spa celebrating wellness through nature and deep sense of place" },
      { name: "The Spa by Equinox Hotel", location: "New York, NY", type: "Urban Hotel", desc: "Strategy transcending traditional spa, aligned with high-performance living ethos" },
      { name: "Spa Alkemia at Zadún", location: "Los Cabos, Mexico", type: "Ritz-Carlton Reserve", desc: "Immersive wellness destination highlighting restorative desert-marine climate" },
      { name: "The Miami Beach EDITION", location: "Miami Beach, FL", type: "Urban Resort", desc: "Wellness proposition for leisure, business, and local clientele" },
      { name: "Auberge Beach Residences Spa", location: "Fort Lauderdale, FL", type: "Luxury Residential", desc: "Wellness story for Auberge's shift into residential — heated quartz sand table" },
      { name: "Kilolani Spa at Grand Wailea", location: "Wailea, Hawaii", type: "Waldorf Astoria", desc: "Re-contextualized largest spa in Hawaiian Islands into modern wellness destination" },
      { name: "The Spa at The Little Nell", location: "Aspen, CO", type: "Luxury Hotel", desc: "Strategic vision for Aspen's sole ski-in/ski-out luxury property" },
      { name: "Halehouse Spa at Stanly Ranch", location: "Napa, CA", type: "Auberge Resorts", desc: "Holistic approach: fitness, performance & recovery, healing arts" },
      { name: "West Hollywood EDITION Spa", location: "West Hollywood, CA", type: "Urban Resort & Residential", desc: "Integrated hub with leading-edge fitness and hydrothermal amenities" },
      { name: "The Spa at Esperanza", location: "Los Cabos, Mexico", type: "Luxury Resort", desc: "Outdoor contrast bathing circuit — Aqua de la Esperanza" },
    ],
  },
  {
    name: "Studio DeA",
    shortName: "Studio DeA",
    leader: "Drue DeAngelis",
    founded: "~2024",
    hq: "Miami Beach, FL",
    website: "https://www.studio-dea.com",
    scope: { design: true, programming: true, operations: false },
    specialization: "Hospitality interior & wellness design — concepting through experience design",
    differentiator: "Former VP Design/Creative Director at THE WELL; Starwood Capital background. End-to-end design from concepting to scent development.",
    residentialExp: "moderate",
    flExperience: false,
    engaged: false,
    floridaPresence: true,
    floridaCount: 4,
    recognition: "THE WELL pedigree; Starwood Capital Group background",
    keyStrength: "THE WELL design DNA",
    projectCount: "10+",
    luxuryBrands: ["Ritz-Carlton", "1 Hotel", "Baccarat Hotel", "THE WELL"],
    topProjects: [
      { name: "Nimbu Spa & Wellness", location: "Costa Rica", type: "Ritz-Carlton Reserve", desc: "Transformative wellness retreat at Nekajui, a Ritz-Carlton Reserve" },
      { name: "The Perigon", location: "Miami Beach, FL", type: "Luxury Residential", desc: "Wellness and residential spaces for ultra-luxury oceanfront condominium" },
      { name: "THE WELL Bay Harbor Islands", location: "Bay Harbor Islands, FL", type: "Luxury Residential", desc: "First fully integrated luxury wellness residential project in the country" },
      { name: "1 Hotel South Beach", location: "Miami Beach, FL", type: "Luxury Hotel", desc: "Design of Starwood Capital's nature-inspired lifestyle brand" },
      { name: "Baccarat Hotel New York", location: "New York, NY", type: "Luxury Hotel & Residences", desc: "Design of the flagship luxury hotel and residences" },
      { name: "Cadillac Hotel & Beach Club", location: "Miami Beach, FL", type: "Luxury Hotel", desc: "Design and launch of the Autograph Collection hotel" },
    ],
  },
  {
    name: "Trilogy Spa Holdings",
    shortName: "Trilogy",
    leader: "David Stoup",
    founded: "2011",
    hq: "Phoenix, AZ",
    website: "https://www.trilogyspaholdings.com",
    scope: { design: true, programming: true, operations: true },
    specialization: "Designs, develops, and OPERATES premier spa/wellness — leased or managed models",
    differentiator: "Only true operator on the list. Leased model insulates owner from capital risk. Luxury brand partnerships with Guerlain, Sisley, and 111SKIN.",
    residentialExp: "strong",
    flExperience: false,
    engaged: false,
    floridaPresence: true,
    floridaCount: 1,
    recognition: "World Travel Awards; Forbes Travel Guide Star Award",
    keyStrength: "Operator model + luxury brands",
    projectCount: "20+",
    luxuryBrands: ["Fairmont", "Ritz-Carlton", "Waldorf Astoria", "The Plaza", "Regent", "Hyatt Regency"],
    topProjects: [
      { name: "Guerlain Wellness Spa", location: "New York, NY", type: "Waldorf Astoria", desc: "Operated the iconic Guerlain Spa at the Waldorf Astoria" },
      { name: "111SKIN Spa/Clinic", location: "New York, NY", type: "The Plaza", desc: "Managed the 111SKIN Spa/Clinic at the historic Plaza Hotel" },
      { name: "Sisley Spa", location: "Marina Del Rey, CA", type: "Ritz-Carlton", desc: "Managed the Sisley Spa at this prestigious Ritz-Carlton property" },
      { name: "Well & Being", location: "Scottsdale, AZ", type: "Fairmont", desc: "Managed the Well & Being spa at the Fairmont Scottsdale Princess" },
      { name: "Guerlain Wellness", location: "Santa Monica, CA", type: "Regent", desc: "Managed the Guerlain Wellness spa at the Regent Santa Monica" },
      { name: "Well & Being", location: "San Juan, Puerto Rico", type: "Fairmont", desc: "Operated the Well & Being spa at the Fairmont El San Juan Hotel" },
      { name: "The Spa at Hyatt Regency", location: "Maui, HI", type: "Luxury Resort", desc: "Operated the spa at this luxury Hawaiian resort" },
      { name: "St. Somewhere Spa", location: "Hollywood, FL", type: "Margaritaville", desc: "Managed the spa at this coastal Florida resort" },
      { name: "The Spa at The Lodge", location: "Sonoma, CA", type: "Luxury Resort", desc: "Operated the spa at this luxury wine country resort" },
      { name: "SpaWell at El Conquistador", location: "Tucson, AZ", type: "Hilton Resort", desc: "Managed the SpaWell at this Hilton resort" },
    ],
  },
  {
    name: "Blu Spas, Inc.",
    shortName: "BluSpas",
    leader: "Cary Collier",
    founded: "1998",
    hq: "Whitefish, MT",
    website: "https://bluspasinc.com",
    scope: { design: true, programming: true, operations: true },
    specialization: "International spa design & wellness concept consultancy — feasibility through operations",
    differentiator: "'Left brain/right brain' approach combining creative design with business acumen. 450+ projects in 45+ countries. 48 Four Seasons projects across 24 countries.",
    residentialExp: "strong",
    flExperience: true,
    engaged: false,
    floridaPresence: true,
    floridaCount: 8,
    recognition: "Hospitality Design Magazine; Organic Spa Magazine",
    keyStrength: "48 Four Seasons + 8 FL projects",
    projectCount: "450+",
    luxuryBrands: ["Four Seasons", "Ritz-Carlton", "Waldorf Astoria", "St. Regis", "Bvlgari", "Rosewood", "Belmond", "Nobu", "Aman", "Raffles"],
    topProjects: [
      { name: "Four Seasons Residences", location: "Jacksonville, FL", type: "Luxury Hotel & Residences", desc: "Spa consulting and design for luxury hotel and residential project" },
      { name: "Pier 66 Hotel & Marina", location: "Ft. Lauderdale, FL", type: "Luxury Hotel & Marina", desc: "Wellness consulting for transformative waterfront project" },
      { name: "Ritz-Carlton Resort", location: "West Palm Beach, FL", type: "Luxury Resort", desc: "Spa consulting and design for luxury resort" },
      { name: "Ritz-Carlton Key Biscayne", location: "Miami, FL", type: "Luxury Resort", desc: "Spa consulting and design for luxury resort" },
      { name: "Fisher Island Resort Spa", location: "Miami Beach, FL", type: "Luxury Resort", desc: "Spa design for exclusive island community" },
      { name: "Waldorf Astoria Orlando", location: "Orlando, FL", type: "Luxury Hotel", desc: "Spa consulting and design for luxury hotel" },
      { name: "St. Regis Bora Bora", location: "Bora Bora, French Polynesia", type: "Luxury Resort", desc: "Spa consulting and design for iconic overwater resort" },
      { name: "Bvlgari Hotel & Spa", location: "Beijing, China", type: "Luxury Hotel", desc: "Spa consulting and design for luxury hotel" },
      { name: "Four Seasons Residences", location: "Denver, CO", type: "Luxury Hotel & Residences", desc: "Spa consulting and design for hotel and residential project" },
      { name: "Nobu Hotel", location: "Los Cabos, Mexico", type: "Luxury Hotel", desc: "Spa consulting and design for lifestyle luxury hotel" },
    ],
  },
  {
    name: "Core Essence",
    shortName: "Core Essence",
    leader: "Jennifer Findlay",
    founded: "2016",
    hq: "Toronto, ON",
    website: "https://www.coreessence.ca",
    scope: { design: true, programming: true, operations: true },
    specialization: "Vertically integrated — interior architecture + business development + operations in one firm",
    differentiator: "Eliminates the need for separate spa consultant and interior design firms. WELL Accredited Professionals. Offices in Toronto, Miami, and Madrid.",
    residentialExp: "moderate",
    flExperience: false,
    engaged: false,
    floridaPresence: true,
    floridaCount: 2,
    recognition: "Spain's Best Resort Spa 2025 Nomination; Spafinder Wellness Award",
    keyStrength: "Vertically integrated model",
    projectCount: "15+",
    luxuryBrands: ["Fairmont", "Waldorf Astoria", "W Hotels", "Curio Collection", "Ritz-Carlton", "Rosewood", "Four Seasons"],
    topProjects: [
      { name: "The Cabot Collection", location: "Global (incl. Florida)", type: "Golf Resort Portfolio", desc: "Strategy and vision for wellness across expanding portfolio" },
      { name: "Urbanica North Miami Beach", location: "Miami, FL", type: "Luxury Oceanfront Hotel", desc: "Feasibility, space planning, and design for spa and beach club" },
      { name: "Kelowna Hotel & Residences", location: "Kelowna, Canada", type: "Luxury Hotel & Residences", desc: "Feasibility through design for spa and fitness in waterfront development" },
      { name: "Hilton Curio Kailani", location: "Grand Cayman", type: "Boutique Hotel", desc: "Full-floor wellness spa spanning entire seventh storey" },
      { name: "Oceanstone Seaside Resort", location: "Nova Scotia, Canada", type: "Seaside Resort", desc: "Vision and interior design for hydrothermal spa expansion" },
      { name: "El Conquistador Resort", location: "Fajardo, Puerto Rico", type: "Waldorf Astoria", desc: "Cutting-edge wellness programming — Spafinder Wellness Award winner" },
      { name: "Rosewood Villa Magna", location: "Madrid, Spain", type: "Luxury Hotel", desc: "Full-service spa and wellness solutions" },
      { name: "Four Seasons Resort Toronto", location: "Toronto, Canada", type: "Luxury Hotel", desc: "Wellness brand integration within resort" },
      { name: "Thompson Hotel Toronto", location: "Toronto, Canada", type: "Luxury Hotel", desc: "Wellness brand integration within hotel" },
      { name: "889 Yonge", location: "Toronto, Canada", type: "Wellness Club & Residences", desc: "Eco-conscious wellness clinic and yoga community from concept to build" },
    ],
  },
  {
    name: "The Wright Fit",
    shortName: "Wright Fit",
    leader: "Jay Wright",
    founded: "2007",
    hq: "New York, NY",
    website: "https://www.thewrightfit.com",
    scope: { design: true, programming: true, operations: true },
    specialization: "End-to-end FITNESS & wellness solutions for luxury real estate — design through daily management",
    differentiator: "Most luxury residential fitness experience of any firm. 70+ luxury residential projects. Property value driver — acts as steward of the facility.",
    residentialExp: "dominant",
    flExperience: true,
    engaged: false,
    floridaPresence: true,
    floridaCount: 3,
    recognition: "Forbes, The New York Times, Mansion Global, The Cut",
    keyStrength: "Luxury residential dominance",
    projectCount: "450+",
    luxuryBrands: ["St. Regis", "Fontainebleau", "TWA Hotel"],
    topProjects: [
      { name: "15 Central Park West", location: "New York, NY", type: "Luxury Residential", desc: "Designed and managed fitness for NYC's most prestigious address" },
      { name: "432 Park Avenue", location: "New York, NY", type: "Luxury Residential", desc: "Fitness and wellness center for supertall residential skyscraper" },
      { name: "220 Central Park South", location: "New York, NY", type: "Luxury Residential", desc: "Fitness amenities for ultra-luxury residential building" },
      { name: "Fisher Island (Palazzo Del Sol & Della Luna)", location: "Miami, FL", type: "Luxury Residential", desc: "Fitness amenities for exclusive island community" },
      { name: "St. Regis Residences", location: "Miami, FL", type: "Luxury Residential", desc: "Fitness amenities for branded luxury residential" },
      { name: "Eighty Seven Park", location: "Miami, FL", type: "Luxury Residential", desc: "Fitness amenities for luxury residential building" },
      { name: "Fontainebleau Resort", location: "Las Vegas, NV", type: "Resort", desc: "State-of-the-art fitness center at luxury resort" },
      { name: "520 West 28th (Zaha Hadid)", location: "New York, NY", type: "Luxury Residential", desc: "Fitness for architecturally significant High Line building" },
      { name: "53 W53 (MoMA Tower)", location: "New York, NY", type: "Luxury Residential", desc: "Fitness amenities for Jean Nouvel-designed supertall" },
      { name: "The Camellias", location: "Gurugram, India", type: "Luxury Residential", desc: "Fitness amenities for ultra-luxury international residential" },
    ],
  },
  {
    name: "KALA Design Group",
    shortName: "KALA",
    leader: "Ana Ramirez",
    founded: "2022",
    hq: "Coral Gables, FL",
    website: "https://kaladesigngroup.com",
    scope: { design: true, programming: true, operations: true },
    specialization: "Wellness-infused & neuroaesthetics architecture for luxury hospitality",
    differentiator: "Integrates neuroaesthetics, sacred geometry, and biophilic design. Creates emotionally restorative, regenerative spaces with hyperlocal wellness journeys.",
    residentialExp: "limited",
    flExperience: false,
    engaged: false,
    floridaPresence: true,
    floridaCount: 0,
    recognition: "Spa Business; CLADglobal; WTA Live Roundtable speaker",
    keyStrength: "Neuroaesthetics + biophilic",
    projectCount: "5+",
    luxuryBrands: ["The Luxury Collection", "St. Regis", "Conrad", "Ritz-Carlton", "Four Seasons", "Waldorf Astoria"],
    topProjects: [
      { name: "Playa Serena Spa", location: "Punta Cana, Dominican Republic", type: "Luxury Collection", desc: "1,200 sq m spa with seven treatment bungalows and hydrothermal facilities" },
      { name: "Conrad Punta de Mita", location: "Mexico", type: "Conrad", desc: "Architectural and interior design for luxury resort" },
      { name: "St. Regis Costa Mujeres", location: "Mexico", type: "St. Regis", desc: "Destination spa design for luxury resort" },
    ],
  },
];

/* ─── Helper Components ─── */
function ScopeIndicator({ active }: { active: boolean }) {
  return active ? (
    <Check className="w-4 h-4 text-[#B8860B]" />
  ) : (
    <Minus className="w-4 h-4 text-black/20" />
  );
}

function ResidentialBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    dominant: "bg-[#B8860B] text-white",
    strong: "bg-[#B8860B]/20 text-[#B8860B]",
    moderate: "bg-black/10 text-black/60",
    limited: "bg-black/5 text-black/40",
  };
  const labels: Record<string, string> = {
    dominant: "Dominant",
    strong: "Strong",
    moderate: "Moderate",
    limited: "Limited",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider uppercase ${colors[level]}`}>
      {labels[level]}
    </span>
  );
}

/* ─── Main Component ─── */
export default function WellnessConsultants() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Agenda Item 01"
        title={<>Wellness Consultants</>}
        description="Deep-dive comparison of all 7 shortlisted wellness consultant candidates. Research includes specializations, project portfolios, residential experience, and unique differentiators."
        stats={[
          { label: "Candidates", value: "7" },
          { label: "FL Experience", value: "2" },
          { label: "Operators", value: "1" },
          { label: "FL-Based", value: "4" },
        ]}
      />

      {/* Comparison Matrix — Redesigned as Cards Grid */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Comparison Matrix
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              At a Glance
            </motion.h2>
          </motion.div>

          {/* Responsive Table with fixed layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="overflow-x-auto rounded-2xl border border-[#B8860B]/20 bg-white shadow-sm"
          >
            <table className="w-full text-left" style={{ minWidth: "1100px", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "180px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "130px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "90px" }} />
                <col style={{ width: "70px" }} />
                <col style={{ width: "60px" }} />
                <col style={{ width: "200px" }} />
              </colgroup>
              <thead>
                <tr className="border-b border-[#B8860B]/10 bg-[#FAFAF8]">
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Consultant</th>
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Est.</th>
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">HQ</th>
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold text-center">Design</th>
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold text-center">Prog.</th>
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold text-center">Ops</th>
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Residential</th>
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Projects</th>
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">FL</th>
                  <th className="p-3 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Key Strength</th>
                </tr>
              </thead>
              <tbody>
                {consultants.map((c, i) => (
                  <tr key={i} className={`border-b border-[#B8860B]/5 hover:bg-[#B8860B]/[0.02] transition-colors ${c.engaged ? 'bg-[#B8860B]/[0.04]' : ''} ${c.flExperience ? 'bg-blue-50/30' : ''}`}>
                    <td className="p-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-body text-[13px] font-medium text-black">{c.shortName}</span>
                        {c.engaged && <span className="px-1 py-0.5 rounded text-[7px] font-mono font-bold bg-[#B8860B] text-white uppercase leading-none">Engaged</span>}
                        {c.flExperience && <span className="px-1 py-0.5 rounded text-[7px] font-mono font-bold bg-blue-600 text-white uppercase leading-none">FL</span>}
                      </div>
                    </td>
                    <td className="p-3 font-body text-xs text-black/60">{c.founded}</td>
                    <td className="p-3 font-body text-xs text-black/60">{c.hq}</td>
                    <td className="p-3 text-center"><ScopeIndicator active={c.scope.design} /></td>
                    <td className="p-3 text-center"><ScopeIndicator active={c.scope.programming} /></td>
                    <td className="p-3 text-center"><ScopeIndicator active={c.scope.operations} /></td>
                    <td className="p-3"><ResidentialBadge level={c.residentialExp} /></td>
                    <td className="p-3 font-mono text-xs text-black/70 font-semibold">{c.projectCount}</td>
                    <td className="p-3 font-mono text-xs text-black/70 font-semibold">{c.floridaCount}</td>
                    <td className="p-3 font-body text-xs text-black/65">{c.keyStrength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Detailed Profiles with Top Projects */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-6xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Detailed Profiles
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Consultant Deep Dive
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              Each profile includes up to 10 of their most notable projects, brand associations, and unique positioning.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {consultants.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-2xl border bg-white overflow-hidden ${c.engaged ? 'border-[#B8860B]/50 ring-1 ring-[#B8860B]/20' : c.flExperience ? 'border-blue-300/50' : 'border-[#B8860B]/15'}`}
              >
                {/* Header */}
                <div className="p-8 pb-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="font-mono text-[#B8860B] font-semibold text-xs">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="font-display text-xl md:text-2xl font-medium text-black">{c.name}</h3>
                        {c.engaged && <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#B8860B] text-white uppercase tracking-wider">Currently Engaged</span>}
                        {c.flExperience && <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-blue-600 text-white uppercase tracking-wider">FL Direct Experience</span>}
                      </div>
                      <p className="font-body text-sm text-black/50">Led by {c.leader} · Est. {c.founded} · {c.hq}</p>
                    </div>
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#B8860B] hover:text-[#8B6914] tracking-wider uppercase transition-colors shrink-0"
                    >
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Specialization & Differentiator */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase mb-2 font-semibold">Specialization</p>
                      <p className="font-body text-sm text-black/70 leading-relaxed">{c.specialization}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase mb-2 font-semibold">Unique Differentiator</p>
                      <p className="font-body text-sm text-black/70 leading-relaxed">{c.differentiator}</p>
                    </div>
                  </div>

                  {/* Luxury Brand Associations */}
                  <div className="mb-6">
                    <p className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase mb-2 font-semibold">Luxury Brand Associations</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.luxuryBrands.map((brand, j) => (
                        <span key={j} className="px-2 py-0.5 rounded-full text-[10px] font-body text-black/60 bg-[#B8860B]/[0.06] border border-[#B8860B]/10">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Projects Grid */}
                <div className="px-8 pb-8">
                  <p className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase mb-3 font-semibold flex items-center gap-2">
                    <Star className="w-3 h-3 text-[#B8860B]" />
                    Top {c.topProjects.length} Notable Projects
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {c.topProjects.map((p, j) => (
                      <div key={j} className="flex items-start gap-3 p-3 rounded-lg bg-[#FAFAF8] border border-[#B8860B]/5">
                        <span className="font-mono text-[9px] text-[#B8860B]/60 font-semibold mt-0.5 shrink-0">{String(j + 1).padStart(2, "0")}</span>
                        <div className="min-w-0">
                          <p className="font-body text-[13px] font-medium text-black leading-tight">{p.name}</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            <span className="inline-flex items-center gap-0.5 text-[10px] text-black/45 font-body">
                              <MapPin className="w-2.5 h-2.5" />{p.location}
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[10px] text-[#B8860B]/70 font-mono">
                              <Building2 className="w-2.5 h-2.5" />{p.type}
                            </span>
                          </div>
                          <p className="font-body text-[11px] text-black/50 mt-1 leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Stats */}
                <div className="px-8 py-5 border-t border-[#B8860B]/10 bg-[#FAFAF8]/50 flex flex-wrap gap-6">
                  <div>
                    <span className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase block">Scope</span>
                    <span className="font-body text-xs text-black/70 mt-0.5 block">
                      {[c.scope.design && "Design", c.scope.programming && "Programming", c.scope.operations && "Operations"].filter(Boolean).join(" + ")}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase block">Residential</span>
                    <span className="mt-1 block"><ResidentialBadge level={c.residentialExp} /></span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase block">Total Projects</span>
                    <span className="font-mono text-sm text-black/80 font-semibold mt-0.5 block">{c.projectCount}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase block">Florida Projects</span>
                    <span className="font-mono text-sm text-black/80 font-semibold mt-0.5 block">{c.floridaCount}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase block">Recognition</span>
                    <span className="font-body text-xs text-black/60 mt-0.5 block">{c.recognition}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Observations */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Strategic Observations
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-8 text-black">
              Key Takeaways
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                <h4 className="font-display text-lg font-medium text-black mb-2">Fountain Life Direct Experience</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed">
                  Two firms have direct working relationships with Fountain Life: <strong className="text-black">BluSpas</strong> (Acqualina project) and <strong className="text-black">The Wright Fit</strong> (NYC luxury residential). This first-hand experience means we can provide specific, credible feedback on their capabilities, work style, and deliverable quality.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                <h4 className="font-display text-lg font-medium text-black mb-2">The Operator Question</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed">
                  <strong className="text-black">Trilogy Spa Holdings</strong> is the only firm that operates as a true spa/wellness operator (leased or managed model). If London Bay wants a partner who will run the wellness operation post-opening — not just design it — Trilogy is the only candidate offering that. This is a fundamentally different value proposition.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                <h4 className="font-display text-lg font-medium text-black mb-2">Florida Depth: BluSpas Dominates</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed">
                  <strong className="text-black">BluSpas</strong> has 8 Florida projects including Ritz-Carlton West Palm Beach, Ritz-Carlton Key Biscayne, Fisher Island, Pier 66, Four Seasons Jacksonville, and Waldorf Astoria Orlando. No other firm comes close to this level of Florida-specific experience. <strong className="text-black">The Wright Fit</strong> has 3 Florida projects (Fisher Island, St. Regis Miami, Eighty Seven Park).
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                <h4 className="font-display text-lg font-medium text-black mb-2">Luxury Residential Depth</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed">
                  <strong className="text-black">The Wright Fit</strong> dominates luxury residential fitness with 70+ projects (15 Central Park West, 432 Park Avenue, Fisher Island). <strong className="text-black">BluSpas</strong> brings 450+ total projects including 48 Four Seasons across 24 countries. These two have the deepest luxury residential experience by far.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                <h4 className="font-display text-lg font-medium text-black mb-2">Brand Power: BluSpas Leads</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed">
                  <strong className="text-black">BluSpas</strong> has worked with more luxury brands than any other candidate: Four Seasons, Ritz-Carlton, Waldorf Astoria, St. Regis, Bvlgari, Rosewood, Belmond, Nobu, Aman, and Raffles. <strong className="text-black">Trilogy</strong> has Guerlain, Sisley, and 111SKIN brand partnerships. <strong className="text-black">TLEE</strong> has Ritz-Carlton Reserve, EDITION, and Equinox.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                <h4 className="font-display text-lg font-medium text-black mb-2">Critical Question: What Is the Scope?</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed">
                  Before recommending any candidate, we need to understand the specific scope of work. Is London Bay looking for: (a) design only, (b) programming + design, (c) full operations management, or (d) a hybrid? The answer dramatically changes which firms are best suited. TLEE is already engaged — is this a replacement, supplement, or expansion of scope?
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Discussion Points */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Discussion Points
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-8 text-black">
              Questions for the Meeting
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                "What is the written scope of work or RFP for the wellness consultant role?",
                "Is the consultant expected to handle design, programming, operations, or a combination?",
                "What is the timeline for consultant selection and engagement?",
                "Will the selected consultant work alongside Fountain Life or independently?",
                "How does the consultant scope interact with SPX (fitness) and Thermal Collective (hydrotherapy)?",
                "Is TLEE being replaced, supplemented, or is this an additional scope area?",
                "Does London Bay want an operator (Trilogy model) or a consultant (design + programming)?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-[#B8860B]/15 bg-white">
                  <span className="font-mono text-[#B8860B] font-semibold text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-body text-sm text-black/70">{q}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-[#B8860B]/10">
        <div className="container max-w-4xl flex items-center justify-between">
          <Link href="/longevity/saltleaf">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Saltleaf Overview
            </a>
          </Link>
          <Link href="/longevity/saltleaf/longevity-suite">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              Next: Longevity Suite <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
