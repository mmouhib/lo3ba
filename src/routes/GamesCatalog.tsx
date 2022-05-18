import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import GameCard from '../components/GamesCatalog/GameCard';
import '../styles/Routes/games-catalog.css';
import LoadingScreen from '../components/LoadingScreen';

export default function GamesCatalog(): any {
   const [loaded, setLoaded] = useState<boolean>(false);
   const [data, setData] = useState<any>();

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setData(response.data.results);
            setLoaded(true);
         });
   }, []);

   return (
      <div className="games-catalog-component">
         <LoadingScreen loading={!loaded} />
         <div className="games-catalog-content">
            {data && loaded && (
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
