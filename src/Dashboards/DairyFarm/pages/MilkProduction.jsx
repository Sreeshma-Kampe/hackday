import React, { useState } from 'react';
import { Plus, Filter, Search, Calendar, Clock, User, Droplets, Scale , TrendingUp} from 'lucide-react';

function MilkProduction() {
  const [selectedDate, setSelectedDate] = useState('2024-03-15');

  const collections = [
    {
      id: 1,
      shift: "Morning",
      time: "06:30 AM",
      farmer: "Rajesh Kumar",
      quantity: "120L",
      fat: "4.2%",
      snf: "8.5%",
      price: "₹48/L",
      total: "₹5,760"
    },
    {
      id: 2,
      shift: "Morning",
      time: "07:00 AM",
      farmer: "Priya Singh",
      quantity: "85L",
      fat: "4.0%",
      snf: "8.4%",
      price: "₹47/L",
      total: "₹3,995"
    },
    {
      id: 3,
      shift: "Evening",
      time: "05:30 PM",
      farmer: "Amit Patel",
      quantity: "150L",
      fat: "4.1%",
      snf: "8.6%",
      price: "₹47.5/L",
      total: "₹7,125"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Milk Production</h1>
          <p className="text-gray-600">Track and manage daily milk collections</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} />
          Add Collection
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by farmer name..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Calendar size={20} />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="outline-none"
              />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Collections Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Time</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Farmer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Fat %</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">SNF %</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Rate</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {collections.map((collection) => (
              <tr key={collection.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />
                    <div>
                      <div className="font-medium">{collection.time}</div>
                      <div className="text-sm text-gray-500">{collection.shift}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-400" />
                    {collection.farmer}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Droplets size={16} className="text-blue-600" />
                    {collection.quantity}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Scale size={16} className="text-gray-400" />
                    {collection.fat}
                  </div>
                </td>
                <td className="px-6 py-4">{collection.snf}</td>
                <td className="px-6 py-4">{collection.price}</td>
                <td className="px-6 py-4 font-medium">{collection.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="text-blue-600" size={20} />
            <span className="text-sm text-gray-600">Total Collection</span>
          </div>
          <div className="text-2xl font-semibold">355L</div>
          <div className="text-sm text-green-600">↑ 15L from yesterday</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="text-purple-600" size={20} />
            <span className="text-sm text-gray-600">Average Fat</span>
          </div>
          <div className="text-2xl font-semibold">4.1%</div>
          <div className="text-sm text-gray-600">Target: 3.5%</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="text-orange-600" size={20} />
            <span className="text-sm text-gray-600">Average SNF</span>
          </div>
          <div className="text-2xl font-semibold">8.5%</div>
          <div className="text-sm text-gray-600">Target: 8.2%</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-green-600" size={20} />
            <span className="text-sm text-gray-600">Total Amount</span>
          </div>
          <div className="text-2xl font-semibold">₹16,880</div>
          <div className="text-sm text-green-600">↑ ₹1,200 from yesterday</div>
        </div>
      </div>
    </div>
  );
}

export default MilkProduction;