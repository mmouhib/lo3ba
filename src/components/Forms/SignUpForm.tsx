import '../../styles/Forms/signup-form.css';
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Input, InputGroup, InputLeftElement, InputRightElement, Select, useToast } from '@chakra-ui/react';
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';
import CoreModal from './Modal';
import LoginModal from './LoginModal';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';
import Countries from '../../Countries';

interface IBirthdate {
   day: string;
   month: string;
   year: string;
}

interface SignUpFormProps {
   setForm: (arg: boolean) => void;
}

const arrayRange = (start: number, end: number): number[] => {
   let arr: number[] = [];
   for (let i: number = start - 1; i < end; i++) {
      arr.push(i);
   }
   return arr;
};

export default function SignUpForm(props: SignUpFormProps): JSX.Element {
   const [error, setError] = useState<boolean>(false);
   const [show, setShow] = useState<boolean>(false);
   const [validCaptcha, setValidCaptcha] = useState<boolean>(false);
   const [birthdate, setBirthdate] = useState<IBirthdate>({ day: '', month: '', year: '' });
   const [country, setCountry] = useState<string>('');
   const [gender, setGender] = useState<string>('');
   const [checkedTerms, setCheckedTerms] = useState<boolean>(false);
   const [openModal, setOpenModal] = useState<boolean>(false);
   const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

   const longMonths: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];
   const shortMonths: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         userName: '',
         email: '',
         password: '',
         confirmPassword: '',
      },

      onSubmit: (values) => {
         console.log('submitted');
      },
   });

   const toast = useToast();

   const submitControl = (): void => {
      if (!formik.values.firstName) {
         toast({
            title: 'An error has occurred.',
            description: 'First name must not be empty',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      } else if (!formik.values.lastName) {
         toast({
            title: 'An error has occurred.',
            description: 'last name must not be empty',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      } else if (!formik.values.userName) {
         toast({
            title: 'An error has occurred.',
            description: 'User name must not be empty',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      } else if (
         !formik.values.email
            .toLowerCase()
            .match(
               /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
      ) {
         toast({
            title: 'An error has occurred.',
            description: 'Incorrect email',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      } else if (formik.values.password.length < 6) {
         toast({
            title: 'An error has occurred.',
            description: 'Password must contain 6 indexes',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      } else if (formik.values.confirmPassword !== formik.values.password) {
         toast({
            title: 'An error has occurred.',
            description: 'Password confirmation must be the same as the password',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      } else if (birthdate.day.length === 0 || birthdate.month.length === 0 || birthdate.year.length === 0) {
         toast({
            title: 'An error has occurred.',
            description: 'Please select a valid birthdate',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      } else if (country.toString() === '') {
         toast({
            title: 'An error has occurred.',
            description: 'Please select a country',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      } else if (gender.toString() === '') {
         toast({
            title: 'An error has occurred.',
            description: 'Please select a gender',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      } else if (!checkedTerms) {
         toast({
            title: 'An error has occurred.',
            description: 'Please accept our site policy',
            status: 'error',
            duration: 3000,
            isClosable: true,
         });
         setError(true);
      }
   };

   return (
      <form className="sign-up-form" onSubmit={formik.handleSubmit}>
         <CoreModal openModal={openModal} setOpenModal={setOpenModal} />
         <LoginModal openModal={openLoginModal} setOpenModal={setOpenLoginModal} />

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
               placeholder="Last name"
               focusBorderColor="purple.500"
               id="lastName"
               name="lastName"
               value={formik.values.lastName}
               onChange={formik.handleChange}
            />
         </div>
         <Input
            type="text"
            placeholder="Username"
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
            <InputGroup>
               <InputLeftElement children={<LockIcon color="gray.300" />} />
               <Input
                  focusBorderColor="purple.500"
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="confirm pwd"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
               />
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
         </div>

         <div className="same-line">
            <Select
               placeholder="day"
               onChange={(e) => {
                  setBirthdate({ ...birthdate, day: e.target.value });
               }}>
               {arrayRange(1, 31).map((element, index) => (
                  <option key={element} value={element + 1}>
                     {element + 1}
                  </option>
               ))}
            </Select>

            <Select
               placeholder="Month"
               onChange={(e) => {
                  setBirthdate({ ...birthdate, month: e.target.value });
               }}>
               {longMonths.map((element, index) => (
                  <option key={index} value={index + 1}>
                     {element}
                  </option>
               ))}
            </Select>

            <Select
               placeholder="year"
               onChange={(e) => {
                  setBirthdate({ ...birthdate, year: e.target.value });
               }}>
               {arrayRange(1950, 2020).map((element, index) => (
                  <option key={element} value={element + 1}>
                     {element + 1}
                  </option>
               ))}
            </Select>
         </div>

         <div className="same-line">
            <Select
               placeholder="Country"
               onChange={(e) => {
                  setCountry(e.target.value);
               }}>
               {Countries.map((element, index) => (
                  <option key={index} value={element.name}>
                     {element.emoji} - {element.name}
                  </option>
               ))}
            </Select>

            <Select
               placeholder="Gender"
               onChange={(e) => {
                  setGender(e.target.value);
               }}>
               <option value="m">Male</option>
               <option value="f">Female</option>
               <option value="o">Other</option>
            </Select>
         </div>

         <Checkbox
            className="signup-form-checkbox"
            isChecked={checkedTerms}
            onChange={(e) => {
               setCheckedTerms(!checkedTerms);
            }}>
            I accept{' '}
            <span
               className="sign-up-form-spans"
               onClick={(e) => {
                  // e.preventDefault();
                  setOpenModal(true);
               }}>
               Cookies & other Storage
            </span>{' '}
            Policy
         </Checkbox>

         <ReCAPTCHA
            style={{ margin: '0 auto' }}
            sitekey={process.env.REACT_APP_CAPTCHA_KEY}
            onChange={(value: string) => {
               value !== null ? setValidCaptcha(true) : setValidCaptcha(false);
            }}
         />

         <Button type="submit" colorScheme="purple" onClick={submitControl}>
            Register
         </Button>

         <p>
            Already have an account ?{' '}
            <span
               className="sign-up-form-spans"
               onClick={() => {
                  props.setForm(false);
               }}>
               Sign In
            </span>
         </p>
      </form>
   );
}
