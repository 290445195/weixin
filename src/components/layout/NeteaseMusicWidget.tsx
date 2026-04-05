import React from 'react';
import { Music2 } from 'lucide-react';

const NeteaseMusicWidget = () => {
  return (
    <div className="fixed bottom-16 left-0 right-0 w-full max-w-md mx-auto z-40 px-2 pointer-events-none">
      <div className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-t-xl rounded-b-sm overflow-hidden pointer-events-auto transition-transform hover:-translate-y-1">
        {/* Mocking the Netease Music iframe to look like the real widget */}
        <div className="h-12 flex items-center justify-between px-3 relative overflow-hidden">
          {/* Progress bar background */}
          <div className="absolute left-0 bottom-0 h-0.5 bg-red-500 w-1/3"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center animate-spin" style={{ animationDuration: '4s' }}>
              <Music2 className="w-4 h-4 text-red-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-800 line-clamp-1">网易热歌榜 - 每周四更新</span>
              <span className="text-[9px] text-gray-500">正在播放...</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer">
              <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-gray-600 border-b-4 border-b-transparent ml-1"></div>
            </div>
            <div className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer">
              <div className="flex gap-0.5">
                <div className="w-1 h-3 bg-gray-600 rounded-sm"></div>
                <div className="w-1 h-3 bg-gray-600 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeteaseMusicWidget;
