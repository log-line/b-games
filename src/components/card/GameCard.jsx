import React from 'react';

const GameCard = ({ game }) => {
    return (
        <div className="lg:flex bg-white rounded-lg p-4 shadow-lg p-5">
            {/* On large screens, display image on the left */}
            <div className="lg:w-1/3 lg:pr-4">
                <img
                    src={game.imageUrl}
                    alt={game.title}
                    className="w-full h-auto rounded-lg"
                />
            </div>

            {/* On large screens, display game details on the right */}
            <div className="lg:w-2/3 hidden sm:block">
                <h2 className="text-2xl font-semibold mb-2">{game.title}</h2>
                <p className="text-gray-600 mb-2">{game.description}</p>
                <p className="text-gray-700 mb-2">
                    Players: {game.players} | Difficulty: {game.difficulty}
                </p>
                <p className="text-gray-700">Duration: {game.duration}</p>
            </div>

            {/* On small screens, center-align the title */}
            <h2 className="text-2xl font-semibold sm:hidden">
                {game.title}
            </h2>
        </div>
    );
};

export default GameCard;
