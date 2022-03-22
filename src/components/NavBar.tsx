import Search from './Search';
import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { StyledTitle, StyledNavBar } from '../StyledComponents/Navbar';
import axios, {AxiosResponse} from "axios";

export default function NavBar() {
   useEffect(() => {
       axios
           .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`)
           .then(function (response: AxiosResponse): void {
               console.log(response.data);
           });
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
