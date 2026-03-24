import { BarChart3, FileText, Image, Video } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const tokenData = [
  { name: "Used", value: 1800, color: "#10b981" },
  { name: "Remaining", value: 200, color: "#d1d5db" },
];

const categoryData = [
  { icon: FileText, label: "AI Text", amount: "1,000.00", color: "text-green-600" },
  { icon: Image, label: "AI Image", amount: "900.00", color: "text-blue-600" },
  { icon: Video, label: "AI Video", amount: "900.00", color: "text-purple-600" },
];

export function TokenUsageCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-gray-700" />
          <h2 className="font-semibold text-gray-900">Token Usage</h2>
        </div>
        <select className="text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Last Week</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      {/* Gauge Chart */}
      <div className="relative mb-6">
        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie
              data={tokenData}
              cx="50%"
              cy="80%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={0}
              dataKey="value"
            >
              {tokenData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-20 left-0 right-0 text-center">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Spent</div>
          <div className="text-2xl font-bold text-gray-900">1,800.00</div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {categoryData.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-white rounded-lg border border-gray-200">
                  <Icon className={`w-4 h-4 ${category.color}`} />
                </div>
              </div>
              <div className="text-xs text-gray-600 mb-1">{category.label}</div>
              <div className="text-sm font-semibold text-gray-900">{category.amount}</div>
            </div>
          );
        })}
      </div>

      {/* Limit Info */}
      <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
        <span>Your weekly spending limit is</span>
        <span className="font-semibold text-gray-900">2000</span>
        <button className="ml-auto text-gray-400 hover:text-gray-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
