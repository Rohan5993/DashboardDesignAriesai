import { Clock } from "lucide-react";

interface PostCardProps {
  post: {
    platform: string;
    time: string;
    content: string;
    status: string;
  };
}

const platformColors: Record<string, string> = {
  LinkedIn: "bg-blue-100 text-blue-700",
  X: "bg-gray-900 text-white",
  Reddit: "bg-orange-100 text-orange-700",
};

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-2">
        <span className={`px-2 py-1 rounded text-xs font-medium ${platformColors[post.platform] || "bg-gray-100 text-gray-700"}`}>
          {post.platform}
        </span>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Clock className="w-3 h-3" />
          {post.time}
        </div>
      </div>
      <p className="text-sm text-gray-700 line-clamp-2">{post.content}</p>
    </div>
  );
}
