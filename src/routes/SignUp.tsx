import SignUpForm from '../components/forms/SignUpForm';
import Logo from '../assets/logo.png';
import '../styles/signup.css';

export default function SignUp(): JSX.Element {
   return (
      <div className="sign-up">
         <img className="signup-logo" src={Logo} alt="logo" draggable="false" />
         <div className="vertical-line" />
         <SignUpForm />
      </div>
   );
}
