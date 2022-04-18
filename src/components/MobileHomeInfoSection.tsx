import React, { useState } from 'react';
import styled from 'styled-components';

const StyledMobileHomeInfoSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 2vh;
   text-align: center;
   margin-bottom: 4vh;
   width: 100%;
   @media (min-width: 1300px) {
      display: none;
   }

   & h1 {
      text-transform: uppercase;
      font-weight: bolder;
   }

   .circle {
      aspect-ratio: 1/1;
      width: 12px;
      border-radius: 100%;
   }

   .circles-section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7vw;
      width: 100%;
   }
`;

export default function MobileHomeInfoSection(): JSX.Element {
   const [displayDots, setDisplayDots] = useState<boolean[]>([true, false, false, false]);

   return (
      <StyledMobileHomeInfoSection>
         <div>
            <div style={{ display: displayDots[0] ? 'block' : 'none' }}>
               <h1>find Video Games</h1>
               <p>search for your favourite video games and discover others.</p>
            </div>
            <div style={{ display: displayDots[1] ? 'block' : 'none' }}>
               <h1>Bookmark your favourite Video Games</h1>
               <p>store your favourite games in your safe zone.</p>
            </div>
            <div style={{ display: displayDots[2] ? 'block' : 'none' }}>
               <h1>Create your own world with us</h1>
               <p>sign up and add you favourite video games to your inventory.</p>
            </div>
            <div style={{ display: displayDots[3] ? 'block' : 'none' }}>
               <h1>Broke? we got your back</h1>
               <p>find limited-time or permanently free video games that require 0$ to play.</p>
            </div>
         </div>
         <div className="circles-section">
            {displayDots.map((element: boolean, index: number) => {
               return (
                  <div
                     className="circle"
                     key={index}
                     onClick={(e: any): void => {
                        let arr: boolean[] = [];
                        for (let i = 0; i < 4; i++) {
                           if (index === i) {
                              arr.push(true);
                              continue;
                           }
                           arr.push(false);
                        }
                        setDisplayDots(arr);
                     }}
                     style={{ background: displayDots[index] ? 'black' : 'lightgray' }}
                  />
               );
            })}
         </div>
      </StyledMobileHomeInfoSection>
   );
}
