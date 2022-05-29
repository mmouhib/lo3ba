import React, { useEffect, useState } from 'react';
import '../styles/FavouritesPage/favourites-page.css';
import GameCard from '../components/GamesCatalog/GameCard';

function allStorage() {
   let values = [];
   let keys = Object.keys(localStorage);
   let i = keys.length;

   while (i--) {
      values.push(localStorage.getItem(keys[i]));
   }
   return values;
}

export default function FavouritesPage() {
   return (
      <div className="favourites-page-component">
         <div className="game-page-image-container">
            <img
               className="fav-page-background"
               src="https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
            />
         </div>
         <div className="fav-page-content">
            {allStorage().length == 0 && (
               <div className="fav-no-data-found">
                  Favourites List is empty, please add games to your favourites in order to consult them here
                  😔
               </div>
            )}
            {allStorage().map((element: any, index: any) => {
               return <GameCard gameId={element} />;
            })}
         </div>
      </div>
   );
}
