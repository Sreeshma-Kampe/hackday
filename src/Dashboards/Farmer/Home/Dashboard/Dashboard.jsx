import React, { useState } from 'react';
import { Header } from './components/Header';
import { PesticidesCard } from './components/PesticidesCard';
import { CropHealthCard } from './components/CropHealthCard';
import { CropYieldCard } from './components/CropYieldCard';
import { DocumentsCard } from './components/DocumentsCard';
import { MarketPricesCard } from './components/MarketPricesCard';

function Dashboard({ onNavigate }) {
  const [pesticides] = useState([
    { name: 'Neem Oil', status: 'done' },
    { name: 'Pyrethrin', status: 'half' },
    { name: 'Copper Fungicide', status: 'started' },
  ]);

  const [crops] = useState([
    { name: 'Corn', acreage: 3.5 },
    { name: 'Rice', acreage: 2.8 },
    { name: 'Maize', acreage: 2.2 },
    { name: 'Pulses', acreage: 2.5 },
    { name: 'Jower', acreage: 1.5 },
  ]);

  const [documents] = useState([
    { name: 'Land Deed', uploaded: true },
    { name: 'Tax Documents', uploaded: true },
    { name: 'Lease Agreement', uploaded: false },
  ]);

  const [marketPrices] = useState([
    { crop: 'Wheat', location: 'Central Market', price: 2400, quantity: '100 kg' },
    { crop: 'Rice', location: 'East Market', price: 3200, quantity: '100 kg' },
    { crop: 'Corn', location: 'West Market', price: 1800, quantity: '100 kg' },
  ]);
    
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="glass p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome Back</h2>
        <p className="text-gray-700">Select an option from the menu to get started</p>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div onClick={() => onNavigate('pesticides')} className="cursor-pointer">
              <PesticidesCard pesticides={pesticides} />
            </div>
            <div onClick={() => onNavigate('disease')} className="cursor-pointer">
              <CropHealthCard />
            </div>
            <div onClick={() => onNavigate('crops')} className="cursor-pointer">
              <CropYieldCard crops={crops} />
            </div>
            <div onClick={() => onNavigate('documents')} className="cursor-pointer">
              <DocumentsCard documents={documents} />
            </div>
            
              <MarketPricesCard marketPrices={marketPrices} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;