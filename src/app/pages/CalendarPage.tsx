import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Eye, Plus } from "lucide-react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

const mockCalendarData = [
  // Week 1
  { date: 29, month: "Jun", posts: [] },
  { date: 30, month: "Jun", posts: [] },
  { 
    date: 1, 
    month: "Jul", 
    posts: [
      { time: "12:00 AM", title: "Newdie - Case S...", status: "Design Visual", platform: "instagram", hasCheckbox: true },
      { time: null, title: "Emberly - Animat...", status: "Design Visual", platform: "instagram", hasCheckbox: true },
      { time: null, title: "Sharing Socia...", platform: "x", hasCheckbox: true },
    ]
  },
  { date: 2, month: "Jul", posts: [] },
  { date: 3, month: "Jul", posts: [] },
  { 
    date: 4, 
    month: "Jul", 
    posts: [
      { time: "12:00 AM", title: "Flowever - Identity S...", status: "Design Visual", platform: null, hasCheckbox: false },
      { status: "Draft Post", platforms: ["instagram", "linkedin"], hasCheckbox: false },
    ]
  },
  { date: 5, month: "Jul", posts: [] },
  // Week 2
  { 
    date: 6, 
    month: "Jul", 
    posts: [
      { title: "Preciate - App F...", platform: "instagram", hasCheckbox: true },
      { title: "Lumino - Websit...", platform: "x", hasCheckbox: true },
      { title: "Haleyion - Mo...", platform: "instagram", count: "+1", hasCheckbox: true },
    ]
  },
  { date: 7, month: "Jul", posts: [] },
  { date: 8, month: "Jul", posts: [] },
  { date: 9, month: "Jul", isToday: true, posts: [] },
  { 
    date: 10, 
    month: "Jul", 
    posts: [
      { time: "12:00 AM", title: "Orbitly - Summer Promo...", status: "Draft Post", hasCheckbox: false },
      { status: "Design Visual", platform: "facebook", hasCheckbox: false },
    ]
  },
  { date: 11, month: "Jul", posts: [] },
  { date: 12, month: "Jul", posts: [] },
  // Week 3
  { date: 13, month: "Jul", posts: [] },
  { date: 14, month: "Jul", posts: [] },
  { 
    date: 15, 
    month: "Jul", 
    posts: [
      { title: "Auralis - UI Kit Su...", platform: "instagram", hasCheckbox: true },
      { title: "Emberly - Animat...", platform: "x", hasCheckbox: true },
    ]
  },
  { date: 16, month: "Jul", posts: [] },
  { date: 17, month: "Jul", posts: [] },
  { 
    date: 18, 
    month: "Jul", 
    posts: [
      { title: "FlowForge - Behi...", platform: "instagram", hasCheckbox: true },
      { title: "Nexora - Prod...", platform: "instagram", count: "+2", hasCheckbox: true },
    ],
    seeAll: "+2"
  },
  { date: 19, month: "Jul", posts: [] },
  // Week 4
  { date: 20, month: "Jul", posts: [] },
  { date: 21, month: "Jul", posts: [] },
  { 
    date: 22, 
    month: "Jul", 
    posts: [
      { title: "Emberly - Motion...", platform: "x", hasCheckbox: true },
      { title: "Clarity - Typogra...", platform: "instagram", hasCheckbox: true },
    ]
  },
  { 
    date: 23, 
    month: "Jul", 
    posts: [
      { time: "12:00 AM", title: "Aerorix - Dashboard Wa...", status: "Design Visual", platforms: ["instagram", "x", "instagram2"], hasCheckbox: false },
    ]
  },
  { date: 24, month: "Jul", posts: [] },
  { date: 25, month: "Jul", posts: [] },
  { date: 26, month: "Jul", posts: [] },
  // Week 5
  { date: 27, month: "Jul", posts: [] },
  { date: 28, month: "Jul", posts: [] },
  { date: 29, month: "Jul", posts: [] },
  { date: 30, month: "Jul", posts: [] },
  { 
    date: 31, 
    month: "Jul", 
    posts: [
      { time: "12:00 AM", title: "Emberly - Social Media...", status: "Campaign", platforms: ["instagram", "x", "facebook"], hasCheckbox: false },
    ]
  },
  { date: 1, month: "Aug", posts: [] },
  { date: 2, month: "Aug", posts: [] },
];

const platformIcons: Record<string, any> = {
  instagram: "instagram",
  x: "x",
  linkedin: "linkedin",
  facebook: "facebook",
};

