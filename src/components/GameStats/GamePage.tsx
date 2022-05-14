import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../../styles/GameStats/game-page.css';
import Reviews from './Reviews';
import GameStores from './GameStores';
import { useParams } from 'react-router-dom';

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
                  <div className="game-page-banner">
                     <img
                        className="banner-image"
                        src={
                           game.background_image_additional
                              ? game.background_image_additional
                              : game.background_image
                        }
                        alt="game avatar"
                     />
                     <h1 className="banner-game-title">{game.name}</h1>
                     <Reviews
                        greatReviewsCount={game.ratings[0].count}
                        goodReviewsCount={game.ratings[1].count}
                        mehReviewsCount={game.ratings[2].count}
                        badReviewsCount={game.ratings[3].count}
                     />
                     <GameStores gameId={game.id} />
                  </div>
                  <div className="banner-details">
                     <div>{game.description}</div>
                  </div>
               </div>
            </>
         )}
      </div>
   );
}
