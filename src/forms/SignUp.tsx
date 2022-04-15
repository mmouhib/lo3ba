import { Input, InputLeftElement, InputGroup, Select } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import PasswordInput from './PasswordInput';
import NumberSelect from './NumberSelect';
import MonthSelect from './MonthSelect';
import { StyledForm, StyledSignUp, StyledBirthdateSection } from '../StyledComponents/StyledSignUp';
import '../global.css';
import CountrySelect from './CountriesSelect';

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
         </StyledForm>
      </StyledSignUp>
   );
}

/**
 * first name
 * last name
 * username (username generator)
 * email
 * password
 * confirmPassword
 * birthdate
 *
 * country
 * sex
 *
 * agree to user terms
 * captcha
 */
