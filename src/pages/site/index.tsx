import React from 'react';
import { Building2, ChevronRight, Globe, Phone, Mail } from 'lucide-react';

export default function Site() {
  return (
    <div className="bg-gray-50 min-h-full">
      {/* Hero Banner */}
      <div className="h-48 relative bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop" 
          alt="Company Hero" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-3">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold">某某科技有限公司</h1>
          <p className="text-xs text-gray-200 mt-1">让科技改变商业未来</p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Company Info */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
          <h3 className="text-base font-bold text-gray-900">关于我们</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            我们是一家专注于企业级SaaS服务的高科技公司，致力于为企业提供数字化转型的全套解决方案。核心团队来自一线互联网大厂，拥有丰富的行业经验。
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
          <h3 className="text-base font-bold text-gray-900">联系方式</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Phone className="w-4 h-4" />
                </div>
                400-123-4567
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Globe className="w-4 h-4" />
                </div>
                www.example.com
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                  <Mail className="w-4 h-4" />
                </div>
                contact@example.com
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
