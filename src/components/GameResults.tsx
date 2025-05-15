import React from 'react';
import { Game } from '../services/gameApi';
import GameCard from './GameCard';

interface GameResultsProps {
  games: Game[];
}

const GameResults: React.FC<GameResultsProps> = ({ games }) => {
  return (
    <div className="game-results">
      <h2>Search Results</h2>
      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameResults;
