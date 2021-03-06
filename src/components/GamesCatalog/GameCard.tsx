import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../../styles/GamesCatalog/game-card.css';
import GameCardPlatforms from './GameCardPlatforms';
import gamePlaceholder from '../../assets/gameBannerPlaceholder.jpg';

interface GameCardProps {
   gameId: number;
}

export default function GameCard(props: GameCardProps) {
   const [game, setGame] = useState<any>();
   const [loaded, setLoaded] = useState<boolean>(false);

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games/${props.gameId}?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setGame(response.data);
            setLoaded(true);
         });
   }, [props.gameId]);

   return (
      <>
         {loaded && (
            <div className="game-card-component">
               <a href={`./game/${props.gameId}`}>
                  <div className="game-card-image-section">
                     <img
                        src={game.background_image ? game.background_image : gamePlaceholder}
                        alt="x"
                        className="game-card-image"
                     />
                  </div>
                  <div className="game-card-content">
                     <h1 className="game-card-title">{game.name}</h1>
                     <GameCardPlatforms gameId={props.gameId} />
                  </div>
               </a>
            </div>
         )}
      </>
   );
}
