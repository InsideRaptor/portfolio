const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  released: string;
  genres: { id: number; name: string }[];
  platforms: { platform: { id: number; name: string } }[];
  stores?: { store: { id: number; name: string; domain?: string } }[];
}

export const searchGames = async (searchTerm: string): Promise<Game[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${RAWG_API_KEY}&search=${searchTerm}&page_size=20`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

export const getPopularGames = async (): Promise<Game[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${RAWG_API_KEY}&ordering=-rating&page_size=12`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching popular games:', error);
    return [];
  }
};
