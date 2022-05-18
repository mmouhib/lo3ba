import illustration from '../../assets/illustration.png';
import React from 'react';
import MobileHomeInfoSection from './MobileHomeInfoSection';
import '../../styles/Home/home-info-section.css';

export default function HomeInfoSection(): JSX.Element {
   return (
      /**
       * when the page is in mobile resolution the mobile content component (MobileHomeInfoSection) will be rendered
       * with the carousel effect instead of the rest of the JSX
       */

      <div className="home-info-section">
         <img src={illustration} alt="Illustration" />

         <MobileHomeInfoSection />
         <div className="infos-content">
            <div>
               <h1>find Video Games</h1>
               <p>search for your favourite video games and discover others.</p>
            </div>
            <div>
               <h1>Bookmark your favourite Video Games</h1>
               <p>store your favourite games in your safe zone.</p>
            </div>
            <div>
               <h1>Create your own world with us</h1>
               <p>sign up and add you favourite video games to your inventory.</p>
            </div>
            <div>
               <h1>Broke? we got your back</h1>
               <p>find limited-time or permanently free video games that require 0$ to play.</p>
            </div>
         </div>
      </div>
   );
}
