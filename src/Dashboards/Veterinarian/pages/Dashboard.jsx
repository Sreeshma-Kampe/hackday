import React, { useState } from 'react';
import { Edit, Clock, Cog as Cow, Check, X } from 'lucide-react';

function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'ramachandra',
    role: 'Veterinarian',
    experience: '8 years',
    specialty: 'Large Animal Medicine',
    about: 'Dr. Patel is a specialized veterinarian with extensive experience in treating large livestock. With a focus on preventative care and emergency treatment, Dr. Patel has helped numerous farms maintain healthy herds and quickly address health concerns when they arise.'
  });

  const [tempData, setTempData] = useState(formData);

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
    setTempData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-semibold">Veterinarian Dashboard</h1>
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
            Edit Profile
          </button>
        )}
      </div>
      <p className="text-gray-600 mb-8">Manage your appointments, check reviews, and update your availability</p>

      <div className="grid grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-6">Profile</h2>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">r</span>
            </div>
            {isEditing ? (
              <div className="w-full space-y-4">
                <input
                  type="text"
                  name="name"
                  value={tempData.name}
                  onChange={handleChange}
                  className="w-full text-center text-xl font-medium border-b border-gray-200 focus:outline-none focus:border-blue-500 pb-1"
                />
                <input
                  type="text"
                  name="role"
                  value={tempData.role}
                  onChange={handleChange}
                  className="w-full text-center text-gray-500 border-b border-gray-200 focus:outline-none focus:border-blue-500 pb-1"
                />
              </div>
            ) : (
              <>
                <h3 className="text-xl font-medium">{formData.name}</h3>
                <p className="text-gray-500 mb-6">{formData.role}</p>
              </>
            )}
            
            <div className="w-full space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-gray-400" />
                <div className="flex-1">
                  <div className="font-medium">Experience</div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="experience"
                      value={tempData.experience}
                      onChange={handleChange}
                      className="w-full text-gray-500 border-b border-gray-200 focus:outline-none focus:border-blue-500 pb-1"
                    />
                  ) : (
                    <div className="text-gray-500">{formData.experience}</div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Cow size={20} className="text-gray-400" />
                <div className="flex-1">
                  <div className="font-medium">Specialty</div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="specialty"
                      value={tempData.specialty}
                      onChange={handleChange}
                      className="w-full text-gray-500 border-b border-gray-200 focus:outline-none focus:border-blue-500 pb-1"
                    />
                  ) : (
                    <div className="text-gray-500">{formData.specialty}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Card */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-6">About</h2>
          {isEditing ? (
            <textarea
              name="about"
              value={tempData.about}
              onChange={handleChange}
              className="w-full h-32 text-gray-600 border rounded-lg p-2 focus:outline-none focus:border-blue-500 mb-8"
            />
          ) : (
            <p className="text-gray-600 mb-8">{formData.about}</p>
          )}

          <h3 className="font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Updated availability schedule for the upcoming week</p>
              <p className="text-sm text-gray-400">2 hours ago</p>
            </div>
            <div>
              <p className="text-gray-600">Completed a video consultation with Green Meadows Farm</p>
              <p className="text-sm text-gray-400">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;