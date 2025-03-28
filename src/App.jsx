import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing/landing';
import Authentication from './Landing/Login/App';
import FarmerHome from './Dashboards/Farmer/Home/FarmerHome';
import FarmerCattle from './Dashboards/Farmer/Cattle/Cattle';
import VetDashboard from './Dashboards/Veterinarian/VetDashboard';
import DairyFarmDashboard from './Dashboards/DairyFarm/DairyDashboards';




function App() {
  return (
    <Router>
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />


      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/home" element={<FarmerHome />} />
        <Route path="/cattle" element={<FarmerCattle />} />
        <Route path="/vet/*" element={<VetDashboard />} />
        <Route path="/dairy/*" element={< DairyFarmDashboard/>} />

      </Routes>
    </Router>
  );
}

export default App