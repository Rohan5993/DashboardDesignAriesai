import { useState } from "react";
import { Search, Filter, FileText, CheckCircle2, Clock, Sparkles } from "lucide-react";

const tabs = ["All", "Drafts", "Published", "Templates"];

const mockContent = [
  {
    id: 1,
    title: "5 AI trends transforming content marketing",
    platform: "LinkedIn",
    status: "published",
    date: "Mar 24, 2026",
    engagement: "245 likes, 32 comments",
    type: "post",
  },
  {
    id: 2,
    title: "New feature launch announcement",
    platform: "X",
    status: "published",
    date: "Mar 24, 2026",
    engagement: "189 likes, 45 retweets",
    type: "post",
  },
  {
    id: 3,
    title: "Productivity tips for remote teams",
    platform: "LinkedIn",
    status: "draft",
    date: "Mar 23, 2026",
    engagement: "-",
    type: "post",
  },
  {
    id: 4,
    title: "Weekly roundup template",
    platform: "All",
    status: "template",
    date: "Mar 20, 2026",
    engagement: "Used 12 times",
    type: "template",
  },
  {
    id: 5,
    title: "Product launch announcement",
    platform: "All",
    status: "template",
    date: "Mar 18, 2026",
    engagement: "Used 8 times",
    type: "template",
  },
  {
    id: 6,
    title: "Industry insights and predictions",
    platform: "Reddit",
    status: "draft",
    date: "Mar 22, 2026",
    engagement: "-",
    type: "post",
  },
];

export function LibraryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContent = mockContent.filter((item) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Drafts" && item.status === "draft") ||
      (activeTab === "Published" && item.status === "published") ||
      (activeTab === "Templates" && item.status === "template");

    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "published":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case "draft":
        return <Clock className="w-4 h-4 text-gray-400" />;
      case "template":
        return <Sparkles className="w-4 h-4 text-purple-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-50 text-green-700 border-green-200";
      case "draft":
        return "bg-gray-50 text-gray-700 border-gray-200";
      case "template":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Content Library</h1>
        <p className="text-sm text-gray-500 mt-1">Browse your drafts, published posts, and templates</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your content..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                <FileText className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              </div>
              <div className="flex items-center gap-1">
                {getStatusIcon(item.status)}
              </div>
            </div>

            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
              {item.title}
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(item.status)}`}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
                <span className="text-xs text-gray-500">{item.platform}</span>
              </div>

              <div className="text-xs text-gray-500">
                {item.date}
              </div>

              <div className="text-xs text-gray-600 pt-2 border-t border-gray-100">
                {item.engagement}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="font-medium text-gray-900 mb-2">No content found</h3>
          <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
