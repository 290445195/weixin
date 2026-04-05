import React from 'react';
import { PlayCircle, Volume2 } from 'lucide-react';

const videos = [
  { title: "个人介绍视频", duration: "02:15" },
  { title: "产品设计经验分享", duration: "14:30" },
  { title: "如何打造优秀的用户体验", duration: "08:45" },
  { title: "互联网行业趋势分析", duration: "12:20" },
  { title: "产品经理的职业发展路径", duration: "10:15" },
  { title: "敏捷开发在产品管理中的应用", duration: "09:30" },
  { title: "数据驱动的产品决策", duration: "11:45" },
  { title: "产品原型设计实战", duration: "15:20" },
  { title: "用户研究方法与技巧", duration: "13:10" },
  { title: "产品发布会策划与执行", duration: "16:05" },
  { title: "跨团队协作最佳实践", duration: "07:50" },
  { title: "产品迭代策略与规划", duration: "08:25" },
  { title: "商业模式创新与设计", duration: "12:40" },
  { title: "产品营销与推广策略", duration: "10:55" },
  { title: "未来科技趋势与产品机会", duration: "09:15" }
].map((v, i) => ({ ...v, cover: `https://images.unsplash.com/photo-155${i}877522-43269d4ea984?w=600&h=337&fit=crop` }));

const albums = [
  "生活相册", "工作相册", "旅行相册", "活动相册", "会议相册",
  "团建相册", "演讲相册", "培训相册", "展会相册", "晚宴相册",
  "咖啡时光", "城市漫步", "自然探索", "节日相册", "友情相册"
].map((title, i) => ({
  title,
  cover: `https://images.unsplash.com/photo-15${i}2071820081-009f0129c71c?w=400&h=400&fit=crop`,
  count: Math.floor(Math.random() * 50) + 10
}));

export default function MediaMatrix() {
  return (
    <div className="py-6 space-y-8 border-t-8 border-gray-50">
      {/* 15个视频横向滑动 */}
      <section>
        <div className="flex items-center justify-between mb-4 px-4">
          <h3 className="text-lg font-bold text-gray-900 relative">
            视频展示
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h3>
          <button className="text-sm text-gray-500 hover:text-blue-600">更多 &gt;</button>
        </div>
        <div className="flex overflow-x-auto pb-4 px-4 snap-x snap-mandatory hide-scrollbar gap-4">
          {videos.map((video, idx) => (
            <div key={idx} className="flex-none w-[85%] snap-center rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white relative group cursor-pointer">
              <div className="aspect-video relative">
                <img src={video.cover} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-5 h-5 text-white fill-white ml-1" />
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

      {/* 15个相册宫格展示 (展示前6个，点击更多看全部) */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 relative">
            个人相册
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h3>
          <button className="text-sm text-gray-500 hover:text-blue-600">更多 &gt;</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {albums.slice(0, 6).map((album, idx) => (
            <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100 relative group cursor-pointer">
              <img src={album.cover} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-6">
                <p className="text-white text-xs font-bold truncate">{album.title}</p>
                <p className="text-gray-300 text-[10px]">{album.count} 张</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
