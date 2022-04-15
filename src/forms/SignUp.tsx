import { Input, InputLeftElement, InputGroup, Select } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import PasswordInput from './PasswordInput';
import NumberSelect from './selects/NumberSelect';
import MonthSelect from './selects/MonthSelect';
import { StyledForm, StyledSignUp, StyledBirthdateSection } from '../StyledComponents/StyledSignUp';
import '../global.css';
import CountrySelect from './selects/CountriesSelect';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';

function userNameGenerator(firstName: string, lastName: string): string[] {
   return [
      `${firstName}-${lastName}-${Math.floor(Math.random() * 100) + 1}`,
      `${firstName}_${lastName}_${Math.floor(Math.random() * 100) + 1}`,
      `${firstName}${lastName}${Math.floor(Math.random() * 100) + 1}`,
      `${firstName}${Math.floor(Math.random() * 100) + 1}`,
      `${lastName}${Math.floor(Math.random() * 100) + 1}`,
   ];
}

export default function SignUp(): JSX.Element {
   const [validCaptcha, setValidCaptcha] = useState<boolean>(false);

   return (
      <StyledSignUp className="component">
         <StyledForm>
            <Input variant="filled" placeholder="First Name" />

            <Input variant="filled" placeholder="Last Name" />
            <Input variant="filled" placeholder="username" />

            {/*<div>*/}
            {/*   {userNameGenerator('firstName', 'lastName').map((userName) => (*/}
            {/*   ))}*/}
            {/*</div>*/}

            <InputGroup>
               <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
               <Input variant="filled" placeholder="Email" id="email" type="email" />
            </InputGroup>

            <PasswordInput placeholder="Password" />
            <PasswordInput placeholder="Confirm Password" />

            <StyledBirthdateSection>
               <NumberSelect type="Day" start={1} end={15} />
               <MonthSelect />
               <NumberSelect type="Year" start={1920} end={2022} />
            </StyledBirthdateSection>

            <Select placeholder="Gender" variant="filled">
               <option value="m">Male</option>
               <option value="f">Female</option>
               <option value="o">Other</option>
            </Select>

            <CountrySelect />

            <ReCAPTCHA
               style={{ margin: 'auto' }}
               sitekey={process.env.REACT_APP_CAPTCHA_KEY}
               onChange={(value: string) => {
                  if (value !== null) setValidCaptcha(true);
                  console.log(value);
               }}
            />

            <Button disabled={!validCaptcha} type="submit" colorScheme="purple">
               Click
            </Button>
         </StyledForm>
      </StyledSignUp>
   );
}
