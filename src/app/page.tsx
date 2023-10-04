'use client'
import React from 'react';
import GameListPage from "@/components/card/GameList";
import {SupportedGames} from "@/games";

const BoardGamesPage = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-3">
      <div className="lg:w-4/5 sm:w-full">
        <GameListPage games={SupportedGames}/>
      </div>
    </div>
  );
};

export default BoardGamesPage;
