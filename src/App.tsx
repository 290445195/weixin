import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Mobile (C端/名片端) 路由组件
import MobileLayout from './components/layout/Layout';
import Home from './pages/home';
import Network from './pages/network';
import Timeline from './pages/timeline';
import Site from './pages/site';
import Forum from './pages/forum';

// PC端 (SaaS后台) 路由组件
import AdminLayout from './admin/components/layout/AdminLayout';
import Dashboard from './admin/pages/dashboard';
import CrmList from './admin/pages/crm';
import CmsManager from './admin/pages/cms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1:1 移动端名片与互动流 (默认根路由) */}
        <Route path="/" element={<MobileLayout />}>
          <Route index element={<Home />} />
          <Route path="network" element={<Network />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="site" element={<Site />} />
          <Route path="forum" element={<Forum />} />
        </Route>

        {/* PC SaaS 管理后台 */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="crm" element={<CrmList />} />
          <Route path="cms" element={<CmsManager />} />
          <Route path="settings" element={<div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">系统设置模块开发中...</div>} />
        </Route>

        {/* 404 跳转 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;