/**
 * Blended Gross Margin Modeler
 * Interactive tool to model COGS, volume mix, and discounts across 3 channels
 * Shows real-time blended gross margin with visual feedback
 */

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Info, RotateCcw, DollarSign, BarChart3, Percent, TrendingUp, Package, Building2, Store, AlertTriangle, CheckCircle2 } from "lucide-react";

interface ChannelConfig {
  name: string;
  icon: typeof DollarSign;
  color: string;
  bgColor: string;
  borderColor: string;
  defaultPrice: number;
  minPrice: number;
  maxPrice: number;
  defaultVolume: number;
  priceLabel: string;
  description: string;
}

const channels: ChannelConfig[] = [
  {
    name: "Consumer (DTC)",
    icon: Package,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    defaultPrice: 1095,
    minPrice: 1095,
    maxPrice: 1095,
    defaultVolume: 25,
    priceLabel: "Full List — $1,095",
    description: "Full MSRP, highest margin channel. No discounts.",
  },
  {
    name: "Vertical Markets",
    icon: Building2,
    color: "text-[#C9A962]",
    bgColor: "bg-[#C9A962]/[0.06]",
    borderColor: "border-[#C9A962]/25",
    defaultPrice: 825,
    minPrice: 695,
    maxPrice: 1095,
    defaultVolume: 40,
    priceLabel: "Max 25% off list — $825",
    description: "Medical, clubs, hospitality, sports, corporate.",
  },
  {
    name: "Commercial Markets",
    icon: Store,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    defaultPrice: 695,
    minPrice: 695,
    maxPrice: 1095,
    defaultVolume: 35,
    priceLabel: "Max 40% off list — $695",
    description: "Health clubs, dealers, distributors, resellers.",
  },
];

const MSRP = 1095;
const DEFAULT_COGS = 440;
const MIN_COGS = 250;
const MAX_COGS = 600;

