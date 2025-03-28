import React from 'react';
import { Store, Search, Filter } from 'lucide-react';

interface MarketPrice {
  crop: string;
  location: string;
  price: number;
  quantity: string;
}

interface MarketPricesCardProps {
  marketPrices: MarketPrice[];
}

export const MarketPricesCard: React.FC<MarketPricesCardProps> = ({ marketPrices }) => {
  return (
    <div className="md:col-span-2 glass p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Store className="h-5 w-5 text-indigo-500" />
          <h2 className="text-lg font-semibold text-gray-900">Daily Mandi (Market) - Latest Updates</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search crops..."
              className="pl-8 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            <Filter className="h-4 w-4 text-gray-500" />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹)</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {marketPrices.map((price, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{price.crop}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{price.location}</td>
                <td className="px-4 py-3 text-sm text-gray-900">₹{price.price}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{price.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};