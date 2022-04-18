import illustration from '../assets/illustration.png';
import React from 'react';
import styled from 'styled-components';
import MobileHomeInfoSection from './MobileHomeInfoSection';

const StyledInfoSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   //flex-direction: row;
  flex-direction: column;
   gap: 1.5vw;

   //& img {
   //   width: 100%;
   //   height: 100%;
   //}

   .infos-content {
      width: 17vw;
      height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 6%;
      @media (max-width: 1300px) {
         display: none;
      }
   }

   .infos-content h1 {
      font-size: 1em;
      text-transform: uppercase;
      font-weight: bolder;
   }

   .infos-content p {
      font-size: 1em;
   }

   .infos-content ::selection {
      color: white;
      background: #8d2cff;
   }
`;

export default function HomeInfoSection(): JSX.Element {
   return (
      /**
       * when the page is in mobile resolution the mobile content component (MobileHomeInfoSection) will be rendered
       * with the carousel effect instead of the rest of the JSX
       */

      <StyledInfoSection>
         <img src={illustration} alt="Illustration" />

         <MobileHomeInfoSection />
         {/*<div className="infos-content">*/}
         {/*   <div>*/}
         {/*      <h1>find Video Games</h1>*/}
         {/*      <p>search for your favourite video games and discover others</p>*/}
         {/*   </div>*/}
         {/*   <div>*/}
         {/*      <h1>Bookmark your favourite Video Games</h1>*/}
         {/*      <p>search for your favourite video games and discover others</p>*/}
         {/*   </div>*/}
         {/*   <div>*/}
         {/*      <h1>Create your own world with us</h1>*/}
         {/*      <p>sign up and add you favourite video games to your inventory</p>*/}
         {/*   </div>*/}
         {/*   <div>*/}
         {/*      <h1>Broke? we got your back</h1>*/}
         {/*      <p>find limited-time or permanently free video games that require 0$ to play</p>*/}
         {/*   </div>*/}
         {/*</div>*/}
      </StyledInfoSection>
   );
}
