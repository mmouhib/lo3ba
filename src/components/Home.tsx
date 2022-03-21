import styled from 'styled-components';
import React from 'react';
import NavBar from './NavBar';
import { Button } from '@chakra-ui/react';

const StyledHome = styled.div`
   width: 100%;
   height: 100%;
   background: #38185e;
`;

const StyledSlogan = styled.p`
   color: white;
   font-size: 5em;
   font-family: 'Bebas Neue', cursive;
   letter-spacing: 3px;
   font-weight: bold;
   //border: 1px solid #804ebd;
   //border-radius: 20px;
   padding: 20px;
   width: fit-content;
   text-align: center;
   text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
   //text-shadow: black 15px 12px;
`;

const StyledHomeContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: 93%;
`;

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
