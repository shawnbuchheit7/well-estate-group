/**
 * Blended Gross Margin Modeler — v2 Optimized
 * Interactive tool to model COGS, volume mix, and discounts across 3 channels
 * Shows real-time blended gross margin with visual feedback
 * 
 * Design: Brand-aligned (black/gold/white), luxury aesthetic, clean typography
 * Function: Smooth volume normalization, custom styled sliders, scenario defaults
 */

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw, DollarSign, BarChart3, Package, Building2, Store,
  AlertTriangle, CheckCircle2, Lock, TrendingUp, Minus,
} from "lucide-react";

/* ─── Channel Configuration ─── */

interface ChannelConfig {
  name: string;
  shortName: string;
  icon: typeof DollarSign;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentLight: string;
  defaultPrice: number;
  minPrice: number;
  maxPrice: number;
  defaultVolume: number;
  description: string;
  locked: boolean;
}

const channels: ChannelConfig[] = [
  {
    name: "Consumer (DTC)",
    shortName: "Consumer",
    icon: Package,
    accentColor: "#C9A962",
    accentBg: "bg-[#C9A962]/[0.06]",
    accentBorder: "border-[#C9A962]/20",
    accentLight: "bg-[#C9A962]/[0.08]",
    defaultPrice: 1095,
    minPrice: 1095,
    maxPrice: 1095,
    defaultVolume: 30,
    description: "Full MSRP — no discounts. Margin floor anchor.",
    locked: true,
  },
  {
    name: "Vertical Markets",
    shortName: "Vertical",
    icon: Building2,
    accentColor: "#1A1A1A",
    accentBg: "bg-black/[0.02]",
    accentBorder: "border-black/[0.10]",
    accentLight: "bg-black/[0.04]",
    defaultPrice: 875,
    minPrice: 695,
    maxPrice: 1095,
    defaultVolume: 40,
    description: "Medical, clubs, hospitality, sports, corporate.",
    locked: false,
  },
  {
    name: "Commercial Markets",
    shortName: "Commercial",
    icon: Store,
    accentColor: "#6B7280",
    accentBg: "bg-black/[0.01]",
    accentBorder: "border-black/[0.08]",
    accentLight: "bg-black/[0.03]",
    defaultPrice: 750,
    minPrice: 695,
    maxPrice: 1095,
    defaultVolume: 30,
    description: "Health clubs, dealers, distributors, resellers.",
    locked: false,
  },
];

const MSRP = 1095;
const DEFAULT_COGS = 440;
const MIN_COGS = 250;
const MAX_COGS = 600;
const GM_TARGET = 60;

/* ─── Formatters ─── */

function fmtCurrency(val: number): string {
  return "$" + Math.round(val).toLocaleString("en-US");
}

function fmtPct(val: number): string {
  return val.toFixed(1) + "%";
}

function fmtDiscount(price: number): string {
  const pct = ((MSRP - price) / MSRP) * 100;
  return pct > 0 ? `${pct.toFixed(0)}% off list` : "Full list";
}

/* ─── Custom Slider ─── */

