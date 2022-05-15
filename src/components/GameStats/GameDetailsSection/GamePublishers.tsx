import '../../../styles/GameStats/game-publishers.css';

interface GamePlatformsProps {
   game: any;
}

export default function GamePublishers({ game }: GamePlatformsProps) {
   return (
      <div className="game-developers-component">
         <h1 className="game-description-headers">Publishers</h1>
         {game.publishers.map((element: any, index: any) => {
            return (
               <span key={index} className="game-developers-platform-name">
                  {element.name},{' '}
               </span>
            );
         })}
      </div>
   );
}
