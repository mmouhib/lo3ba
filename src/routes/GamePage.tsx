import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../styles/GameStats/game-page.css';
import { useParams } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import GameBanner from '../components/GameStats/GameBannerSection/GameBanner';
import GameDetails from '../components/GameStats/GameDetailsSection/GameDetails';

export default function GamePage(): JSX.Element {
   const [loaded, setLoaded] = useState<boolean>(false);
   const [game, setGame] = useState<any>({});

   let { id } = useParams();

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setGame(response.data);
            setLoaded(true);
         });
   }, []);

   return (
      <div className="game-page-component">
         {loaded && (
            <>
               <div className="game-page-image-container">
                  <img className="game-page-background" src={game.background_image} alt={game.name} />
               </div>
               <div className="game-page-content">
                  <GameBanner game={game} />
                  <GameDetails game={game} />
               </div>
            </>
         )}
      </div>
   );
}
