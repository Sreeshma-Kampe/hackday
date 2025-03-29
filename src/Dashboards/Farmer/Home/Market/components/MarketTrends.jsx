import React from 'react';
import { LineChart, BarChart, PieChart } from 'lucide-react';

const MarketTrends = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Market Trends & Analysis</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <LineChart className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-blue-800">Price Trends</h3>
            <p className="text-sm text-blue-600 mt-1">30-day price movement analysis</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <BarChart className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-semibold text-purple-800">Supply Analysis</h3>
            <p className="text-sm text-purple-600 mt-1">Current market supply levels</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <PieChart className="w-8 h-8 text-orange-600 mb-2" />
            <h3 className="font-semibold text-orange-800">Demand Forecast</h3>
            <p className="text-sm text-orange-600 mt-1">Upcoming demand predictions</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Popular Crops Analysis</h3>
        <div className="space-y-4">
          {['Wheat', 'Rice', 'Corn', 'Soybeans'].map((crop) => (
            <div key={crop} className="flex items-center justify-between p-4 border rounded-lg">
              <span className="font-medium">{crop}</span>
              <div className="flex items-center space-x-4">
                <span className="text-green-600">↑ 2.5%</span>
                <button className="text-blue-600 hover:text-blue-800">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;