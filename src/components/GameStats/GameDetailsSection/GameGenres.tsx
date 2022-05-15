import '../../../styles/GameStats/game-genres.css';

interface GamePlatformsProps {
   game: any;
}

export default function GameGenres({ game }: GamePlatformsProps) {
   return (
      <div className="game-developers-component">
         <h1 className="game-description-headers">Genres</h1>
         {game.genres.map((element: any, index: any) => {
            return (
               <span key={index} className="game-genres-name">
                  {element.name}
               </span>
            );
         })}
      </div>
   );
}
