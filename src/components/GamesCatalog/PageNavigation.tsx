import '../../styles/GamesCatalog/page-navigation.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface pageNavigationProps {
   currentPage: number;
   setCurrentPage: (arg: number) => void;
   nextPageExists: boolean;
}

export default function pageNavigation({ currentPage, setCurrentPage, nextPageExists }: pageNavigationProps) {
   return (
      <div className="page-navigation-component">
         {currentPage > 1 && (
            <div
               className="navigation-buttons"
               onClick={() => {
                  setCurrentPage(currentPage - 1);
               }}>
               <AiOutlineArrowLeft />
               Previous
            </div>
         )}
         <div
            className="navigation-buttons"
            onClick={() => {
               setCurrentPage(currentPage + 1);
            }}>
            Next
            <AiOutlineArrowRight />
         </div>
      </div>
   );
}
