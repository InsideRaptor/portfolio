import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // We're not implementing search functionality yet as requested
  };
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Gaming Adventure</h1>
        <p>Explore thousands of games across all platforms and genres</p>
      </div>
      
      <div className="search-container">
        <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        
        <div className="categories">
          <div className="category-tag">Action</div>
          <div className="category-tag">Adventure</div>
          <div className="category-tag">RPG</div>
          <div className="category-tag">Strategy</div>
          <div className="category-tag">Simulation</div>
          <div className="category-tag">Sports</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;