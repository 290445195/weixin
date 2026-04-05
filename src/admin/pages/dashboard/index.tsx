import React from 'react';
import { 
  Users, 
  Eye, 
  MessageCircle, 
  MousePointerClick,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

const stats = [
  { label: '今日名片访问', value: '1,284', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: '新增客户数', value: '156', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { label: 'AI互动次数', value: '842', icon: MessageCircle, color: 'text-purple-600', bg: 'bg-purple-100' },
  { label: '转化意向率', value: '12.4%', icon: MousePointerClick, color: 'text-orange-600', bg: 'bg-orange-100' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">工作台大盘</h2>
        <div className="flex gap-2">
          <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none">
            <option>近7天</option>
            <option>近30天</option>
            <option>本月</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-emerald-600 font-medium">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+4.7%</span>
              <span className="text-gray-400 font-normal ml-2">较上期</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Area (Mock) */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4">流量与转化趋势</h3>
          <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed border-gray-200">
            <p className="text-gray-400 flex flex-col items-center">
              <TrendingUp className="w-8 h-8 mb-2 opacity-50" />
              [图表占位] 折线图组件
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4">高意向雷达</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    访
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">访客_{1000 + i}</p>
                    <p className="text-xs text-gray-500">查看了您的 官网</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
