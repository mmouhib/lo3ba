import navLogo from '../assets/navLogo.png';
import StyledNav from '../StyledComponents/navbar.css';
import ThemeToggler from './ThemeToggler';
import { useEffect, useState } from 'react';

interface NavbarProps {
   setOpenModal: (arg: boolean) => void;
}

export default function NavBar(props: NavbarProps) {
   const [scrolled, setScrolled] = useState<boolean>(false);
   useEffect(() => {
      window.onscroll = function () {
         window.scrollY > 5 ? setScrolled(true) : setScrolled(false);
      };
   }, []);

   return (
      <StyledNav
         style={{
            width: scrolled ? '100vw' : '60%',
            boxShadow: scrolled ? '1px 4px 10px 4px rgba(0, 0, 255, 0.2)' : 'none',
         }}>
         <img className="imageLogo" src={navLogo} alt="" />
         <div className="nav-rightside">
            <ThemeToggler />
            {/*<a href="">Github</a>*/}
            <button
               className="login-button"
               onClick={() => {
                  props.setOpenModal(true);
               }}>
               Log In
            </button>
         </div>
      </StyledNav>
   );
}
