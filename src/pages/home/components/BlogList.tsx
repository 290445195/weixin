import React from 'react';
import { ChevronRight, FileText, Calendar } from 'lucide-react';

const blogs = [
  {
    title: "产品经理的日常工作与挑战",
    date: "2023-10-15",
    readCount: 1250,
    tags: ["职场", "经验"]
  },
  {
    title: "如何提升产品用户体验：从0到1的实战指南",
    date: "2023-10-10",
    readCount: 890,
    tags: ["UX", "干货"]
  },
  {
    title: "人工智能在SaaS产品设计中的应用趋势",
    date: "2023-09-28",
    readCount: 2340,
    tags: ["AI", "趋势"]
  }
];

export default function BlogList() {
  return (
    <div className="py-6 px-4 space-y-4 border-t-8 border-gray-50 bg-white">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900 relative">
          个人博客
          <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
        </h3>
        <button className="flex items-center text-sm text-gray-500 hover:text-blue-600">
          更多 <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-4">
        {blogs.map((blog, idx) => (
          <div key={idx} className="group p-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:bg-blue-50/30 hover:border-blue-100 transition-colors cursor-pointer">
            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {blog.title}
            </h4>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  {blog.readCount} 阅读
                </span>
              </div>
              <div className="flex gap-1">
                {blog.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-white border border-gray-200 rounded-md text-[10px] text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
