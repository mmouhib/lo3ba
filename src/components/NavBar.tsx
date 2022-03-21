import Search from './Search';
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import React from 'react';

const StyledNavBar = styled.div`
   display: flex;
   gap: 10%;
   align-items: center;
   justify-content: space-between;
   padding: 0.5%;
   height: 7%;
   background: #d7d6d6;
   box-shadow: 0 0 1000px 0 red;
`;

const StyledTitle = styled.p`
   font-size: 2rem;
   font-weight: bold;
   color: white;
   text-transform: uppercase;
`;

export default function NavBar() {
   return (
      <StyledNavBar>
         <StyledTitle>lo3ba</StyledTitle>
         <Search style={{ width: '25%' }} />
         <div>
            <Button colorScheme="blue">Login</Button>
            <Button colorScheme="blue">sign Up</Button>
         </div>
      </StyledNavBar>
   );
}
