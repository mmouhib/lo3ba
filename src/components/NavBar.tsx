import styled from 'styled-components';
// @ts-ignore
import navLogo from '../assets/navLogo.png';
import StyledNav from '../StyledComponents/navbar.css';

export default function NavBar() {
   return (
      <StyledNav>
         <img className="imageLogo" src={navLogo} alt="" />
         <div className="nav-rightside">
            {/*<a href="">Github</a>*/}
            <button className="login-button">Log In</button>
         </div>
      </StyledNav>
   );
}
