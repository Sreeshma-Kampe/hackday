import React from 'react';
import { AlertTriangle} from 'lucide-react';

const initialSuggestions = [
  {
    id: 1,
    diseaseName: 'Powdery Mildew',
    urgency: 'medium',
    cropName: 'Tomato',
    landArea: '2 acres',
    pesticideName: 'Sulfur',
    pesticideQuantity: '1.5L',
  },
  {
    id: 2,
    diseaseName: 'Root Rot',
    urgency: 'serious',
    cropName: 'Cotton',
    landArea: '4 acres',
    pesticideName: 'Metalaxyl',
    pesticideQuantity: '2L',
  },
];

function Suggestions() {
  const [suggestions, setSuggestions] = React.useState(initialSuggestions);

  const getUrgencyStyles = (urgency) => {
    switch (urgency) {
      case 'low':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'serious':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleRemove = (id) => {
    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Warning Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              AI-based suggestions are not accurate. If you face any challenges, please consider
              expert advice.
            </p>
          </div>
        </div>
      </div>

      {/* Suggestions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="glass rounded-xl"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-green-600 underline">
                  {suggestion.diseaseName}
                </h3>
                {/* Urgency Label with Background Color */}
                <span className={`text-xs font-medium px-2 py-1 rounded-md ${getUrgencyStyles(suggestion.urgency)}`}>
                  {suggestion.urgency.charAt(0).toUpperCase() + suggestion.urgency.slice(1)}
                </span>
              </div>

              {/* Separator Line */}
              <div className="mt-2 mb-4 border-b border-gray-300"></div>

              <dl className="space-y-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Crop Name</dt>
                  <dd className="text-sm text-gray-900">{suggestion.cropName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Land Area</dt>
                  <dd className="text-sm text-gray-900">{suggestion.landArea}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Pesticide Name</dt>
                  <dd className="text-sm text-gray-900">{suggestion.pesticideName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Pesticide Quantity</dt>
                  <dd className="text-sm text-gray-900">{suggestion.pesticideQuantity}</dd>
                </div>
              </dl>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => handleRemove(suggestion.id)}
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Remove
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Add to List
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
