import React from 'react';
import { Globe, Video, Code, Calendar, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const resources = [
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: 'Knowledge Base',
    description: 'In-depth guides to expand your knowledge.',
    bg: 'bg-blue-500',
  },
  {
    icon: <Video className="w-8 h-8 text-white" />,
    title: 'Video Tutorials',
    description: 'Step-by-step video lessons from experts.',
    bg: 'bg-green-500',
  },
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: 'Developer Documentation',
    description: 'Comprehensive API & integration guides.',
    bg: 'bg-purple-500',
  },
  {
    icon: <Calendar className="w-8 h-8 text-white" />,
    title: 'Webinars & Workshops',
    description: 'Live sessions to learn from industry leaders.',
    bg: 'bg-red-500',
  },
];

const ResourcesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* <h2 className="text-3xl font-bold text-center text-black mb-10">
        Explore Our Resources
      </h2> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl shadow-lg ${resource.bg} text-white transition-transform hover:scale-105`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 flex items-center justify-center">{resource.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-sm">{resource.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
