import { Settings, LogOut, Sprout } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Sprout className="h-6 w-6 text-green-600" />
              <span className="text-xl font-semibold text-gray-900">FarmDash</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors">
                Dashboard
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors">
                Reports
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors">
                Settings
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <div className="hidden md:flex flex-col">
                <span className="text-sm font-medium text-gray-900">John Farmer</span>
                <span className="text-xs text-gray-500">john@farm.com</span>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Settings className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <LogOut className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};