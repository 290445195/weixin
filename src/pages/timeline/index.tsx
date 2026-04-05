import React, { useState } from 'react';
import { Clock, PlayCircle, Star, Users } from 'lucide-react';
import { cn } from '../../utils/cn';

const timelines = [
  { date: '今天', events: [{ time: '14:30', title: '发布了新版本 v2.0', type: 'product' }, { time: '10:00', title: '参加行业高峰论坛', type: 'activity' }] },
  { date: '昨天', events: [{ time: '16:00', title: '与某某集团达成战略合作', type: 'business' }] },
  { date: '10-15', events: [{ time: '09:00', title: '公司搬迁至新办公区', type: 'company' }] }
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('企业动态');

  return (
    <div className="bg-gray-50 min-h-full pb-6">
      {/* 1:1 顶部主菜单 (4个子页面) */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
        <div className="flex px-4 pt-3">
          {['企业动态', '个人动态', '行业资讯', '短视频'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-3 px-2 text-sm font-bold transition-colors relative flex-1 text-center whitespace-nowrap",
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
      </div>

      {/* 子页面 1: 企业动态 */}
      {activeTab === '企业动态' && (
        <div className="bg-white min-h-full px-4 py-6">
          <div className="space-y-8">
            {timelines.map((day, idx) => (
              <div key={idx} className="relative">
                <h3 className="text-sm font-bold text-gray-900 mb-4 ml-8">{day.date}</h3>
                <div className="space-y-6">
                  {day.events.map((event, eventIdx) => (
                    <div key={eventIdx} className="relative pl-8">
                      <div className="absolute left-[11px] top-1.5 bottom-[-24px] w-px bg-gray-200 last:bottom-0"></div>
                      <div className="absolute left-2 top-1.5 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-50"></div>
                      <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-xs text-gray-500">{event.time}</span>
                        </div>
                        <p className="text-sm font-medium text-gray-800">{event.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 子页面 2: 个人动态 */}
      {activeTab === '个人动态' && (
        <div className="p-4 flex flex-col items-center justify-center text-gray-400 mt-20">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-gray-300" />
          </div>
          <p className="text-sm">暂无个人动态</p>
          <button className="mt-4 text-xs bg-blue-600 text-white px-4 py-2 rounded-full shadow-sm">发布动态</button>
        </div>
      )}

      {/* 子页面 3: 行业资讯 */}
      {activeTab === '行业资讯' && (
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex-1 flex flex-col justify-between">
                <h4 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">
                  {['2024年SaaS行业发展趋势深度报告', '人工智能将如何重塑B端企业软件服务', '移动办公的下一个风口在哪里？'][i % 3]}
                </h4>
                <div className="flex items-center gap-3 text-[10px] text-gray-400 mt-2">
                  <span>新浪科技</span>
                  <span>{i}小时前</span>
                  <span>{i * 123} 阅读</span>
                </div>
              </div>
              <img src={`https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=120&h=80&fit=crop&sig=${i}`} alt="News cover" className="w-20 h-16 rounded-lg object-cover shrink-0" />
            </div>
          ))}
        </div>
      )}

      {/* 子页面 4: 短视频 */}
      {activeTab === '短视频' && (
        <div className="p-4">
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 relative group aspect-[3/4] cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-155${i}877522-43269d4ea984?w=400&h=600&fit=crop`} 
                  alt="Video cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <p className="text-xs font-bold line-clamp-2 leading-snug text-shadow-sm">揭秘打造爆款产品的3个底层逻辑...</p>
                  <p className="text-[10px] mt-1.5 opacity-80 flex items-center gap-1">
                    <img src={`https://images.unsplash.com/photo-15${i}00648767791-00dcc994a43e?w=50&h=50&fit=crop`} className="w-4 h-4 rounded-full border border-white" alt="Avatar" />
                    执着的小白
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
