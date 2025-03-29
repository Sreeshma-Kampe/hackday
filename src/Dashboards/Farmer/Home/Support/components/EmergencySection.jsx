import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Stethoscope } from 'lucide-react';

const EmergencySection = () => {
  const contacts = [
    {
      title: 'Veterinary Emergency',
      description: '24/7 Animal Healthcare Support',
      email: 'vet@farmhelp.com',
      phone: '+1 800-123-4567',
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: 'Disease Control',
      description: 'Livestock Disease Prevention',
      email: 'disease@farmhelp.com',
      phone: '+1 800-456-7890',
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: 'Animal Welfare',
      description: 'Immediate Animal Care Support',
      email: 'welfare@farmhelp.com',
      phone: '+1 800-999-9999',
      icon: <MessageCircle className="w-6 h-6" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-red-50 rounded-2xl p-6 mb-12 bg-red-50 border-l-4 border-red-400"
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
            <Stethoscope className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-800">
              24/7 Emergency Veterinary Support
            </h3>
            <p className="mt-1 text-red-600">
              For immediate assistance with livestock health emergencies, contact our veterinary team.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-3 gap-8"
      >
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500" />
            <div className="p-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                {contact.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-600 mb-4">{contact.description}</p>
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {contact.phone}
                </p>
                <p className="flex items-center text-gray-600">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {contact.email}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default EmergencySection;