/**
 * AnimatedInfographic - Animated timeline/funnel visualization
 * Shows center expansion roadmap with animated progress bars
 */
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  label: string;
  value: number;
  maxValue: number;
  detail: string;
}

const expansionTimeline: TimelineItem[] = [
  { year: "2027", label: "Launch", value: 1, maxValue: 5, detail: "Center 1 (Flagship)" },
  { year: "2028", label: "Expansion", value: 2, maxValue: 5, detail: "+ Center 2" },
  { year: "2029", label: "Growth", value: 3, maxValue: 5, detail: "+ Center 3" },
  { year: "2030", label: "Scale", value: 4, maxValue: 5, detail: "+ Center 4" },
  { year: "2031", label: "Maturity", value: 5, maxValue: 5, detail: "+ Center 5" },
];

const revenueWaterfall = [
  { label: "APEX Members", value: 65, color: "#B8860B" },
  { label: "PRIME Members", value: 20, color: "#D4A843" },
  { label: "Therapeutics", value: 10, color: "#8B6914" },
  { label: "Partnerships", value: 5, color: "#A0782C" },
];

export function ExpansionTimeline() {
  return (
    <div className="space-y-4">
      <p className="font-mono text-[10px] text-[#B8860B] tracking-[0.2em] uppercase mb-6 section-header-accent">
        Center Expansion Roadmap
      </p>
      {expansionTimeline.map((item, i) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="w-14 text-right">
            <span className="font-mono text-xs font-bold text-[#0A0A0A]">{item.year}</span>
          </div>
          <div className="flex-1">
            <div className="h-8 bg-[#F5F0E8] rounded-lg overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.value / item.maxValue) * 100}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#B8860B] to-[#D4A843] rounded-lg flex items-center px-3"
              >
                <span className="font-mono text-[10px] text-white font-bold whitespace-nowrap">
                  {item.value} {item.value === 1 ? "Center" : "Centers"}
                </span>
              </motion.div>
            </div>
          </div>
          <div className="w-32">
            <span className="font-body text-xs text-[#0A0A0A]/65">{item.detail}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function RevenueBreakdown() {
  return (
    <div className="space-y-4">
      <p className="font-mono text-[10px] text-[#B8860B] tracking-[0.2em] uppercase mb-6 section-header-accent">
        Revenue Mix at Scale
      </p>
      {revenueWaterfall.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="space-y-1"
        >
          <div className="flex justify-between items-center">
            <span className="font-body text-sm text-[#0A0A0A]/75">{item.label}</span>
            <span className="font-mono text-sm font-bold text-[#0A0A0A]">{item.value}%</span>
          </div>
          <div className="h-3 bg-[#F5F0E8] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: item.color }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
