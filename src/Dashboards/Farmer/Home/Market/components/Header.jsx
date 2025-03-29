import React, { useState } from 'react';
import { BarChart3, Box, MapPin, Bell, Building2 } from 'lucide-react';

const Header = ({ onNavChange }) => {
  const [activeSection, setActiveSection] = useState('market-prices');

  const navItems = [
    { id: 'market-prices', icon: <BarChart3 className="w-5 h-5" />, label: 'Market Prices' },
    { id: 'sell-crops', icon: <Box className="w-5 h-5" />, label: 'Sell Crops' },
    { id: 'market-trends', icon: <MapPin className="w-5 h-5" />, label: 'Market Trends & Analysis' },
    { id: 'wholesale-buyers', icon: <Building2 className="w-5 h-5" />, label: 'Nearby Wholesale Buyers' },
    { id: 'government-schemes', icon: <Bell className="w-5 h-5" />, label: 'Government Schemes' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    onNavChange(sectionId);
  };

  return (
    <div className="p-8">
      {/* Gradient Balls */}
      <div className="gradient-ball from-green-300 to-green-500 w-96 h-96 left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-ball from-blue-300 to-blue-500 w-96 h-96 left-[65%] top-3/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-ball from-yellow-300 to-orange-500 w-48 h-48 right-[5%] top-[15%]" />
      <div className="gradient-ball from-pink-300 to-red-500 w-56 h-56 left-[25%] bottom-[5%]" />
      <div className="gradient-ball from-teal-300 to-cyan-500 w-72 h-72 right-[8%] top-[8%]" />
      
      <header>
        {/* Content */}
        <div className="relative z-10">
          <div className="items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Kisan Market Dashboard</h1>
            <p className="mt-1 text-sm text-gray-800">
              Real-time crop prices across India to help farmers maximize their earnings
            </p>
          </div>
        </div>

        <nav className="flex space-x-8 glass p-6 rounded-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                activeSection === item.id
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Header;
