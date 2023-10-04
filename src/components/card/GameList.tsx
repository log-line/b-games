import React, {useState} from 'react';
import {PageGame} from "@/games";
import {GameCard} from "@/components/card/GameCard";

const GameListPage: React.FC<{ games: PageGame[] }> = ({games}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-90p h-screen overflow-auto">
        <div className="p-4 rounded-lg shadow-md">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search for a game..."
            className="bg-gray-200 w-full p-2 border rounded-md mb-4 placeholder-gray-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          {/* Game Cards */}
          {filteredGames.map((game, index) =>
            (<div key={`wrapper_${index}`} className="pb-3">
              <GameCard key={index} game={game}/>
            </div>)
          )}
        </div>
      </div>
    </div>
  );
};

export default GameListPage;
