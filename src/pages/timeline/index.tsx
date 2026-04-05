import React, { useState } from 'react';
import { Clock, PlayCircle, Star, Users } from 'lucide-react';
import { cn } from '../../utils/cn';

const tabs = ['平台优选', '微信群', '短视频'];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('平台优选');

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Sub Tabs */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100 px-4 pt-3 flex justify-around">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-3 text-sm font-medium transition-colors relative",
              activeTab === tab ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
            )}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-blue-600 rounded-t-md"></span>
            )}
          </button>
        ))}
      </div>

      <div className="p-4">
        {activeTab === '平台优选' && (
          <div className="platform-selection space-y-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
              <Star className="absolute -right-4 -top-4 w-24 h-24 text-white/10" />
              <h3 className="text-lg font-bold mb-2">优质人脉推荐计划</h3>
              <p className="text-xs text-blue-100 mb-4 opacity-90 leading-relaxed w-2/3">
                加入平台优选，获得全站顶级曝光资源，让潜在客户主动找上门。
              </p>
              <button className="bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">
                立即申请
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-15${i}00648767791-00dcc994a43e?w=100&h=100&fit=crop`} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900">推荐官_{i}</h4>
                  <p className="text-[10px] text-gray-500 truncate mt-0.5">科技领域专家</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === '微信群' && (
          <div className="wechat-groups space-y-3">
            {[
              { name: '全国SaaS交流群', count: 485, tags: ['SaaS', '交流'] },
              { name: '大湾区创业者联盟', count: 320, tags: ['创业', '资源'] },
              { name: '产品经理吐槽群', count: 500, tags: ['产品', '内推'] }
            ].map((group, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl flex items-center justify-between border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{group.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-gray-500">{group.count}/500人</span>
                      {group.tags.map(t => (
                        <span key={t} className="text-[10px] px-1.5 py-0.5 bg-gray-50 border border-gray-200 rounded text-gray-500">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="text-xs bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                  加群
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === '短视频' && (
          <div className="short-videos-container grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 relative group aspect-[3/4]">
                <img 
                  src={`https://images.unsplash.com/photo-155${i}877522-43269d4ea984?w=400&h=600&fit=crop`} 
                  alt="Video cover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <p className="text-xs font-medium line-clamp-2 text-shadow-sm">揭秘打造爆款产品的3个底层逻辑...</p>
                  <p className="text-[10px] mt-1 opacity-80 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 昨天
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
