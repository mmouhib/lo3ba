import Reviews from './Reviews';
import GameStores from './GameStores';
import React, { useEffect, useState } from 'react';
import '../../../styles/GameStats/game-banner.css';
import { AiFillDelete } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';

interface GamePageBannerProps {
   game: any;
}

function allStorage() {
   let values = [];
   let keys = Object.keys(localStorage);
   let i = keys.length;

   while (i--) {
      values.push(localStorage.getItem(keys[i]));
   }
   return values;
}

export default function GameBanner({ game }: GamePageBannerProps) {
   const [isFavourite, setIsFavourite] = useState<boolean>(false);

   useEffect(() => {
      localStorage.getItem(game.id) == null ? setIsFavourite(false) : setIsFavourite(true);
   }, [game.id]);

   return (
      <div className="game-page-banner-component">
         <div className="game-page-banner">
            <img
               className="banner-image"
               src={
                  game.background_image_additional ? game.background_image_additional : game.background_image
               }
               alt="game avatar"
            />
            <h1 className="banner-game-title">{game.name}</h1>
            <div
               className="add-to-favourites"
               onClick={() => {
                  isFavourite
                     ? localStorage.removeItem(game.id.toString())
                     : localStorage.setItem(game.id.toString(), game.id.toString());
                  setIsFavourite(!isFavourite);
               }}>
               {isFavourite ? <AiFillDelete size={20} /> : <BiAddToQueue size={20} />}
               {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            </div>
            <Reviews game={game} />
            <GameStores gameId={game.id} />
         </div>
      </div>
   );
}
