import Search from './Search';
import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import DataRequest from '../request';
import { StyledTitle, StyledNavBar } from '../StyledComponents/Navbar';

export default function NavBar() {
   useEffect(() => {
      DataRequest();
   }, []);

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
