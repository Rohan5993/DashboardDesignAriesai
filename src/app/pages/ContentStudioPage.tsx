import { useState } from "react";
import { Sparkles, RefreshCw, Copy, Edit, Send } from "lucide-react";

const platforms = ["LinkedIn", "X", "Reddit"];

const mockGeneratedContent = {
  LinkedIn: "🚀 The future of content creation is here!\n\nAI-powered tools are transforming how we create, schedule, and analyze content across multiple platforms. Here are 5 key benefits:\n\n1. Save 10+ hours per week\n2. Maintain consistent brand voice\n3. Optimize posting times automatically\n4. Get data-driven insights\n5. Scale without burnout\n\nWhat's your biggest content challenge? 💬",
  X: "AI is revolutionizing content creation 🤖\n\n✅ Save 10+ hours/week\n✅ Consistent brand voice\n✅ Auto-optimized timing\n✅ Real insights\n✅ Scale effortlessly\n\nWhat's your #1 content struggle?",
  Reddit: "AI-Powered Content Creation: A Game Changer\n\nHey r/marketing! I've been using AI tools for content creation across LinkedIn, Twitter, and Reddit for the past 3 months. Here's what I've learned:\n\n**Time Savings**: Went from 15 hours/week to ~5 hours\n\n**Consistency**: Finally posting regularly on all platforms\n\n**Quality**: AI helps with structure, I add the human touch\n\n**Analytics**: Data-driven decisions instead of guessing\n\nThe key is using AI as a co-pilot, not autopilot. Anyone else experimenting with AI for content? Would love to hear your experiences!",
};

export function ContentStudioPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("LinkedIn");
  const [topic, setTopic] = useState("");
  const [goal, setGoal] = useState("");
  const [tone, setTone] = useState("professional");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerated(true);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Content Studio</h1>
        <p className="text-sm text-gray-500 mt-1">Generate AI-powered content for all your platforms</p>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <h2 className="font-semibold text-gray-900">Create New Content</h2>
        </div>

        <div className="space-y-4">
          {/* Topic Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What do you want to write about?
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., AI in content marketing, productivity tips, industry trends..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Goal and Tone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Goal
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a goal</option>
                <option value="educate">Educate audience</option>
                <option value="engage">Drive engagement</option>
                <option value="promote">Promote product/service</option>
                <option value="inspire">Inspire action</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="enthusiastic">Enthusiastic</option>
                <option value="authoritative">Authoritative</option>
              </select>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Sparkles className="w-5 h-5" />
            Generate Content
          </button>
        </div>
      </div>

      {/* Platform Tabs & Generated Content */}
      {generated && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Generated Content</h2>

          {/* Platform Tabs */}
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-4 py-2 font-medium text-sm transition-colors ${
                  selectedPlatform === platform
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Content Preview Card */}
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex items-start justify-between mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                  {selectedPlatform}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white rounded-lg transition-colors" title="Copy">
                    <Copy className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-white rounded-lg transition-colors" title="Edit">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-white rounded-lg transition-colors" title="Regenerate">
                    <RefreshCw className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {mockGeneratedContent[selectedPlatform as keyof typeof mockGeneratedContent]}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium">
                <Send className="w-4 h-4" />
                Schedule Post
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Save Draft
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
