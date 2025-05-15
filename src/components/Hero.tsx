import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { searchGames, Game } from '../services/gameApi';
import GameResults from './GameResults';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearch = async () => {
    if (searchQuery.trim().length > 0) {
      setLoading(true);
      try {
        const results = await searchGames(searchQuery);
        setGames(results);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Search when user presses Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Gaming Adventure</h1>
        <p>Explore thousands of games across all platforms and genres</p>
      </div>

      <div className="search-container">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
          onKeyDown={handleKeyDown}
        />

        <div className="categories">
          <div className="category-tag">Action</div>
          <div className="category-tag">Adventure</div>
          <div className="category-tag">RPG</div>
          <div className="category-tag">Strategy</div>
          <div className="category-tag">Simulation</div>
          <div className="category-tag">Sports</div>
        </div>
      </div>

      {loading ? (
        <div className="loading">Searching games...</div>
      ) : (
        games.length > 0 && <GameResults games={games} />
      )}
    </section>
  );
};

export default Hero;
