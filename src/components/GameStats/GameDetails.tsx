import { CircularProgressbar } from 'react-circular-progressbar';
import '../../styles/GameStats/game-details.css';
import ResizableParagraph from './ResizableParagraph';

interface GamePageBannerProps {
   game: any;
}
export default function GameDetails({ game }: GamePageBannerProps) {
   return (
      <div className="game-page-details">
         <h1 className="title">{game.name}</h1>
         <div className="details-percentage-circle">
            <CircularProgressbar value={game.metacritic} text={`${game.metacritic}%`} strokeWidth={6.5} />
         </div>
         <div>
            <ResizableParagraph desc={game.description_raw} />
         </div>
      </div>
   );
}
