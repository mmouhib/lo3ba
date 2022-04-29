import '../../../styles/credentials.css';
import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import PasswordInput from '../PasswordInput';

export default function FormCredentials() {
   return (
      <>
         <div className="same-line">
            <Input type="text" placeholder="First name" focusBorderColor="purple.500" />
            <Input type="text" placeholder="Last name" focusBorderColor="purple.500" />
         </div>
         <Input type="text" placeholder="Username" focusBorderColor="purple.500" />

         <InputGroup>
            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
            <Input placeholder="Email" id="email" type="email" focusBorderColor="purple.500" />
         </InputGroup>

         <div className="same-line">
            <PasswordInput placeholder="Password" />
            <PasswordInput placeholder="Confirm" />
         </div>
      </>
   );
}
