import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Search, Bell, HelpCircle, LayoutGrid, Droplets, Users, TrendingUp, FileSpreadsheet, Calendar, Settings, LogOut } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import MilkProduction from './pages/MilkProduction';
import Farmers from './pages/Farmers';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import CalendarComponent from './pages/Calender';


function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "bg-blue-50 text-blue-600" : "";
  };

  return (
    <div className="w-64 border-r border-gray-200 p-4 bg-white">
      <div className="flex items-center gap-2 mb-8">
        <Droplets className="text-blue-600" size={24} />
        <span className="text-xl font-semibold">DairyFlow</span>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
          <span className="text-lg text-blue-600">SM</span>
        </div>
        <div>
          <div className="font-medium">Shree Milk Farm</div>
          <div className="text-sm text-gray-500">Premium Producer</div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-sm text-gray-500 mb-2">MANAGEMENT</div>
        <Link to="/dairy/dashboard" className={`flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive('/dairy/dashboard')}`}>
          <LayoutGrid size={20} />
          <span>Dashboard</span>
        </Link>

        <Link to="/dairy/milkproduction" className={`flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive('/dairy/milkproduction')}`}>
          <Droplets size={20} />
          <span>Milk Production</span>
        </Link>
        <Link to="/dairy/farmers" className={`flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive('/dairy/farmers')}`}>
          <Users size={20} />
          <span>Farmers</span>
        </Link>
        <Link to="/dairy/analytics" className={`flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive('/dairy/analytics')}`}>
          <TrendingUp size={20} />
          <span>Analytics</span>
        </Link>
        <Link to="/dairy/reports" className={`flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive('/dairy/reports')}`}>
          <FileSpreadsheet size={20} />
          <span>Reports</span>
        </Link>
        <Link to="/dairy/calendar" className={`flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive('/dairy/calendar')}`}>
          <Calendar size={20} />
          <span>Calendar</span>
        </Link>
      </div>

      <div className="mt-8">
        <div className="text-sm text-gray-500 mb-2">SETTINGS</div>
        <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600">
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
        </button>
        <button>
          <HelpCircle size={20} />
        </button>
      </div>
    </div>
  );
}

function DairyFarmDashboard() {
  return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 p-8 overflow-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="milkproduction" element={<MilkProduction />} />
            <Route path="farmers" element={<Farmers />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="reports" element={<Reports />} />
            <Route path="calendar" element={<CalendarComponent />} />
          </Routes>
        </div>
      </div>
  );
}

export default DairyFarmDashboard;