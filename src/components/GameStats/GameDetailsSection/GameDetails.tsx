import { CircularProgressbar } from 'react-circular-progressbar';
import '../../../styles/GameStats/game-details.css';
import ResizableParagraph from './ResizableParagraph';
import GamePlatforms from './GamePlatforms';
import GameBadgesSection from './GameBadgesSection';
import GameDevelopers from './GameDevelopers';
import GameGenres from './GameGenres';
import GamePublishers from './GamePublishers';

interface GamePageBannerProps {
   game: any;
}
export default function GameDetails({ game }: GamePageBannerProps) {
   return (
      <div className="game-page-details">
         <div className="title-section">
            <div className="title-release-date-palytime">
               <GameBadgesSection game={game} />
               <h1 className="title">{game.name}</h1>
            </div>
            <div className="details-percentage-circle">
               <CircularProgressbar value={game.metacritic} text={`${game.metacritic}%`} strokeWidth={6.5} />
               <p className="details-percentage-circle-decription">Metacritics score</p>
            </div>
         </div>
         <div>
            <h1 className="game-description-headers">About</h1>
            <ResizableParagraph desc={game.description_raw} />
         </div>
         <div style={{ width: '100%' }}>
            <div className="game-platforms-section">
               <GamePlatforms game={game} />
               <GameGenres game={game} />
            </div>
         </div>
         <div style={{ width: '100%' }}>
            <div className="game-platforms-section">
               <GameDevelopers game={game} />
               <GamePublishers game={game} />
            </div>
         </div>
      </div>
   );
}
