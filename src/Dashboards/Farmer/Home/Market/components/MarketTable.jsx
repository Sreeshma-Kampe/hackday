import React from 'react';
import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';

const dummyData = [
  {
    id: '1',
    name: 'Wheat',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800',
    location: 'Pune, Maharashtra',
    quantity: 500,
    pricePerQuintal: 2200,
    lastUpdated: '2024-02-28T10:30:00',
    priceTrend: 'up',
    trendPercentage: 2.5,
    type: 'grains'
  },
  {
    id: '2',
    name: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800',
    location: 'Karnal, Haryana',
    quantity: 750,
    pricePerQuintal: 3100,
    lastUpdated: '2024-02-28T11:15:00',
    priceTrend: 'down',
    trendPercentage: 1.8,
    type: 'grains'
  },
  {
    id: '3',
    name: 'Tomatoes',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800',
    location: 'Nashik, Maharashtra',
    quantity: 300,
    pricePerQuintal: 1800,
    lastUpdated: '2024-02-28T09:45:00',
    priceTrend: 'up',
    trendPercentage: 5.2,
    type: 'vegetables'
  },
  {
    id: '4',
    name: 'Mangoes',
    imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=800',
    location: 'Rajkot, Gujarat',
    quantity: 450,
    pricePerQuintal: 4500,
    lastUpdated: '2024-02-28T12:00:00',
    priceTrend: 'up',
    trendPercentage: 3.7,
    type: 'fruits'
  },
  {
    id: '5',
    name: 'Moong Dal',
    imageUrl: 'https://images.unsplash.com/photo-1585996746349-3b640c02e5c7?w=800',
    location: 'Jaipur, Rajasthan',
    quantity: 600,
    pricePerQuintal: 8900,
    lastUpdated: '2024-02-28T10:15:00',
    priceTrend: 'down',
    trendPercentage: 1.2,
    type: 'pulses'
  }
];


const MarketTable = ({ filters }) => {
  const filteredData = React.useMemo(() => {
    return dummyData.filter(crop => {
      const matchesSearch = !filters.search || 
        crop.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        crop.location.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesLocation = !filters.location || 
        crop.location.toLowerCase().includes(filters.location.toLowerCase());
      
      const matchesCropType = !filters.cropType || 
        crop.type === filters.cropType;

      return matchesSearch && matchesLocation && matchesCropType;
    }).sort((a, b) => {
      if (filters.sortBy === 'low-to-high') {
        return a.pricePerQuintal - b.pricePerQuintal;
      } else if (filters.sortBy === 'high-to-low') {
        return b.pricePerQuintal - a.pricePerQuintal;
      }
      return 0;
    });
  }, [filters]);

  return (
    <div className="glass p-6 rounded-xl">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Crop
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity (Quintals)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price/Quintal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trend
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((crop) => (
              <tr key={crop.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={crop.imageUrl}
                        alt={crop.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {crop.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {crop.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {crop.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">₹{crop.pricePerQuintal}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`flex items-center text-sm ${
                    crop.priceTrend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {crop.priceTrend === 'up' ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {crop.trendPercentage}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(crop.lastUpdated).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900 flex items-center justify-end">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketTable;