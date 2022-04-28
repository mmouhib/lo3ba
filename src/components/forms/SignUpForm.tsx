import { Input, InputLeftElement, InputGroup, Select, Checkbox } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import PasswordInput from './PasswordInput';
import NumberSelect from './selects/NumberSelect';
import MonthSelect from './selects/MonthSelect';
import '../../styles/signup-form.css';
import CountrySelect from './selects/CountriesSelect';
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';
import CoreModal from './Modal';
import LoginModal from './LoginModal';
import UsernameSuggestion from '../UsernameSuggestion';

export default function SignUpForm(): JSX.Element {
   const [openModal, setOpenModal] = useState<boolean>(false);
   const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [userName, setUserName] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [confirmPassword, setConfirmPassword] = useState<string>('');
   const [day, setDay] = useState<string>('');
   const [month, setMonth] = useState<string>('');

   const [year, setYear] = useState<string>('');
   const [gender, setGender] = useState<string>('');
   const [country, setCountry] = useState<string>('');

   const [validCaptcha, setValidCaptcha] = useState<boolean>(false);
   const [selectedTerms, setSelectedTerms] = useState<boolean>(false);

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
            <Input
               variant="filled"
               placeholder="First Name"
               value={firstName}
               onChange={(e) => {
                  setFirstName(e.target.value);
               }}
            />
            <Input
               variant="filled"
               placeholder="Last Name"
               value={lastName}
               onChange={(e) => {
                  setLastName(e.target.value);
               }}
            />
         </div>
         <Input
            variant="filled"
            placeholder="username"
            value={userName}
            onChange={(e) => {
               setUserName(e.target.value);
            }}
         />

         {firstName && lastName && (
            <UsernameSuggestion firstName={firstName} lastName={lastName} setValue={setUserName} />
         )}

         <InputGroup>
            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
            <Input
               variant="filled"
               placeholder="Email"
               id="email"
               type="email"
               value={email}
               onChange={(e) => {
                  setEmail(e.target.value);
               }}
            />
         </InputGroup>

         <PasswordInput
            placeholder="Password"
            value={password}
            onChange={(e) => {
               setPassword(e.target.value);
            }}
         />

         <PasswordInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
               setConfirmPassword(e.target.value);
            }}
         />

         <div className="one-line-inputs">
            <NumberSelect type="Day" start={1} end={31} setValue={setDay} />
            <MonthSelect setValue={setMonth} />
            <NumberSelect type="Year" start={1969} end={2020} setValue={setYear} />
         </div>

         <Select
            placeholder="Gender"
            variant="filled"
            onChange={(e) => {
               setGender(e.target.value);
            }}>
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="o">Other</option>
         </Select>

         <CountrySelect setValue={setCountry} />

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
