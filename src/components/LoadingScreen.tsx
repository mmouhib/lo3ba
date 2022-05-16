import { useEffect, useState } from 'react';
import '../styles/loading-screen.css';
import RingLoader from 'react-spinners/RingLoader';
import ClockLoader from 'react-spinners/ClockLoader';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import BounceLoader from 'react-spinners/BounceLoader';
import CircleLoader from 'react-spinners/CircleLoader';
import HashLoader from 'react-spinners/HashLoader';
import ScaleLoader from 'react-spinners/ScaleLoader';

const loadingComponents = [
   RingLoader,
   ClockLoader,
   ClimbingBoxLoader,
   BounceLoader,
   CircleLoader,
   HashLoader,
   ScaleLoader,
];

interface LoadingScreenProps {
   loading: boolean;
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
   const [loadingComp, setLoadingComp] = useState<number>(0);

   useEffect(() => {
      setLoadingComp(Math.floor(Math.random() * loadingComponents.length - 1) + 1);
   }, []);

   return (
      <>
         {loading && (
            <div className="loading-screen-component">
               <div className="loading-screen-section-one">
                  {loadingComp === 0 && <RingLoader loading={loading} size={100} color={'white'} />}
                  {loadingComp === 1 && <ClockLoader loading={loading} size={100} color={'white'} />}
                  {loadingComp === 2 && <ClimbingBoxLoader loading={loading} size={30} color={'white'} />}
                  {loadingComp === 3 && <BounceLoader loading={loading} size={100} color={'white'} />}
                  {loadingComp === 4 && <CircleLoader loading={loading} size={100} color={'white'} />}
                  {loadingComp === 5 && <HashLoader loading={loading} size={100} color={'white'} />}
                  {loadingComp === 6 && <ScaleLoader loading={loading} color={'white'} />}
                  <span style={{ color: 'white' }}>Loading data ...</span>
               </div>

               <div className="loading-screen-section-two">
                  <span
                     className="loader-changer"
                     onClick={() => {
                        while (true) {
                           let nb = Math.floor(Math.random() * loadingComponents.length - 1) + 1;
                           if (!(nb === loadingComp)) {
                              setLoadingComp(nb);
                              break;
                           }
                        }
                        setLoadingComp(Math.floor(Math.random() * loadingComponents.length - 1) + 1);
                        console.log(loadingComp);
                     }}>
                     Change loading animation
                  </span>
               </div>
            </div>
         )}
      </>
   );
}
