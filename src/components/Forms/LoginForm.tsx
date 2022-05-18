import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import '../../styles/Forms/login-form.css';
import React, { useState } from 'react';
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';

interface logInFormProps {
   setForm?: (arg: boolean) => void;
}

export default function LoginForm(props: logInFormProps): JSX.Element {
   const [show, setShow] = useState<boolean>(false);
   const [validCaptcha, setValidCaptcha] = useState<boolean>(false);

   return (
      <form className="login-form">
         <p className="log-in-form-title">Log in</p>
         <InputGroup>
            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
            <Input placeholder="Email" type="email" id="email" name="email" focusBorderColor="purple.500" />
         </InputGroup>
         <InputGroup>
            <InputLeftElement children={<LockIcon color="gray.300" />} />
            <Input focusBorderColor="purple.500" type={show ? 'text' : 'password'} placeholder="password" id="password" name="password" />
            <InputRightElement width="3.5rem">
               <Button
                  h="1.5rem"
                  w="5%"
                  onClick={() => {
                     setShow(!show);
                  }}>
                  {show ? <ViewOffIcon color="black.300" /> : <ViewIcon color="black.300" />}
               </Button>
            </InputRightElement>
         </InputGroup>
         <ReCAPTCHA
            style={{ margin: '0 auto' }}
            sitekey={process.env.REACT_APP_CAPTCHA_KEY}
            onChange={(value: string) => {
               value !== null ? setValidCaptcha(true) : setValidCaptcha(false);
            }}
         />
         <Button type="submit" colorScheme="purple" w={'100%'}>
            Log in
         </Button>
         <p>
            Don't have an account ?{' '}
            <span
               className="sign-up-form-spans"
               onClick={() => {
                  if (props?.setForm) {
                     props?.setForm(true);
                  }
               }}>
               Sign up
            </span>
         </p>
      </form>
   );
}
