import React from 'react';
import { Upload, Calendar, Truck, CreditCard } from 'lucide-react';

const SellCrops = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6">Sell Your Crops</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Upload crop images</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Crop Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity (Quintals)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Expected Price (₹/Quintal)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Selling Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-green-700">
                <Calendar className="w-4 h-4 mr-2" />
                Flexible scheduling
              </li>
              <li className="flex items-center text-sm text-green-700">
                <Truck className="w-4 h-4 mr-2" />
                Transportation support
              </li>
              <li className="flex items-center text-sm text-green-700">
                <CreditCard className="w-4 h-4 mr-2" />
                Secure payments
              </li>
            </ul>
          </div>
          
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            List Crop for Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellCrops;