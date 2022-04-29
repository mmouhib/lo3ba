import '../../styles/signup-form.css';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';
import CoreModal from './Modal';
import LoginModal from './LoginModal';
import AlertPopup from '../AlertPopup';

import Selects from './signup/Selects';

import FormCredentials from './signup/Credentials';
import TermsCheckbox from './TermsCheckbox';

export default function SignUpForm(): JSX.Element {
   const [openModal, setOpenModal] = useState<boolean>(false);
   const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
   const [validCaptcha, setValidCaptcha] = useState<boolean>(false);
   const [selectedTerms, setSelectedTerms] = useState<boolean>(false);

   return (
      <form className="sign-up-form">
         {/*<AlertPopup />*/}
         <CoreModal openModal={openModal} setOpenModal={setOpenModal} setSelectedTerms={setSelectedTerms} />
         <LoginModal openModal={openLoginModal} setOpenModal={setOpenLoginModal} />

         <p className="sign-up-form-phrase">Sign Up</p>
         <FormCredentials />
         <Selects />
         <TermsCheckbox />

         <ReCAPTCHA
            style={{ margin: 'auto' }}
            sitekey={process.env.REACT_APP_CAPTCHA_KEY}
            onChange={(value: string) => {
               if (value !== null) setValidCaptcha(true);
            }}
         />

         <Button type="submit" colorScheme="purple">
            Register
         </Button>

         <p style={{ margin: 'auto' }}>
            Already have an account ?{' '}
            <span
               className="sign-up-form-spans"
               onClick={() => {
                  setOpenLoginModal(true);
               }}>
               Sign In
            </span>
         </p>
      </form>
   );
}
