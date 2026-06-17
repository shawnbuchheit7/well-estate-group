import { useState, useEffect, useMemo } from "react";
import {
  Watch,
  Smartphone,
  Heart,
  Moon,
  Footprints,
  Activity,
  Flame,
  Timer,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronRight,
  Wifi,
  WifiOff,
  RefreshCw,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Types ─── */
interface WearableDevice {
  id: string;
  name: string;
  type: "apple_health" | "oura" | "whoop" | "garmin";
  icon: React.ElementType;
  connected: boolean;
  lastSync: string;
  battery?: number;
  color: string;
}

interface MetricDataPoint {
  date: string;
  value: number;
}

interface WearableMetric {
  key: string;
  label: string;
  value: number;
  unit: string;
  icon: React.ElementType;
  color: string;
  trend: "up" | "down" | "stable";
  change: number;
  sparkline: MetricDataPoint[];
  description: string;
}

interface SleepStage {
  stage: string;
  duration: number;
  color: string;
}

/* ─── Demo Data ─── */
const DEVICES: WearableDevice[] = [
  { id: "apple", name: "Apple Watch Ultra 2", type: "apple_health", icon: Watch, connected: true, lastSync: "2 min ago", battery: 72, color: "#3B82F6" },
  { id: "oura", name: "Oura Ring Gen 3", type: "oura", icon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ), connected: true, lastSync: "15 min ago", battery: 85, color: "#A855F7" },
  { id: "whoop", name: "WHOOP 4.0", type: "whoop", icon: Activity, connected: false, lastSync: "3 days ago", color: "#10B981" },
  { id: "garmin", name: "Garmin Fenix 7", type: "garmin", icon: Smartphone, connected: false, lastSync: "Not connected", color: "#F59E0B" },
];

function generateSparkline(base: number, variance: number, count: number): MetricDataPoint[] {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return Array.from({ length: count }, (_, i) => ({
    date: days[i % 7],
    value: base + (Math.random() - 0.5) * variance * 2,
  }));
}

const DAILY_METRICS: WearableMetric[] = [
  {
    key: "resting_hr",
    label: "Resting Heart Rate",
    value: 56,
    unit: "bpm",
    icon: Heart,
    color: "#EF4444",
    trend: "down",
    change: -3,
    sparkline: generateSparkline(58, 3, 7),
    description: "Average resting heart rate over the past 24 hours. Lower is generally better for cardiovascular fitness.",
  },
  {
    key: "hrv",
    label: "Heart Rate Variability",
    value: 52,
    unit: "ms",
    icon: Activity,
    color: "#8B5CF6",
    trend: "up",
    change: 8,
    sparkline: generateSparkline(48, 6, 7),
    description: "RMSSD-based HRV. Higher values indicate better autonomic nervous system balance and recovery.",
  },
  {
    key: "sleep",
    label: "Sleep Score",
    value: 88,
    unit: "pts",
    icon: Moon,
    color: "#6366F1",
    trend: "up",
    change: 5,
    sparkline: generateSparkline(82, 8, 7),
    description: "Composite sleep quality score based on duration, efficiency, latency, and sleep stages.",
  },
  {
    key: "steps",
    label: "Daily Steps",
    value: 12450,
    unit: "steps",
    icon: Footprints,
    color: "#10B981",
    trend: "up",
    change: 15,
    sparkline: generateSparkline(10000, 3000, 7),
    description: "Total steps tracked today. WHO recommends 8,000-10,000 steps daily for health benefits.",
  },
  {
    key: "calories",
    label: "Active Calories",
    value: 685,
    unit: "kcal",
    icon: Flame,
    color: "#F59E0B",
    trend: "up",
    change: 12,
    sparkline: generateSparkline(600, 150, 7),
    description: "Calories burned through active movement, excluding basal metabolic rate.",
  },
  {
    key: "recovery",
    label: "Recovery Score",
    value: 82,
    unit: "%",
    icon: Zap,
    color: "#06B6D4",
    trend: "stable",
    change: 0,
    sparkline: generateSparkline(78, 10, 7),
    description: "Overall recovery readiness based on HRV, resting HR, sleep quality, and respiratory rate.",
  },
  {
    key: "spo2",
    label: "Blood Oxygen (SpO2)",
    value: 98.2,
    unit: "%",
    icon: Activity,
    color: "#EC4899",
    trend: "stable",
    change: 0,
    sparkline: generateSparkline(97.8, 0.8, 7),
    description: "Peripheral oxygen saturation measured during sleep. Normal range is 95-100%.",
  },
  {
    key: "resp_rate",
    label: "Respiratory Rate",
    value: 14.5,
    unit: "brpm",
    icon: Timer,
    color: "#14B8A6",
    trend: "stable",
    change: -1,
    sparkline: generateSparkline(15, 1.5, 7),
    description: "Average breaths per minute during sleep. Normal range is 12-20 brpm.",
  },
];

