import SignUpForm from '../components/Forms/SignUpForm';
import Logo from '../assets/logo.png';
import '../styles/Routes/AuthPage.css';
import LoginForm from '../components/Forms/LoginForm';
import { useState } from 'react';
import { Switch } from '@chakra-ui/react';

export default function AuthPage(): JSX.Element {
   const [selectedForm, setSelectedForm] = useState<boolean>(true);

   return (
      <div className="sign-up">
         <img className="signup-logo" src={Logo} alt="logo" draggable="false" />
         <div className="vertical-line" />
         <div className="form-switch-section">
            <div className="form-switch-div">
               <p className="switch-labels">Log in</p>
               <Switch
                  isChecked={selectedForm}
                  onChange={() => {
                     setSelectedForm(!selectedForm);
                  }}
               />
               <p className="switch-labels">Sign up</p>
            </div>
            {selectedForm ? (
               <SignUpForm setForm={setSelectedForm} />
            ) : (
               <LoginForm setForm={setSelectedForm} />
            )}
         </div>
      </div>
   );
}
