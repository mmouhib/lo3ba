import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../styles/game-page.css';

export default function GamePage(): JSX.Element {
   const [game, setGame] = useState<any>({});
   const [color, setColor] = useState<boolean>(true);

   useEffect(() => {
      axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`).then((response: AxiosResponse): void => {
         setGame(response.data.results[2]);
      });
   }, []);

   return (
      // style={{ backgroundImage: `url('${game.background_image}')` }}
      <div className="game-page-component">
         {/*<div className="content">*/}
         {/*   <h1>{game.name}</h1>*/}
         {/*   <p>{game.rating_top}</p>*/}
         {/*</div>*/}
         <div className="image-container">
            <img src={game.background_image} alt={game.name} />
         </div>
      </div>
   );

   // return (
   //    <pg
   //       onClick={() => {
   //          console.log(game);
   //       }}>
   //       games
   //    </p>
   // );
}
