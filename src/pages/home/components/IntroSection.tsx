import React from 'react';
import { PlayCircle, Volume2 } from 'lucide-react';

export default function IntroSection() {
  return (
    <div className="px-4 py-6 space-y-6 border-t-8 border-gray-50">
      {/* Text Intro */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-bold text-gray-900 relative">
            个人简介
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed text-justify">
          您好，我是执着的小白，目前担任某科技公司的高级产品经理。拥有超过10年的互联网产品规划和设计经验，专注于SaaS领域。致力于将复杂的业务逻辑转化为简单易用的用户体验，通过创新的设计提升工作效率和商业价值。
        </p>
      </section>

      {/* Audio Intro */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-bold text-gray-900 relative">
            音频简介
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h3>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 flex items-center justify-between shadow-sm border border-blue-100">
          <div className="flex items-center gap-4 flex-1">
            <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md transition-transform active:scale-95 flex-shrink-0">
              <PlayCircle className="w-6 h-6 ml-1" />
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between text-sm font-medium text-gray-900 mb-1">
                <span>关于我的自我介绍</span>
                <span className="text-xs text-gray-500">01:45</span>
              </div>
              {/* Fake Audio Waveform */}
              <div className="flex items-end gap-1 h-4 w-full">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 bg-blue-300 rounded-t-sm" 
                    style={{ height: `${Math.random() * 100}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <button className="ml-4 p-2 text-gray-400 hover:text-blue-600 transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
