import styled from 'styled-components';
import React from 'react';
import { Stack, InputGroup, InputLeftElement, Input, InputRightElement } from '@chakra-ui/react';
//@ts-ignore
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons';

export default function Search(): JSX.Element {
   return (
      <div style={{ marginTop: '15px', width: '25%' }}>
         <Stack spacing={4}>
            <InputGroup>
               <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
               <Input type="tel" placeholder="Look for a game" variant="filled" />
               <InputRightElement
                  pointerEvents="none"
                  children={<ExternalLinkIcon color="gray.300" />}
               />
            </InputGroup>
         </Stack>
      </div>
   );
}
