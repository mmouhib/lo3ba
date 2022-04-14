import React from 'react';
import { Input, InputLeftElement, InputGroup, Select } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import PasswordInput from './PasswordInput';
import NumberSelect from './NumberSelect';
import MonthSelect from './MonthSelect';

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
      <form>
         <Input variant="filled" placeholder="First Name" />

         <Input variant="filled" placeholder="Last Name" />
         <Input variant="filled" placeholder="username" />

         <div>
            {userNameGenerator('firstName', 'lastName').map((userName) => (
               <>
                  <span>{userName}</span>
                  <br />
               </>
            ))}
         </div>

         <InputGroup>
            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
            <Input variant="filled" placeholder="Email" id="email" type="email" />
         </InputGroup>

         <PasswordInput placeholder="Password" />
         <PasswordInput placeholder="Confirm Password" />

         <NumberSelect type="Day" start={1} end={15} />
         <NumberSelect type="Year" start={1920} end={2022} />

         <MonthSelect />

         <Select placeholder="Gender" variant="filled">
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="o">Other</option>
         </Select>
      </form>
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
