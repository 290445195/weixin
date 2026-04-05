import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  MoreVertical,
  Star,
  Activity
} from 'lucide-react';
import { cn } from '../../../utils/cn';

const mockLeads = [
  { id: '10001', name: '李总', company: '某某科技有限公司', phone: '138****0001', source: '名片海报', score: 95, lastActive: '10分钟前', status: '跟进中' },
  { id: '10002', name: '张经理', company: '某某贸易有限公司', phone: '139****0002', source: '搜索发现', score: 82, lastActive: '1小时前', status: '待分配' },
  { id: '10003', name: '访客_A', company: '-', phone: '-', source: '微信群分享', score: 45, lastActive: '2小时前', status: '公海' },
  { id: '10004', name: '王总监', company: '某某创新中心', phone: '137****0004', source: '直接访问', score: 99, lastActive: '刚刚', status: '高优线索' },
];

export default function CrmList() {
  const [activeTab, setActiveTab] = useState('全部线索');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">SCRM 线索与客户</h2>
          <p className="text-sm text-gray-500 mt-1">管理从名片、官网、海报等各个渠道流入的客户线索。</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
            <Filter className="w-4 h-4" /> 筛选
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
            <Download className="w-4 h-4" /> 导出报表
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
            手动录入线索
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 border-b border-gray-200">
        {['全部线索', '我的客户', '待分配线索', '公海池'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-6 py-3 text-sm font-medium border-b-2 transition-colors",
              activeTab === tab 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Area */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="搜索客户姓名、手机号或公司名..." 
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-80 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-semibold">客户信息</th>
                <th className="px-6 py-4 font-semibold">联系方式</th>
                <th className="px-6 py-4 font-semibold">来源渠道</th>
                <th className="px-6 py-4 font-semibold">
                  <div className="flex items-center gap-1 cursor-pointer group">
                    AI意向分 <Star className="w-3.5 h-3.5 text-gray-400 group-hover:text-yellow-500" />
                  </div>
                </th>
                <th className="px-6 py-4 font-semibold">最近活跃</th>
                <th className="px-6 py-4 font-semibold">状态</th>
                <th className="px-6 py-4 font-semibold text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 flex items-center justify-center font-bold shadow-sm">
                        {lead.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{lead.name}</div>
                        <div className="text-xs text-gray-500">{lead.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{lead.phone}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">{lead.source}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full",
                            lead.score > 90 ? "bg-red-500" : lead.score > 70 ? "bg-orange-500" : "bg-blue-500"
                          )} 
                          style={{ width: `${lead.score}%` }}
                        />
                      </div>
                      <span className="font-bold text-gray-900">{lead.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-500" />
                    {lead.lastActive}
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium border",
                      lead.status === '高优线索' ? "bg-red-50 border-red-200 text-red-700" :
                      lead.status === '跟进中' ? "bg-blue-50 border-blue-200 text-blue-700" :
                      lead.status === '待分配' ? "bg-orange-50 border-orange-200 text-orange-700" :
                      "bg-gray-50 border-gray-200 text-gray-600"
                    )}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium mr-4 transition-colors">跟进</button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Mock */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500 bg-gray-50/50">
          <span>共 428 条线索记录</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100 disabled:opacity-50">上一页</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100">3</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100">下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}