function CustomSlider({
  value,
  min,
  max,
  step,
  onChange,
  formatDisplay,
  label,
  sublabel,
  accentColor = "#C9A962",
  disabled = false,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  formatDisplay: (v: number) => string;
  label: string;
  sublabel?: string;
  accentColor?: string;
  disabled?: boolean;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className={disabled ? "opacity-50 pointer-events-none" : ""}>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-[10px] text-black/45 uppercase tracking-[0.15em]">{label}</span>
        <span className="font-display text-xl font-bold text-black tabular-nums">{formatDisplay(value)}</span>
      </div>
      {sublabel && <p className="font-body text-[10px] text-black/30 mb-2.5 leading-relaxed">{sublabel}</p>}
      <div className="relative h-8 flex items-center">
        {/* Track background */}
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-black/[0.06]" />
        {/* Active fill */}
        <div
          className="absolute left-0 h-1.5 rounded-full transition-all duration-150"
          style={{ width: `${pct}%`, backgroundColor: accentColor }}
        />
        {/* Native input (invisible but functional) */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        {/* Custom thumb */}
        <div
          className="absolute w-5 h-5 rounded-full bg-white border-2 shadow-md transition-all duration-150 pointer-events-none"
          style={{
            left: `calc(${pct}% - 10px)`,
            borderColor: accentColor,
            boxShadow: `0 2px 8px ${accentColor}30`,
          }}
        />
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="font-mono text-[9px] text-black/20">{formatDisplay(min)}</span>
        <span className="font-mono text-[9px] text-black/20">{formatDisplay(max)}</span>
      </div>
    </div>
  );
}

/* ─── GM Indicator Ring ─── */

function GMRing({ value, size = 80, strokeWidth = 6 }: { value: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedValue = Math.min(Math.max(value, 0), 100);
  const offset = circumference - (clampedValue / 100) * circumference;

  const getColor = (v: number) => {
    if (v >= GM_TARGET) return "#C9A962";
    if (v >= 50) return "#D97706";
    return "#DC2626";
  };

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={getColor(value)} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-lg font-bold text-black tabular-nums">{fmtPct(value)}</span>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function BlendedGMModeler() {
  const [cogs, setCogs] = useState(DEFAULT_COGS);
  const [prices, setPrices] = useState(channels.map((c) => c.defaultPrice));
  const [volumes, setVolumes] = useState(channels.map((c) => c.defaultVolume));

  const setPrice = useCallback((idx: number, val: number) => {
    setPrices((prev) => { const n = [...prev]; n[idx] = val; return n; });
  }, []);

  const setVolume = useCallback((idx: number, val: number) => {
    setVolumes((prev) => {
      const newVols = [...prev];
      newVols[idx] = val;
      // Proportionally redistribute remaining volume to other channels
      const othersTotal = prev.reduce((s, v, i) => (i === idx ? s : s + v), 0);
      const remaining = 100 - val;
      if (othersTotal > 0) {
        for (let i = 0; i < newVols.length; i++) {
          if (i !== idx) {
            newVols[i] = Math.max(1, Math.round((prev[i] / othersTotal) * remaining));
          }
        }
      }
      // Ensure sum is exactly 100
      const sum = newVols.reduce((s, v) => s + v, 0);
      if (sum !== 100) {
        const diff = 100 - sum;
        // Add/subtract diff from the largest non-adjusted channel
        const adjustIdx = newVols.reduce((maxI, v, i) => (i !== idx && v > newVols[maxI] ? i : maxI), idx === 0 ? 1 : 0);
        newVols[adjustIdx] += diff;
      }
      return newVols;
    });
  }, []);

  const handleReset = useCallback(() => {
    setCogs(DEFAULT_COGS);
    setPrices(channels.map((c) => c.defaultPrice));
    setVolumes(channels.map((c) => c.defaultVolume));
  }, []);

  // Per-channel metrics
  const channelMetrics = useMemo(() => {
    return channels.map((ch, i) => {
      const price = prices[i];
      const vol = volumes[i];
      const margin = price - cogs;
      const gmPct = price > 0 ? (margin / price) * 100 : 0;
      const discountPct = ((MSRP - price) / MSRP) * 100;
      const units = Math.round((vol / 100) * 1000);
      const revenue = units * price;
      const profit = units * margin;
      return { price, vol, margin, gmPct, discountPct, units, revenue, profit };
    });
  }, [prices, volumes, cogs]);

  // Blended metrics
  const blended = useMemo(() => {
    const totalUnits = 1000;
    let weightedPrice = 0;
    let weightedMargin = 0;
    channelMetrics.forEach((m) => {
      weightedPrice += m.price * m.units;
      weightedMargin += m.margin * m.units;
    });
    const blendedASP = weightedPrice / totalUnits;
    const blendedMarginPerUnit = weightedMargin / totalUnits;
    const blendedGMPct = blendedASP > 0 ? (blendedMarginPerUnit / blendedASP) * 100 : 0;
    return { blendedASP, blendedMarginPerUnit, blendedGMPct, totalRevenue: weightedPrice, totalProfit: weightedMargin };
  }, [channelMetrics]);

  const isHealthy = blended.blendedGMPct >= GM_TARGET;
  const isWarning = blended.blendedGMPct >= 50 && blended.blendedGMPct < GM_TARGET;

  const statusColor = isHealthy ? "#C9A962" : isWarning ? "#D97706" : "#DC2626";
  const statusBg = isHealthy ? "bg-[#C9A962]/[0.06]" : isWarning ? "bg-amber-50" : "bg-red-50";
  const statusBorder = isHealthy ? "border-[#C9A962]/25" : isWarning ? "border-amber-200" : "border-red-200";
  const statusText = isHealthy ? "text-[#C9A962]" : isWarning ? "text-amber-700" : "text-red-700";

  return (
    <div className="max-w-6xl mx-auto">

      {/* ─── Hero Metric ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`mb-8 rounded-2xl border-2 ${statusBorder} ${statusBg} overflow-hidden`}
      >
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: Big GM number */}
            <div className="text-center md:text-left flex-shrink-0">
              <div className="flex items-center gap-2 mb-2">
                {isHealthy ? (
                  <CheckCircle2 className="w-4 h-4" style={{ color: statusColor }} />
                ) : (
                  <AlertTriangle className="w-4 h-4" style={{ color: statusColor }} />
                )}
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/35">
                  Blended Gross Margin
                </span>
              </div>
              <motion.div
                key={blended.blendedGMPct.toFixed(1)}
                initial={{ scale: 1.05, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-display text-7xl md:text-8xl font-bold tabular-nums"
                style={{ color: statusColor }}
              >
                {fmtPct(blended.blendedGMPct)}
              </motion.div>
              <p className={`font-body text-sm mt-2 ${isHealthy ? "text-[#C9A962]/70" : isWarning ? "text-amber-600/70" : "text-red-600/70"}`}>
                {isHealthy
                  ? "Above 60% target — healthy margin structure"
                  : isWarning
                  ? "Below 60% target — review volume mix or pricing"
                  : "Margin compression — adjust COGS, pricing, or mix"}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-28 bg-black/[0.06]" />

            {/* Right: Key metrics grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Blended ASP", value: fmtCurrency(blended.blendedASP) },
                { label: "Margin / Unit", value: fmtCurrency(blended.blendedMarginPerUnit) },
                { label: "COGS / Unit", value: fmtCurrency(cogs) },
                { label: "Profit / 1K Units", value: fmtCurrency(blended.totalProfit) },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <p className="font-mono text-[9px] text-black/30 uppercase tracking-[0.15em] mb-1">{m.label}</p>
                  <p className="font-display text-xl font-bold text-black tabular-nums">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Target line indicator */}
          <div className="mt-6 pt-5 border-t border-black/[0.05]">
            <div className="flex items-center justify-between text-[10px] font-mono text-black/30 mb-1.5">
              <span>0%</span>
              <span className="text-[#C9A962] font-semibold">60% TARGET</span>
              <span>100%</span>
            </div>
            <div className="relative h-3 rounded-full bg-black/[0.04] overflow-hidden">
              {/* Target marker */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-[#C9A962]/60 z-10" style={{ left: "60%" }} />
              {/* Current value bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 rounded-full"
                style={{ backgroundColor: statusColor }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(blended.blendedGMPct, 100)}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── COGS Control ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 p-6 rounded-2xl border border-black/[0.10] bg-white"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black/[0.03] flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-black/40" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-black">Manufacturing Cost (COGS)</h3>
              <p className="font-body text-[11px] text-black/35">Current estimate: ~$440 per unit at 60% GM on list price</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 font-mono text-[10px] text-black/35 hover:text-[#C9A962] tracking-[0.12em] uppercase px-3 py-2 rounded-lg border border-black/[0.06] hover:border-[#C9A962]/30 transition-all"
          >
            <RotateCcw className="w-3 h-3" />
            Reset All
          </button>
        </div>
        <CustomSlider
          value={cogs}
          min={MIN_COGS}
          max={MAX_COGS}
          step={10}
          onChange={setCogs}
          formatDisplay={fmtCurrency}
          label="Unit COGS"
          sublabel="Model manufacturing efficiencies at scale or supply chain changes"
          accentColor="#C9A962"
        />
      </motion.div>

      {/* ─── Channel Cards ─── */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {channels.map((ch, i) => {
          const m = channelMetrics[i];
          const gmColor = m.gmPct >= GM_TARGET ? "#C9A962" : m.gmPct >= 50 ? "#D97706" : "#DC2626";

          return (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border ${ch.accentBorder} bg-white overflow-hidden`}
            >
              {/* Card header */}
              <div className={`px-5 pt-5 pb-4 ${ch.accentBg}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <ch.icon className="w-4 h-4" style={{ color: ch.accentColor, opacity: 0.6 }} />
                    <h4 className="font-display text-sm font-semibold text-black">{ch.name}</h4>
                  </div>
                  {ch.locked && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C9A962]/10">
                      <Lock className="w-3 h-3 text-[#C9A962]" />
                      <span className="font-mono text-[8px] text-[#C9A962] tracking-wider uppercase">Locked</span>
                    </div>
                  )}
                </div>
                <p className="font-body text-[10px] text-black/35 leading-relaxed">{ch.description}</p>
              </div>

              {/* GM Ring + Price */}
              <div className="px-5 py-4">
                <div className="flex items-center gap-4 mb-4">
                  <GMRing value={m.gmPct} size={72} strokeWidth={5} />
                  <div>
                    <p className="font-mono text-[9px] text-black/30 uppercase tracking-[0.12em]">Channel GM</p>
                    <p className="font-display text-2xl font-bold tabular-nums" style={{ color: gmColor }}>{fmtPct(m.gmPct)}</p>
                    <p className="font-mono text-[9px] text-black/25 mt-0.5">{fmtCurrency(m.margin)} margin/unit</p>
                  </div>
                </div>

                {/* Price control */}
                {ch.locked ? (
                  <div className="p-3 rounded-xl bg-black/[0.02] border border-black/[0.04] mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-black/40 uppercase tracking-[0.12em]">Selling Price</span>
                      <span className="font-display text-xl font-bold text-black">{fmtCurrency(prices[i])}</span>
                    </div>
                    <p className="font-body text-[10px] text-[#C9A962]/70 mt-1">Full MSRP — no discounts permitted</p>
                  </div>
                ) : (
                  <div className="mb-4">
                    <CustomSlider
                      value={prices[i]}
                      min={ch.minPrice}
                      max={ch.maxPrice}
                      step={5}
                      onChange={(v) => setPrice(i, v)}
                      formatDisplay={fmtCurrency}
                      label="Selling Price"
                      sublabel={fmtDiscount(prices[i])}
                      accentColor={ch.accentColor}
                    />
                  </div>
                )}

                {/* Volume control */}
                <CustomSlider
                  value={volumes[i]}
                  min={1}
                  max={80}
                  step={1}
                  onChange={(v) => setVolume(i, v)}
                  formatDisplay={(v) => Math.round(v) + "%"}
                  label="Volume Mix"
                  sublabel={`${m.units.toLocaleString()} units per 1,000`}
                  accentColor={ch.accentColor}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── Revenue Breakdown ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-black/[0.10] bg-white overflow-hidden"
      >
        <div className="px-6 py-5 border-b border-black/[0.05] flex items-center gap-2.5">
          <BarChart3 className="w-4 h-4 text-[#C9A962]" />
          <h3 className="font-display text-sm font-semibold text-black">Revenue & Margin Breakdown</h3>
          <span className="font-mono text-[9px] text-black/25 tracking-wider ml-auto">PER 1,000 UNITS</span>
        </div>

        <div className="p-6">
          {/* Stacked bar */}
          <div className="h-8 rounded-lg overflow-hidden flex mb-6">
            {channelMetrics.map((m, i) => (
              <motion.div
                key={i}
                className="h-full flex items-center justify-center font-mono text-[10px] tracking-wider"
                style={{
                  backgroundColor: i === 0 ? "#C9A962" : i === 1 ? "#1A1A1A" : "#9CA3AF",
                  color: "white",
                  width: `${volumes[i]}%`,
                }}
                animate={{ width: `${volumes[i]}%` }}
                transition={{ duration: 0.3 }}
              >
                {volumes[i] > 14 && `${volumes[i]}%`}
              </motion.div>
            ))}
          </div>

          {/* Channel breakdown table */}
          <div className="grid grid-cols-3 gap-0 divide-x divide-black/[0.05]">
            {channels.map((ch, i) => {
              const m = channelMetrics[i];
              const gmColor = m.gmPct >= GM_TARGET ? "#C9A962" : m.gmPct >= 50 ? "#D97706" : "#DC2626";
              return (
                <div key={i} className="px-4 first:pl-0 last:pr-0">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: i === 0 ? "#C9A962" : i === 1 ? "#1A1A1A" : "#9CA3AF" }}
                    />
                    <span className="font-mono text-[10px] text-black/45 tracking-wider">{ch.shortName}</span>
                  </div>
                  <div className="space-y-2.5">
                    <div>
                      <span className="font-mono text-[9px] text-black/25 block uppercase tracking-wider">Units</span>
                      <span className="font-display text-base font-bold text-black tabular-nums">{m.units.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-black/25 block uppercase tracking-wider">Revenue</span>
                      <span className="font-display text-base font-bold text-black tabular-nums">{fmtCurrency(m.revenue)}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-black/25 block uppercase tracking-wider">Gross Profit</span>
                      <span className="font-display text-base font-bold tabular-nums" style={{ color: gmColor }}>
                        {fmtCurrency(m.profit)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Totals */}
          <div className="mt-5 pt-5 border-t border-black/[0.06] flex items-end justify-between">
            <div className="flex items-center gap-8">
              <div>
                <span className="font-mono text-[9px] text-black/25 block uppercase tracking-wider">Total Revenue</span>
                <span className="font-display text-xl font-bold text-black tabular-nums">{fmtCurrency(blended.totalRevenue)}</span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-black/25 block uppercase tracking-wider">Total Gross Profit</span>
                <span className="font-display text-xl font-bold tabular-nums" style={{ color: statusColor }}>
                  {fmtCurrency(blended.totalProfit)}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-[9px] text-black/25 block uppercase tracking-wider">Blended GM</span>
              <span className="font-display text-3xl font-bold tabular-nums" style={{ color: statusColor }}>
                {fmtPct(blended.blendedGMPct)}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
