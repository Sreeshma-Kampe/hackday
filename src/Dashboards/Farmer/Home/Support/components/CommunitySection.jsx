import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Tractor, Wheat, Leaf } from 'lucide-react';

const CommunitySection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const communities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Local Farmers Network',
      description: 'Connect with farmers in your region',
    },
    {
      icon: <Tractor className="w-6 h-6" />,
      title: 'Equipment Exchange',
      description: 'Share and trade farming equipment',
    },
    {
      icon: <Wheat className="w-6 h-6" />,
      title: 'Crop Management',
      description: 'Best practices for crop cultivation',
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Sustainable Farming',
      description: 'Eco-friendly farming techniques',
    },
  ];

  const filteredCommunities = communities.filter((community) =>
    community.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center w-full mb-12">
  <div className="relative flex-1 w-full max-w-2xl">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
    <input
      type="text"
      placeholder="Search farming topics and discussions"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full pl-10 pr-4 py-3 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent glass"
    />
  </div>
</div>


      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8"
      >
        {filteredCommunities.length > 0 ? (
          filteredCommunities.map((community, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden glass rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-green-100 rounded-lg text-green-600 group-hover:scale-110 transition-transform">
                    {community.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {community.title}
                    </h3>
                    <p className="text-gray-600">{community.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No matching communities found.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default CommunitySection;
