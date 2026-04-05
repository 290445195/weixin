import React, { useState } from 'react';
import { Search, MapPin, Building2, UserPlus, ChevronDown, Filter, Briefcase, Tag } from 'lucide-react';
import { cn } from '../../utils/cn';

// Fake Data
const contacts = [
  { name: '王总', title: 'CEO', company: '某某科技有限公司', distance: '1.2km', tags: ['互联网', 'SaaS'] },
  { name: '张经理', title: '销售总监', company: '某某贸易有限公司', distance: '2.5km', tags: ['贸易', '渠道'] },
  { name: '李工', title: '高级架构师', company: '未来科技有限公司', distance: '3.1km', tags: ['技术', 'AI'] },
];

const demands = [
  { type: '需', title: '寻优质开发团队外包项目', desc: '预算50w，周期3个月内...', time: '1小时前', contact: '赵总' },
  { type: '供', title: '提供全套SaaS源码部署', desc: '带完整前后端分离，可二开...', time: '3小时前', contact: '陈经理' },
];

export default function Network() {
  const [activeTab, setActiveTab] = useState('人脉广场');
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="bg-gray-50 min-h-full pb-6">
      {/* Top Search & Tabs */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="px-4 pt-3 pb-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜索人脉/公司/需求" 
              className="w-full bg-gray-100 rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>
        <div className="flex px-4 border-t border-gray-50 pt-2">
          {['人脉广场', '供需市场'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-2 px-4 text-sm font-medium transition-colors relative flex-1 text-center",
                activeTab === tab ? "text-blue-600" : "text-gray-500"
              )}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-t-md"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 1:1 Filter Bar Component */}
      <div className="filter-bar bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 relative z-30 shadow-sm">
        <div className="flex items-center gap-6 text-sm text-gray-600 w-full">
          <button 
            className="flex items-center gap-1 flex-1 justify-center hover:text-blue-600"
            onClick={() => setShowFilter(!showFilter)}
          >
            综合排序 <ChevronDown className={cn("w-4 h-4 transition-transform", showFilter && "rotate-180")} />
          </button>
          <button className="flex items-center gap-1 flex-1 justify-center hover:text-blue-600">
            行业分类 <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 flex-1 justify-center text-gray-500 hover:text-blue-600 border-l border-gray-200 pl-4">
            <Filter className="w-3.5 h-3.5" /> 筛选
          </button>
        </div>

        {/* Filter Dropdown (absolute overlay) */}
        {showFilter && (
          <div className="filter-dropdown absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 py-2 z-50">
            {['综合排序', '距离最近', '最新活跃', '人气最高'].map((item, i) => (
              <div key={i} className="px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="p-4">
        {activeTab === '人脉广场' ? (
          <div className="contacts-square-container space-y-3">
            {contacts.map((contact, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg shadow-inner">
                    {contact.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                      {contact.name} 
                      <span className="text-[10px] font-normal px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">{contact.title}</span>
                    </h4>
                    <div className="flex items-center gap-2 mt-1.5 text-[10px] text-gray-500">
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3 text-gray-400" />{contact.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gray-400" />{contact.distance}</span>
                    </div>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <UserPlus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="supply-demand-container space-y-3">
            {demands.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-xs font-bold shrink-0 mt-0.5",
                    item.type === '供' ? "bg-orange-100 text-orange-600" : "bg-emerald-100 text-emerald-600"
                  )}>
                    {item.type}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.desc}</p>
                    <div className="flex items-center justify-between mt-3 text-[10px] text-gray-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><UserPlus className="w-3 h-3" /> {item.contact}</span>
                        <span className="flex items-center gap-1">{item.time}</span>
                      </div>
                      <button className="text-blue-600 bg-blue-50 px-3 py-1 rounded hover:bg-blue-100 transition-colors">联系TA</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
