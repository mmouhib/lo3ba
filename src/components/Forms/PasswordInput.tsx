import { InputGroup, Input, InputRightElement, Button, InputLeftElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface PasswordInputProps {
   placeholder: string;
   value?: string;
   onChange?: (e: any) => void;
}

export default function PasswordInput(props: PasswordInputProps): JSX.Element {
   const [show, setShow] = useState(false);

   return (
      <InputGroup>
         <InputLeftElement children={<LockIcon color="gray.300" />} />
         <Input
            focusBorderColor="purple.500"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
         />
         <InputRightElement width="4.5rem">
            <Button
               h="1.75rem"
               onClick={() => {
                  setShow(!show);
               }}>
               {show ? <ViewOffIcon color="black.300" /> : <ViewIcon color="black.300" />}
            </Button>
         </InputRightElement>
      </InputGroup>
   );
}
