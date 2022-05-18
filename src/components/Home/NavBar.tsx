import navLogo from '../../assets/navLogo.png';
import ThemeToggler from './ThemeToggler';
import { useEffect, useState } from 'react';
import '../../styles/Home/navbar.css';

interface NavbarProps {
   setOpenModal: (arg: boolean) => void;
}

export default function NavBar(props: NavbarProps) {
   const [scrolled, setScrolled] = useState<boolean>(false);
   const [openThemeToggler, setOpenThemeToggler] = useState<boolean>(false);

   useEffect(() => {
      window.onscroll = function () {
         window.scrollY > 5 ? setScrolled(true) : setScrolled(false);
      };
   }, []);

   return (
      <nav
         className="nav"
         style={{
            width: scrolled ? '100vw' : '60%',
            boxShadow: scrolled ? '1px 4px 10px 4px rgba(0, 0, 255, 0.2)' : 'none',
         }}>
         <img className="imageLogo" src={navLogo} alt="" />
         <div className="nav-rightside">
            <p
               className="theme-toggler"
               onClick={() => {
                  setOpenThemeToggler(!openThemeToggler);
               }}>
               Theme
            </p>
            {openThemeToggler && <ThemeToggler />}
            <button
               className="login-button"
               onClick={() => {
                  props.setOpenModal(true);
               }}>
               Log In
            </button>
         </div>
      </nav>
   );
}
