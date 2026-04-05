import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Search } from 'lucide-react';
import { cn } from '../../utils/cn';

const categories = ['推荐', '热门', '我的', '发布', '综合', '技术', '生活', '问答', '营销'];
const subFilters = ['最新', '热门', '精华', '关注'];

const marketingGames = [
  "幸运大转盘", "水果老虎机", "幸运抽奖", "刮刮乐", "砸金蛋", 
  "集五福", "猜灯谜", "限时秒杀", "满减活动", "会员专享", 
  "邀请好友", "新品试用", "积分兑换", "答题赢奖", "限时优惠"
];

const mockPosts = [
  { role: "技术达人", title: "Vue 3 新特性详解", likes: 45, comments: 128, views: 36, shares: 24, images: ["https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=300&fit=crop"] },
  { role: "生活分享", title: "周末爬山好去处", likes: 23, comments: 89, views: 18, shares: 15, images: ["https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop", "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop"] },
  { role: "营销专家", title: "如何做好社交媒体营销", likes: 58, comments: 156, views: 42, shares: 31, images: [] },
  { role: "产品经理", title: "产品经理的核心能力是什么？", likes: 67, comments: 212, views: 58, shares: 42, images: [] },
  { role: "设计师", title: "UI设计中的色彩搭配技巧", likes: 38, comments: 145, views: 32, shares: 28, images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"] },
  { role: "创业者", title: "创业路上的坑，你踩过几个？", likes: 72, comments: 189, views: 48, shares: 36, images: [] },
  { role: "职场新人", title: "职场新人如何快速适应新环境？", likes: 42, comments: 98, views: 24, shares: 19, images: [] },
  { role: "数据分析师", title: "Python数据分析实战技巧", likes: 53, comments: 167, views: 45, shares: 33, images: [] },
  { role: "前端工程师", title: "前端性能优化最佳实践", likes: 47, comments: 134, views: 39, shares: 26, images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"] },
  { role: "美食爱好者", title: "家常菜谱分享：简单又美味", likes: 63, comments: 178, views: 52, shares: 38, images: ["https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop"] },
  { role: "财务专家", title: "个人理财的几个重要原则", likes: 41, comments: 123, views: 37, shares: 23, images: [] },
  { role: "健身教练", title: "办公室健身小技巧", likes: 57, comments: 156, views: 46, shares: 30, images: [] },
  { role: "HR经理", title: "如何写出优秀的简历？", likes: 62, comments: 145, views: 43, shares: 29, images: [] },
  { role: "后端工程师", title: "Node.js性能优化实战", likes: 58, comments: 167, views: 49, shares: 34, images: [] },
  { role: "教育工作者", title: "如何有效地学习新技术？", likes: 45, comments: 112, views: 35, shares: 22, images: [] }
].map((post, i) => ({
  id: i + 1,
  author: {
    name: `论坛用户_${i + 1}`,
    role: post.role,
    avatar: `https://images.unsplash.com/photo-15${i}00648767791-00dcc994a43e?w=100&h=100&fit=crop`,
    time: `${i + 1}小时前`
  },
  ...post
}));

export default function Forum() {
  const [activeCat, setActiveCat] = useState('推荐');
  const [activeSub, setActiveSub] = useState('最新');

  return (
    <div className="bg-gray-50 min-h-full">
      {/* 顶部搜索与分类 */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="px-4 py-3 border-b border-gray-50 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜索论坛内容" 
              className="w-full bg-gray-100 rounded-full py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>
        
        {/* 一级分类 (横向滚动) */}
        <div className="flex overflow-x-auto hide-scrollbar px-4 py-2 gap-4 border-b border-gray-50">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={cn(
                "whitespace-nowrap text-sm font-medium transition-colors",
                activeCat === cat ? "text-blue-600 font-bold" : "text-gray-500"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 二级筛选 */}
        <div className="flex px-4 py-2 gap-6 bg-gray-50/50">
          {subFilters.map(sub => (
            <button
              key={sub}
              onClick={() => setActiveSub(sub)}
              className={cn(
                "text-xs transition-colors",
                activeSub === sub ? "text-gray-900 font-bold" : "text-gray-500"
              )}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* 营销活动区 (14项横向滑动) */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1.5">
            <span className="w-1 h-3 bg-red-500 rounded-full"></span> 营销活动
          </h3>
          <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2">
            {marketingGames.map((game, idx) => (
              <div key={idx} className="flex-none w-20 flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
                  <img src={`https://api.dicebear.com/7.x/icons/svg?seed=${idx}&backgroundColor=ffdfdf`} alt={game} className="w-8 h-8 opacity-80" />
                </div>
                <span className="text-[10px] text-gray-700 text-center line-clamp-1">{game}</span>
                <button className="text-[9px] px-2 py-0.5 bg-red-50 text-red-500 rounded-full">参与</button>
              </div>
            ))}
          </div>
        </div>

        {/* 帖子列表 (15项) */}
        <div className="space-y-3">
          {mockPosts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img src={post.author.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                      {post.author.name}
                      <span className="text-[9px] px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded">{post.author.role}</span>
                    </h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">{post.author.time}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="w-5 h-5" /></button>
              </div>

              <div className="mt-3">
                <h3 className="text-sm font-bold text-gray-900 mb-1">{post.title}</h3>
                {post.images.length > 0 && (
                  <div className={cn("mt-2 grid gap-2", post.images.length === 1 ? "grid-cols-1" : "grid-cols-2")}>
                    {post.images.map((img, idx) => (
                      <img key={idx} src={img} alt="Post image" className="w-full h-32 object-cover rounded-xl" />
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-gray-500">
                <button className="flex items-center gap-1.5 hover:text-blue-600"><Share2 className="w-4 h-4" /><span className="text-xs">{post.shares}</span></button>
                <button className="flex items-center gap-1.5 hover:text-blue-600"><MessageCircle className="w-4 h-4" /><span className="text-xs">{post.comments}</span></button>
                <button className="flex items-center gap-1.5 hover:text-red-500"><Heart className="w-4 h-4" /><span className="text-xs">{post.likes}</span></button>
              </div>
            </article>
          ))}
        </div>

        {/* 分页器 */}
        <div className="flex items-center justify-center gap-1 py-4 pb-8">
          <button className="px-3 py-1 border border-gray-200 rounded text-xs text-gray-500 bg-white">上一页</button>
          <button className="px-2.5 py-1 bg-blue-600 text-white rounded text-xs">1</button>
          <button className="px-2.5 py-1 border border-gray-200 rounded text-xs text-gray-500 bg-white">2</button>
          <button className="px-2.5 py-1 border border-gray-200 rounded text-xs text-gray-500 bg-white">3</button>
          <span className="text-gray-400 px-1 text-xs">...</span>
          <button className="px-2.5 py-1 border border-gray-200 rounded text-xs text-gray-500 bg-white">10</button>
          <button className="px-3 py-1 border border-gray-200 rounded text-xs text-gray-500 bg-white">下一页</button>
        </div>
      </div>
    </div>
  );
}
