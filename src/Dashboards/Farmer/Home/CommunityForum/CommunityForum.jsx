import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function CommunityForum() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
      <div className="flex">
        {selectedCategory && <Sidebar />}
        <MainContent 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>
  );
}

export default CommunityForum;