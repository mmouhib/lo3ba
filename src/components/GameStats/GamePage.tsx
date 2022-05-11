import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../../styles/GameStats/game-page.css';
import Reviews from './Reviews';

export default function GamePage(): JSX.Element {
   const [loaded, setLoaded] = useState<boolean>(false);
   const [game, setGame] = useState<any>({});

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setGame(response.data.results[16]);
            setLoaded(true);
         });
   }, []);

   return (
      <div className="game-page-component">
         {loaded && (
            <>
               <div className="image-container">
                  <img src={game.background_image} alt={game.name} />
               </div>
               <div className="content">
                  <div className="banner">
                     <Reviews
                        greatReviewsCount={game.ratings[0].count}
                        goodReviewsCount={game.ratings[1].count}
                        mehReviewsCount={game.ratings[2].count}
                        badReviewsCount={game.ratings[3].count}
                     />
                  </div>
               </div>
            </>
         )}
      </div>
   );
}
