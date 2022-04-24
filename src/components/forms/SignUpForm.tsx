import { Input, InputLeftElement, InputGroup, Select, Checkbox } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import PasswordInput from './PasswordInput';
import NumberSelect from './selects/NumberSelect';
import MonthSelect from './selects/MonthSelect';
import '../../styles/signup-form.css';
import CountrySelect from './selects/CountriesSelect';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';
import CoreModal from './Modal';
import LoginModal from './LoginModal';

// function userNameGenerator(firstName: string, lastName: string): string[] {
//    return [
//       `${firstName}-${lastName}-${Math.floor(Math.random() * 100) + 1}`,
//       `${firstName}_${lastName}_${Math.floor(Math.random() * 100) + 1}`,
//       `${firstName}${lastName}${Math.floor(Math.random() * 100) + 1}`,
//       `${firstName}${Math.floor(Math.random() * 100) + 1}`,
//       `${lastName}${Math.floor(Math.random() * 100) + 1}`,
//    ];
// }

export default function SignUpForm(): JSX.Element {
   const [validCaptcha, setValidCaptcha] = useState<boolean>(false);
   const [openModal, setOpenModal] = useState<boolean>(false);
   const [selectedTerms, setSelectedTerms] = useState<boolean>(false);
   const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

   return (
      <form className="sign-up-form">
         <CoreModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            setSelectedTerms={setSelectedTerms}
         />
         <LoginModal openModal={openLoginModal} setOpenModal={setOpenLoginModal} />
         <p className="sign-up-form-phrase">Sign Up</p>

         <div className="one-line-inputs">
            <Input variant="filled" placeholder="First Name" />
            <Input variant="filled" placeholder="Last Name" />
         </div>
         <Input variant="filled" placeholder="username" />

         <InputGroup>
            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
            <Input variant="filled" placeholder="Email" id="email" type="email" />
         </InputGroup>

         <PasswordInput placeholder="Password" />

         <PasswordInput placeholder="Confirm Password" />

         <div className="one-line-inputs">
            <NumberSelect type="Day" start={1} end={15} />
            <MonthSelect />
            <NumberSelect type="Year" start={1969} end={2022} />
         </div>

         <Select placeholder="Gender" variant="filled">
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="o">Other</option>
         </Select>

         <CountrySelect />

         <Checkbox
            style={{ margin: 'auto' }}
            isChecked={selectedTerms}
            onChange={() => {
               setSelectedTerms(!selectedTerms);
            }}>
            I accept{' '}
            <span
               className="sign-up-form-spans"
               onClick={(e) => {
                  e.preventDefault();
                  setOpenModal(true);
               }}>
               Cookies & other Storage
            </span>{' '}
            Policy
         </Checkbox>

         <ReCAPTCHA
            style={{ margin: 'auto' }}
            sitekey={process.env.REACT_APP_CAPTCHA_KEY}
            onChange={(value: string) => {
               if (value !== null) setValidCaptcha(true);
            }}
         />

         <Button disabled={!validCaptcha} type="submit" colorScheme="purple">
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
