import styled from 'styled-components';

const StyledNav = styled.nav`
   position: fixed;
   background: white;
   top: 0;
   padding: 10px;
   transition: all 0.7s;
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-family: 'soleil bold', serif;
   height: 6vh;

   @media (max-width: 700px) {
      //width: 100%;
      display: none;
   }

   .nav-rightside {
      display: flex;
      align-items: center;
      justify-content: center;
     gap: 15px;
   }

   .login-button {
      border: 2px solid #8d2cff;
      color: #8d2cff;
      width: 120px;
      padding: 7px 7px 4px 7px;
      margin: 3px;
      border-radius: 3px;

      &:hover {
         transition: all 1s;
         border-color: #58099b;
         color: #58099b;
      }
   }

   & .theme-toggler {
      cursor: pointer;
      user-select: none;
   }
`;

export default StyledNav;
