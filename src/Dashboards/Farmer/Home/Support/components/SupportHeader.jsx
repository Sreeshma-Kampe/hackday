import React from 'react';
import { motion } from 'framer-motion';
import { Wheat } from 'lucide-react';

const SupportHeader = () => {
  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <div className="flex items-center justify-center mb-6">
          <Wheat className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          Farmer Support Center
        </h1>
        <p className="text-lg text-green-700 max-w-2xl mx-auto px-4">
          Expert guidance for your farm and livestock management needs
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
    </div>
  );
};

export default SupportHeader;