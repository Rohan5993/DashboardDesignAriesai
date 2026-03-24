import { Clock, TrendingUp, Repeat } from "lucide-react";

interface AISuggestionCardProps {
  suggestion: {
    type: string;
    title: string;
    time?: string;
    platform?: string;
    platforms?: string[];
    reason: string;
  };
}

const typeIcons: Record<string, any> = {
  "Best Time": Clock,
  "Topic": TrendingUp,
  "Repurpose": Repeat,
};

export function AISuggestionCard({ suggestion }: AISuggestionCardProps) {
  const Icon = typeIcons[suggestion.type] || TrendingUp;

  return (
    <div className="bg-white rounded-lg p-4 border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-100 rounded-lg shrink-0">
          <Icon className="w-4 h-4 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-blue-600 font-medium mb-1">{suggestion.type}</div>
          <div className="text-sm font-medium text-gray-900 mb-1">{suggestion.title}</div>
          {suggestion.time && (
            <div className="text-xs text-gray-600 mb-1">{suggestion.time}</div>
          )}
          <div className="text-xs text-gray-500">{suggestion.reason}</div>
        </div>
      </div>
    </div>
  );
}
