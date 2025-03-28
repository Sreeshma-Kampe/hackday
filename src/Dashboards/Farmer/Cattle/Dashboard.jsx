import React from 'react';

export function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="glass p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to your Cattle Dashboard</h2>
        <p className="text-gray-700">Select an option from the menu to get started</p>
      </div>
    </div>
  );
}