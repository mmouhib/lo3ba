import '../../styles/GameStats/Reviews.css';
import { BiHappyAlt } from 'react-icons/bi';
import { RiStarSmileLine } from 'react-icons/ri';
import { CgSmileNone } from 'react-icons/cg';
import { FaRegSadTear } from 'react-icons/fa';

interface IGameRatings {
   id: number;
   title: string;
   count: number;
   percent: number;
}

interface ReviewsProps {
   greatReviewsCount: number;
   goodReviewsCount: number;
   mehReviewsCount: number;
   badReviewsCount: number;
}

export default function Reviews(props: ReviewsProps) {
   return (
      <div className="reviews-component">
         <div className="review-type">
            <RiStarSmileLine size={20} />
            <span className="rating-count">{props.greatReviewsCount}</span>
            <span className="review-title">great</span>
         </div>
         <div className="review-type">
            <BiHappyAlt size={20} />
            <span className="rating-count">{props.goodReviewsCount}</span>
            <span className="review-title">good</span>
         </div>
         <div className="review-type">
            <CgSmileNone size={20} />
            <span className="rating-count">{props.mehReviewsCount}</span>
            <span className="review-title">meh</span>
         </div>
         <div className="review-type">
            <FaRegSadTear size={20} />
            <span className="rating-count">{props.badReviewsCount}</span>
            <span className="review-title">skip</span>
         </div>
      </div>
   );
}
