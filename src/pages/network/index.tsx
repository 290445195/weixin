import React from 'react';
import { Search, MapPin, Building2, UserPlus } from 'lucide-react';

const contacts = [
  { name: '王总', title: 'CEO', company: '某某科技有限公司', distance: '1.2km' },
  { name: '张经理', title: '销售总监', company: '某某贸易有限公司', distance: '2.5km' },
  { name: '李工', title: '高级架构师', company: '未来科技有限公司', distance: '3.1km' },
];

export default function Network() {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="bg-white px-4 py-3 border-b border-gray-100 sticky top-0 z-40">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="搜索人脉/公司" 
            className="w-full bg-gray-100 rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">附近的人脉</h3>
        {contacts.map((contact, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                {contact.name[0]}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{contact.name} <span className="text-xs font-normal text-gray-500 ml-1">{contact.title}</span></h4>
                <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
                  <span className="flex items-center gap-0.5"><Building2 className="w-3 h-3" />{contact.company}</span>
                  <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3" />{contact.distance}</span>
                </div>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors">
              <UserPlus className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
