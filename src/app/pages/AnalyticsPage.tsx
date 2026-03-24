import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Eye, Heart, Share2, Lightbulb } from "lucide-react";

const engagementData = [
  { date: "Mon", LinkedIn: 245, X: 189, Reddit: 123 },
  { date: "Tue", LinkedIn: 312, X: 221, Reddit: 156 },
  { date: "Wed", LinkedIn: 289, X: 198, Reddit: 134 },
  { date: "Thu", LinkedIn: 398, X: 267, Reddit: 201 },
  { date: "Fri", LinkedIn: 421, X: 289, Reddit: 178 },
  { date: "Sat", LinkedIn: 198, X: 167, Reddit: 145 },
  { date: "Sun", LinkedIn: 156, X: 134, Reddit: 112 },
];

const platformData = [
  { name: "LinkedIn", value: 45, color: "#0A66C2" },
  { name: "X", value: 35, color: "#1DA1F2" },
  { name: "Reddit", value: 20, color: "#FF4500" },
];

const insights = [
  {
    title: "Best posting time",
    value: "Tuesday 9-11 AM",
    description: "Posts during this window get 58% more engagement",
    icon: TrendingUp,
  },
  {
    title: "Top performing format",
    value: "Carousel posts",
    description: "3.2x higher engagement than single images",
    icon: Eye,
  },
  {
    title: "Peak engagement day",
    value: "Thursday",
    description: "Consistently outperforms other days by 24%",
    icon: Heart,
  },
];

export function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-500 mt-1">Track your content performance across platforms</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600">Total Reach</span>
          </div>
          <div className="text-2xl font-semibold text-gray-900">48.2K</div>
          <div className="text-xs text-green-600 mt-1">↑ 12.5% vs last week</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600">Engagement</span>
          </div>
          <div className="text-2xl font-semibold text-gray-900">2,847</div>
          <div className="text-xs text-green-600 mt-1">↑ 8.3% vs last week</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Share2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600">Shares</span>
          </div>
          <div className="text-2xl font-semibold text-gray-900">412</div>
          <div className="text-xs text-green-600 mt-1">↑ 15.2% vs last week</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600">Avg. Engagement</span>
          </div>
          <div className="text-2xl font-semibold text-gray-900">4.8%</div>
          <div className="text-xs text-green-600 mt-1">↑ 0.9% vs last week</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Engagement Trend */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Weekly Engagement</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }} 
              />
              <Line type="monotone" dataKey="LinkedIn" stroke="#0A66C2" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="X" stroke="#1DA1F2" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="Reddit" stroke="#FF4500" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Platform Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Platform Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {platformData.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: platform.color }}></div>
                  <span className="text-gray-700">{platform.name}</span>
                </div>
                <span className="font-medium text-gray-900">{platform.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-purple-600" />
          <h2 className="font-semibold text-gray-900">AI-Driven Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-4 border border-purple-100">
                <div className="p-2 bg-purple-100 rounded-lg w-fit mb-3">
                  <Icon className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-xs text-purple-600 font-medium mb-1">{insight.title}</div>
                <div className="font-semibold text-gray-900 mb-1">{insight.value}</div>
                <div className="text-xs text-gray-600">{insight.description}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Performance by Platform */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Performance by Platform</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }} 
            />
            <Bar dataKey="LinkedIn" fill="#0A66C2" radius={[4, 4, 0, 0]} />
            <Bar dataKey="X" fill="#1DA1F2" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Reddit" fill="#FF4500" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
