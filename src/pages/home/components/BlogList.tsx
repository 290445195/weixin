import React from 'react';
import { ChevronRight, FileText, Calendar } from 'lucide-react';

const blogs = [
  "产品经理的日常工作与挑战", "如何提升产品用户体验", "产品经理需要具备的核心技能",
  "人工智能在产品设计中的应用", "如何打造成功的SaaS产品", "产品需求文档的编写技巧",
  "用户故事地图的构建方法", "产品上线后的数据分析与优化", "如何与开发团队有效沟通",
  "产品定价策略与商业模式", "产品生命周期管理策略", "如何进行有效的产品复盘",
  "产品经理的时间管理技巧", "如何构建产品护城河", "产品经理的职业发展规划"
].map((title, i) => ({
  title,
  date: `2023-10-${(15 - i).toString().padStart(2, '0')}`,
  readCount: 1000 + Math.floor(Math.random() * 2000),
  tags: ["干货", "职场", "经验"].sort(() => 0.5 - Math.random()).slice(0, 2)
}));

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
        {blogs.slice(0, 5).map((blog, idx) => (
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
        {/* Mock pagination or 'view more' for the remaining 10 blogs */}
        <button className="w-full py-3 bg-gray-50 text-gray-500 text-sm rounded-xl hover:bg-gray-100 transition-colors font-medium border border-gray-100">
          查看全部 15 篇文章
        </button>
      </div>
    </div>
  );
}
