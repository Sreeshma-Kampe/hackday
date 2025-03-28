import React from 'react';
import { Plus, Search, Filter, User, Phone, MapPin, Calendar, TrendingUp } from 'lucide-react';

function Farmers() {
  const farmers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      location: "North Village",
      joinDate: "Jan 2022",
      avgProduction: "120L/day",
      status: "active"
    },
    {
      id: 2,
      name: "Priya Singh",
      phone: "+91 98765 43211",
      location: "East Village",
      joinDate: "Mar 2022",
      avgProduction: "85L/day",
      status: "active"
    },
    {
      id: 3,
      name: "Amit Patel",
      phone: "+91 98765 43212",
      location: "South Village",
      joinDate: "Jun 2022",
      avgProduction: "150L/day",
      status: "active"
    },
    {
      id: 4,
      name: "Sunita Devi",
      phone: "+91 98765 43213",
      location: "West Village",
      joinDate: "Sep 2022",
      avgProduction: "95L/day",
      status: "inactive"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Farmers</h1>
          <p className="text-gray-600">Manage farmer profiles and track their contributions</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} />
          Add Farmer
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search farmers..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            Filter
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <User className="text-blue-600" size={20} />
            <span className="text-sm text-gray-600">Total Farmers</span>
          </div>
          <div className="text-2xl font-semibold">145</div>
          <div className="text-sm text-green-600">↑ 12 this month</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-green-600" size={20} />
            <span className="text-sm text-gray-600">Avg. Production</span>
          </div>
          <div className="text-2xl font-semibold">112L</div>
          <div className="text-sm text-gray-600">per farmer/day</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-purple-600" size={20} />
            <span className="text-sm text-gray-600">Villages Covered</span>
          </div>
          <div className="text-2xl font-semibold">12</div>
          <div className="text-sm text-green-600">↑ 2 this quarter</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="text-orange-600" size={20} />
            <span className="text-sm text-gray-600">Active Since</span>
          </div>
          <div className="text-2xl font-semibold">2.5 yrs</div>
          <div className="text-sm text-gray-600">avg. retention</div>
        </div>
      </div>

      {/* Farmers List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Farmer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Contact</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Location</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Joined</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Avg. Production</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {farmers.map((farmer) => (
              <tr key={farmer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <User className="text-blue-600" size={20} />
                    </div>
                    <div className="font-medium">{farmer.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-400" />
                    {farmer.phone}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    {farmer.location}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gray-400" />
                    {farmer.joinDate}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-green-600" />
                    {farmer.avgProduction}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    farmer.status === 'active' 
                      ? 'bg-green-50 text-green-600' 
                      : 'bg-gray-50 text-gray-600'
                  }`}>
                    {farmer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Farmers;