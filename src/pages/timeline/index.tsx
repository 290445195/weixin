import React from 'react';
import { Clock } from 'lucide-react';

const timelines = [
  {
    date: '2023-10-20',
    events: [
      { time: '14:30', title: '发布了新版本 v2.0', type: 'product' },
      { time: '10:00', title: '参加行业高峰论坛', type: 'activity' }
    ]
  },
  {
    date: '2023-10-18',
    events: [
      { time: '16:00', title: '与某某集团达成战略合作', type: 'business' }
    ]
  },
  {
    date: '2023-10-15',
    events: [
      { time: '09:00', title: '公司搬迁至新办公区', type: 'company' }
    ]
  }
];

export default function Timeline() {
  return (
    <div className="bg-white min-h-full px-4 py-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">企业动态</h2>
      
      <div className="space-y-8">
        {timelines.map((day, idx) => (
          <div key={idx} className="relative">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 ml-8">{day.date}</h3>
            <div className="space-y-6">
              {day.events.map((event, eventIdx) => (
                <div key={eventIdx} className="relative pl-8">
                  {/* Timeline dot and line */}
                  <div className="absolute left-[11px] top-1.5 bottom-[-24px] w-px bg-gray-200 last:bottom-0"></div>
                  <div className="absolute left-2 top-1.5 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-50"></div>
                  
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-500">{event.time}</span>
                    </div>
                    <p className="text-sm text-gray-800">{event.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
