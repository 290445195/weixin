import React from 'react';
import { Building2, ChevronRight, Globe, Phone, Mail, ShoppingCart, ArrowRight } from 'lucide-react';

const services = [
  "企业网站开发", "移动应用开发", "电子商务平台", "企业数字化转型", 
  "人工智能应用开发", "大数据分析服务", "区块链应用开发", "云计算服务", 
  "网络安全解决方案", "数字营销服务", "物联网解决方案", "AR/VR应用开发", 
  "DevOps服务", "企业培训服务", "技术咨询服务"
];

const news = [
  "成都壹立科技获得A轮融资", "公司成功举办2024新产品发布会", "公司荣获“2023年度最佳科技企业”称号", 
  "公司与多家知名企业达成战略合作", "公司发布新一代人工智能产品", "公司成为行业标准制定参与者", 
  "公司举办2023技术创新峰会", "公司获得多项技术专利", "公司与高校建立产学研合作关系", 
  "公司入选“2023年度创新企业50强”", "公司推出企业数字化转型咨询服务", "公司扩大业务范围，进军海外市场", 
  "公司举办员工技能提升培训", "公司与金融机构达成合作，推出金融科技解决方案", "公司发布2023年社会责任报告"
];

const products = [
  "企业官网建设套餐", "移动应用开发套餐", "电子商务平台建设", "企业数字化转型咨询", 
  "人工智能应用开发", "技术支持与维护服务", "大数据分析解决方案", "区块链应用开发套餐", 
  "云计算服务套餐", "网络安全解决方案", "数字营销服务套餐", "物联网解决方案", 
  "AR/VR应用开发套餐", "DevOps服务套餐", "企业培训服务套餐"
];

export default function Site() {
  return (
    <div className="bg-gray-50 min-h-full pb-8">
      {/* Hero Banner */}
      <div className="h-56 relative bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop" 
          alt="企业形象" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-lg">
            <Building2 className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-xl font-bold">成都壹立科技有限公司</h1>
          <div className="mt-4 flex gap-3">
            <button className="px-4 py-1.5 bg-blue-600 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors">企业登录</button>
            <button className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-medium hover:bg-white/30 transition-colors">发布内容</button>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-8">
        {/* 关于我们 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <div className="w-1 h-4 bg-blue-600 rounded-full"></div> 关于我们
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            我们是一家专注于企业级服务的高科技公司，致力于为企业提供数字化转型的全套解决方案。核心团队来自一线互联网大厂，拥有丰富的行业经验。
          </p>
        </section>

        {/* 产品服务 (15项) */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-4 bg-blue-600 rounded-full"></div> 产品服务
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-24 bg-gray-100 relative overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&q=80&sig=${idx}`} alt="产品图片" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-bold text-gray-800 line-clamp-1">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 新闻动态 (15项) */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div> 新闻动态
            </h2>
            <span className="text-xs text-gray-400">更多</span>
          </div>
          <div className="space-y-4">
            {news.map((item, idx) => (
              <div key={idx} className="flex gap-3 group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <img src={`https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=100&fit=crop&q=80&sig=${idx}`} alt="新闻图片" className="w-16 h-16 rounded-lg object-cover shrink-0" />
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">{item}</h3>
                  <p className="text-[10px] text-gray-400">2023-10-{20 - (idx % 15)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 企业商城 (15项) */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div> 企业商城
            </h2>
            <button className="flex items-center text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              进入商城 <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="space-y-3">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3">
                <img src={`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop&q=80&sig=${idx}`} alt="商品图片" className="w-20 h-20 rounded-lg object-cover shrink-0" />
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-2">{product}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-red-500 font-bold text-sm">面议</span>
                    <button className="flex items-center gap-1 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-blue-700 active:scale-95 transition-all">
                      <ShoppingCart className="w-3.5 h-3.5" /> 加入购物车
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 联系我们 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <div className="w-1 h-4 bg-blue-600 rounded-full"></div> 联系我们
          </h2>
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
                www.18xx.cn
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                  <Mail className="w-4 h-4" />
                </div>
                contact@18xx.cn
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
