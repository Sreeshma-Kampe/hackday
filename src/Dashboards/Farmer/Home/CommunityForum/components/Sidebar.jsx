import { Calendar, TrendingUp, Tag } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden lg:block glass p-6 rounded-xl m-5">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">🔖 Categories</h3>
          <select className="w-full p-2 border rounded-lg">
            <option>All Categories</option>
            <option>Crop Management</option>
            <option>Soil Health</option>
            <option>Pest Control</option>
            <option>Equipment</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">
            <Calendar className="inline h-5 w-5 mr-2" />
            Sort by Date
          </h3>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
              Latest
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
              Oldest
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">
            <TrendingUp className="inline h-5 w-5 mr-2" />
            Trending Topics
          </h3>
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-green-600" />
            <span className="ml-2 text-sm">Show trending first</span>
          </label>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">
            <Tag className="inline h-5 w-5 mr-2" />
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Organic', 'Irrigation', 'Seeds', 'Market'].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;