import React from 'react';
import { Stack, InputGroup, InputLeftElement, Input, InputRightElement } from '@chakra-ui/react';
//@ts-ignore
import { SearchIcon, ExternalLinkIcon, CloseIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

interface SearchProps {
   style: React.CSSProperties;
}

export default function Search(props: SearchProps): JSX.Element {
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
