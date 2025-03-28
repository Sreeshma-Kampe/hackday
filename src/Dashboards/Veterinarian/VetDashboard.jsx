import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Search, Bell, HelpCircle, LayoutGrid, Cog as Cow, Calendar, Video, LogOut, Clock } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Livestock from './pages/LiveStock';
import Appointments from './pages/Appointments';
import VideoConsult from './pages/VideoConsult';
import Availability from './pages/Availability';

function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "bg-gray-100" : "";

  return (
    <div className="w-64 border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xl font-semibold">FarmVet Connect</span>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-lg">r</span>
        </div>
        <div>
          <div className="font-medium">ramachandra</div>
          <div className="text-sm text-gray-500">Vet</div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-sm text-gray-500 mb-2">MAIN MENU</div>
        <Link
          to="/vet/dashboard"
          className={`flex items-center gap-3 w-full p-2 rounded hover:bg-gray-100 ${isActive('/vet/dashboard')}`}
        >
          <LayoutGrid size={20} />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/vet/livestock"
          className={`flex items-center gap-3 w-full p-2 rounded hover:bg-gray-100 ${isActive('/vet/livestock')}`}
        >
          <Cow size={20} />
          <span>Livestock</span>
        </Link>
        <Link to="/vet/availability" className={`flex items-center gap-3 w-full p-2 rounded hover:bg-gray-100 ${isActive('/vet/availability')}`}>
          <Clock size={20} />
          <span>Availability</span>
        </Link>
        <Link
          to="/vet/appointments"
          className={`flex items-center gap-3 w-full p-2 rounded hover:bg-gray-100 ${isActive('/vet/appointments')}`}
        >
          <Calendar size={20} />
          <span>Appointments</span>
        </Link>
        <Link
          to="/vet/video-consult"
          className={`flex items-center gap-3 w-full p-2 rounded hover:bg-gray-100 ${isActive('/vet/video-consult')}`}
        >
          <Video size={20} />
          <span>Video Consult</span>
        </Link>
      </div>

      <div className="mt-8">
        <div className="text-sm text-gray-500 mb-2">SETTINGS</div>
        <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-gray-100">
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
          placeholder="Search appointments..."
          className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-[300px]"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">1</span>
        </button>
        <HelpCircle size={20} />
      </div>
    </div>
  );
}

function VetDashboard() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 p-8">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="livestock" element={<Livestock />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="availability" element={<Availability />} />
          <Route path="video-consult" element={<VideoConsult />} />
        </Routes>
      </div>
    </div>
  );
}

export default VetDashboard;