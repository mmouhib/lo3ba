import '../../styles/GameStats/Reviews.css';
import { BiHappyAlt } from 'react-icons/bi';
import { RiStarSmileLine } from 'react-icons/ri';
import { CgSmileNone } from 'react-icons/cg';
import { FaRegSadTear } from 'react-icons/fa';

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
            <RiStarSmileLine size={22} />
            <span>{props.greatReviewsCount}</span>
            <span>great</span>
         </div>
         <div className="review-type">
            <BiHappyAlt size={22} />
            <span>{props.goodReviewsCount}</span>
            <span>good</span>
         </div>
         <div className="review-type">
            <CgSmileNone size={22} />
            <span>{props.mehReviewsCount}</span>
            <span>meh</span>
         </div>
         <div className="review-type">
            <FaRegSadTear size={22} />
            <span>{props.badReviewsCount}</span>
            <span>skip</span>
         </div>
      </div>
   );
}
