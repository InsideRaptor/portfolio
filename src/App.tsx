import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        {/* More sections can be added below as needed */}
      </main>
    </div>
  );
};

export default App;