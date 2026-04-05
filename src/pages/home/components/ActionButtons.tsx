import React from 'react';
import { 
  UserPlus, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Image as ImageIcon, 
  QrCode, 
  Share2, 
  Repeat 
} from 'lucide-react';
import { cn } from '../../../utils/cn';

const actions = [
  { icon: UserPlus, label: '存为客户', color: 'bg-blue-100 text-blue-600', primary: true },
  { icon: Phone, label: '拨打电话', color: 'bg-green-100 text-green-600', primary: true },
  { icon: MessageCircle, label: '添加微信', color: 'bg-emerald-100 text-emerald-600', primary: true },
  { icon: Mail, label: '联系邮箱', color: 'bg-gray-100 text-gray-600' },
  { icon: MapPin, label: '公司地址', color: 'bg-gray-100 text-gray-600' },
  { icon: ImageIcon, label: '名片海报', color: 'bg-gray-100 text-gray-600' },
  { icon: QrCode, label: '名片码', color: 'bg-gray-100 text-gray-600' },
  { icon: Share2, label: '转发名片', color: 'bg-gray-100 text-gray-600' },
  { icon: Repeat, label: '交换名片', color: 'bg-gray-100 text-gray-600' },
];

export default function ActionButtons() {
  return (
    <div className="px-4 py-6">
      {/* Primary Actions */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {actions.filter(a => a.primary).map((action, idx) => (
          <button 
            key={idx}
            className="flex flex-col items-center justify-center gap-2 group transition-transform active:scale-95"
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm", action.color)}>
              <action.icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-gray-700">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Secondary Actions Grid */}
      <div className="grid grid-cols-4 gap-y-6 gap-x-2">
        {actions.filter(a => !a.primary).map((action, idx) => (
          <button 
            key={idx}
            className="flex flex-col items-center justify-center gap-1.5 transition-transform active:scale-95"
          >
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", action.color)}>
              <action.icon className="w-4 h-4" />
            </div>
            <span className="text-[10px] text-gray-600">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
