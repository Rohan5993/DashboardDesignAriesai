import { TrendingUp, Eye, Heart, Users, Clock, Sparkles, ArrowRight } from "lucide-react";
import { StatCard } from "../components/StatCard";
import { PostCard } from "../components/PostCard";
import { TokenUsageCard } from "../components/TokenUsageCard";

const todaysPosts = [
  { platform: "LinkedIn", time: "10:00 AM", content: "5 AI trends transforming content marketing in 2026...", status: "scheduled" },
  { platform: "X", time: "2:30 PM", content: "Just launched our new feature! Check it out 👇", status: "scheduled" },
  { platform: "Reddit", time: "6:00 PM", content: "AMA: Building an AI-powered content tool from scratch", status: "scheduled" },
];

export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          icon={Eye}
          label="Total Views"
          value="12,458"
          change="+12.5%"
          trend="up"
        />
        <StatCard
          icon={Heart}
          label="Engagement Rate"
          value="4.2%"
          change="+0.8%"
          trend="up"
        />
        <StatCard
          icon={Users}
          label="New Followers"
          value="284"
          change="+18.2%"
          trend="up"
        />
        <StatCard
          icon={Clock}
          label="Posts Scheduled"
          value="23"
          change="This week"
          trend="neutral"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Today's Schedule</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {todaysPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </div>

        {/* Token Usage */}
        <TokenUsageCard />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-left group">
            <Sparkles className="w-6 h-6 text-gray-400 group-hover:text-blue-600 mb-2" />
            <div className="font-medium text-gray-900">Create Content</div>
            <div className="text-sm text-gray-500">Generate AI-powered posts</div>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-left group">
            <Clock className="w-6 h-6 text-gray-400 group-hover:text-blue-600 mb-2" />
            <div className="font-medium text-gray-900">Schedule Post</div>
            <div className="text-sm text-gray-500">Plan your content calendar</div>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-left group">
            <TrendingUp className="w-6 h-6 text-gray-400 group-hover:text-blue-600 mb-2" />
            <div className="font-medium text-gray-900">View Analytics</div>
            <div className="text-sm text-gray-500">Track your performance</div>
          </button>
        </div>
      </div>
    </div>
  );
}