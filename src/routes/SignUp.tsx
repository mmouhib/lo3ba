import SignUpForm from '../forms/SignUpForm';
import { StyledImage, StyledSignUp, StyledVerticalLine } from '../StyledComponents/StyledSignUp';
// @ts-ignore
import Logo from '../assets/logo.png';

export default function SignUp(): JSX.Element {
   return (
      <StyledSignUp>
         <StyledImage src={Logo} alt="logo" draggable="false" />
         <StyledVerticalLine />
         <SignUpForm />
      </StyledSignUp>
   );
}