const SLEEP_STAGES: SleepStage[] = [
  { stage: "Deep Sleep", duration: 95, color: "#4338CA" },
  { stage: "REM", duration: 110, color: "#7C3AED" },
  { stage: "Light Sleep", duration: 215, color: "#6366F1" },
  { stage: "Awake", duration: 20, color: "#334155" },
];

/* ─── Mini Sparkline ─── */
function Sparkline({ data, color, width = 100, height = 28 }: { data: MetricDataPoint[]; color: string; width?: number; height?: number }) {
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const p = 2;
  const points = values.map((v, i) => `${p + (i / (values.length - 1)) * (width - p * 2)},${height - p - ((v - min) / range) * (height - p * 2)}`);

  return (
    <svg width={width} height={height}>
      <defs>
        <linearGradient id={`wg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`${p},${height - p} ${points.join(" ")} ${width - p},${height - p}`} fill={`url(#wg-${color.replace("#", "")})`} />
      <polyline points={points.join(" ")} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={parseFloat(points[points.length - 1].split(",")[0])} cy={parseFloat(points[points.length - 1].split(",")[1])} r="2.5" fill={color} />
    </svg>
  );
}

/* ─── Device Card ─── */
function DeviceCard({ device }: { device: WearableDevice }) {
  const Icon = device.icon;
  return (
    <div className={`rounded-xl border p-4 transition-all ${device.connected ? "border-[#1E293B] bg-[#0F172A]/80 hover:border-[#334155]" : "border-[#1E293B]/50 bg-[#0F172A]/30 opacity-60"}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${device.color}20` }}>
            <div className="w-4.5 h-4.5" style={{ color: device.color }}>
              <Icon className="w-full h-full" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{device.name}</p>
            <div className="flex items-center gap-1.5">
              {device.connected ? (
                <Wifi className="w-3 h-3 text-emerald-400" />
              ) : (
                <WifiOff className="w-3 h-3 text-gray-500" />
              )}
              <span className={`text-[10px] ${device.connected ? "text-emerald-400" : "text-gray-500"}`}>
                {device.connected ? "Connected" : "Disconnected"}
              </span>
            </div>
          </div>
        </div>
        {device.connected && device.battery && (
          <div className="text-right">
            <div className="flex items-center gap-1">
              <div className="w-5 h-2.5 rounded-sm border border-gray-500 relative">
                <div
                  className="absolute inset-0.5 rounded-[1px]"
                  style={{
                    width: `${device.battery}%`,
                    background: device.battery > 20 ? "#10B981" : "#EF4444",
                  }}
                />
              </div>
              <span className="text-[10px] text-gray-400">{device.battery}%</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-gray-500">Last sync: {device.lastSync}</span>
        {device.connected ? (
          <Button variant="outline" size="sm" className="h-6 text-[10px] rounded-md border-[#334155] text-gray-400 gap-1 px-2">
            <RefreshCw className="w-2.5 h-2.5" />
            Sync
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="h-6 text-[10px] rounded-md border-cyan-500/30 text-cyan-400 px-2">
            Connect
          </Button>
        )}
      </div>
    </div>
  );
}

/* ─── Metric Card ─── */
function MetricCard({ metric, expanded, onToggle }: { metric: WearableMetric; expanded: boolean; onToggle: () => void }) {
  const TrendIcon = metric.trend === "up" ? TrendingUp : metric.trend === "down" ? TrendingDown : Minus;
  const trendColor = metric.key === "resting_hr"
    ? (metric.trend === "down" ? "#10B981" : metric.trend === "up" ? "#EF4444" : "#6B7280")
    : (metric.trend === "up" ? "#10B981" : metric.trend === "down" ? "#EF4444" : "#6B7280");

  const Icon = metric.icon;

  return (
    <div className="rounded-xl border border-[#1E293B] bg-[#0F172A]/50 overflow-hidden transition-all hover:border-[#334155]">
      <button onClick={onToggle} className="w-full p-4 text-left">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${metric.color}15` }}>
              <Icon className="w-3.5 h-3.5" style={{ color: metric.color }} />
            </div>
            <span className="text-xs font-medium text-gray-400">{metric.label}</span>
          </div>
          <div className="flex items-center gap-1" style={{ color: trendColor }}>
            <TrendIcon className="w-3 h-3" />
            <span className="text-[10px] font-medium">{metric.change > 0 ? "+" : ""}{metric.change}%</span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-white">{metric.value.toLocaleString()}</span>
            <span className="text-xs text-gray-500">{metric.unit}</span>
          </div>
          <Sparkline data={metric.sparkline} color={metric.color} width={80} height={24} />
        </div>
      </button>
      {expanded && (
        <div className="px-4 pb-4 border-t border-[#1E293B]">
          <p className="text-xs text-gray-400 mt-3 mb-3">{metric.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500">7-day trend:</span>
            <Sparkline data={metric.sparkline} color={metric.color} width={200} height={32} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Sleep Breakdown ─── */
function SleepBreakdown() {
  const totalMinutes = SLEEP_STAGES.reduce((s, st) => s + st.duration, 0);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  return (
    <div className="rounded-xl border border-[#1E293B] bg-[#0F172A]/50 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Moon className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-semibold text-white">Sleep Breakdown</span>
        </div>
        <span className="text-xs text-gray-400">Last night</span>
      </div>
      <div className="flex items-baseline gap-1.5 mb-3">
        <span className="text-3xl font-bold text-white">{hours}h {mins}m</span>
        <span className="text-xs text-gray-500">total sleep</span>
      </div>
      {/* Sleep stage bar */}
      <div className="flex h-3 rounded-full overflow-hidden mb-3">
        {SLEEP_STAGES.map((stage) => (
          <div
            key={stage.stage}
            style={{ width: `${(stage.duration / totalMinutes) * 100}%`, background: stage.color }}
            className="first:rounded-l-full last:rounded-r-full"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {SLEEP_STAGES.map((stage) => (
          <div key={stage.stage} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <div className="w-2 h-2 rounded-full" style={{ background: stage.color }} />
              <span className="text-[10px] text-gray-400">{stage.stage}</span>
            </div>
            <p className="text-xs font-semibold text-white">{Math.floor(stage.duration / 60)}h {stage.duration % 60}m</p>
            <p className="text-[10px] text-gray-500">{Math.round((stage.duration / totalMinutes) * 100)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main WearableData Component ─── */
export function WearableData() {
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null);
  const [view, setView] = useState<"today" | "week">("today");

  // Simulate real-time updates
  const [metrics, setMetrics] = useState(DAILY_METRICS);
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((m) => {
          if (m.key === "steps") {
            return { ...m, value: m.value + Math.floor(Math.random() * 5) };
          }
          if (m.key === "calories") {
            return { ...m, value: m.value + (Math.random() > 0.7 ? 1 : 0) };
          }
          return m;
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Wearable Data</h2>
          <p className="text-sm text-gray-400 mt-1">Real-time health metrics from connected devices</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className={`h-8 text-xs rounded-lg ${view === "today" ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" : "border-[#334155] text-gray-400"}`}
            onClick={() => setView("today")}
          >
            Today
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`h-8 text-xs rounded-lg ${view === "week" ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" : "border-[#334155] text-gray-400"}`}
            onClick={() => setView("week")}
          >
            This Week
          </Button>
        </div>
      </div>

      {/* Connected Devices */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Connected Devices</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {DEVICES.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>
      </div>

      {/* Real-time Metrics Grid */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Health Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.key}
              metric={metric}
              expanded={expandedMetric === metric.key}
              onToggle={() => setExpandedMetric(expandedMetric === metric.key ? null : metric.key)}
            />
          ))}
        </div>
      </div>

      {/* Sleep Breakdown */}
      <SleepBreakdown />

      {/* Weekly Activity Summary */}
      <div className="rounded-xl border border-[#1E293B] bg-[#0F172A]/50 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-white">Weekly Activity</span>
          </div>
          <span className="text-xs text-gray-400">Feb 3 - Feb 9, 2026</span>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
            const activity = [75, 92, 60, 88, 95, 45, 70][i];
            const barHeight = (activity / 100) * 80;
            return (
              <div key={day} className="flex flex-col items-center gap-1">
                <div className="w-full h-20 rounded-lg bg-[#1E293B] relative overflow-hidden flex items-end">
                  <div
                    className="w-full rounded-t-lg transition-all duration-500"
                    style={{
                      height: `${barHeight}%`,
                      background: activity >= 80 ? "linear-gradient(to top, #06B6D4, #22D3EE)" : activity >= 60 ? "linear-gradient(to top, #3B82F6, #60A5FA)" : "linear-gradient(to top, #475569, #64748B)",
                    }}
                  />
                </div>
                <span className="text-[10px] text-gray-500">{day}</span>
                <span className="text-[10px] text-white font-medium">{activity}%</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-[#1E293B]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-cyan-500 to-cyan-300" />
            <span className="text-[10px] text-gray-400">High (80%+)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-blue-500 to-blue-300" />
            <span className="text-[10px] text-gray-400">Moderate (60-79%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-slate-600 to-slate-400" />
            <span className="text-[10px] text-gray-400">Low (&lt;60%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
