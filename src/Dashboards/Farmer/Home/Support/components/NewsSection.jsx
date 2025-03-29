import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, CloudRain } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      title: 'New Livestock Health Guidelines',
      date: 'March 15, 2024',
      category: 'Animal Health',
      color: 'bg-red-500',
      icon: <ShieldCheck className="w-4 h-4 text-white" />,
    },
    {
      title: 'Sustainable Dairy Farming Practices',
      date: 'March 10, 2024',
      category: 'Best Practices',
      color: 'bg-blue-500',
      icon: <Leaf className="w-4 h-4 text-white" />,
    },
    {
      title: 'Weather Alert: Protecting Your Livestock',
      date: 'March 5, 2024',
      category: 'Weather Advisory',
      color: 'bg-yellow-500',
      icon: <CloudRain className="w-4 h-4 text-white" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-amber-50 rounded-2xl p-6 mb-12 border-l-4 border-amber-400"
      >
        <div className="flex items-center">
          <div>
            <h3 className="text-lg font-bold text-amber-800">
              Weather Alert: Heavy rainfall expected next week
            </h3>
            <p className="text-amber-600 mt-1">
              Take necessary precautions for your livestock and crops
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass p-6 rounded-xl cursor-pointer relative hover:shadow-lg transition-all"
            onClick={() => alert(`You clicked on ${item.title}`)}
          >
            <h3 className="text-xl font-bold text-gray-900 mt-10 group-hover:text-green-600 transition-colors">
              {item.title}
            </h3>
            <span className={`absolute top-4 right-4 flex items-center gap-2 text-sm font-medium text-white px-3 py-1 rounded-full ${item.color}`}>
              {item.icon} {item.category}
            </span>
            <p className="text-gray-500 text-sm mt-6">{item.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
