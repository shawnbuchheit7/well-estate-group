/*
 * GTM Strategic Markets Page - Where to Play Matrix
 * INTERACTIVE: Drag-and-drop LOBs into quadrants as a collaborative exercise
 * All 9 LOBs start OUTSIDE the quadrants in a staging area
 * Design: Luxury black/grey/gold palette, fully responsive
 */

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Target, TrendingUp, Zap, Eye, ArrowRight, ArrowUpRight,
  Star, Dumbbell, Stethoscope, Package, Users, Building2, Shield, Ship, GripVertical,
  Info,
} from "lucide-react";
import Layout from "@/components/Layout";
import NextPageCTA from "@/components/NextPageCTA";
import LightHero from "@/components/LightHero";
import BlendedGMModeler from "@/components/BlendedGMModeler";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "exercise", label: "Market Positioning" },
  { id: "gm-modeler", label: "GM Modeler" },
];

interface LOBItem {
  id: string;
  name: string;
  icon: typeof Star;
  category: string;
}

const allLOBs: LOBItem[] = [
  { id: "private-clubs", name: "Private Clubs", icon: Star, category: "Vertical" },
  { id: "commercial-fitness", name: "Commercial Fitness Clubs", icon: Dumbbell, category: "Commercial" },
  { id: "medical-rehab", name: "Medical & Rehabilitation", icon: Stethoscope, category: "Vertical" },
  { id: "dtc", name: "Direct-to-Consumer", icon: Package, category: "DTC" },
  { id: "corporate-wellness", name: "Corporate Wellness", icon: Target, category: "Vertical" },
  { id: "pro-sports", name: "Professional Sports", icon: Users, category: "Vertical" },
  { id: "hospitality", name: "Hospitality & Amenities", icon: Building2, category: "Vertical" },
  { id: "military-gov", name: "Military & Government", icon: Shield, category: "GSA" },
  { id: "cruise-maritime", name: "Cruise & Maritime", icon: Ship, category: "Vertical" },
];

interface QuadrantDef {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Target;
}

const quadrantDefs: QuadrantDef[] = [
  {
    id: "focus-drive",
    title: "Focus & Drive",
    subtitle: "High Attractiveness / High Ease of Access",
    icon: Target,
  },
  {
    id: "crack-code",
    title: "Crack the Code",
    subtitle: "High Attractiveness / Low Ease of Access",
    icon: Zap,
  },
  {
    id: "learn-drive",
    title: "Learn & Drive",
    subtitle: "Low Attractiveness / High Ease of Access",
    icon: Eye,
  },
  {
    id: "opportunistic",
    title: "Opportunistic",
    subtitle: "Low Attractiveness / Low Ease of Access",
    icon: TrendingUp,
  },
];

