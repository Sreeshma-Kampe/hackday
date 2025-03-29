import React, { useState } from 'react';
import SupportHeader from './components/SupportHeader';
import NavigationBar from './components/NavigationBar';
import CommunitySection from './components/CommunitySection';
import NewsSection from './components/NewsSection';
import EmergencySection from './components/EmergencySection';
import FAQSection from './components/FAQSection';
import ResourcesSection from './components/ResourcesSection';

function Support() {
  const [activeTab, setActiveTab] = useState('community');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'community':
        return <CommunitySection />;
      case 'news':
        return <NewsSection />;
      case 'emergency':
        return <EmergencySection />;
      case 'faq':
        return <FAQSection />;
      case 'resources':
        return <ResourcesSection />;
      default:
        return <CommunitySection />;
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Support</h1>
      {/* Gradient Balls */}
      <div className="gradient-ball from-green-300 to-green-500 w-96 h-96 left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-ball from-blue-300 to-blue-500 w-96 h-96 left-[65%] top-3/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-ball from-yellow-300 to-orange-500 w-48 h-48 right-[5%] top-[15%]" />
      <div className="gradient-ball from-pink-300 to-red-500 w-56 h-56 left-[25%] bottom-[5%]" />
      <div className="gradient-ball from-teal-300 to-cyan-500 w-72 h-72 right-[8%] top-[8%]" />
      <div className="glass p-6 rounded-xl">
        <div className="">
          <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
}

export default Support;