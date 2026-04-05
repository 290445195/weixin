import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ActionButtons from './components/ActionButtons';
import IntroSection from './components/IntroSection';
import MediaMatrix from './components/MediaMatrix';
import BlogList from './components/BlogList';

export default function Home() {
  return (
    <div className="bg-white min-h-full pb-6 shadow-inner">
      <ProfileHeader />
      <ActionButtons />
      <IntroSection />
      <MediaMatrix />
      <BlogList />
      
      <div className="mt-8 text-center text-xs text-gray-400 pb-4">
        提供技术支持 © 智能名片综合平台
      </div>
    </div>
  );
}
