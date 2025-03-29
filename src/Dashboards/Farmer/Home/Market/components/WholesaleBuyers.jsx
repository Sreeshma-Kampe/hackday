import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const WholesaleBuyers = () => {
  const buyers = [
    {
      id: 1,
      name: 'Agro Traders Ltd.',
      location: 'Mumbai, Maharashtra',
      crops: ['Wheat', 'Rice', 'Pulses'],
      contact: '+91 98765 43210',
      email: 'contact@agrotraders.com',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Punjab Wholesale Market',
      location: 'Ludhiana, Punjab',
      crops: ['Wheat', 'Cotton', 'Corn'],
      contact: '+91 98765 43211',
      email: 'info@punjabmarket.com',
      rating: 4.8
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Nearby Wholesale Buyers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {buyers.map((buyer) => (
            <div key={buyer.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{buyer.name}</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  ★ {buyer.rating}
                </span>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {buyer.location}
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {buyer.contact}
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  {buyer.email}
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Accepting Crops:</h4>
                <div className="mt-1 flex flex-wrap gap-2">
                  {buyer.crops.map((crop) => (
                    <span key={crop} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="mt-4 w-full flex items-center justify-center text-green-600 hover:text-green-700 font-medium">
                Contact Buyer
                <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WholesaleBuyers;