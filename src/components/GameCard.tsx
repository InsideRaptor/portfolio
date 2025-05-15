import React from 'react';
import { Game } from '../services/gameApi';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="game-card">
      <div className="game-image">
        {game.background_image ? (
          <img src={game.background_image} alt={game.name} />
        ) : (
          <div className="placeholder-image">No Image Available</div>
        )}
      </div>

      <div className="game-info">
        <h3>{game.name}</h3>

        <div className="game-details">
          {game.released && (
            <span className="game-release">Released: {new Date(game.released).getFullYear()}</span>
          )}
          {game.metacritic && <span className="game-rating">Score: {game.metacritic}</span>}
        </div>

        {game.genres && (
          <div className="game-genres">
            {game.genres.slice(0, 3).map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>
        )}

        <div className="game-platforms">
          {game.platforms?.slice(0, 4).map((p) => (
            <span key={p.platform.id} className="platform-tag">
              {p.platform.name}
            </span>
          ))}
        </div>

        <div className="game-actions">
          <a
            href={`https://rawg.io/games/${game.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="view-details-btn"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