function DraggableExercise() {
  // All LOBs start in the staging area (unplaced)
  const [placements, setPlacements] = useState<Record<string, string[]>>({
    "staging": allLOBs.map(l => l.id),
    "focus-drive": [],
    "crack-code": [],
    "learn-drive": [],
    "opportunistic": [],
  });
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOverZone, setDragOverZone] = useState<string | null>(null);

  const handleDragStart = useCallback((e: React.DragEvent, lobId: string) => {
    setDraggedItem(lobId);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", lobId);
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = "0.5";
    }
  }, []);

  const handleDragEnd = useCallback((e: React.DragEvent) => {
    setDraggedItem(null);
    setDragOverZone(null);
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = "1";
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, zoneId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverZone(zoneId);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOverZone(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, targetZoneId: string) => {
    e.preventDefault();
    const lobId = e.dataTransfer.getData("text/plain");
    if (!lobId) return;

    setPlacements(prev => {
      const newPlacements = { ...prev };
      // Remove from current zone
      for (const zId of Object.keys(newPlacements)) {
        newPlacements[zId] = newPlacements[zId].filter(id => id !== lobId);
      }
      // Add to target zone
      newPlacements[targetZoneId] = [...newPlacements[targetZoneId], lobId];
      return newPlacements;
    });

    setDraggedItem(null);
    setDragOverZone(null);
  }, []);

  const handleReset = useCallback(() => {
    setPlacements({
      "staging": allLOBs.map(l => l.id),
      "focus-drive": [],
      "crack-code": [],
      "learn-drive": [],
      "opportunistic": [],
    });
  }, []);

  const stagingLobs = (placements["staging"] || []).map(id => allLOBs.find(l => l.id === id)).filter(Boolean) as LOBItem[];
  const placedCount = allLOBs.length - stagingLobs.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-0">
      {/* Exercise Note */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 p-5 rounded-xl border border-[#C9A962]/25 bg-[#C9A962]/[0.03]"
      >
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-display text-sm font-semibold text-black mb-1">Collaborative Exercise — WEG + ZeroWheel</p>
            <p className="font-body text-sm text-black/55 leading-relaxed">
              This is a strategic prioritization exercise to be completed together with the ZeroWheel team. Drag each of the 9 macro lines of business from the staging area into the quadrant that best represents its market attractiveness and ease of access. Use this to align on where to focus resources in Year 1.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-2 w-32 rounded-full bg-black/[0.06] overflow-hidden">
            <motion.div
              className="h-full bg-[#C9A962] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(placedCount / allLOBs.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="font-mono text-[11px] text-black/40 tracking-wider">
            {placedCount}/{allLOBs.length} placed
          </span>
        </div>
        <button
          onClick={handleReset}
          className="font-mono text-[10px] text-black/40 hover:text-[#C9A962] tracking-wider uppercase px-3 py-1.5 rounded-lg border border-black/[0.08] hover:border-[#C9A962]/30 transition-all"
        >
          Reset
        </button>
      </div>

      {/* Staging Area — LOBs start here */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onDragOver={(e) => handleDragOver(e as unknown as React.DragEvent, "staging")}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e as unknown as React.DragEvent, "staging")}
        className={`mb-8 p-5 rounded-2xl border-2 border-dashed transition-all duration-300 min-h-[80px] ${
          dragOverZone === "staging"
            ? "border-[#C9A962] bg-[#C9A962]/[0.03]"
            : "border-black/[0.12] bg-[#FAFAF8]"
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[10px] text-black/40 uppercase tracking-[0.15em] font-semibold">
            9 Macro Lines of Business
          </span>
          {stagingLobs.length > 0 && (
            <span className="font-mono text-[9px] text-black/25">— drag into quadrants below</span>
          )}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {stagingLobs.map((lob) => (
            <div
              key={lob.id}
              draggable
              onDragStart={(e) => handleDragStart(e, lob.id)}
              onDragEnd={handleDragEnd}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium tracking-wide transition-all cursor-grab active:cursor-grabbing select-none bg-white text-black/70 border border-black/[0.15] hover:border-[#C9A962]/40 hover:shadow-md hover:scale-[1.03] hover:-translate-y-0.5 ${
                draggedItem === lob.id ? "opacity-50 scale-95" : ""
              }`}
            >
              <GripVertical className="w-3 h-3 flex-shrink-0 text-black/25" />
              <lob.icon className="w-3.5 h-3.5 flex-shrink-0 text-[#C9A962]" />
              <span>{lob.name}</span>
              <span className="font-mono text-[8px] tracking-wider uppercase ml-1 text-black/30">
                {lob.category}
              </span>
            </div>
          ))}
          {stagingLobs.length === 0 && (
            <span className="font-body text-xs text-emerald-600/60 italic">All LOBs placed — exercise complete!</span>
          )}
        </div>
      </motion.div>

      {/* Axis Labels + 2x2 Grid */}
      <div className="relative">
        {/* Y-axis label */}
        <div className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 items-center gap-2">
          <span className="font-mono text-[10px] text-black/20 tracking-wider uppercase whitespace-nowrap">Market Attractiveness</span>
          <span className="text-[#C9A962] text-xs">↑</span>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {quadrantDefs.map((q, i) => {
            const lobIds = placements[q.id] || [];
            const lobs = lobIds.map(id => allLOBs.find(l => l.id === id)).filter(Boolean) as LOBItem[];
            const isDropTarget = dragOverZone === q.id;
            const isTopLeft = i === 0;

            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onDragOver={(e) => handleDragOver(e as unknown as React.DragEvent, q.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e as unknown as React.DragEvent, q.id)}
                className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col border transition-all duration-300 ${
                  isTopLeft ? "bg-white" : i === 3 ? "bg-[#F7F7F5]" : "bg-[#FAFAF8]"
                } ${
                  isDropTarget
                    ? "border-[#C9A962] shadow-[0_8px_30px_rgba(201,169,98,0.15)] scale-[1.01]"
                    : "border-black/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                }`}
                style={{ minHeight: '200px' }}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isTopLeft ? "bg-[#C9A962]/15" : "bg-black/[0.06]"}`}>
                    <q.icon className={`w-4 h-4 sm:w-[18px] sm:h-[18px] ${isTopLeft ? 'text-[#C9A962]' : 'text-black/50'}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base sm:text-lg font-semibold text-black leading-tight">{q.title}</h3>
                    <p className="font-mono text-[9px] sm:text-[10px] text-black/50 tracking-wide mt-0.5 leading-snug">{q.subtitle}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px w-full mb-3 sm:mb-4 ${isTopLeft ? 'bg-[#C9A962]/25' : 'bg-black/[0.06]'}`} />

                {/* Drop zone indicator when empty and being dragged over */}
                {isDropTarget && lobs.length === 0 && (
                  <div className="flex-1 flex items-center justify-center border-2 border-dashed border-[#C9A962]/40 rounded-xl mb-2 min-h-[60px]">
                    <span className="font-body text-xs text-[#C9A962]/60">Drop here</span>
                  </div>
                )}

                {/* LOB Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {lobs.map((lob) => (
                    <div
                      key={lob.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, lob.id)}
                      onDragEnd={handleDragEnd}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-medium tracking-wide transition-all cursor-grab active:cursor-grabbing select-none ${
                        isTopLeft
                          ? "bg-black text-white shadow-md hover:shadow-lg hover:scale-[1.03]"
                          : "bg-white text-black/70 border border-black/[0.15] hover:border-[#C9A962]/40 hover:shadow-md hover:scale-[1.03]"
                      } ${draggedItem === lob.id ? "opacity-50 scale-95" : ""}`}
                    >
                      <GripVertical className={`w-3 h-3 flex-shrink-0 ${isTopLeft ? 'text-white/40' : 'text-black/25'}`} />
                      <lob.icon className={`w-3.5 h-3.5 flex-shrink-0 ${isTopLeft ? 'text-[#C9A962]' : 'text-black/40'}`} />
                      <span>{lob.name}</span>
                    </div>
                  ))}
                  {lobs.length === 0 && !isDropTarget && (
                    <span className="font-body text-xs text-black/25 italic">Drop LOBs here</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* X-axis label */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <span className="font-mono text-[10px] text-black/20 tracking-wider uppercase">Ease of Access</span>
          <span className="text-[#C9A962] text-xs">→</span>
        </div>
      </div>

      {/* Completion state */}
      {placedCount === allLOBs.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 text-center"
        >
          <p className="font-display text-lg font-semibold text-emerald-800 mb-1">Exercise Complete</p>
          <p className="font-body text-sm text-emerald-700/70">All 9 macro LOBs have been placed. Review the positioning together and adjust as needed.</p>
        </motion.div>
      )}
    </div>
  );
}

