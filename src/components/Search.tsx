import React, { useContext } from 'react';
import { Stack, InputGroup, InputLeftElement, Input, InputRightElement } from '@chakra-ui/react';
//@ts-ignore
import { SearchIcon, ExternalLinkIcon, CloseIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { searchContext } from '../context/SearchContext';

interface SearchProps {
   style: React.CSSProperties;
}

export default function Search(props: SearchProps): JSX.Element {
   const { searchValue } = useContext(searchContext);
   const { setSearchValue } = useContext(searchContext);

   return (
      <div style={props.style}>
         <Stack spacing={4}>
            <InputGroup>
               <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
               <Input type="tel" placeholder="Look for a game" variant="filled" />
               <InputRightElement
                  children={
                     <>
                        <ExternalLinkIcon color="gray.300" />
                        <IconButton aria-label="Search database" icon={<CloseIcon />} />
                     </>
                  }
               />
            </InputGroup>
         </Stack>
      </div>
   );
}
