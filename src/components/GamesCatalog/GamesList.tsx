import GameCard from './GameCard';
import React from 'react';
import '../../styles/GamesCatalog/games-list.css';

interface GamesListProps {
   data: any;
}

export default function GamesList({ data }: GamesListProps) {
   return (
      <div className="games-catalog-content">
         {data?.length > 0 && (
            <>
               {data.map((element: any, index: number) => {
                  return <GameCard gameId={element.id} key={index} />;
               })}
            </>
         )}

         {data.length === 0 && (
            <>
               <h1 className="no-data-message">404</h1>
               <h1 className="no-data-message">No data Found :(</h1>
            </>
         )}
      </div>
   );
}
