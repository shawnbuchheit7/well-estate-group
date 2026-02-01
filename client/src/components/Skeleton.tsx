import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "card";
}

export function Skeleton({ className = "", variant = "rectangular" }: SkeletonProps) {
  const baseClasses = "bg-muted/50 animate-pulse";
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    card: "rounded-2xl",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
      <Skeleton className="w-12 h-12" variant="circular" />
      <Skeleton className="w-3/4 h-6" variant="text" />
      <Skeleton className="w-1/2 h-4" variant="text" />
      <div className="space-y-2 pt-4">
        <Skeleton className="w-full h-3" variant="text" />
        <Skeleton className="w-5/6 h-3" variant="text" />
        <Skeleton className="w-4/6 h-3" variant="text" />
      </div>
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-4 border-b border-border bg-muted/30">
        <Skeleton className="w-1/3 h-6" variant="text" />
      </div>
      <div className="p-4 space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="w-1/4 h-4" variant="text" />
            <Skeleton className="w-1/6 h-4" variant="text" />
            <Skeleton className="w-1/6 h-4" variant="text" />
            <Skeleton className="w-1/6 h-4" variant="text" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <Skeleton className="w-1/4 h-6 mb-4" variant="text" />
      <div className="flex items-end gap-2 h-48">
        {[40, 65, 45, 80, 55, 70, 90, 60].map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-muted/50 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default Skeleton;
