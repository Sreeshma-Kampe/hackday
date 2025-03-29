import React from 'react';
import { motion } from 'framer-motion';

const NavigationBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'community', label: 'Farmer Community' },
    { id: 'news', label: 'Agricultural Updates' },
    { id: 'emergency', label: 'Veterinary Help' },
    { id: 'faq', label: 'Farming Guide' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <nav className="glass pb-2 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <div key={tab.id} className="relative">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-4 text-sm font-medium relative ${
                  activeTab === tab.id
                    ? 'text-green-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-green-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
