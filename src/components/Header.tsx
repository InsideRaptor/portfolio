import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <h1>Skirrow Raptor</h1>
      <nav>
        <a href="#home" className="active">Home</a>
        <a href="#browse">Browse</a>
        <a href="#popular">Popular</a>
        <a href="#new">New Releases</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;
