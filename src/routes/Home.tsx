import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import StyledHome from '../StyledComponents/home.css';
import HomeInfoSection from '../components/HomeInfoSection';
import LoginModal from '../forms/LoginModal';
import { useNavigate } from 'react-router-dom';

export default function Home(): JSX.Element {
   const [openModal, setOpenModal] = useState<boolean>(false);
   let navigation = useNavigate();

   return (
      <StyledHome>
         <NavBar setOpenModal={setOpenModal} />
         <LoginModal openModal={openModal} setOpenModal={setOpenModal} />
         <div className="slogans">
            <p className="slogan-one">
               Your favourite <span>Video Games</span>, All in one place
            </p>
            <p className="slogan-two">
               Search for, find and bookmark your favourite video games and discover Free to play
               games.
            </p>
            <button
               className="signup-button"
               onClick={() => {
                  navigation('/signup');
               }}>
               Sign Up, it's FREE !
            </button>
            <p className="login-phrase">
               Already a Member?{' '}
               <span
                  className="login-span"
                  onClick={() => {
                     setOpenModal(true);
                  }}>
                  Log In
               </span>
            </p>
         </div>
         <HomeInfoSection />
      </StyledHome>
   );
}
