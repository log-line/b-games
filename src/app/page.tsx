'use client'
import React from 'react';
import GameListPage from "@/components/card/GameList";

const BoardGamesPage = () => {
  const games = [
    {
      title: 'Game 1',
      description: 'Description of Game 1...',
      players: '2-4',
      difficulty: 'Medium',
      duration: '45 minutes',
      imageUrl: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Uno_image1600w.jpg',
    },
    {
      title: 'Game 2',
      description: 'Description of Game 1...',
      players: '2-4',
      difficulty: 'Medium',
      duration: '45 minutes',
      imageUrl: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Uno_image1600w.jpg',
    },
    {
      title: 'Game 3',
      description: 'Description of Game 1...',
      players: '2-4',
      difficulty: 'Medium',
      duration: '45 minutes',
      imageUrl: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Uno_image1600w.jpg',
    } ,
    {
      title: 'Game 4',
      description: 'Description of Game 1...',
      players: '2-4',
      difficulty: 'Medium',
      duration: '45 minutes',
      imageUrl: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Uno_image1600w.jpg',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-3">
      <div className="lg:w-4/5 sm:w-full">
        <GameListPage games={games} />
      </div>
    </div>
  );
};

export default BoardGamesPage;
