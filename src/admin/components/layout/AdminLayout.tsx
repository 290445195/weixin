import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  MessageSquare, 
  LogOut,
  Bell,
  Search
} from 'lucide-react';
import { cn } from '../../../utils/cn';

const sidebarMenus = [
  { path: '/admin', label: '工作台大盘', icon: LayoutDashboard },
  { path: '/admin/crm', label: 'SCRM客户管理', icon: Users },
  { path: '/admin/cms', label: '名片与内容管理', icon: MessageSquare },
  { path: '/admin/settings', label: '系统设置', icon: Settings },
];

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] text-white flex flex-col shadow-xl z-20">
        <div className="h-16 flex items-center px-6 border-b border-gray-700/50">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-lg shadow-inner mr-3">
            S
          </div>
          <h1 className="text-xl font-bold tracking-wider">名片SaaS后台</h1>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">核心业务</div>
          {sidebarMenus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              end={menu.path === '/admin'}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group relative',
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                )
              }
            >
              <menu.icon className={cn("w-5 h-5 mr-3 transition-transform group-hover:scale-110")} />
              <span className="font-medium">{menu.label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-700/50">
          <button className="flex items-center w-full px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">退出登录</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-gray-50/50">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-1.5 w-96 border border-transparent focus-within:border-blue-300 focus-within:bg-white transition-colors">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="搜索客户、帖子、或者设置项..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-700"
            />
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center space-x-3 pl-6 border-l border-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-gray-700">超级管理员</p>
                <p className="text-xs text-gray-500">某某科技有限公司</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                alt="Admin" 
                className="w-9 h-9 rounded-full object-cover border-2 border-gray-100 shadow-sm"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
