import Search from './Search';
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';

const StyledNavBar = styled.div`
   display: flex;
   gap: 10%;
   align-items: center;
   justify-content: space-between;
   background: transparent;
   padding: 0.5%;
   height: 7%;
   //background: white;
   //box-shadow: 0 0 1000px 0 red;
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
         <Button colorScheme="blue">Button</Button>
      </StyledNavBar>
   );
}
