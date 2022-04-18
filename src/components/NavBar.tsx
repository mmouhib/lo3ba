import navLogo from '../assets/navLogo.png';
import StyledNav from '../StyledComponents/navbar.css';

interface NavbarProps {
   setOpenModal: (arg: boolean) => void;
}

export default function NavBar(props: NavbarProps) {
   return (
      <StyledNav>
         <img className="imageLogo" src={navLogo} alt="" />
         <div className="nav-rightside">
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
