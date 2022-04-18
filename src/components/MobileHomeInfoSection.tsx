import React, { useState } from 'react';
import styled from 'styled-components';

const StyledMobileHomeInfoSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   .circle {
      aspect-ratio: 1/1;
      width: 10px;
      border-radius: 100%;
      background: black;
   }

   .circles-section {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
   }
`;

export default function MobileHomeInfoSection(): JSX.Element {
   const [displayDots, setDisplayDots] = useState<boolean[]>([false, false, false, false]);

   return (
      <StyledMobileHomeInfoSection>
         <div className="circles-section">
            <div className="circle" style={{ color: displayDots[0] ? 'black' : 'red' }} />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
         </div>

         <div>
            <div>
               <h1>find Video Games</h1>
               <p>search for your favourite video games and discover others</p>
            </div>
            <div>
               <h1>Bookmark your favourite Video Games</h1>
               <p>search for your favourite video games and discover others</p>
            </div>
            <div>
               <h1>Create your own world with us</h1>
               <p>sign up and add you favourite video games to your inventory</p>
            </div>
            <div>
               <h1>Broke? we got your back</h1>
               <p>find limited-time or permanently free video games that require 0$ to play</p>
            </div>
         </div>
      </StyledMobileHomeInfoSection>
   );
}
