/**
 * Blended Gross Margin Modeler — v3
 * Interactive tool to model MSRP, COGS, volume mix, and discounts across 3 channels
 * Shows real-time blended gross margin with visual feedback
 * 
 * NEW: Global MSRP slider — adjusting list price cascades to all channel selling prices
 * based on their max discount percentages (Consumer: 0%, Vertical: 25%, Commercial: 40%)
 * 
 * Design: Brand-aligned (black/gold/white), luxury aesthetic, clean typography
 */

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  RotateCcw, DollarSign, BarChart3, Package, Building2, Store,
  AlertTriangle, CheckCircle2, Lock, Tag,
} from "lucide-react";

/* ─── Constants ─── */

const DEFAULT_MSRP = 1095;
const MIN_MSRP = 895;
const MAX_MSRP = 1595;
const DEFAULT_COGS = 440;
const MIN_COGS = 250;
const MAX_COGS = 600;
const GM_TARGET = 60;

/* ─── Channel Definitions ─── */

interface ChannelDef {
  name: string;
  shortName: string;
  icon: typeof DollarSign;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  barColor: string;
  maxDiscountPct: number; // 0 = full list, 25 = 25% off, 40 = 40% off
  defaultDiscountPct: number; // starting discount within allowed range
  defaultVolume: number;
  description: string;
  locked: boolean; // if true, price is always full MSRP
}

const channelDefs: ChannelDef[] = [
  {
    name: "Consumer (DTC)",
    shortName: "Consumer",
    icon: Package,
    accentColor: "#C9A962",
    accentBg: "bg-[#C9A962]/[0.06]",
    accentBorder: "border-[#C9A962]/20",
    barColor: "#C9A962",
    maxDiscountPct: 0,
    defaultDiscountPct: 0,
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
    barColor: "#1A1A1A",
    maxDiscountPct: 25,
    defaultDiscountPct: 20,
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
    barColor: "#9CA3AF",
    maxDiscountPct: 40,
    defaultDiscountPct: 32,
    defaultVolume: 30,
    description: "Health clubs, dealers, distributors, resellers.",
    locked: false,
  },
];

/* ─── Formatters ─── */

function fmtCurrency(val: number): string {
  return "$" + Math.round(val).toLocaleString("en-US");
}

