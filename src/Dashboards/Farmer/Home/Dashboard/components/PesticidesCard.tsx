import React from 'react';
import { ShoppingBag } from 'lucide-react';

type PesticideStatus = 'done' | 'half' | 'started';

interface Pesticide {
  name: string;
  status: PesticideStatus;
}

interface PesticidesCardProps {
  pesticides: Pesticide[];
}

const getStatusColor = (status: PesticideStatus) => {
  switch (status) {
    case 'done':
      return 'bg-green-500';
    case 'half':
      return 'bg-yellow-500';
    case 'started':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export const PesticidesCard: React.FC<PesticidesCardProps> = ({ pesticides }) => {
  return (
    <div 
      className="glass p-6 rounded-xl"
      onClick={() => console.log('Pesticides card clicked')}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="h-5 w-5 text-purple-500" />
          <h2 className="text-lg font-semibold text-gray-900">Pesticides</h2>
        </div>
      </div>
      <div className="space-y-3">
        {pesticides.map((pesticide, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">{pesticide.name}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(pesticide.status)}`}>
              {pesticide.status.charAt(0).toUpperCase() + pesticide.status.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};