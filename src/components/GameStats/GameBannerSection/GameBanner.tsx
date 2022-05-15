import Reviews from './Reviews';
import GameStores from './GameStores';
import React from 'react';
import '../../../styles/GameStats/game-banner.css';

interface GamePageBannerProps {
   game: any;
}

export default function GameBanner({ game }: GamePageBannerProps) {
   return (
      <div className="game-page-banner-component">
         <div className="game-page-banner">
            <img
               className="banner-image"
               style={
                  {
                     // boxShadow: `0 0 40px 0 #0ff`,
                  }
               }
               src={
                  game.background_image_additional ? game.background_image_additional : game.background_image
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
      </div>
   );
}
