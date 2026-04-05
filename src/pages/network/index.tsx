import React, { useState } from 'react';
import { Search, MapPin, Building2, UserPlus, ChevronDown, Filter, Star, Users } from 'lucide-react';
import { cn } from '../../utils/cn';

// Fake Data for Contacts
const contacts = [
  { name: '李四', title: '销售总监', company: '某某贸易有限公司', distance: '1.2km' },
  { name: '王五', title: '高级架构师', company: '未来科技有限公司', distance: '2.5km' },
  { name: '赵六', title: '产品经理', company: '星辰科技有限公司', distance: '3.1km' },
  { name: '孙七', title: 'UI设计师', company: '创想设计局', distance: '4.0km' },
  { name: '周八', title: '市场总监', company: '环球营销策划', distance: '5.2km' },
  { name: '吴九', title: '技术专家', company: '深蓝信息技术', distance: '6.8km' },
  { name: '郑十', title: '运营经理', company: '光芒文化传媒', distance: '7.5km' },
  { name: '冯十一', title: 'HR', company: '汇智人力资源', distance: '8.3km' },
  { name: '陈十二', title: '财务总监', company: '金算盘财税', distance: '9.1km' },
  { name: '褚十三', title: '法务专员', company: '正义律师事务所', distance: '10.5km' },
  { name: '卫十四', title: '行政主管', company: '安居物业管理', distance: '12.0km' },
  { name: '蒋十五', title: '客服专员', company: '微笑客户服务', distance: '15.3km' },
  { name: '沈十六', title: '采购经理', company: '四海供应链', distance: '18.2km' },
  { name: '韩十七', title: '物流主管', company: '八方物流运输', distance: '22.4km' },
  { name: '杨十八', title: '仓储专员', company: '九洲仓储中心', distance: '25.8km' },
];

const demands = [
  { type: '需', title: '寻优质开发团队外包项目', desc: '预算50w，周期3个月内...', time: '1小时前', contact: '张三' },
  { type: '供', title: '出售全新iPhone 15 Pro', desc: '未拆封，国行原装...', time: '2小时前', contact: '李四' },
  { type: '需', title: '求购二手笔记本电脑', desc: '要求配置i7，16G内存以上...', time: '3小时前', contact: '王五' },
  { type: '供', title: '提供网站设计服务', desc: '专业UI/UX设计，包含响应式...', time: '5小时前', contact: '赵六' },
  { type: '供', title: '出租办公场地', desc: '市中心甲级写字楼，精装修...', time: '昨天', contact: '孙七' },
  { type: '需', title: '寻找产品经理合伙人', desc: '有SaaS经验优先，期权分成...', time: '昨天', contact: '周八' },
];

export default function Network() {
  const [activeTab, setActiveTab] = useState('人脉广场');
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="bg-gray-50 min-h-full pb-6">
      {/* 1:1 顶部主菜单 (4个子页面: 人脉广场, 供需市场, 平台优选, 微信群) */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
        <div className="flex px-4 pt-3">
          {['人脉广场', '供需市场', '平台优选', '微信群'].map((tab) => (
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

      {/* 子页面 1: 人脉广场 */}
      {activeTab === '人脉广场' && (
        <>
          <div className="bg-white px-4 py-2 border-b border-gray-50 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="搜索人脉" 
                className="w-full bg-gray-100 rounded-full py-1.5 pl-9 pr-4 text-xs focus:outline-none"
              />
            </div>
          </div>
          <div className="bg-white px-4 py-2 flex items-center gap-6 border-b border-gray-100 text-xs text-gray-500 shadow-sm">
            <button className="text-gray-900 font-bold">最新</button>
            <button>人气</button>
            <button>附近</button>
            <button>推荐</button>
          </div>
          
          <div className="p-4 space-y-3">
            {contacts.map((contact, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <img src={`https://images.unsplash.com/photo-15${idx}00648767791-00dcc994a43e?w=100&h=100&fit=crop`} alt="Avatar" className="w-12 h-12 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{contact.name}</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">{contact.title}</p>
                  </div>
                </div>
                <button className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
                  查看
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 子页面 2: 供需市场 */}
      {activeTab === '供需市场' && (
        <>
          <div className="bg-white px-4 py-2 border-b border-gray-50 flex items-center justify-between">
            <div className="relative flex-1 mr-3">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="搜索供需信息" className="w-full bg-gray-100 rounded-full py-1.5 pl-9 pr-4 text-xs outline-none" />
            </div>
            <button className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-full font-medium">发布</button>
          </div>
          <div className="bg-white px-4 py-2 flex items-center gap-6 border-b border-gray-100 text-xs text-gray-500 shadow-sm">
            <button className="text-gray-900 font-bold">最新</button>
            <button>人气</button>
            <button>附近</button>
            <button>推荐</button>
          </div>
          
          <div className="p-4 space-y-3">
            {demands.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <img src={`https://images.unsplash.com/photo-15${idx}00648767791-00dcc994a43e?w=100&h=100&fit=crop`} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
                    <h4 className="text-xs font-bold text-gray-900">{item.contact}</h4>
                  </div>
                  <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold", item.type === '供' ? "bg-orange-100 text-orange-600" : "bg-emerald-100 text-emerald-600")}>
                    {item.type}
                  </span>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-bold text-gray-900 leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>分享 12</span>
                    <span>评论 5</span>
                  </div>
                  <button className="text-blue-600 text-xs bg-blue-50 px-3 py-1 rounded hover:bg-blue-100">分享</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 子页面 3: 平台优选 */}
      {activeTab === '平台优选' && (
        <div className="p-4 space-y-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
            <Star className="absolute -right-4 -top-4 w-24 h-24 text-white/10" />
            <h3 className="text-lg font-bold mb-2">优质人脉推荐计划</h3>
            <p className="text-xs text-blue-100 mb-4 opacity-90 leading-relaxed w-2/3">加入平台优选，获得全站顶级曝光资源，让潜在客户主动找上门。</p>
            <button className="bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">立即申请</button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm text-center">
                <img src={`https://images.unsplash.com/photo-15${i}00648767791-00dcc994a43e?w=100&h=100&fit=crop`} alt="User" className="w-12 h-12 rounded-full mx-auto mb-2 object-cover" />
                <h4 className="text-xs font-bold text-gray-900">推荐官_{i}</h4>
                <p className="text-[10px] text-gray-500 truncate mt-0.5">科技领域专家</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 子页面 4: 微信群 */}
      {activeTab === '微信群' && (
        <div className="p-4 space-y-3">
          {[
            { name: '全国SaaS交流群', count: 485, tags: ['SaaS', '交流'] },
            { name: '大湾区创业者联盟', count: 320, tags: ['创业', '资源'] },
            { name: '产品经理吐槽群', count: 500, tags: ['产品', '内推'] },
            { name: '跨境电商出海交流', count: 245, tags: ['出海', '电商'] }
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
              <button className="text-xs bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-emerald-600 transition-colors">加群</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
