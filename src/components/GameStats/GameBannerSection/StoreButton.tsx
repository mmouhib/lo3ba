import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../../../styles/GameStats/store-button.css';
import { FaSteam, FaAppStore, FaGooglePlay, FaPlaystation, FaXbox, FaItchIo } from 'react-icons/fa';
import { SiNintendo, SiEpicgames, SiGogDotCom } from 'react-icons/si';

interface StoreButtonProps {
   storeId: number;
   storePage: string;
}

export default function StoreButton(props: StoreButtonProps) {
   const [storeName, setStoreName] = useState<string>('');
   const [loaded, setLoaded] = useState<boolean>(false);

   useEffect(() => {
      axios
         .get(`https://api.rawg.io/api/stores/${props.storeId}?key=${process.env.REACT_APP_API_KEY}`)
         .then((response: AxiosResponse): void => {
            setStoreName(response.data.name);
            setLoaded(true);
         });
   }, [props.storeId]);

   return (
      <a href={props.storePage}>
         <div className="store-button">
            {/*added the next div to make the content div smaller than its mother div to be able
         to space the icon at the end and prevent it from sticking to the end of the edge*/}
            {loaded && (
               <div className="store-button-content">
                  <h1>{storeName}</h1>
                  {storeName.toLowerCase().includes('steam') && <FaSteam size={20} />}
                  {storeName.toLowerCase().includes('app') && <FaAppStore size={20} />}
                  {storeName.toLowerCase().includes('google') && <FaGooglePlay size={20} />}
                  {storeName.toLowerCase().includes('playstation') && <FaPlaystation size={20} />}
                  {storeName.toLowerCase().includes('xbox') && <FaXbox size={20} />}
                  {storeName.toLowerCase().includes('itch') && <FaItchIo size={20} />}
                  {storeName.toLowerCase().includes('nintendo') && <SiNintendo size={20} />}
                  {storeName.toLowerCase().includes('epic') && <SiEpicgames size={20} />}
                  {storeName.toLowerCase().includes('gog') && <SiGogDotCom size={20} />}
               </div>
            )}
         </div>
      </a>
   );
}
