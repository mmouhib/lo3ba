import '../../styles/signup-form.css';
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Input, InputGroup, InputLeftElement, InputRightElement, Select } from '@chakra-ui/react';
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';
import CoreModal from './Modal';
import LoginModal from './LoginModal';
import AlertPopup from '../AlertPopup';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import PasswordInput from './PasswordInput';
import NumberSelect from './selects/NumberSelect';
import MonthSelect from './selects/MonthSelect';
import CountrySelect from './selects/CountriesSelect';
import GenderSelect from './selects/GenderSelect';
import { useFormik } from 'formik';

export default function SignUpForm(): JSX.Element {
   const [validCaptcha, setValidCaptcha] = useState<boolean>(false);
   const [dayInterval, setDayInterval] = useState<number[]>([]);
   const [yearInterval, setYearInterval] = useState<number[]>([]);
   useEffect(() => {
      for (let i: number = 0; i < 31; i++) {
         setDayInterval((prev) => [...prev, i]);
      }
      for (let i: number = 0; i < new Date().getFullYear() + 1; i++) {
         setYearInterval((prev) => [...prev, i]);
      }
   }, []);

   const [show, setShow] = useState(false);

   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         userName: '',
         email: '',
         password: '',
         confirmPassword: '',
         day: '',
         month: '',
         year: '',
         country: '',
         gender: '',
         terms: false,
         captcha: false,
      },

      onSubmit: (values) => {
         console.log('submitted');
      },
   });

   useEffect(() => {
      console.log(formik.values);
   }, [formik.values]);

   return (
      <form className="sign-up-form" onSubmit={formik.handleSubmit}>
         {/*<AlertPopup />*/}
         {/*<CoreModal openModal={openModal} setOpenModal={setOpenModal} setSelectedTerms={setSelectedTerms} />*/}
         {/*<LoginModal openModal={openLoginModal} setOpenModal={setOpenLoginModal} />*/}

         <p className="sign-up-form-title">Sign Up</p>

         <div className="same-line">
            <Input
               type="text"
               placeholder="First name"
               focusBorderColor="purple.500"
               id="firstName"
               name="firstName"
               value={formik.values.firstName}
               onChange={formik.handleChange}
            />
            <Input
               type="text"
               placeholder="First name"
               focusBorderColor="purple.500"
               id="lastName"
               name="lastName"
               value={formik.values.lastName}
               onChange={formik.handleChange}
            />
         </div>
         <Input
            type="text"
            placeholder="First name"
            focusBorderColor="purple.500"
            id="userName"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
         />

         <InputGroup>
            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
            <Input
               placeholder="Email"
               type="email"
               id="email"
               name="email"
               focusBorderColor="purple.500"
               value={formik.values.email}
               onChange={formik.handleChange}
            />
         </InputGroup>

         <div className="same-line">
            <InputGroup>
               <InputLeftElement children={<LockIcon color="gray.300" />} />
               <Input
                  focusBorderColor="purple.500"
                  type={show ? 'text' : 'password'}
                  placeholder="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
               />
               <InputRightElement width="4.5rem">
                  <Button
                     h="1.75rem"
                     onClick={() => {
                        setShow(!show);
                     }}>
                     {show ? <ViewOffIcon color="black.300" /> : <ViewIcon color="black.300" />}
                  </Button>
               </InputRightElement>
            </InputGroup>
            <InputGroup>
               <InputLeftElement children={<LockIcon color="gray.300" />} />
               <Input
                  focusBorderColor="purple.500"
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="confirm"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
               />
               <InputRightElement width="4.5rem">
                  <Button
                     h="1.75rem"
                     onClick={() => {
                        setShow(!show);
                     }}>
                     {show ? <ViewOffIcon color="black.300" /> : <ViewIcon color="black.300" />}
                  </Button>
               </InputRightElement>
            </InputGroup>
         </div>

         <div className="same-line">
            <Select placeholder="day">
               {dayInterval.map((element, index) => (
                  <option key={element} value={element + 1}>
                     {element + 1}
                  </option>
               ))}
            </Select>
            <MonthSelect />
            <Select placeholder="day">
               {yearInterval.map((element, index) => (
                  <option key={element} value={element + 1}>
                     {element + 1}
                  </option>
               ))}
            </Select>
         </div>
         <div className="same-line">
            <CountrySelect />
            <GenderSelect />
         </div>

         <Checkbox className="signup-form-checkbox">
            I accept{' '}
            <span
               className="sign-up-form-spans"
               onClick={(e) => {
                  e.preventDefault();
               }}>
               Cookies & other Storage
            </span>{' '}
            Policy
         </Checkbox>

         <ReCAPTCHA
            style={{ margin: 'auto' }}
            sitekey={process.env.REACT_APP_CAPTCHA_KEY}
            onChange={(value: string) => {
               value !== null ? setValidCaptcha(true) : setValidCaptcha(false);
            }}
         />

         <Button type="submit" colorScheme="purple">
            Register
         </Button>

         <p>
            Already have an account ? <span className="sign-up-form-spans">Sign In</span>
         </p>
      </form>
   );
}
