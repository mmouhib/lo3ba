import { useEffect, useState } from 'react';
import '../../styles/GameStats/game-stores.css';
import axios, { AxiosResponse } from 'axios';

interface GameStoresProps {
   gameId: number;
}

export default function GameStores(props: GameStoresProps) {
   const [results, setResults] = useState<any>();

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setResults(response.data.results[15]);
         });
   }, []);

   return (
      <div className="game-stores">
         <div className="store-button">Steam</div>
         <div className="store-button">Steam</div>
         <div className="store-button">Steam</div>
         <div className="store-button">Steam</div>
         <div className="store-button">Steam</div>
         <div className="store-button">Steam</div>
         <div className="store-button">Steam</div>
      </div>
   );
}