export function CalendarPage() {
  const [view, setView] = useState<"week" | "month" | "year">("month");
  const [showCampaigns, setShowCampaigns] = useState(true);

  const getPlatformIcon = (platform: string) => {
    if (platform === "instagram") return <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-500 to-pink-500"></div>;
    if (platform === "x") return <Twitter className="w-4 h-4" />;
    if (platform === "linkedin") return <Linkedin className="w-4 h-4 text-blue-600" />;
    if (platform === "facebook") return <Facebook className="w-4 h-4 text-blue-600" />;
    return null;
  };

  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      {/* Top Controls Bar */}
      <div className="bg-white rounded-xl border border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* View Toggle */}
          <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
            <button className="px-4 py-1.5 rounded text-sm font-medium text-gray-600 hover:bg-white transition-colors">
              Week
            </button>
            <button className="px-4 py-1.5 rounded text-sm font-medium bg-white text-gray-900 shadow-sm">
              Month
            </button>
            <button className="px-4 py-1.5 rounded text-sm font-medium text-gray-600 hover:bg-white transition-colors">
              Year
            </button>
          </div>

          {/* Date Navigation */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-medium text-gray-900">July</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-medium text-gray-900">2025</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Show Campaigns Toggle */}
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <Eye className="w-4 h-4" />
            Show Campaigns
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {daysOfWeek.map((day) => (
            <div key={day} className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide border-r border-gray-200 last:border-r-0">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days Grid */}
        <div className="grid grid-cols-7">
          {mockCalendarData.map((day, index) => (
            <div
              key={index}
              className={`min-h-[140px] border-r border-b border-gray-200 last:border-r-0 ${
                (index + 1) % 7 === 0 ? "" : ""
              } ${day.isToday ? "bg-teal-50" : "hover:bg-gray-50"} transition-colors`}
            >
              <div className="p-3 h-full flex flex-col">
                {/* Date */}
                <div className={`text-sm mb-2 ${day.isToday ? "font-bold" : ""}`}>
                  {day.isToday ? (
                    <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-semibold">
                      {day.date}
                    </div>
                  ) : (
                    <div className={`${day.month !== "Jul" ? "text-gray-400" : "text-gray-700"}`}>
                      {day.month === "Jun" || day.month === "Aug" ? `${day.month} ${day.date}` : day.date}
                    </div>
                  )}
                </div>

                {/* Posts */}
                <div className="space-y-2 flex-1">
                  {day.posts.length > 0 ? (
                    <>
                      {day.posts.map((post, postIndex) => (
                        <div key={postIndex} className="text-xs">
                          {post.hasCheckbox !== false && (
                            <div className="flex items-start gap-2 mb-1">
                              <input type="checkbox" className="mt-0.5 w-3 h-3 rounded border-gray-300" />
                              <div className="flex-1">
                                {post.time && <div className="text-gray-500 mb-0.5">{post.time}</div>}
                                {post.title && <div className="text-gray-700 truncate">{post.title}</div>}
                                <div className="flex items-center gap-1 mt-1">
                                  {post.platform && getPlatformIcon(post.platform)}
                                  {post.count && <span className="text-gray-500">{post.count}</span>}
                                </div>
                              </div>
                            </div>
                          )}
                          {post.hasCheckbox === false && (
                            <div className="space-y-1">
                              {post.time && <div className="text-gray-500 mb-0.5">{post.time}</div>}
                              {post.title && <div className="text-gray-700 mb-1">{post.title}</div>}
                              {post.status && (
                                <div className="inline-flex items-center gap-1">
                                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                    post.status === "Draft Post" ? "bg-yellow-100 text-yellow-700" :
                                    post.status === "Design Visual" ? "bg-green-100 text-green-700" :
                                    post.status === "Campaign" ? "bg-purple-100 text-purple-700" :
                                    "bg-gray-100 text-gray-700"
                                  }`}>
                                    {post.status}
                                  </span>
                                  {post.platforms && (
                                    <div className="flex items-center gap-1 ml-1">
                                      {post.platforms.map((p, i) => (
                                        <div key={i}>{getPlatformIcon(p)}</div>
                                      ))}
                                    </div>
                                  )}
                                  {post.platform && getPlatformIcon(post.platform)}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      {day.seeAll && (
                        <button className="text-xs text-gray-500 hover:text-gray-700 mt-2">
                          See All ({day.seeAll})
                        </button>
                      )}
                    </>
                  ) : day.isToday ? (
                    <button className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-xs text-gray-500 hover:border-teal-400 hover:text-teal-600 hover:bg-teal-50 transition-colors flex items-center justify-center gap-1">
                      <Plus className="w-3 h-3" />
                      Create Post
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
