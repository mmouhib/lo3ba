import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import PasswordInput from './PasswordInput';
import '../../styles/login-form.css';

export default function LoginForm(): JSX.Element {
   return (
      <form className="login-form">
         <div>
            <InputGroup>
               <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
               <Input variant="filled" placeholder="Email" id="email" type="email" />
            </InputGroup>
            <PasswordInput placeholder="Password" />
         </div>
      </form>
   );
}
