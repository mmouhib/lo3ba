import '../../../styles/GameStats/game-dlcs.css';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface GameSeriesProps {
   gameId: number;
   series: boolean;
}

/**
 * if the 'series' props is true, then the component will serve the game series data
 * if not, it will serve the DLCs and additional content of the game
 */

export default function RelatedGamesAndDlcs({ gameId, series }: GameSeriesProps) {
   const [games, setGames] = useState<any>();
   const [loaded, setLoaded] = useState<boolean>(false);

   useEffect(() => {
      if (series) {
         axios
            .get(`https://api.rawg.io/api/games/${gameId}/game-series?key=${process.env.REACT_APP_API_KEY}`)
            .then((response: AxiosResponse): void => {
               setGames(response.data.results);
               setLoaded(true);
            });
         return;
      }
      axios
         .get(`https://api.rawg.io/api/games/${gameId}/additions?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setGames(response.data.results);
            setLoaded(true);
         });
   }, []);

   return (
      <div className="game-series-component">
         {loaded && games.length > 0 && (
            <>
               <h1 className="game-description-headers">
                  {series ? 'Other related games' : "DLC's and editions"}
               </h1>
               {games.map((element: any, index: any) => {
                  return (
                     <span key={index} className="game-series-name">
                        <a href={`./${element.id}`}>{element.name}</a>
                     </span>
                  );
               })}
            </>
         )}
      </div>
   );
}