export default function ZWStrategicMarkets() {
  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="WEG Market Prioritization"
          title="Where to Play"
          description="Interactive strategic exercises for WEG and ZeroWheel — market positioning, financial modeling, and collaborative planning tools to align on strategy and execution."
          stats={[
            { value: "3", label: "Interactive Exercises" },
            { value: "9", label: "Macro LOBs" },
            { value: "60%", label: "GM Target" },
          ]}
        />
      </div>

      {/* Interactive Exercise */}
      <section id="exercise" className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-4">
              Interactive Exercise
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-black">
              Strategic Market Positioning
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xs sm:text-sm text-black/40 mt-3 max-w-xl mx-auto">
              Drag each LOB from the staging area into the appropriate quadrant. LOBs can be moved between quadrants or back to staging at any time.
            </motion.p>
          </motion.div>

          <DraggableExercise />
        </div>
      </section>
      {/* Blended GM Modeler */}
      <section id="gm-modeler" className="py-12 sm:py-16 bg-[#FAFAF8]">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-4">
              Interactive Modeler
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-black">
              Blended Gross Margin Analysis
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xs sm:text-sm text-black/40 mt-3 max-w-xl mx-auto">
              Model manufacturing costs, channel pricing, and volume mix to find the optimal blended gross margin across Consumer, Vertical, and Commercial markets.
            </motion.p>
          </motion.div>

          <BlendedGMModeler />
        </div>
      </section>

      <NextPageCTA label="Infrastructure & Analytics" href="/gtm/zerowheel/sales-infrastructure" />
    </Layout>
  );
}
