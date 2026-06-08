/**
 * Saltleaf — Wellness Consultants Comparison Matrix
 * Deep-dive research on all 7 shortlisted candidates
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Check, Minus } from "lucide-react";
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
    notableProjects: ["Spa Botánico (Dorado Beach)", "Kilolani Spa (Grand Wailea)", "Spa at Equinox Hotel NYC", "The Spa at The Little Nell", "Halehouse Spa (Stanly Ranch)"],
    residentialExp: "strong",
    flExperience: false,
    engaged: true,
    floridaPresence: false,
    recognition: "Multiple Forbes Five-Star Spa Awards",
    keyStrength: "Already on the project",
    projectCount: "70+",
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
    notableProjects: ["The Perigon (Miami Beach)", "1 Hotel Beach Club (Miami Beach)"],
    residentialExp: "moderate",
    flExperience: false,
    engaged: false,
    floridaPresence: true,
    recognition: "THE WELL pedigree; Starwood Capital Group background",
    keyStrength: "THE WELL design DNA",
    projectCount: "5+",
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
    notableProjects: ["Guerlain Spa at Waldorf Astoria NYC", "Sisley Spa at The Dominick", "Well & Being (Fairmont Scottsdale)", "Middle Eastern Royal Wellness Resort"],
    residentialExp: "strong",
    flExperience: false,
    engaged: false,
    floridaPresence: false,
    recognition: "World Travel Awards; Forbes Travel Guide Star Award",
    keyStrength: "Operator model + luxury brands",
    projectCount: "20+",
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
    differentiator: "'Left brain/right brain' approach combining creative design with business acumen. 400+ projects in 40+ countries. Direct Ritz-Carlton experience.",
    notableProjects: ["Nimbu Spa (Ritz-Carlton Reserve, Costa Rica)", "Zenova Spa (Pier Sixty-Six, Ft. Lauderdale)", "Four Seasons Jimbaran Bay", "Loma de Vida Spa (La Cantera)"],
    residentialExp: "strong",
    flExperience: true,
    engaged: false,
    floridaPresence: true,
    recognition: "Hospitality Design Magazine; Organic Spa Magazine",
    keyStrength: "Ritz-Carlton + FL experience",
    projectCount: "400+",
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
    notableProjects: ["Kailani Grand Cayman (Curio Collection)", "Kelowna Resort & Residences", "Itz'ana Resort & Residences (Belize)", "Ti Kaye Resort & Spa"],
    residentialExp: "moderate",
    flExperience: false,
    engaged: false,
    floridaPresence: true,
    recognition: "Spain's Best Resort Spa 2025 Nomination; Award-winning Oceanstone Resort",
    keyStrength: "Vertically integrated model",
    projectCount: "15+",
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
    notableProjects: ["15 Central Park West", "432 Park Avenue", "Fisher Island", "Fontainebleau Las Vegas", "Olara West Palm Beach"],
    residentialExp: "dominant",
    flExperience: true,
    engaged: false,
    floridaPresence: true,
    recognition: "Forbes, The New York Times, Mansion Global, The Cut",
    keyStrength: "Luxury residential dominance",
    projectCount: "450+",
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
    notableProjects: ["Playa Serena Spa (Luxury Collection Punta Cana)", "Conrad Punta de Mita", "Long Cay"],
    residentialExp: "limited",
    flExperience: false,
    engaged: false,
    floridaPresence: true,
    recognition: "Spa Business; CLADglobal; WTA Live Roundtable speaker",
    keyStrength: "Neuroaesthetics + biophilic",
    projectCount: "10+",
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

      {/* Comparison Matrix — Overview Table */}
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
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              Side-by-side comparison across key evaluation dimensions. Scroll horizontally on mobile.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="overflow-x-auto rounded-2xl border border-[#B8860B]/20 bg-white"
          >
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr className="border-b border-[#B8860B]/10 bg-[#FAFAF8]">
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold w-[160px]">Consultant</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Founded</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">HQ</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold text-center">Design</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold text-center">Programming</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold text-center">Operations</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Residential</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Projects</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Key Strength</th>
                </tr>
              </thead>
              <tbody>
                {consultants.map((c, i) => (
                  <tr key={i} className={`border-b border-[#B8860B]/5 ${c.engaged ? 'bg-[#B8860B]/[0.04]' : ''} ${c.flExperience ? 'bg-blue-50/40' : ''}`}>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-body text-sm font-medium text-black">{c.shortName}</span>
                        {c.engaged && <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-[#B8860B] text-white uppercase">Engaged</span>}
                        {c.flExperience && <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-blue-600 text-white uppercase">FL Exp</span>}
                      </div>
                    </td>
                    <td className="p-4 font-body text-xs text-black/60">{c.founded}</td>
                    <td className="p-4 font-body text-xs text-black/60">{c.hq}</td>
                    <td className="p-4 text-center"><ScopeIndicator active={c.scope.design} /></td>
                    <td className="p-4 text-center"><ScopeIndicator active={c.scope.programming} /></td>
                    <td className="p-4 text-center"><ScopeIndicator active={c.scope.operations} /></td>
                    <td className="p-4"><ResidentialBadge level={c.residentialExp} /></td>
                    <td className="p-4 font-mono text-xs text-black/70 font-semibold">{c.projectCount}</td>
                    <td className="p-4 font-body text-xs text-black/65">{c.keyStrength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Detailed Profiles */}
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
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {consultants.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`p-8 rounded-2xl border bg-white ${c.engaged ? 'border-[#B8860B]/50 ring-1 ring-[#B8860B]/20' : c.flExperience ? 'border-blue-300/50' : 'border-[#B8860B]/15'}`}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
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

                {/* Body Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Specialization */}
                  <div>
                    <p className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase mb-2 font-semibold">Specialization</p>
                    <p className="font-body text-sm text-black/70 leading-relaxed">{c.specialization}</p>
                  </div>

                  {/* Differentiator */}
                  <div>
                    <p className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase mb-2 font-semibold">Unique Differentiator</p>
                    <p className="font-body text-sm text-black/70 leading-relaxed">{c.differentiator}</p>
                  </div>

                  {/* Notable Projects */}
                  <div>
                    <p className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase mb-2 font-semibold">Notable Projects</p>
                    <ul className="space-y-1">
                      {c.notableProjects.map((p, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-xs text-black/60 font-body">
                          <span className="text-[#B8860B] mt-0.5 text-[8px]">●</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Stats */}
                <div className="mt-6 pt-5 border-t border-[#B8860B]/10 flex flex-wrap gap-6">
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
                    <span className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase block">Projects</span>
                    <span className="font-mono text-sm text-black/80 font-semibold mt-0.5 block">{c.projectCount}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase block">Florida Presence</span>
                    <span className="font-body text-xs text-black/70 mt-0.5 block">{c.floridaPresence ? "Yes" : "No"}</span>
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
                <h4 className="font-display text-lg font-medium text-black mb-2">Luxury Residential Depth</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed">
                  <strong className="text-black">The Wright Fit</strong> dominates luxury residential fitness with 70+ projects (15 Central Park West, 432 Park Avenue, Fisher Island). <strong className="text-black">BluSpas</strong> brings 400+ total projects including Ritz-Carlton Reserve and Nobu residential. <strong className="text-black">Trilogy</strong> has Waldorf Astoria NYC residential. These three have the deepest luxury condo/tower experience.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                <h4 className="font-display text-lg font-medium text-black mb-2">Florida-Based Firms</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed">
                  Four candidates have Florida presence: <strong className="text-black">Studio DeA</strong> (Miami Beach), <strong className="text-black">BluSpas</strong> (Pier Sixty-Six, Ft. Lauderdale), <strong className="text-black">Core Essence</strong> (Miami office), and <strong className="text-black">KALA Design Group</strong> (Coral Gables). Local presence may matter for ongoing collaboration and site visits.
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
