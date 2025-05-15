import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Skirrow Raptor</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#browse">Browse</a>
        <a href="#popular">Popular</a>
        <a href="#new">New Releases</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;