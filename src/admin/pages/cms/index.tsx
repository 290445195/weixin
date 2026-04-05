import React from 'react';
import { Layers, Image as ImageIcon, Video, FileText, Settings2, Plus } from 'lucide-react';

const modules = [
  { id: '1', name: '个人简介与语音', icon: FileText, status: '已启用', desc: '展示个人文字介绍与语音名片' },
  { id: '2', name: '照片展示矩阵', icon: ImageIcon, status: '已启用', desc: '支持工作照、活动照横向滑动展示' },
  { id: '3', name: '视频经验分享', icon: Video, status: '已启用', desc: '短视频列表，支持产品经验分享等' },
  { id: '4', name: '供需市场模块', icon: Layers, status: '已禁用', desc: '在人脉圈展示供需信息' },
];

export default function CmsManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">名片与内容管理</h2>
          <p className="text-sm text-gray-500 mt-1">管理名片展示的模块、审核相册与博客内容。</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
          <Plus className="w-4 h-4" /> 添加新模块
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column: Modules Config */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-blue-600" />
                前台模块配置
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {modules.map((mod) => (
                  <div key={mod.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/30 transition-colors group cursor-move">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                        <mod.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{mod.name}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{mod.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-xs px-2 py-1 rounded-md ${mod.status === '已启用' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-gray-100 text-gray-500 border border-gray-200'}`}>
                        {mod.status}
                      </span>
                      <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer shadow-inner">
                        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${mod.status === '已启用' ? 'left-[22px] bg-blue-600' : 'left-0.5'}`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                博客/动态内容审核
              </h3>
            </div>
            <div className="p-6 text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-800">暂无待审核的内容</p>
              <p className="text-xs text-gray-400 mt-1">员工发布的帖子或动态会在这里出现</p>
            </div>
          </div>
        </div>

        {/* Right Column: Preview */}
        <div className="col-span-1">
          <div className="bg-gray-100 rounded-[2.5rem] p-3 shadow-xl border-4 border-gray-800 h-[700px] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-3xl z-10"></div>
            <div className="bg-white w-full h-full rounded-[2rem] overflow-hidden relative">
              {/* Fake Mobile View */}
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <p className="text-sm font-bold">1:1 前端效果预览</p>
                <p className="text-xs mt-2">修改左侧配置后实时更新</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
