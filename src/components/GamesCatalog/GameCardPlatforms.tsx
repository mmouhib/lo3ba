import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../../styles/GamesCatalog/game-card-platforms.css';
import GamePlatformIcon from './GamePlatformIcon';

interface GameCardPlatformsProps {
   gameId: number;
}

export default function GameCardPlatforms(props: GameCardPlatformsProps) {
   const [platforms, setPlatforms] = useState<any>();
   const [loaded, setLoaded] = useState<boolean>(false);

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games/${props.gameId}?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setPlatforms(response.data.parent_platforms);
            setLoaded(true);
         });
   }, []);

   return (
      <>
         {loaded && (
            <div className="game-card-platforms-component">
               {platforms.map((element: any, index: number) => {
                  return <GamePlatformIcon platformName={element.platform.name.toString()} key={index} />;
               })}
            </div>
         )}
      </>
   );
}
