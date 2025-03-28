import React from 'react';
import { Sprout } from 'lucide-react';

interface Crop {
  name: string;
  acreage: number;
}

interface CropYieldCardProps {
  crops: Crop[];
}

export const CropYieldCard: React.FC<CropYieldCardProps> = ({ crops }) => {
  return (
    <div 
      className="glass p-6 rounded-xl"
      onClick={() => console.log('Crop yield card clicked')}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Sprout className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-900">My Crops</h2>
        </div>
      </div>
      <div className="space-y-3">
        {crops.map((crop, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">{crop.name}</span>
            <span className="text-sm text-gray-500">{crop.acreage} acres</span>
          </div>
        ))}
      </div>
    </div>
  );
};