import '../../../styles/GameStats/Reviews.css';
import { RiStarSmileLine } from 'react-icons/ri';
import { CgSmileNone } from 'react-icons/cg';
import { FaRegSadTear } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';

interface ReviewsProps {
   game: any;
}

export default function Reviews({ game }: ReviewsProps) {
   return (
      <div className="reviews-component">
         {game.ratings && (
            <>
               {game.ratings[0] && (
                  <div className="review-type">
                     <RiStarSmileLine size={20} />
                     <span className="rating-count">{game.ratings[0].count}</span>
                     <span className="review-title">great</span>
                  </div>
               )}
               {game.ratings[1] && (
                  <div className="review-type">
                     <FaRegThumbsUp size={20} />
                     <span className="rating-count">{game.ratings[1].count}</span>
                     <span className="review-title">great</span>
                  </div>
               )}
               {game.ratings[2] && (
                  <div className="review-type">
                     <CgSmileNone size={20} />
                     <span className="rating-count">{game.ratings[2].count}</span>
                     <span className="review-title">great</span>
                  </div>
               )}
               {game.ratings[3] && (
                  <div className="review-type">
                     <FaRegSadTear size={20} />
                     <span className="rating-count">{game.ratings[3].count}</span>
                     <span className="review-title">great</span>
                  </div>
               )}
            </>
         )}
      </div>
   );
}
