import React from 'react';
import NavBar from '../components/NavBar';
import { Button } from '@chakra-ui/react';
import { StyledSlogan, StyledHomeContent, StyledHome } from '../StyledComponents/Home';

export default function Home(): JSX.Element {
   return (
      <StyledHome>
         <NavBar />
         <StyledHomeContent>
            <StyledSlogan>
               Your favourite <span style={{ color: 'red' }}>Video Games</span>, ALl in one place
            </StyledSlogan>
            <div>
               <Button colorScheme="blue">Login</Button>
               <Button colorScheme="blue">sign Up</Button>
            </div>
         </StyledHomeContent>
      </StyledHome>
   );
}
