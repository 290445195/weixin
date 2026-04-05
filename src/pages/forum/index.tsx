import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';

const tabs = ['帖子主页', '正在关注', '附近的帖子'];

const posts = [
  {
    id: 1,
    author: {
      name: "执着的小白",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      company: "某某科技有限公司",
      time: "2小时前"
    },
    content: "今天参加了行业产品交流会，受益匪浅。在AI驱动的SaaS时代，产品经理不仅要懂业务，更要理解技术边界与商业模式的结合点。期待与各位同行深度交流！",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
    ],
    likes: 128,
    comments: 32
  },
  {
    id: 2,
    author: {
      name: "李四",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      company: "未来设计局",
      time: "5小时前"
    },
    content: "分享一套最近整理的B端产品设计规范，欢迎大家探讨。",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
    ],
    likes: 85,
    comments: 12
  }
];

export default function Forum() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Top Tabs */}
      <div className="sticky top-0 bg-white z-40 border-b border-gray-100 px-4 pt-4 pb-0">
        <div className="flex items-center gap-6">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "pb-3 text-sm font-medium transition-colors relative",
                activeTab === idx ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
              )}
            >
              {tab}
              {activeTab === idx && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-blue-600 rounded-t-md"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Post List */}
      <div className="p-4 space-y-4">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{post.author.name}</h4>
                  <p className="text-[10px] text-gray-500">{post.author.company} · {post.author.time}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="mt-3">
              <p className="text-sm text-gray-800 leading-relaxed">
                {post.content}
              </p>
              {post.images.length > 0 && (
                <div className={cn(
                  "mt-3 grid gap-2",
                  post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                )}>
                  {post.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt="Post attachment" 
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-gray-500">
              <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-xs">分享</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{post.comments}</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-xs">{post.likes}</span>
              </button>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center text-xs text-gray-400 py-6">
        - 没有了 -
      </div>
    </div>
  );
}