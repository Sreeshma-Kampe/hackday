import React, { useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import MarketTable from './components/MarketTable';
import SellCrops from './components/SellCrops';
import MarketTrends from './components/MarketTrends';
import WholesaleBuyers from './components/WholesaleBuyers';
import GovernmentSchemes from './components/GovernmentSchemes';

function Market() {
  const [activeSection, setActiveSection] = useState('market-prices');
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    cropType: '',
    sortBy: ''
  });

  const renderContent = () => {
    switch (activeSection) {
      case 'market-prices':
        return (
          <>
            <Filters onFilterChange={setFilters} />
            <MarketTable filters={filters} />
          </>
        );
      case 'sell-crops':
        return <SellCrops />;
      case 'market-trends':
        return <MarketTrends />;
      case 'wholesale-buyers':
        return <WholesaleBuyers />;
      case 'government-schemes':
        return <GovernmentSchemes />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header onNavChange={setActiveSection} />
      <main className="glass p-6 rounded-xl">
        <div className="space-y-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default Market;