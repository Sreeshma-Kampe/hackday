import React, { useState } from 'react';
import { Search, Plus, Scan, AlertTriangle, X } from 'lucide-react';
import RunningList from './components/RunningList';
import Suggestions from './components/Suggestions';
import NewPestForm from './components/NewPestForm';

function Pesticides() {
  const [activeTab, setActiveTab] = useState('running');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isNewPestModalOpen, setIsNewPestModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen p-8">
      {/* Gradient Balls */}
      <div className="gradient-ball from-green-300 to-green-500 w-96 h-96 left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-ball from-blue-300 to-blue-500 w-96 h-96 left-[65%] top-3/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="gradient-ball from-yellow-300 to-orange-500 w-48 h-48 right-[5%] top-[15%]" />
      <div className="gradient-ball from-pink-300 to-red-500 w-56 h-56 left-[25%] bottom-[5%]" />
      <div className="gradient-ball from-teal-300 to-cyan-500 w-72 h-72 right-[8%] top-[8%]" />
      {/* Content */}
      
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Pesticides</h1>
        <div className="glass p-6 rounded-xl">
          <nav className="glass pb-2 rounded-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className=" space-x-8">
                <button
                  onClick={() => setActiveTab('running')}
                  className={`py-4 px-1 relative ${activeTab === 'running'
                    ? 'text-green-600 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  Running
                  {activeTab === 'running' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('suggestions')}
                  className={`py-4 px-1 relative ${activeTab === 'suggestions'
                    ? 'text-green-600 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  Suggestions
                  {activeTab === 'suggestions' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600" />
                  )}
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Filters and Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by crop name, pesticide, or disease name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="done">Done</option>
                <option value="half-done">Half-done</option>
                <option value="started">Started</option>
              </select>
              <button
                onClick={() => setIsNewPestModalOpen(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Plus size={20} className="mr-2" />
                New Pest
              </button>
            </div>

            {/* Content */}
            {activeTab === 'running' ? (
              <RunningList searchQuery={searchQuery} statusFilter={statusFilter} />
            ) : (
              <Suggestions />
            )}
          </main>

          
        </div>
        {/* New Pest Modal */}
        {isNewPestModalOpen && (
            <NewPestForm onClose={() => setIsNewPestModalOpen(false)} />
          )}
    </div>
  );
}

export default Pesticides;