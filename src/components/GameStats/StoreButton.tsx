import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import '../../styles/GameStats/store-button.css';
//icons:
import appStore from '../../assets/storeIcons/appStore.png';
import epic from '../../assets/storeIcons/epic.png';
import gog from '../../assets/storeIcons/gog.png';
import googlePlay from '../../assets/storeIcons/googlePlay.png';
import itchio from '../../assets/storeIcons/itchio.png';
import nintendo from '../../assets/storeIcons/nintendo.png';
import playstation from '../../assets/storeIcons/playstation.png';
import steam from '../../assets/storeIcons/steam.png';
import xbox from '../../assets/storeIcons/xbox.png';

interface StoreButtonProps {
   storeId: number;
   storePage: string;
}

const getStoreIcon = (name: string) => {
   if (name.toLowerCase().includes('xbox')) {
      return xbox;
   }

   if (name.toLowerCase().includes('google')) {
      return googlePlay;
   }
   if (name.toLowerCase().includes('gog')) {
      return gog;
   }
   if (name.toLowerCase().includes('epic')) {
      return epic;
   }
   if (name.toLowerCase().includes('itch')) {
      return itchio;
   }
   if (name.toLowerCase().includes('app')) {
      return appStore;
   }
   if (name.toLowerCase().includes('nintendo')) {
      return nintendo;
   }
   if (name.toLowerCase().includes('playstation')) {
      return playstation;
   }
   if (name.toLowerCase().includes('steam')) {
      return steam;
   }
   return '';
};

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
   }, []);

   return (
      <a href={props.storePage}>
         <div className="store-button">
            {/*added the next div to make it smaller than its mother div to be able
         to space the icon at the end and make it not stick to the end of the edge*/}
            {loaded && (
               <div className="store-button-content">
                  <h1>{storeName}</h1>
                  <img className="store-logo" src={getStoreIcon(storeName)} alt="store logo" />
               </div>
            )}
         </div>
      </a>
   );
}
