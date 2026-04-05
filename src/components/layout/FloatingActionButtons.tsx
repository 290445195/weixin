import React, { useState } from 'react';
import { User, MessageSquareHeart } from 'lucide-react';
import PersonalCenter from './PersonalCenter';

export default function FloatingActionButtons() {
  const [isPersonalCenterOpen, setIsPersonalCenterOpen] = useState(false);

  return (
    <>
      {/* 个人中心 - 右上角悬浮 */}
      <button 
        className="personal-center-btn fixed top-20 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors z-40"
        onClick={() => setIsPersonalCenterOpen(true)}
      >
        <User className="w-5 h-5" />
      </button>

      {/* AI助理 - 右下角悬浮 (在底部导航栏上方) */}
      <button className="ai-assistant-btn fixed bottom-24 right-4 w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-500 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform z-40">
        <MessageSquareHeart className="w-6 h-6" />
        {/* 呼吸红点提示 */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
      </button>

      {/* 个人中心滑出面板 */}
      <PersonalCenter 
        isOpen={isPersonalCenterOpen} 
        onClose={() => setIsPersonalCenterOpen(false)} 
      />
    </>
  );
}
