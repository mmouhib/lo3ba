import '../../../styles/GameStats/game-platforms.css';

interface GamePlatformsProps {
   game: any;
}

export default function GamePlatforms({ game }: GamePlatformsProps) {
   return (
      <div className="game-platforms-component">
         <h1 className="game-description-headers">Platforms</h1>
         {game.platforms.map((element: any, index: any) => {
            return (
               <span key={index} className="game-platforms-platform-name">
                  {element.platform.name},{' '}
               </span>
            );
         })}
      </div>
   );
}
