import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../styles/game-page.css';

export default function GamePage(): JSX.Element {
   const [game, setGame] = useState<any>({});

   useEffect(() => {
      axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`).then((response: AxiosResponse): void => {
         setGame(response.data.results[1]);
      });
   }, []);

   return (
      <div className="game-page-component">
         <div className="image-container">
            <img src={game.background_image} alt={game.name} />
         </div>
         <div className="content">
            <h1>{game.name}</h1>
         </div>
      </div>
   );
}
