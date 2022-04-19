import styled from 'styled-components';

const StyledNav = styled.nav`
   position: fixed;
   background: white;
   top: 0;
   width: 65%;
   padding: 10px;
   transition: all 0.5s;
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-family: 'soleil bold', serif;

   @media (max-width: 1000px) {
      width: 100%;
   }

   .nav-rightside {
      display: flex;
      align-items: center;
      justify-content: center;
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
`;

export default StyledNav;
