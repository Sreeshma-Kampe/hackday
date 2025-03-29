import React, { useState, useMemo } from 'react';
import {
  Search,
  Settings,
  Bell,
  Lock,
  Clock,
  Home,
  Edit,
  Download,
  RefreshCw,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Key,
  Shield,
  BellRing,
  Globe,
  CreditCard,
  HelpCircle,
  LogOut
} from 'lucide-react';

const ProfilePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeNav, setActiveNav] = useState('dashboard');

  // Static data for each navigation section
  const staticData = {
    dashboard: {
      title: 'Dashboard Overview',
      stats: [
        { label: 'Total Orders', value: '156' },
        { label: 'Active Listings', value: '23' },
        { label: 'Revenue (MTD)', value: '₹45,670' },
        { label: 'Profile Views', value: '1,234' }
      ],
      recentActivity: [
        { date: '2024-03-01', action: 'Listed new product: Organic Tomatoes' },
        { date: '2024-02-28', action: 'Completed order #12345' },
        { date: '2024-02-27', action: 'Updated profile information' }
      ]
    },
    settings: {
      preferences: [
        { id: 'emailNotif', label: 'Email Notifications', enabled: true },
        { id: 'smsNotif', label: 'SMS Notifications', enabled: false },
        { id: 'marketingEmails', label: 'Marketing Emails', enabled: true },
        { id: 'language', label: 'Language', value: 'English' },
        { id: 'timezone', label: 'Timezone', value: 'Asia/Kolkata' }
      ]
    },
    notifications: {
      items: [
        { id: 1, type: 'order', message: 'New order received for Organic Vegetables', time: '5 minutes ago' },
        { id: 2, type: 'system', message: 'System maintenance scheduled for tonight', time: '2 hours ago' },
        { id: 3, type: 'message', message: 'New message from customer support', time: '1 day ago' }
      ]
    },
    security: {
      lastPasswordChange: '2024-01-15',
      twoFactorEnabled: true,
      loginHistory: [
        { date: '2024-03-01', device: 'iPhone 13', location: 'Pune, India' },
        { date: '2024-02-28', device: 'Chrome on Windows', location: 'Mumbai, India' }
      ]
    },
    activity: {
      logs: [
        { timestamp: '2024-03-01T10:30:00', action: 'Profile updated', details: 'Changed profile picture' },
        { timestamp: '2024-02-29T15:45:00', action: 'New listing added', details: 'Added 5kg Organic Rice' },
        { timestamp: '2024-02-28T09:15:00', action: 'Order fulfilled', details: 'Order #12345 marked as shipped' }
      ]
    }
  };

  const navItems = [
    { id: 'dashboard', icon: <Home className="w-5 h-5" />, label: 'Dashboard' },
    { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
    { id: 'notifications', icon: <Bell className="w-5 h-5" />, label: 'Notifications' },
    { id: 'security', icon: <Lock className="w-5 h-5" />, label: 'Privacy & Security' },
    { id: 'activity', icon: <Clock className="w-5 h-5" />, label: 'Activity Log' },
  ];

  const userProfile = {
    name: 'Rajesh Kumar',
    username: '@rajesh.farmer',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    address: 'Pune, Maharashtra',
    accountType: 'Farmer',
    joinedDate: '2023-01-15',
    lastActive: '2024-02-29T10:30:00',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  };

  // Filter and search functionality
  const filteredData = useMemo(() => {
    let data = { ...staticData[activeNav] };
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      
      // Filter based on the active navigation section
      switch (activeNav) {
        case 'dashboard':
          data.recentActivity = data.recentActivity.filter(
            item => item.action.toLowerCase().includes(query)
          );
          break;
        case 'notifications':
          data.items = data.items.filter(
            item => item.message.toLowerCase().includes(query)
          );
          break;
        case 'activity':
          data.logs = data.logs.filter(
            item => item.action.toLowerCase().includes(query) || 
                   item.details.toLowerCase().includes(query)
          );
          break;
      }
    }

    if (activeCategory !== 'all') {
      // Apply category filters based on the active navigation section
      switch (activeNav) {
        case 'notifications':
          data.items = data.items.filter(item => item.type === activeCategory);
          break;
        case 'activity':
          data.logs = data.logs.filter(log => log.action.toLowerCase().includes(activeCategory));
          break;
      }
    }

    return data;
  }, [activeNav, searchQuery, activeCategory]);

  // Render content based on active navigation
  const renderContent = () => {
    switch (activeNav) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stats */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {filteredData.stats.map((stat, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50">
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="text-xl font-bold mt-1">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {filteredData.recentActivity.map((activity, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50">
                    <div className="text-sm font-medium">{activity.action}</div>
                    <div className="text-sm text-gray-600">
                      {new Date(activity.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Notifications</h3>
            <div className="space-y-4">
              {filteredData.items.map((notification) => (
                <div 
                  key={notification.id} 
                  className="p-4 rounded-lg bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium">{notification.message}</div>
                      <div className="text-sm text-gray-600">
                        {notification.time}
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      notification.type === 'order' ? 'bg-green-100 text-green-800' :
                      notification.type === 'system' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {notification.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Security Overview</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="text-sm font-medium">Last Password Change</div>
                  <div className="text-sm text-gray-600">
                    {new Date(filteredData.lastPasswordChange).toLocaleDateString()}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="text-sm font-medium">Two-Factor Authentication</div>
                  <div className="text-sm text-green-600">
                    {filteredData.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Login History</h3>
              <div className="space-y-4">
                {filteredData.loginHistory.map((login, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50">
                    <div className="text-sm font-medium">{login.device}</div>
                    <div className="text-sm text-gray-600">
                      {login.location} • {new Date(login.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'activity':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Activity Log</h3>
            <div className="space-y-4">
              {filteredData.logs.map((log, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium">{log.action}</div>
                      <div className="text-sm text-gray-600">
                        {log.details}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header >
        <div >
          <div className="p-6">
          <div className="relative z-10">
                <div className=" mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
                <p className="mt-1 text-sm text-gray-600">
                  Manage all your details in one place effortlessly
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="glass p-6 rounded-xl flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    activeNav === item.id
                      ? 'bg-green-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-4">
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search settings, preferences, or details..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-900 border-gray-300 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="px-4 py-2 rounded-lg bg-white text-gray-900 border-gray-300 border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="order">Orders</option>
                <option value="system">System</option>
                <option value="message">Messages</option>
              </select>

              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 border transition-colors">
                  <RefreshCw className="w-4 h-4" />
                  <span>Refresh</span>
                </button>
                <button className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 border transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </main>
    </div>
  );
};

export default ProfilePage;