import React from 'react';
import { BadgeCheck } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="relative pt-12 pb-6 px-4 bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-blue-600 rounded-b-[40px] shadow-sm"></div>
      
      {/* Avatar */}
      <div className="relative z-10">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-yellow-400 text-white rounded-full p-1 border-2 border-white shadow-sm">
          <BadgeCheck className="w-4 h-4" />
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center z-10">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
          智能名片 - 测试修改 2
        </h1>
        <div className="mt-1 flex items-center justify-center gap-2">
          <span className="text-sm text-gray-600">执着的小白sVIP</span>
          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">sVIP</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">某某科技有限公司 • 首席产品官</p>
      </div>
    </div>
  );
}
