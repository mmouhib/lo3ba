import '../../../styles/GameStats/game-developers.css';

interface GamePlatformsProps {
   game: any;
}

export default function GameDevelopers({ game }: GamePlatformsProps) {
   return (
      <div className="game-developers-component">
         <h1 className="game-description-headers">Developers</h1>
         {game.developers.map((element: any, index: any) => {
            return (
               <span key={index} className="game-developers-platform-name">
                  {element.name},{' '}
               </span>
            );
         })}
      </div>
   );
}
