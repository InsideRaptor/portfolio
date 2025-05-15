import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
      </main>
      <BackToTop />
    </div>
  );
};

export default App;
