import { CircularProgressbar } from 'react-circular-progressbar';
import '../../../styles/GameStats/game-details.css';
import ResizableParagraph from './ResizableParagraph';
import GamePlatforms from './GamePlatforms';
import GameBadgesSection from './GameBadgesSection';
import GameGenres from './GameGenres';
import InfoSection from './InfoSection';

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
               <a href={game.metacritic_url}>
                  <CircularProgressbar
                     value={game.metacritic}
                     text={`${game.metacritic}%`}
                     strokeWidth={6.5}
                  />
                  <p className="details-percentage-circle-decription">Metacritics score</p>
               </a>
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
               <InfoSection data={game.developers} title="Developers" />
               <InfoSection data={game.publishers} title="Publishers" />
            </div>
         </div>
      </div>
   );
}
