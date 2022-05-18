import { IoMdGlobe } from 'react-icons/io';
import { BsCalendar } from 'react-icons/bs';
import { GiEmptyHourglass } from 'react-icons/gi';

import '../../../styles/GameStats/game-badge-section.css';

interface GameBadgesSectionProps {
   game: any;
}

export default function GameBadgesSection({ game }: GameBadgesSectionProps) {
   return (
      <div className="release-date-playtime-section">
         <div className="game-details-website-badge">
            <h3>{game.released ? game.released : 'Not released yet'}</h3>
            <BsCalendar size={20} />
         </div>
         <div className="game-details-website-badge">
            <h4>
               average playtime: <span style={{ fontWeight: 'bold' }}>{game.playtime} hours</span>
            </h4>
            <GiEmptyHourglass size={20} />
         </div>
         <div className="game-details-website-badge">
            <h4>
               <a href={game.website}>Website</a>
            </h4>
            <IoMdGlobe size={20} />
         </div>
      </div>
   );
}
