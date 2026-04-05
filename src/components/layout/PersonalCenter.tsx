import React from 'react';
import { Settings, MessageSquare, CalendarCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PersonalCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PersonalCenter({ isOpen, onClose }: PersonalCenterProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-gray-50 z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 pt-12 pb-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-white/50 overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" 
                    alt="头像" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold flex items-center gap-2">
                    执着的小白 <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs rounded-full font-black italic">VIP</span>
                  </h1>
                  <p className="text-sm text-blue-100 mt-1 opacity-80">某某科技有限公司</p>
                </div>
              </div>
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-2 gap-4 p-4 -mt-4 relative z-10">
              <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 hover:shadow-md transition-shadow active:scale-95">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Settings className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-700">账号设置</span>
              </button>
              <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 hover:shadow-md transition-shadow active:scale-95 relative">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="absolute top-3 right-8 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                <span className="text-sm font-medium text-gray-700">消息通知</span>
              </button>
            </div>

            {/* Check-in Banner */}
            <div className="px-4">
              <div className="bg-gradient-to-r from-orange-100 to-amber-50 rounded-2xl p-4 flex items-center justify-between border border-orange-200/50 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">签到领积分</h3>
                    <p className="text-[10px] text-gray-500">连续签到7天可获得神秘大礼</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all">
                  立即签到
                </button>
              </div>
            </div>

            {/* Menu List */}
            <div className="mt-4 px-4 flex-1">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                {['我的订单', '我的收藏', '浏览足迹', '意见反馈', '关于平台'].map((item, idx) => (
                  <div key={idx} className="px-4 py-3.5 border-b border-gray-50 last:border-0 flex justify-between items-center active:bg-gray-50 transition-colors">
                    <span className="text-sm text-gray-700">{item}</span>
                    <span className="text-gray-300 text-xs">❯</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4">
              <button className="w-full py-3 bg-white text-red-500 text-sm font-bold rounded-xl border border-gray-100 shadow-sm active:bg-gray-50">
                退出登录
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
