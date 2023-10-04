const checkGameID = (gameID: string) => {
  const unsafeCharacters = gameID.replaceAll(/[a-z0-9_]/g, '');
  if (unsafeCharacters.length > 0) {
    throw new Error('Invalid characters in game ID.');
  }
  return gameID;
};

export interface Game {
  title: string,
  description: string,
  players: string,
  difficulty: string,
  duration: string,
  imageUrl: string,
}

export interface PageGame extends Game {
  id: string
}

const pageGames: PageGame[] = [
  {
    id: 'game',
    title: 'game',
    description: 'Description of Game 1...',
    players: '2-4',
    difficulty: 'Medium',
    duration: '45 minutes',
    imageUrl: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Uno_image1600w.jpg',
  }
];
pageGames.map(({id}) => checkGameID(id));

export const SupportedGames = pageGames;
