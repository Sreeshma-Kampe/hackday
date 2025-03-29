import React from 'react';
import { FileText, AlertCircle, Download, ChevronRight } from 'lucide-react';

const GovernmentSchemes = () => {
  const schemes = [
    {
      id: 1,
      name: 'PM-KISAN',
      description: 'Direct income support of ₹6000 per year to farmer families',
      deadline: '2024-12-31',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Crop Insurance Scheme',
      description: 'Protection against crop failure due to natural calamities',
      deadline: '2024-06-30',
      status: 'Active'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Government Schemes & Announcements</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" />
            <div>
              <h3 className="font-medium text-yellow-800">Important Update</h3>
              <p className="text-sm text-yellow-700 mt-1">
                New MSP rates for Rabi crops have been announced. Check eligibility and apply before the deadline.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <FileText className="w-5 h-5 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">{scheme.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{scheme.description}</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <span className="text-xs text-gray-500">
                        Deadline: {new Date(scheme.deadline).toLocaleDateString()}
                      </span>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">
                        {scheme.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-700">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;