import navLogo from '../../assets/navLogo.png';
import ThemeToggler from './ThemeToggler';
import { useEffect, useState } from 'react';
import '../../styles/Home/navbar.css';
import { useNavigate } from 'react-router-dom';

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

   let navigation = useNavigate();

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
            <p
               className="list-navigator"
               onClick={() => {
                  navigation('/list');
               }}>
               Find Games
            </p>
            <p
               className="list-navigator"
               onClick={() => {
                  navigation('/favourites');
               }}>
               See you favourites
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
