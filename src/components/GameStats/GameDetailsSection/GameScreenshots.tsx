import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import '../../../styles/GameStats/game-screenshots.css';
import ScreenshotModal from './ScreenshotModal';

interface GameScreenshotsProps {
   gameId: number;
}

export default function GameScreenshots({ gameId }: GameScreenshotsProps) {
   const [screenshots, setScreenshots] = useState<any>();
   const [imageUrl, setImageUrl] = useState<string>('');
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setScreenshots(response.data.results);
         });
   }, []);

   useEffect(() => {
      if (screenshots && screenshots.length > 0) {
         setImageUrl(screenshots[0].image);
      }
   }, [screenshots]);

   return (
      <div className="game-screenshots-component">
         {screenshots && screenshots.length > 0 && (
            <>
               <ScreenshotModal imageUrl={imageUrl} isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
               {screenshots.map((element: any, index: number) => {
                  return (
                     <img
                        onClick={() => {
                           setImageUrl(element.image);
                           setModalIsOpen(true);
                        }}
                        className="game-screenshots-screenshot"
                        key={index}
                        src={element.image}
                        alt="screenshot"
                     />
                  );
               })}
            </>
         )}
      </div>
   );
}