function formatCurrency(val: number): string {
  return "$" + val.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatPct(val: number): string {
  return val.toFixed(1) + "%";
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  sublabel,
  accentClass = "accent-[#C9A962]",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  sublabel?: string;
  accentClass?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[10px] text-black/50 uppercase tracking-wider">{label}</span>
        <span className="font-display text-lg font-bold text-black">{format(value)}</span>
      </div>
      {sublabel && <p className="font-body text-[10px] text-black/35 mb-2">{sublabel}</p>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-2 rounded-full appearance-none cursor-pointer bg-black/[0.08] ${accentClass}`}
        style={{ accentColor: accentClass.includes("emerald") ? "#059669" : accentClass.includes("blue") ? "#2563eb" : "#C9A962" }}
      />
      <div className="flex justify-between mt-1">
        <span className="font-mono text-[9px] text-black/25">{format(min)}</span>
        <span className="font-mono text-[9px] text-black/25">{format(max)}</span>
      </div>
    </div>
  );
}

export default function BlendedGMModeler() {
  const [cogs, setCogs] = useState(DEFAULT_COGS);
  const [prices, setPrices] = useState(channels.map(c => c.defaultPrice));
  const [volumes, setVolumes] = useState(channels.map(c => c.defaultVolume));

  const setPrice = (idx: number, val: number) => {
    setPrices(prev => { const n = [...prev]; n[idx] = val; return n; });
  };

  const setVolume = (idx: number, val: number) => {
    // Normalize volumes so they sum to 100
    const others = volumes.reduce((s, v, i) => i === idx ? s : s + v, 0);
    const maxForThis = 100 - (channels.length - 1); // at least 1% for each other
    const clamped = Math.min(val, maxForThis);
    
    if (others === 0) {
      setVolumes(prev => { const n = [...prev]; n[idx] = clamped; return n; });
      return;
    }
    
    const scale = (100 - clamped) / others;
    setVolumes(prev => prev.map((v, i) => i === idx ? clamped : Math.max(1, Math.round(v * scale))));
  };

  const handleReset = () => {
    setCogs(DEFAULT_COGS);
    setPrices(channels.map(c => c.defaultPrice));
    setVolumes(channels.map(c => c.defaultVolume));
  };

  // Normalize volumes to exactly 100
  const totalVol = volumes.reduce((s, v) => s + v, 0);
  const normVolumes = volumes.map(v => v / totalVol * 100);

  // Calculate per-channel metrics
  const channelMetrics = useMemo(() => {
    return channels.map((ch, i) => {
      const price = prices[i];
      const vol = normVolumes[i];
      const margin = price - cogs;
      const gmPct = price > 0 ? (margin / price) * 100 : 0;
      const discountPct = ((MSRP - price) / MSRP) * 100;
      return { price, vol, margin, gmPct, discountPct };
    });
  }, [prices, normVolumes, cogs]);

  // Calculate blended metrics
  const blended = useMemo(() => {
    let weightedPrice = 0;
    let weightedMargin = 0;
    let totalUnits = 1000; // model on 1,000 units
    
    channelMetrics.forEach((m, i) => {
      const units = (normVolumes[i] / 100) * totalUnits;
      weightedPrice += m.price * units;
      weightedMargin += m.margin * units;
    });
    
    const blendedASP = weightedPrice / totalUnits;
    const blendedMarginPerUnit = weightedMargin / totalUnits;
    const blendedGMPct = blendedASP > 0 ? (blendedMarginPerUnit / blendedASP) * 100 : 0;
    const totalRevenue = weightedPrice;
    const totalProfit = weightedMargin;
    
    return { blendedASP, blendedMarginPerUnit, blendedGMPct, totalRevenue, totalProfit, totalUnits };
  }, [channelMetrics, normVolumes]);

  const gmHealthy = blended.blendedGMPct >= 55;
  const gmWarning = blended.blendedGMPct >= 45 && blended.blendedGMPct < 55;
  const gmDanger = blended.blendedGMPct < 45;

  return (
    <div className="max-w-6xl mx-auto">
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
            <p className="font-display text-sm font-semibold text-black mb-1">Blended Gross Margin Modeler</p>
            <p className="font-body text-sm text-black/55 leading-relaxed">
              Adjust manufacturing costs, selling prices, and volume mix across the three market categories to see how the blended gross margin shifts in real time. Consumer (DTC) pricing remains at full list ($1,095) to protect the margin floor. Target: 55%+ blended GM.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Blended GM Hero Metric */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`mb-8 p-6 rounded-2xl border-2 text-center transition-all duration-500 ${
          gmHealthy ? "border-emerald-300 bg-emerald-50/50" :
          gmWarning ? "border-amber-300 bg-amber-50/50" :
          "border-red-300 bg-red-50/50"
        }`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          {gmHealthy && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
          {gmWarning && <AlertTriangle className="w-5 h-5 text-amber-600" />}
          {gmDanger && <AlertTriangle className="w-5 h-5 text-red-600" />}
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40">
            Blended Gross Margin
          </span>
        </div>
        <motion.div
          key={blended.blendedGMPct.toFixed(1)}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          className={`font-display text-6xl font-bold ${
            gmHealthy ? "text-emerald-700" :
            gmWarning ? "text-amber-700" :
            "text-red-700"
          }`}
        >
          {formatPct(blended.blendedGMPct)}
        </motion.div>
        <p className={`font-body text-sm mt-1 ${
          gmHealthy ? "text-emerald-600/70" :
          gmWarning ? "text-amber-600/70" :
          "text-red-600/70"
        }`}>
          {gmHealthy ? "Above 55% target — healthy margin structure" :
           gmWarning ? "Below 55% target — review volume mix or pricing" :
           "Margin compression — adjust COGS, pricing, or volume mix"}
        </p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="text-center">
            <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider">Blended ASP</p>
            <p className="font-display text-lg font-bold text-black">{formatCurrency(Math.round(blended.blendedASP))}</p>
          </div>
          <div className="w-px h-8 bg-black/10" />
          <div className="text-center">
            <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider">Margin / Unit</p>
            <p className="font-display text-lg font-bold text-black">{formatCurrency(Math.round(blended.blendedMarginPerUnit))}</p>
          </div>
          <div className="w-px h-8 bg-black/10" />
          <div className="text-center">
            <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider">COGS / Unit</p>
            <p className="font-display text-lg font-bold text-black">{formatCurrency(cogs)}</p>
          </div>
          <div className="w-px h-8 bg-black/10" />
          <div className="text-center">
            <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider">Profit / 1K Units</p>
            <p className="font-display text-lg font-bold text-black">{formatCurrency(Math.round(blended.totalProfit))}</p>
          </div>
        </div>
      </motion.div>

      {/* COGS Slider */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 p-6 rounded-2xl border border-black/[0.12] bg-white"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-black/[0.04] flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-black/50" />
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-black">Manufacturing Cost (COGS)</h3>
            <p className="font-body text-[11px] text-black/40">Cost to manufacture one ZeroWheel device. Current estimate: ~$440 (60% GM at list).</p>
          </div>
          <button
            onClick={handleReset}
            className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-black/40 hover:text-[#C9A962] tracking-wider uppercase px-3 py-1.5 rounded-lg border border-black/[0.08] hover:border-[#C9A962]/30 transition-all"
          >
            <RotateCcw className="w-3 h-3" />
            Reset All
          </button>
        </div>
        <SliderInput
          label="Unit COGS"
          value={cogs}
          min={MIN_COGS}
          max={MAX_COGS}
          step={10}
          onChange={setCogs}
          format={formatCurrency}
          sublabel="Adjust to model manufacturing efficiencies at scale or supply chain changes"
        />
      </motion.div>

      {/* Channel Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {channels.map((ch, i) => {
          const m = channelMetrics[i];
          const isConsumer = i === 0;
          return (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-5 rounded-2xl border transition-all ${ch.borderColor} ${ch.bgColor}`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-8 h-8 rounded-lg ${ch.bgColor} flex items-center justify-center`}>
                  <ch.icon className={`w-4.5 h-4.5 ${ch.color}`} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-black">{ch.name}</h4>
                  <p className="font-body text-[10px] text-black/40">{ch.description}</p>
                </div>
              </div>

              {/* Channel GM */}
              <div className={`text-center p-3 rounded-xl mb-4 ${
                m.gmPct >= 55 ? "bg-emerald-100/50" :
                m.gmPct >= 45 ? "bg-amber-100/50" :
                "bg-red-100/50"
              }`}>
                <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider">Channel GM</p>
                <p className={`font-display text-2xl font-bold ${
                  m.gmPct >= 55 ? "text-emerald-700" :
                  m.gmPct >= 45 ? "text-amber-700" :
                  "text-red-700"
                }`}>{formatPct(m.gmPct)}</p>
                <p className="font-mono text-[9px] text-black/30">{formatCurrency(Math.round(m.margin))} margin/unit</p>
              </div>

              {/* Price Slider */}
              {isConsumer ? (
                <div className="mb-4 p-3 rounded-lg bg-white/60 border border-black/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-black/50 uppercase tracking-wider">Selling Price</span>
                    <span className="font-display text-lg font-bold text-black">{formatCurrency(prices[i])}</span>
                  </div>
                  <p className="font-body text-[10px] text-emerald-600/70 mt-1 italic">Locked at full MSRP — no discounts</p>
                </div>
              ) : (
                <div className="mb-4">
                  <SliderInput
                    label="Selling Price"
                    value={prices[i]}
                    min={ch.minPrice}
                    max={ch.maxPrice}
                    step={5}
                    onChange={(v) => setPrice(i, v)}
                    format={formatCurrency}
                    sublabel={`Discount: ${formatPct(m.discountPct)} off list`}
                  />
                </div>
              )}

              {/* Volume Slider */}
              <SliderInput
                label="Volume Mix"
                value={volumes[i]}
                min={1}
                max={90}
                step={1}
                onChange={(v) => setVolume(i, v)}
                format={(v) => Math.round(v) + "%"}
                sublabel={`${Math.round(normVolumes[i] * 10)}  units per 1,000`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Revenue Breakdown Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl border border-black/[0.12] bg-white"
      >
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-[#C9A962]" />
          <h3 className="font-display text-base font-semibold text-black">Revenue & Margin Breakdown (per 1,000 units)</h3>
        </div>

        {/* Stacked bar */}
        <div className="h-10 rounded-full overflow-hidden flex mb-4">
          {channelMetrics.map((m, i) => (
            <motion.div
              key={i}
              className={`h-full flex items-center justify-center text-white font-mono text-[10px] tracking-wider ${
                i === 0 ? "bg-emerald-500" : i === 1 ? "bg-[#C9A962]" : "bg-blue-500"
              }`}
              style={{ width: `${normVolumes[i]}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${normVolumes[i]}%` }}
              transition={{ duration: 0.3 }}
            >
              {normVolumes[i] > 12 && `${Math.round(normVolumes[i])}%`}
            </motion.div>
          ))}
        </div>

        {/* Legend + metrics table */}
        <div className="grid grid-cols-3 gap-4">
          {channels.map((ch, i) => {
            const m = channelMetrics[i];
            const units = Math.round((normVolumes[i] / 100) * 1000);
            const revenue = units * m.price;
            const profit = units * m.margin;
            return (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${
                    i === 0 ? "bg-emerald-500" : i === 1 ? "bg-[#C9A962]" : "bg-blue-500"
                  }`} />
                  <span className="font-mono text-[10px] text-black/50 tracking-wider">{ch.name}</span>
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="font-mono text-[9px] text-black/30 block">Units</span>
                    <span className="font-display text-sm font-bold text-black">{units.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-black/30 block">Revenue</span>
                    <span className="font-display text-sm font-bold text-black">{formatCurrency(revenue)}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-black/30 block">Gross Profit</span>
                    <span className={`font-display text-sm font-bold ${m.gmPct >= 55 ? "text-emerald-700" : m.gmPct >= 45 ? "text-amber-700" : "text-red-700"}`}>
                      {formatCurrency(profit)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Totals row */}
        <div className="mt-4 pt-4 border-t border-black/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <span className="font-mono text-[9px] text-black/30 block">Total Revenue</span>
              <span className="font-display text-lg font-bold text-black">{formatCurrency(Math.round(blended.totalRevenue))}</span>
            </div>
            <div>
              <span className="font-mono text-[9px] text-black/30 block">Total Gross Profit</span>
              <span className={`font-display text-lg font-bold ${gmHealthy ? "text-emerald-700" : gmWarning ? "text-amber-700" : "text-red-700"}`}>
                {formatCurrency(Math.round(blended.totalProfit))}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-mono text-[9px] text-black/30 block">Blended GM</span>
            <span className={`font-display text-2xl font-bold ${gmHealthy ? "text-emerald-700" : gmWarning ? "text-amber-700" : "text-red-700"}`}>
              {formatPct(blended.blendedGMPct)}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
