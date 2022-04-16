import React from 'react';
import NavBar from '../components/NavBar';
import { Button } from '@chakra-ui/react';
import {
   StyledHomeContent,
   StyledHome,
   StyledSloganDiv,
   StyledVerticalLine,
   StyledImage,
} from '../StyledComponents/Home';
// @ts-ignore
import Logo from '../assets/logo.png';
import '../global.css';

export default function Home(): JSX.Element {
   return (
      <StyledHome>
         {/*<NavBar />*/}
         <StyledHomeContent>
            <StyledSloganDiv>
               <p>
                  Your favourite <span>Video Games</span>, ALl in one place
               </p>
            </StyledSloganDiv>
            <StyledVerticalLine />
            <StyledImage src={Logo} alt="logo" draggable="false" />
         </StyledHomeContent>
         {/*<div>*/}
         {/*   <Button colorScheme="purple">Login</Button>*/}
         {/*   <Button colorScheme="purple">sign Up</Button>*/}
         {/*</div>*/}
      </StyledHome>
   );
}
