import React, { useState } from 'react';
import { Edit, Droplets, Scale, TrendingUp, Users, Check, X, Calendar } from 'lucide-react';

function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Green Meadows Dairy',
    type: 'Dairy Farm',
    totalCows: '150',
    avgProduction: '2500L/day',
    about:
      'Green Meadows Dairy is a modern dairy farm focused on producing high-quality milk through sustainable farming practices. Our farm maintains strict quality standards and implements the latest technology in dairy farming.',
  });

  const [tempData, setTempData] = useState(formData);

  const recentRecords = [
    { date: '2024-03-15', quantity: 2600, quality: 'Grade A', farmer: 'John Smith' },
    { date: '2024-03-14', quantity: 2450, quality: 'Grade A', farmer: 'Mike Brown' },
    { date: '2024-03-13', quantity: 2550, quality: 'Grade A', farmer: 'Sarah Johnson' },
  ];

  const handleEdit = () => {
    setTempData(formData);
    setIsEditing(true);
  };

  const handleSave = () => {
    setFormData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-semibold">Dairy Farm Dashboard</h1>
        {isEditing ? (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
            >
              <Check size={16} />
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
          >
            <Edit size={16} />
            Edit Details
          </button>
        )}
      </div>
      <p className="text-gray-600 mb-8">
        Monitor milk production, manage farmers, and track quality metrics
      </p>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="text-blue-500" size={20} />
            <span className="text-sm text-gray-600">Today's Production</span>
          </div>
          <div className="text-2xl font-semibold">2,600 L</div>
          <div className="text-sm text-green-600">↑ 5% from yesterday</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="text-blue-500" size={20} />
            <span className="text-sm text-gray-600">Average Quality</span>
          </div>
          <div className="text-2xl font-semibold">Grade A</div>
          <div className="text-sm text-gray-600">Last 7 days</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-blue-500" size={20} />
            <span className="text-sm text-gray-600">Monthly Revenue</span>
          </div>
          <div className="text-2xl font-semibold">₹8.5L</div>
          <div className="text-sm text-green-600">↑ 8% from last month</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="text-blue-500" size={20} />
            <span className="text-sm text-gray-600">Active Farmers</span>
          </div>
          <div className="text-2xl font-semibold">12</div>
          <div className="text-sm text-gray-600">All regions</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Farm Details */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-6">Farm Details</h2>
          <div className="space-y-4">
            {isEditing ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Farm Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={tempData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Cows
                  </label>
                  <input
                    type="text"
                    name="totalCows"
                    value={tempData.totalCows}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average Production
                  </label>
                  <input
                    type="text"
                    name="avgProduction"
                    value={tempData.avgProduction}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    About
                  </label>
                  <textarea
                    name="about"
                    value={tempData.about}
                    onChange={handleChange}
                    className="w-full h-32 border border-gray-200 rounded-lg p-2"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="font-medium">Farm Name</div>
                  <div className="text-gray-600">{formData.name}</div>
                </div>
                <div>
                  <div className="font-medium">Total Cows</div>
                  <div className="text-gray-600">{formData.totalCows}</div>
                </div>
                <div>
                  <div className="font-medium">Average Production</div>
                  <div className="text-gray-600">{formData.avgProduction}</div>
                </div>
                <div>
                  <div className="font-medium">About</div>
                  <div className="text-gray-600">{formData.about}</div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Recent Records */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Records</h2>
            <button className="text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-4">
            {recentRecords.map((record, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-gray-400" />
                  <div>
                    <div className="font-medium">{record.date}</div>
                    <div className="text-sm text-gray-500">{record.farmer}</div>
                  </div>
                </div>
                <div className="text-right">
                <div className="font-medium">{record.quantity}L</div>
                  <div className="text-sm text-green-600">{record.quality}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;