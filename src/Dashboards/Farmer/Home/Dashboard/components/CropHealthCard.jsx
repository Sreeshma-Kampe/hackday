import { Bug } from 'lucide-react';

export const CropHealthCard = () => {
  return (
    <div
      className="glass p-6 rounded-xl"
      onClick={() => console.log('Crop health card clicked')}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Bug className="h-5 w-5 text-green-500" />
          <h2 className="text-lg font-semibold text-gray-900">Crop Health (Disease-Detection)</h2>
        </div>
      </div>
      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium text-green-700">All Crops Healthy</span>
        </div>
        <p className="mt-2 text-sm text-green-600">
          No diseases detected in your crops. Keep monitoring regularly.
        </p>
      </div>
    </div>
  );
};