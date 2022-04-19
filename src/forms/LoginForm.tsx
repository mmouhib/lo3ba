import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import PasswordInput from './PasswordInput';
import { StyledLoginForm } from '../StyledComponents/loginForm.css';

export default function LoginForm(): JSX.Element {
   return (
      <StyledLoginForm>
         <div>
            <InputGroup>
               <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
               <Input variant="filled" placeholder="Email" id="email" type="email" />
            </InputGroup>
            <PasswordInput placeholder="Password" />
         </div>
      </StyledLoginForm>
   );
}
