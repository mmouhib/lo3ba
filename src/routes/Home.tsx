import React from 'react';
import NavBar from '../components/NavBar';
import StyledHome from '../StyledComponents/home.css';
import HomeInfoSection from '../components/HomeInfoSection';

export default function Home(): JSX.Element {
   return (
      <StyledHome>
         <NavBar />
         <div className="slogans">
            <p className="slogan-one">
               Your favourite <span>Video Games</span>, All in one place
            </p>
            <p className="slogan-two">
               Search for, find and bookmark your favourite video games and discover Free to play
               games.
            </p>
            <button className="signup-button">Sign Up, it's FREE !</button>
            <p className="login-phrase">
               Already a Member? <span className="login-span">Log In</span>
            </p>
         </div>
         <HomeInfoSection />
      </StyledHome>
   );
}
