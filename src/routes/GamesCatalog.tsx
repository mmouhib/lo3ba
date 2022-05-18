import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import GameCard from '../components/GamesCatalog/GameCard';
import '../styles/Routes/games-catalog.css';

export default function GamesCatalog(): any {
   const [data, setData] = useState<any>();

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setData(response.data.results);
         });
   }, []);

   return (
      <div className="games-catalog-component">
         <div className="games-catalog-content">
            {data && (
               <>
                  {data.map((element: any, index: number) => {
                     return <GameCard gameId={element.id} key={index} />;
                  })}
               </>
            )}
         </div>
      </div>
   );
}
