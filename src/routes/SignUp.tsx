import SignUpForm from '../forms/SignUpForm';
import { StyledImage, SignupCss, StyledVerticalLine } from '../StyledComponents/signup.css';
// @ts-ignore
import Logo from '../assets/logo.png';

export default function SignUp(): JSX.Element {
   return (
      <SignupCss>
         <StyledImage src={Logo} alt="logo" draggable="false" />
         <StyledVerticalLine />
         <SignUpForm />
      </SignupCss>
   );
}
