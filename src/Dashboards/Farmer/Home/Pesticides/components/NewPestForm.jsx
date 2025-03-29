import React, { useState } from 'react';
import { X } from 'lucide-react';

function NewPestForm({ onClose }) {
  const [formData, setFormData] = useState({
    cropName: '',
    landArea: '',
    diseaseName: '',
    pesticideName: '',
    pesticideQuantity: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose} // Close when clicking on the background
    >
      <div
        className="glass p-6 rounded-2xl w-full max-w-md mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Add New Pest Record</h2>
          <button onClick={onClose} className="hover:bg-gray-100 rounded-full p-2 transition-colors">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {['cropName', 'landArea', 'diseaseName', 'pesticideName', 'pesticideQuantity'].map((field, index) => (
            <div key={index}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
          ))}

          <div className="mt-6 flex justify-between space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg shadow-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg shadow-md text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition"
            >
              Add Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPestForm;
