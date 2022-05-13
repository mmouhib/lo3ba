import { useEffect, useState } from 'react';
import '../../styles/GameStats/game-stores.css';
import axios, { AxiosResponse } from 'axios';

import StoreButton from './StoreButton';

interface GameStoresProps {
   gameId: number;
}

interface IStoresDescription {
   game_id: number;
   id: number;
   store_id: number;
   url: URL;
}

export default function GameStores(props: GameStoresProps) {
   const [stores, setStores] = useState<IStoresDescription[]>();
   const [loaded, setLoaded] = useState<boolean>(false);

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games/${props.gameId}/stores?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setStores(response.data.results);
            setLoaded(true);
         });
   }, []);

   return (
      <div className="game-stores">
         {loaded && (
            <>
               {stores?.map((element, index) => {
                  return (
                     <StoreButton key={index} storeId={element.store_id} storePage={element.url.toString()} />
                  );
               })}
            </>
         )}
      </div>
   );
}
