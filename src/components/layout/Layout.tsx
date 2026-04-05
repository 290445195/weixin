import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { UserCircle, Users, Activity, Globe, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import FloatingActionButtons from './FloatingActionButtons';
import NeteaseMusicWidget from './NeteaseMusicWidget';

const navItems = [
  { path: '/', label: '首页', icon: UserCircle },
  { path: '/network', label: '人脉圈', icon: Users },
  { path: '/timeline', label: '动态', icon: Activity },
  { path: '/site', label: '官网', icon: Globe },
  { path: '/forum', label: '论坛', icon: MessageSquare },
];

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden max-w-md mx-auto shadow-2xl relative">
      <main className="flex-1 overflow-y-auto pb-16 relative bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <NeteaseMusicWidget />
      <FloatingActionButtons />

      <nav className="absolute bottom-0 w-full h-16 bg-white/90 backdrop-blur-md border-t border-gray-100 flex items-center justify-around z-50 safe-area-bottom">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors',
                isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
              )
            }
          >
            <item.icon className="w-6 h-6" strokeWidth={2} />
            <span className="text-[10px]">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
