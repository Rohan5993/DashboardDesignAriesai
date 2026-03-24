import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export function StatCard({ icon: Icon, label, value, change, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        {trend !== "neutral" && (
          <div className={`flex items-center gap-1 text-xs ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}>
            {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}
          </div>
        )}
      </div>
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
      {trend === "neutral" && (
        <div className="text-xs text-gray-400 mt-1">{change}</div>
      )}
    </div>
  );
}
