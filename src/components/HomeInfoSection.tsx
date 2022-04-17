import illustration from '../assets/illustration.png';
import React from 'react';
import styled from 'styled-components';

const StyledInfoSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: row;
   @media (max-width: 1000px) {
      flex-direction: column;
   }
   .infos-content {
      border: 2px solid black;
      width: 30%;
      @media (max-width: 1000px) {
         width: 70%;
      }
   }

   .infos-content h1 {
      text-transform: uppercase;
      font-weight: bolder;
   }
`;

export default function HomeInfoSection(): JSX.Element {
   return (
      <StyledInfoSection>
         <img src={illustration} alt="" />
         <div className="infos-content">
            <div>
               <h1>find Video Games</h1>
               <p>search for your favourite video games and discover others</p>
            </div>
            <div>
               <h1>Add Video Games to your favorites list</h1>
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
      </StyledInfoSection>
   );
}
