import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onSearch,
  onKeyDown,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for games, genres, platforms..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button className="search-icon" onClick={onSearch} aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