function fmtPct(val: number): string {
  return val.toFixed(1) + "%";
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
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;

  return (
    <div className={disabled ? "opacity-50 pointer-events-none" : ""}>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-[10px] text-black/45 uppercase tracking-[0.15em]">{label}</span>
        <span className="font-display text-xl font-bold text-black tabular-nums">{formatDisplay(value)}</span>
      </div>
      {sublabel && <p className="font-body text-[10px] text-black/30 mb-2.5 leading-relaxed">{sublabel}</p>}
      <div className="relative h-8 flex items-center">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-black/[0.06]" />
        <div
          className="absolute left-0 h-1.5 rounded-full transition-all duration-150"
          style={{ width: `${pct}%`, backgroundColor: accentColor }}
        />
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
  const [msrp, setMsrp] = useState(DEFAULT_MSRP);
  const [cogs, setCogs] = useState(DEFAULT_COGS);
  // Store discount percentages instead of absolute prices — they stay stable when MSRP changes
  const [discounts, setDiscounts] = useState(channelDefs.map((c) => c.defaultDiscountPct));
  const [volumes, setVolumes] = useState(channelDefs.map((c) => c.defaultVolume));

  const setDiscount = useCallback((idx: number, val: number) => {
    setDiscounts((prev) => { const n = [...prev]; n[idx] = val; return n; });
  }, []);

  const setVolume = useCallback((idx: number, val: number) => {
    setVolumes((prev) => {
      const newVols = [...prev];
      newVols[idx] = val;
      const othersTotal = prev.reduce((s, v, i) => (i === idx ? s : s + v), 0);
      const remaining = 100 - val;
      if (othersTotal > 0) {
        for (let i = 0; i < newVols.length; i++) {
          if (i !== idx) {
            newVols[i] = Math.max(1, Math.round((prev[i] / othersTotal) * remaining));
          }
        }
      }
      const sum = newVols.reduce((s, v) => s + v, 0);
      if (sum !== 100) {
        const diff = 100 - sum;
        const adjustIdx = newVols.reduce((maxI, v, i) => (i !== idx && v > newVols[maxI] ? i : maxI), idx === 0 ? 1 : 0);
        newVols[adjustIdx] += diff;
      }
      return newVols;
    });
  }, []);

  const handleReset = useCallback(() => {
    setMsrp(DEFAULT_MSRP);
    setCogs(DEFAULT_COGS);
    setDiscounts(channelDefs.map((c) => c.defaultDiscountPct));
    setVolumes(channelDefs.map((c) => c.defaultVolume));
  }, []);

  // Compute selling prices from MSRP and discount %
  const prices = useMemo(() => {
    return channelDefs.map((ch, i) => {
      if (ch.locked) return msrp; // Consumer always at full list
      return Math.round(msrp * (1 - discounts[i] / 100));
    });
  }, [msrp, discounts]);

  // Per-channel metrics
  const channelMetrics = useMemo(() => {
    return channelDefs.map((ch, i) => {
      const price = prices[i];
      const vol = volumes[i];
      const margin = price - cogs;
      const gmPct = price > 0 ? (margin / price) * 100 : 0;
      const units = Math.round((vol / 100) * 1000);
      const revenue = units * price;
      const profit = units * margin;
      return { price, vol, margin, gmPct, units, revenue, profit, discountPct: ch.locked ? 0 : discounts[i] };
    });
  }, [prices, volumes, cogs, discounts]);

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
                  ? "Below 60% target — review pricing, volume mix, or COGS"
                  : "Margin compression — adjust MSRP, COGS, or channel mix"}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-28 bg-black/[0.06]" />

            {/* Right: Key metrics grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "List Price (MSRP)", value: fmtCurrency(msrp) },
                { label: "Blended ASP", value: fmtCurrency(blended.blendedASP) },
                { label: "Margin / Unit", value: fmtCurrency(blended.blendedMarginPerUnit) },
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
              <div className="absolute top-0 bottom-0 w-0.5 bg-[#C9A962]/60 z-10" style={{ left: "60%" }} />
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

      {/* ─── Global Controls: MSRP + COGS ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 rounded-2xl border border-black/[0.10] bg-white overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-black/[0.05] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C9A962]/[0.08] flex items-center justify-center">
              <Tag className="w-5 h-5 text-[#C9A962]" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-black">Global Pricing & Cost Controls</h3>
              <p className="font-body text-[11px] text-black/35">Adjust list price and manufacturing cost — channel prices update automatically</p>
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

        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* MSRP Slider */}
          <div>
            <CustomSlider
              value={msrp}
              min={MIN_MSRP}
              max={MAX_MSRP}
              step={5}
              onChange={setMsrp}
              formatDisplay={fmtCurrency}
              label="List Price (MSRP)"
              sublabel="Anchor price — all channel discounts calculated from this"
              accentColor="#C9A962"
            />
            {/* Show cascading prices preview */}
            <div className="mt-4 pt-3 border-t border-black/[0.04] grid grid-cols-3 gap-3">
              {channelDefs.map((ch, i) => (
                <div key={i} className="text-center">
                  <span className="font-mono text-[8px] text-black/30 tracking-wider uppercase block">{ch.shortName}</span>
                  <span className="font-display text-sm font-bold text-black tabular-nums">{fmtCurrency(prices[i])}</span>
                  <span className="font-mono text-[8px] text-black/20 block">
                    {ch.locked ? "full list" : `max ${ch.maxDiscountPct}% off`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* COGS Slider */}
          <div>
            <CustomSlider
              value={cogs}
              min={MIN_COGS}
              max={MAX_COGS}
              step={10}
              onChange={setCogs}
              formatDisplay={fmtCurrency}
              label="Manufacturing Cost (COGS)"
              sublabel="Model manufacturing efficiencies at scale or supply chain changes"
              accentColor="#1A1A1A"
            />
            {/* Show GM at list price */}
            <div className="mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between">
              <span className="font-mono text-[9px] text-black/30 tracking-wider uppercase">GM at Full List</span>
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold tabular-nums" style={{ color: ((msrp - cogs) / msrp * 100) >= GM_TARGET ? "#C9A962" : "#D97706" }}>
                  {fmtPct((msrp - cogs) / msrp * 100)}
                </span>
                <span className="font-mono text-[9px] text-black/20">({fmtCurrency(msrp - cogs)} margin)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Channel Cards ─── */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {channelDefs.map((ch, i) => {
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

                {/* Price / Discount control */}
                {ch.locked ? (
                  <div className="p-3 rounded-xl bg-black/[0.02] border border-black/[0.04] mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-black/40 uppercase tracking-[0.12em]">Selling Price</span>
                      <span className="font-display text-xl font-bold text-black tabular-nums">{fmtCurrency(prices[i])}</span>
                    </div>
                    <p className="font-body text-[10px] text-[#C9A962]/70 mt-1">Full MSRP — no discounts permitted</p>
                  </div>
                ) : (
                  <div className="mb-4">
                    <CustomSlider
                      value={discounts[i]}
                      min={0}
                      max={ch.maxDiscountPct}
                      step={1}
                      onChange={(v) => setDiscount(i, v)}
                      formatDisplay={(v) => `${v}% off → ${fmtCurrency(Math.round(msrp * (1 - v / 100)))}`}
                      label="Discount Off List"
                      sublabel={`Max allowed: ${ch.maxDiscountPct}% off (floor: ${fmtCurrency(Math.round(msrp * (1 - ch.maxDiscountPct / 100)))})`}
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
                  sublabel={`${channelMetrics[i].units.toLocaleString()} units per 1,000`}
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
                  backgroundColor: channelDefs[i].barColor,
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
            {channelDefs.map((ch, i) => {
              const m = channelMetrics[i];
              const gmColor = m.gmPct >= GM_TARGET ? "#C9A962" : m.gmPct >= 50 ? "#D97706" : "#DC2626";
              return (
                <div key={i} className="px-4 first:pl-0 last:pr-0">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: ch.barColor }}
                    />
                    <span className="font-mono text-[10px] text-black/45 tracking-wider">{ch.shortName}</span>
                  </div>
                  <div className="space-y-2.5">
                    <div>
                      <span className="font-mono text-[9px] text-black/25 block uppercase tracking-wider">Price / Unit</span>
                      <span className="font-display text-base font-bold text-black tabular-nums">{fmtCurrency(m.price)}</span>
                      {m.discountPct > 0 && <span className="font-mono text-[9px] text-black/20 ml-1">({m.discountPct}% off)</span>}
                    </div>
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
