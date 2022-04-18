import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import PasswordInput from './PasswordInput';
import styled from 'styled-components';

const StyledLoginForm = styled.form`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 15px;
`;

export default function LoginForm(): JSX.Element {
   return (
      <StyledLoginForm>
         <InputGroup>
            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
            <Input variant="filled" placeholder="Email" id="email" type="email" />
         </InputGroup>
         <PasswordInput placeholder="Password" />
      </StyledLoginForm>
   );
}
