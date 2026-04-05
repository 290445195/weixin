import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const photos = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?w=400&h=400&fit=crop",
];

const videos = [
  {
    title: "个人介绍视频",
    cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=337&fit=crop",
    duration: "02:15"
  },
  {
    title: "产品设计经验分享",
    cover: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=337&fit=crop",
    duration: "14:30"
  },
  {
    title: "如何打造优秀的用户体验",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=337&fit=crop",
    duration: "08:45"
  }
];

export default function MediaMatrix() {
  return (
    <div className="py-6 space-y-8 border-t-8 border-gray-50">
      {/* Photos Section */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 relative">
            图片展示
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h3>
          <button className="flex items-center text-sm text-gray-500 hover:text-blue-600">
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {photos.map((url, idx) => (
            <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={url} 
                alt={`Photo ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section>
        <div className="flex items-center justify-between mb-4 px-4">
          <h3 className="text-lg font-bold text-gray-900 relative">
            视频展示
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h3>
          <button className="flex items-center text-sm text-gray-500 hover:text-blue-600">
            更多 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        {/* Horizontal scrollable video list */}
        <div className="flex overflow-x-auto pb-4 px-4 snap-x snap-mandatory hide-scrollbar gap-4">
          {videos.map((video, idx) => (
            <div key={idx} className="flex-none w-[85%] snap-center rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white relative group cursor-pointer">
              <div className="aspect-video relative">
                <img 
                  src={video.cover} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-white font-medium">
                  {video.duration}
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-sm font-medium text-gray-900 truncate">{video.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
